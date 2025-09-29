// AdminMessages.js
import React, { useState, useEffect } from 'react';
import { Container, Table, Badge, Button, Modal, Form } from 'react-bootstrap';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/admin/messages`);
      const data = await response.json();
      setMessages(data);
    } catch (error) {
      // Optionally handle error
    }
    setLoading(false);
  };

  const markAsRead = async (messageId) => {
    try {
      await fetch(`${process.env.REACT_APP_API_URL || ''}/api/admin/messages/${messageId}`, {
        method: 'PATCH'
      });
      fetchMessages();
    } catch (error) {
      // Optionally handle error
    }
  };

  const handleReply = (message) => {
    setSelectedMessage(message);
    setReplyText('');
    setShowReplyModal(true);
  };

  const sendReply = async () => {
    if (!replyText.trim()) return;
    try {
      await fetch(`${process.env.REACT_APP_API_URL || ''}/api/admin/messages/${selectedMessage.id}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reply: replyText })
      });
      setShowReplyModal(false);
      fetchMessages();
    } catch (error) {
      // Optionally handle error
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Container className="py-5">
      <h1 className="mb-4">Client Messages</h1>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Service</th>
            <th>Message</th>
            <th>Conversation</th>
            <th>Received</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id}>
              <td>{message.name}</td>
              <td>{message.email}</td>
              <td>{message.phone || '-'}</td>
              <td>{message.service}</td>
              <td>{message.message}</td>
              <td>
                <div>
                  <div><b>Client:</b> {message.message}</div>
                  {message.replies && message.replies.map((reply, idx) => (
                    <div key={idx} style={{ marginTop: 6 }}>
                      <b>Admin:</b> {reply.text}
                      <div style={{ fontSize: '0.8em', color: '#888' }}>{new Date(reply.timestamp).toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </td>
              <td>{new Date(message.timestamp).toLocaleString()}</td>
              <td>
                <Badge bg={message.status === 'unread' ? 'danger' : 'success'}>
                  {message.status}
                </Badge>
              </td>
              <td>
                {message.status === 'unread' && (
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => markAsRead(message.id)}
                  >
                    Mark Read
                  </Button>
                )}
                <Button
                  variant="success"
                  size="sm"
                  className="ms-2"
                  onClick={() => handleReply(message)}
                >
                  Reply
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Reply Modal */}
      <Modal show={showReplyModal} onHide={() => setShowReplyModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reply to Client</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group>
            <Form.Label>Reply Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={replyText}
              onChange={e => setReplyText(e.target.value)}
              placeholder="Type your reply here..."
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowReplyModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={sendReply} disabled={!replyText.trim()}>
            Send Reply
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminMessages;