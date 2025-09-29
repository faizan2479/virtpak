import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, Form } from 'react-bootstrap';

const AdminLiveChat = () => {
  const [sessions, setSessions] = useState([]);
  const [selectedSession, setSelectedSession] = useState(null);
  const [messages, setMessages] = useState([]);
  const [reply, setReply] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchSessions();
  }, []);

  const fetchSessions = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/livechat/sessions`);
    const data = await res.json();
    setSessions(data);
  };

  const openSession = async (session_id) => {
    setSelectedSession(session_id);
    setShowModal(true);
    const res = await fetch(`${process.env.REACT_APP_API_URL || ''}/api/livechat/${session_id}`);
    const data = await res.json();
    setMessages(data);
  };

  const sendReply = async () => {
    if (!reply.trim()) return;
    await fetch(`${process.env.REACT_APP_API_URL || ''}/api/livechat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: selectedSession,
        sender: 'admin',
        text: reply,
        timestamp: new Date().toISOString()
      })
    });
    setReply('');
    openSession(selectedSession);
  };

  return (
    <Container className="py-5">
      <h2>Live Chat Sessions</h2>
      <div className="mb-3 d-flex justify-content-end">
        <Button variant="outline-primary" size="sm" onClick={fetchSessions}>
          Refresh Chats
        </Button>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Session ID</th>
            <th>Open Chat</th>
          </tr>
        </thead>
        <tbody>
          {sessions.map((s) => (
            <tr key={s.session_id}>
              <td>{s.session_id}</td>
              <td>
                <Button size="sm" onClick={() => openSession(s.session_id)}>
                  View & Reply
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Live Chat Conversation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ maxHeight: 400, overflowY: 'auto', marginBottom: 16 }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.sender === 'admin' ? 'right' : 'left',
                margin: '8px 0'
              }}>
                <b>{msg.sender === 'admin' ? 'Admin' : 'Client'}:</b> {msg.text}
                <div style={{ fontSize: '0.8em', color: '#888' }}>{new Date(msg.timestamp).toLocaleString()}</div>
              </div>
            ))}
          </div>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={2}
              value={reply}
              onChange={e => setReply(e.target.value)}
              placeholder="Type your reply..."
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="primary" onClick={sendReply} disabled={!reply.trim()}>Send Reply</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminLiveChat;
