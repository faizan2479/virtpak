// VirtPak.js
import React, { useState, useEffect } from 'react';
import heroImg from './assets/c2.jpg';
import p1 from './assets/p3.png';
import p2 from './assets/p2.png';
import p3 from './assets/p1.png';
import p4 from './assets/p4.png';
import p5 from './assets/p5.png';
import p6 from './assets/p6.png';

import a3 from './assets/a3.jpg';
import a4 from './assets/a4.jpg';
import a5 from './assets/a5.jpg';
import a6 from './assets/a6.jpg';
import a7 from './assets/a7.jpg';
import a8 from './assets/a8.jpg';

import s1 from './assets/s1.png';
import s2 from './assets/s2.png';
import s3 from './assets/s3.png';
import s4 from './assets/s4.jpg';
import s5 from './assets/s5.jpg';
import s6 from './assets/s6.png';
import s7 from './assets/s7.png';
import s8 from './assets/s8.png';
import h2 from './assets/h3.png';
import h3 from './assets/h2.png';
import h4 from './assets/h4.png';
import h5 from './assets/h5.png';
import l1 from './assets/logo.png';
import l2 from './assets/ftl.png';
import l3 from './assets/logo.png';
import l4 from './assets/pd.png';
import l5 from './assets/hms.png';
import l6 from './assets/flogo.png';
import l7 from './assets/crypto.png';
import l8 from './assets/lms.png';
// CSS Styles for all components
const styles = `
  /* Base styles */
  .vp-container {
    font-family: 'Poppins', sans-serif;
    overflow-x: hidden;
    color: #333;
  }

  .vp-section {
    padding: 5rem 0;
  }

  .vp-section-title {
    font-size: 2.5rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
    color: #2c3e50;
  }

  .vp-section-title:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(to right, #4a00e0, #8e2de2);
  }

  /* Hero Section */
  .vp-hero {
    position: relative;
    height: 100vh;
    max-height: 800px;
    overflow: hidden;
  }

  .vp-hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  .vp-hero-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    width: 90%;
    max-width: 1200px;
  }

  .vp-hero-text h1 {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
  }

  .vp-hero-cta {
    background-color: #4a00e0;
    color: white;
    border: none;
    padding: 0.75rem 2rem;
    font-size: 1.25rem;
    font-weight: 600;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }

  .vp-hero-cta:hover {
    background-color: #3700b3;
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
  }

  /* Products Section */
  .vp-products {
    background-color: #f8f9fa;
  }

  .vp-products-slider {
    position: relative;
    overflow: hidden;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .vp-slider-container {
    display: flex;
    transition: transform 0.5s ease;
  }

  .vp-slide {
    min-width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }

  .vp-product-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .vp-product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  .vp-product-logo {
    padding: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #f0f4ff, #e6e9ff);
  }

  .vp-product-logo-image {
    max-height: 100px;
    max-width: 100%;
    object-fit: contain;
  }

  .vp-product-content {
    padding: 2rem;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  .vp-product-name {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .vp-product-description {
    color: #7f8c8d;
    margin-bottom: 1.5rem;
    flex: 1;
  }

  .vp-slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: white;
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    font-size: 1.5rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vp-prev-button {
    left: 0;
  }

  .vp-next-button {
    right: 0;
  }

  .vp-slider-controls {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 10px;
  }

  .vp-slider-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #bdc3c7;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .vp-active-dot {
    background-color: #4a00e0;
    transform: scale(1.2);
  }

  /* New Uniqueness Section */
  .vp-uniqueness {
    background: linear-gradient(135deg, #4a00e0 0%, #8e2de2 100%);
    color: white;
    position: relative;
    overflow: hidden;
  }

  .vp-uniqueness::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='0.1' fill-rule='evenodd'/%3E%3C/svg%3E");
    opacity: 0.5;
  }

  .vp-uniqueness-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    position: relative;
    z-index: 2;
    text-align: center;
  }

  .vp-uniqueness-title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 2rem;
  }

  .vp-uniqueness-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
    margin-bottom: 3rem;
  }

  .vp-uniqueness-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }

  .vp-uniqueness-card:hover {
    transform: translateY(-10px);
    background: rgba(255, 255, 255, 0.15);
  }

  .vp-uniqueness-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .vp-uniqueness-card h3:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: white;
  }

  .vp-uniqueness-quote {
    font-style: italic;
    font-size: 1.2rem;
    margin: 2rem 0;
    padding: 1.5rem;
    border-left: 4px solid rgba(255, 255, 255, 0.5);
    text-align: left;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0 10px 10px 0;
  }

  .vp-uniqueness-quote-author {
    display: block;
    text-align: right;
    font-weight: 600;
    margin-top: 1rem;
  }

  /* Projects Section - Redesigned */
  .vp-projects-section {
    background-color: #f8f9fa;
  }

  .vp-projects-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .vp-projects-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .vp-projects-text {
    padding-right: 2rem;
  }

  .vp-projects-text h3 {
    font-size: 1.75rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .vp-projects-text h3:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #4a00e0, #8e2de2);
  }

  .vp-projects-qualities {
    margin-bottom: 2rem;
  }

  .vp-quality-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
  }

  .vp-quality-icon {
    color: #4a00e0;
    font-size: 1.5rem;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  .vp-projects-impact {
    background: white;
    padding: 1.5rem;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  }

  .vp-impact-title {
    font-size: 1.25rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
  }

  .vp-impact-title svg {
    margin-right: 0.5rem;
    color: #4a00e0;
  }

  .vp-impact-stats {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .vp-stat-item {
    text-align: center;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 8px;
  }

  .vp-stat-number {
    font-size: 1.75rem;
    font-weight: 700;
    color: #4a00e0;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .vp-projects-slider-container {
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    height: 400px;
  }

  .vp-projects-slider {
    display: flex;
    transition: transform 0.5s ease;
    height: 100%;
  }

  .vp-project-slide {
    min-width: 100%;
    position: relative;
    height: 100%;
  }

  .vp-project-slide-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .vp-project-slide-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: 2rem;
    color: white;
    transform: translateY(100%);
    transition: transform 0.3s ease;
  }

  .vp-project-slide:hover .vp-project-slide-overlay {
    transform: translateY(0);
  }

  .vp-project-slide-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .vp-project-slide-description {
    margin-bottom: 1rem;
    font-size: 0.9rem;
    opacity: 0.9;
  }

  .vp-view-more-btn {
    background: #4a00e0;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .vp-view-more-btn:hover {
    background: #3700b3;
    transform: translateY(-2px);
  }

  .vp-projects-slider-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: white;
    border: none;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    font-size: 1.2rem;
    cursor: pointer;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .vp-projects-prev {
    left: 15px;
  }

  .vp-projects-next {
    right: 15px;
  }

  .vp-projects-dots {
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 8px;
  }

  .vp-projects-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #bdc3c7;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .vp-projects-dot-active {
    background-color: #4a00e0;
    transform: scale(1.2);
  }

  .vp-project-detail {
    grid-column: 1 / -1;
    background: white;
    border-radius: 15px;
    padding: 2rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    display: none;
  }

  .vp-project-detail-active {
    display: block;
  }

  .vp-detail-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .vp-detail-title {
    font-size: 1.75rem;
    color: #2c3e50;
  }

  .vp-close-detail {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: #7f8c8d;
    transition: all 0.3s ease;
  }

  .vp-close-detail:hover {
    color: #4a00e0;
    transform: rotate(90deg);
  }

  .vp-detail-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }

  .vp-detail-media {
    border-radius: 10px;
    overflow: hidden;
  }

  .vp-detail-video {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }

  .vp-detail-gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    margin-top: 1rem;
  }

  .vp-detail-gallery-item {
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
  }

  .vp-detail-gallery-img {
    width: 100%;
    height: 100px;
    object-fit: cover;
    transition: all 0.3s ease;
  }

  .vp-detail-gallery-item:hover .vp-detail-gallery-img {
    transform: scale(1.05);
  }

  .vp-detail-info {
    padding: 1rem;
  }

  .vp-detail-description {
    color: #555;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }

  .vp-detail-tech {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 1.5rem;
  }

  .vp-detail-tech-item {
    background: linear-gradient(to right, #4a00e0, #8e2de2);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    font-size: 0.9rem;
    font-weight: 600;
  }

  .vp-detail-developer {
    font-style: italic;
    color: #7f8c8d;
    border-top: 1px solid #f0f0f0;
    padding-top: 1rem;
  }

  /* Services Section */
  .vp-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .vp-service-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .vp-service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }

  .vp-service-title {
    background: linear-gradient(to right, #4a00e0, #8e2de2);
    color: white;
    padding: 1.5rem;
    margin: 0;
    font-size: 1.25rem;
  }

  .vp-service-list {
    padding: 1.5rem;
    list-style: none;
  }

  .vp-service-item {
    padding: 0.75rem 0;
    border-bottom: 1px solid #f0f0f0;
    color: #555;
    display: flex;
    align-items: center;
  }

  .vp-service-item:before {
    content: '•';
    color: #4a00e0;
    font-size: 1.5rem;
    margin-right: 10px;
  }

  .vp-service-item:last-child {
    border-bottom: none;
  }

  /* Why Choose Section */
  .vp-why-choose {
    background: linear-gradient(to bottom right, #4a00e0, #8e2de2);
    color: white;
  }

  .vp-features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 30px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .vp-feature-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    padding: 2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .vp-feature-title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .vp-feature-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: white;
  }

  /* About Section */
  .vp-about-section {
    background-color: #f0f4ff;
  }

  .vp-about-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .vp-about-title {
    font-size: 1.75rem;
    color: #2c3e50;
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.5rem;
  }

  .vp-about-title:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 3px;
    background: linear-gradient(to right, #4a00e0, #8e2de2);
  }

  .vp-primary-text {
    font-size: 1.25rem;
    font-weight: 600;
    color: #4a00e0;
    margin-bottom: 1rem;
  }

  .vp-list-unstyled {
    list-style: none;
    padding-left: 0;
  }

  .vp-list-unstyled li {
    padding: 0.5rem 0;
    font-size: 1.1rem;
    display: flex;
    align-items: flex-start;
  }

  .vp-list-unstyled li:before {
    content: '✓';
    color: #4a00e0;
    font-weight: bold;
    margin-right: 10px;
  }

  .vp-contact-info {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .vp-contact-info a {
    color: #4a00e0;
    text-decoration: none;
    font-weight: 600;
    transition: all 0.3s ease;
  }

  .vp-contact-info a:hover {
    text-decoration: underline;
  }

  /* Modal */
  .vp-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .vp-modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90%;
  }

  .vp-modal-image {
    max-width: 100%;
    max-height: 90vh;
    border-radius: 10px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  }

  .vp-close-button {
    position: absolute;
    top: 20px;
    right: 20px;
    background: rgba(255, 255, 255, 0.3);
    border: none;
    color: white;
    font-size: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .vp-close-button:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: rotate(90deg);
  }

  /* Responsive Styles */
  @media (max-width: 1200px) {
    .vp-hero-text h1 {
      font-size: 3rem;
    }
  }

  @media (max-width: 992px) {
    .vp-hero-text h1 {
      font-size: 2.5rem;
    }
    
    .vp-section-title {
      font-size: 2.2rem;
    }
    
    .vp-projects-layout {
      grid-template-columns: 1fr;
    }
    
    .vp-projects-text {
      padding-right: 0;
      order: 2;
    }
    
    .vp-detail-content {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 768px) {
    .vp-hero {
      height: 80vh;
    }
    
    .vp-hero-text h1 {
      font-size: 2rem;
    }
    
    .vp-section {
      padding: 3rem 0;
    }
    
    .vp-section-title {
      font-size: 2rem;
    }
    
    .vp-slider-nav {
      width: 40px;
      height: 40px;
      font-size: 1.2rem;
    }
    
    .vp-uniqueness-grid {
      grid-template-columns: 1fr;
    }
    
    .vp-impact-stats {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 576px) {
    .vp-hero {
      height: 70vh;
    }
    
    .vp-hero-text h1 {
      font-size: 1.75rem;
    }
    
    .vp-hero-cta {
      padding: 0.6rem 1.5rem;
      font-size: 1rem;
    }
    
    .vp-section-title {
      font-size: 1.75rem;
    }
    
    .vp-uniqueness-title {
      font-size: 2rem;
    }
    
    .vp-projects-slider-nav {
      width: 35px;
      height: 35px;
      font-size: 1rem;
    }
    
    .vp-detail-gallery {
      grid-template-columns: 1fr;
    }
  }
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Data class using OOP
class VirtPakData {
  static projectImages = [p1, p2, p3, p4, p5, p6];
  static project2Images = [a3, a4, a5, a6, a7, a8];
  static project3Images = [s1, s2, s3, s4, s5, s6, s7, s8];
  static project4Images = [h2, h3, h4, h5];
  
  static techStack = [
    "React", "Bootstrap", "Flask", 
    "HTML5", "CSS3", "MySQL",
    "Node.js", "MongoDB", "REST API", 
    "Data Validation"
  ];
  
  static project2TechStack = [
    "React Native", "Firebase", "Redux",
    "Java", "Payment Gateway", "Push Notifications", "Machine Learning"
  ];
  
  static project3TechStack = [
    "React Native", "Django", "PostgreSQL",
    "Docker", "AWS", "Machine Learning",
    "Data Visualization", "Artificial Intelligence"
  ];
  
  static project4TechStack = [
    "React.js", "Python", "Natural Language Processing (NLP)",
    "Machine Learning", "AI", "Deep Learning",
    "Conversational AI", "API Integration", "Contextual Understanding"
  ];
  
  static services = [
    {
      category: "Development Services",
      items: [
        "Custom Software Development",
        "Cross-Platform Mobile Apps",
        "Responsive Web Development",
        "API Integration & Development"
      ]
    },
    {
      category: "Core Solutions",
      items: [
        "Enterprise Website Development",
        "E-commerce Platforms",
        "Business Process Automation",
        "Data Scraping & Bots"
      ]
    },
    {
      category: "Cloud Services",
      items: [
        "Cloud Architecture Design",
        "AWS/Azure/GCP Solutions",
        "Serverless Applications",
        "Cloud Migration Services"
      ]
    },
    {
      category: "AI & Analytics",
      items: [
        "Machine Learning Solutions",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision"
      ]
    },
    {
      category: "Security Solutions",
      items: [
        "Cybersecurity Consulting",
        "Penetration Testing",
        "Network Security",
        "Data Protection"
      ]
    },
    {
      category: "Digital Growth",
      items: [
        "Digital Marketing Strategy",
        "SEO & Content Optimization",
        "Social Media Management",
        "IT Consultation"
      ]
    }
  ];
  
  static products = [
    {
      id: 1,
      logo: l1,
      name: "Smart Admission Form Verification System",
      description: "Automates university admissions with AI-powered verification, reducing processing time from hours to minutes."
    },
    {
      id: 2,
      logo: l2,
      name: "Fly To Land Cipher",
      description: "Advanced encryption/decryption tool with multiple cipher algorithms for secure data transmission."
    },
    {
      id: 3,
      logo: l3,
      name: "Organization Management Chatbot",
      description: "AI-powered assistant that automatically answers client queries 24/7, reducing support workload."
    },
    {
      id: 4,
      logo: l4,
      name: "Plant Disease Detection App",
      description: "Identifies plants and detects diseases using computer vision and machine learning algorithms."
    },
    {
      id: 5,
      logo: l5,
      name: "Hospital Management System",
      description: "Streamlines hospital operations with digital patient management, improving care delivery while reducing administrative workload."

    },
    {
      id: 6,
      logo: l6,
      name: "TasteTrekk",
      description: "Comprehensive food management solution for restaurants, street vendors, and home kitchens."
    },
    {
      id: 7,
      logo: l7,
      name: "Crypto Market Analysis App",
      description: "Real-time cryptocurrency analysis with AI-driven predictions and comprehensive data visualization."
    },
    {
      id: 8,
      logo: l8,
      name: "Library Management System",
      description: "Optimizes library management with smart cataloging and automated tracking, enhancing accessibility and reducing manual effort."

    }
  ];
  
  // Reordered projects as requested
  static projects = [
    {
      id: 2,
      title: "Crypto Market Analysis App",
      developer: "Senior Mobile App Developer Ahsan Hajvari",
      images: this.project2Images,
      techStack: this.project2TechStack,
      description: "This app provides real-time analysis of the cryptocurrency market, offering deep insights and up-to-date information. It serves as a single platform to manage all your cryptocurrency investments, featuring portfolio tracking, price alerts, market trends, and predictive analytics. Stay ahead of market movements with our advanced tools and comprehensive data visualization."
    },
    {
      id: 3,
      title: "Plant Disease Detection App",
      developer: "Senior Software Engineer Muhammad Saam",
      images: this.project3Images,
      techStack: this.project3TechStack,
      description: "Modern plant disease detection systems leverage computer vision and machine learning to analyze plant images with high accuracy. They employ hybrid AI architectures (combining CNNs and transformers) to identify subtle symptoms across diverse field conditions, while integrating contextual data like location, weather patterns, and symptom progression timelines to distinguish look-alike diseases (e.g., fungal vs. nutrient deficiencies). These systems feature a human-AI collaboration loop where uncertain cases are escalated to experts, with feedback continuously refining the model. They provide personalized treatment recommendations based on local pathogen resistance and organic alternatives, reducing pesticide misuse. Optimized for edge deployment on mobile devices using lightweight models, they function offline—critical for remote agricultural areas with limited connectivity—while achieving over 95% accuracy in real-world scenarios."
    },
    {
      id: 1,
      title: "Smart University Admission Verification System",
      developer: "Sr. Software Engineer Faizan Tariq & Sajid Khan",
      images: this.projectImages,
      techStack: this.techStack,
      description: "This automated system revolutionizes university admissions by replacing error-prone manual verification. It integrates with University Management Systems and educational boards to validate student data, exam results, and personal details automatically. The solution eliminates human errors in form processing, reduces verification time from hours to minutes, and ensures data accuracy. Faculty can focus on enrollment while the system handles verification, generates reports, and maintains audit trails. Secure API connections protect sensitive student information throughout the process."
    },
    {
      id: 4,
      title: "Organization Management Chatbot",
      developer: "Senior AI Developer Hafiz Muhammad Adrees",
      images: this.project4Images,
      techStack: this.project4TechStack,
      description: "This AI-powered chatbot revolutionizes university support by providing instant, 24/7 assistance for academic and administrative queries. Using advanced NLP and machine learning, it understands complex questions about courses, schedules, and campus services. The solution reduces helpdesk workload by 60% while improving response accuracy and accessibility. Integrated with university systems, it offers personalized guidance and handles thousands of simultaneous inquiries, ensuring students get timely information without delays."
    }
  ];
}

// Image Modal Component (OOP Class)
class ImageModal {
  static render({ selectedImage, closeImage }) {
    if (!selectedImage) return null;
    
    return (
      <div className="vp-modal" onClick={closeImage}>
        <div className="vp-modal-content">
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="vp-modal-image"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="vp-close-button"
            onClick={closeImage}
          >
            ×
          </button>
        </div>
      </div>
    );
  }
}

// Hero Section (OOP Class)
class HeroSection {
  static render() {
    return (
      <section className="vp-hero">
        <img
          src={heroImg}
          alt="VirtPak Hero"
          className="vp-hero-image"
        />
        <div className="vp-hero-text">
          <h1>Bridging Innovation and Affordability Through Smart Tech Solutions</h1>
          <button className="vp-hero-cta">
            Explore Our Solutions
          </button>
        </div>
      </section>
    );
  }
}

// Products Section (Functional Component)
function ProductsSection({ products }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % products.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [products.length]);
  
  const goToSlide = (index) => {
    setCurrentSlide(index);
  };
  
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % products.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + products.length) % products.length);
  };
  
  return (
    <section className="vp-section vp-products">
      <h2 className="vp-section-title">Our Innovative Products</h2>
      
      <div className="vp-products-slider">
        <div 
          className="vp-slider-container"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="vp-slide">
              <div className="vp-product-card">
                <div className="vp-product-logo">
                  <img 
                    src={product.logo} 
                    alt={product.name} 
                    className="vp-product-logo-image"
                  />
                </div>
                <div className="vp-product-content">
                  <h3 className="vp-product-name">{product.name}</h3>
                  <p className="vp-product-description">{product.description}</p>
                  <button className="vp-hero-cta" style={{ marginTop: 'auto' }}>
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="vp-slider-nav vp-prev-button"
          onClick={prevSlide}
        >
          &lt;
        </button>
        <button 
          className="vp-slider-nav vp-next-button"
          onClick={nextSlide}
        >
          &gt;
        </button>
        
        <div className="vp-slider-controls">
          {products.map((_, index) => (
            <div
              key={index}
              className={`vp-slider-dot ${index === currentSlide ? 'vp-active-dot' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// New Uniqueness Section (OOP Class)
class UniquenessSection {
  static render() {
    return (
      <section className="vp-section vp-uniqueness">
        <div className="vp-uniqueness-content">
          <h2 className="vp-uniqueness-title">Our Uniqueness</h2>
          
          <div className="vp-uniqueness-grid">
            <div className="vp-uniqueness-card">
              <h3>Contract-Based Projects</h3>
              <p>We offer bespoke development services with flexible engagement models. Our contract-based projects are tailored to your specific requirements, ensuring optimal results while maintaining budget flexibility.</p>
            </div>
            
            <div className="vp-uniqueness-card">
              <h3>Ready-to-Deploy Products</h3>
              <p>Our portfolio includes innovative, market-ready solutions available for immediate deployment. These products are designed with scalability in mind, allowing for seamless integration into your existing ecosystem.</p>
            </div>
            
            <div className="vp-uniqueness-card">
              <h3>Cutting-Edge Technology</h3>
              <p>We leverage the latest advancements in AI, machine learning, and blockchain to deliver future-proof solutions that give you a competitive edge in today's rapidly evolving digital landscape.</p>
            </div>
          </div>
          
          <div className="vp-uniqueness-quote">
            "The best way to predict the future is to invent it. At VirtPak, we don't just adapt to technological changes—we create them."
            <span className="vp-uniqueness-quote-author">- VirtPak Innovation Team</span>
          </div>
        </div>
      </section>
    );
  }
}

// Projects Section (Functional Component)
function ProjectsSection({ projects, openImage }) {
  const [currentProject, setCurrentProject] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [detailView, setDetailView] = useState(false);
  
  useEffect(() => {
    let interval;
    if (autoPlay && !detailView) {
      interval = setInterval(() => {
        setCurrentProject(prev => (prev + 1) % projects.length);
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, detailView, projects.length]);
  
  const goToProject = (index) => {
    setCurrentProject(index);
  };
  
  const nextProject = () => {
    setCurrentProject(prev => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setCurrentProject(prev => (prev - 1 + projects.length) % projects.length);
  };
  
  const viewProjectDetail = () => {
    setDetailView(true);
    setAutoPlay(false);
  };
  
  const closeProjectDetail = () => {
    setDetailView(false);
    setAutoPlay(true);
  };
  
  return (
    <section className="vp-section vp-projects-section">
      <h2 className="vp-section-title">VirtPak Projects</h2>
      
      <div className="vp-projects-container">
        <div className="vp-projects-layout">
          <div className="vp-projects-text">
            <div className="vp-projects-qualities">
              <h3>Our Project Qualities</h3>
              
              <div className="vp-quality-item">
                <span className="vp-quality-icon">✓</span>
                <div>
                  <strong>Innovation-Driven</strong>
                  <p>Each project incorporates cutting-edge technologies and creative solutions.</p>
                </div>
              </div>
              
              <div className="vp-quality-item">
                <span className="vp-quality-icon">✓</span>
                <div>
                  <strong>User-Centric Design</strong>
                  <p>Our solutions prioritize intuitive interfaces and exceptional user experiences.</p>
                </div>
              </div>
              
              <div className="vp-quality-item">
                <span className="vp-quality-icon">✓</span>
                <div>
                  <strong>Scalable Architecture</strong>
                  <p>All projects are built with growth in mind, ensuring long-term viability.</p>
                </div>
              </div>
              
              <div className="vp-quality-item">
                <span className="vp-quality-icon">✓</span>
                <div>
                  <strong>Robust Security</strong>
                  <p>We implement industry-best security practices to protect your data and users.</p>
                </div>
              </div>
            </div>
            
            <div className="vp-projects-impact">
              <h3 className="vp-impact-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor"/>
                </svg>
                Project Impact
              </h3>
              
              <div className="vp-impact-stats">
                <div className="vp-stat-item">
                  <div className="vp-stat-number">95%</div>
                  <div>Client Satisfaction</div>
                </div>
                
                <div className="vp-stat-item">
                  <div className="vp-stat-number">40+</div>
                  <div>Projects Completed</div>
                </div>
                
                <div className="vp-stat-item">
                  <div className="vp-stat-number">60%</div>
                  <div>Cost Reduction</div>
                </div>
                
                <div className="vp-stat-item">
                  <div className="vp-stat-number">100%</div>
                  <div>On-Time Delivery</div>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="vp-projects-slider-container"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => !detailView && setAutoPlay(true)}
          >
            <div 
              className="vp-projects-slider"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={project.id} className="vp-project-slide">
                  <img 
                    src={project.images[0]} 
                    alt={project.title}
                    className="vp-project-slide-image"
                  />
                  <div className="vp-project-slide-overlay">
                    <h3 className="vp-project-slide-title">{project.title}</h3>
                    <p className="vp-project-slide-description">
                      {project.description.substring(0, 100)}...
                    </p>
                    <button 
                      className="vp-view-more-btn"
                      onClick={viewProjectDetail}
                    >
                      View More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <button 
              className="vp-projects-slider-nav vp-projects-prev"
              onClick={prevProject}
            >
              &lt;
            </button>
            <button 
              className="vp-projects-slider-nav vp-projects-next"
              onClick={nextProject}
            >
              &gt;
            </button>
            
            <div className="vp-projects-dots">
              {projects.map((_, index) => (
                <div
                  key={index}
                  className={`vp-projects-dot ${index === currentProject ? 'vp-projects-dot-active' : ''}`}
                  onClick={() => goToProject(index)}
                />
              ))}
            </div>
          </div>
        </div>
        
        <div className={`vp-project-detail ${detailView ? 'vp-project-detail-active' : ''}`}>
          <div className="vp-detail-header">
            <h3 className="vp-detail-title">{projects[currentProject].title}</h3>
            <button 
              className="vp-close-detail"
              onClick={closeProjectDetail}
            >
              ×
            </button>
          </div>
          
          <div className="vp-detail-content">
            <div className="vp-detail-media">
              {/* Only show image, no video */}
              <img 
                src={projects[currentProject].images[0]} 
                alt={projects[currentProject].title}
                className="vp-detail-video"
              />
              
              <div className="vp-detail-gallery">
                {projects[currentProject].images.map((img, index) => (
                  <div 
                    key={index}
                    className="vp-detail-gallery-item"
                    onClick={() => openImage(img)}
                  >
                    <img 
                      src={img} 
                      alt={`Project screenshot ${index + 1}`}
                      className="vp-detail-gallery-img"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            <div className="vp-detail-info">
              <p className="vp-detail-description">
                {projects[currentProject].description}
              </p>
              
              <div className="vp-detail-tech">
                {projects[currentProject].techStack.map((tech, index) => (
                  <span key={index} className="vp-detail-tech-item">
                    {tech}
                  </span>
                ))}
              </div>
              
              <p className="vp-detail-developer">
                Developed by: <strong>{projects[currentProject].developer}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section (OOP Class)
class ServicesSection {
  static render({ services }) {
    return (
      <section className="vp-section">
        <h2 className="vp-section-title">Our Comprehensive Services</h2>
        
        <div className="vp-services-grid">
          {services.map((service, index) => (
            <div key={index} className="vp-service-card">
              <h3 className="vp-service-title">{service.category}</h3>
              <ul className="vp-service-list">
                {service.items.map((item, i) => (
                  <li key={i} className="vp-service-item">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

// Why Choose Section (OOP Class)
class WhyChooseSection {
  static render() {
    return (
      <section className="vp-section vp-why-choose">
        <h2 className="vp-section-title" style={{ color: 'white' }}>Why Choose VirtPak?</h2>
        
        <div className="vp-features-grid">
          <div className="vp-feature-card">
            <h3 className="vp-feature-title">Future-Ready Solutions</h3>
            <p>
              In an era where AI and machine learning are transforming industries, 
              VirtPak is specifically designed to harness these cutting-edge technologies. 
              Our expert team integrates advanced features to keep your projects ahead of 
              the curve while maintaining accessibility for all users.
            </p>
          </div>
          
          <div className="vp-feature-card">
            <h3 className="vp-feature-title">Education Focused</h3>
            <p>
              We specialize in supporting student projects with affordable, scalable solutions. 
              Our platform helps bridge the gap between academic concepts and real-world 
              implementation, providing mentorship and technical resources tailored for 
              educational needs.
            </p>
          </div>
          
          <div className="vp-feature-card">
            <h3 className="vp-feature-title">Unique Value Proposition</h3>
            <p>
              Unlike conventional tech firms, VirtPak combines enterprise-grade solutions 
              with academic affordability. Our hybrid model offers professional services 
              while maintaining a commitment to nurturing new talent in the tech industry.
            </p>
          </div>
        </div>
      </section>
    );
  }
}

// About Section (OOP Class)
class AboutSection {
  static render() {
    return (
      <section className="vp-section vp-about-section">
        <div className="vp-about-container">
          <div style={{ marginBottom: '2rem' }}>
            <h2 className="vp-about-title">About VirtPak</h2>
            <h4 className="vp-primary-text">
              Empowering businesses with cutting-edge digital solutions for unstoppable growth.
            </h4>
            <p>
              VirtPak is a full-service digital solutions provider specializing in web development, 
              cybersecurity, automation, and creative design. We transform ideas into powerful 
              digital experiences.
            </p>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 className="vp-about-title">Why Choose Us?</h3>
            <ul className="vp-list-unstyled">
              <li><strong>Expertise:</strong> 5+ years in tech solutions</li>
              <li><strong>Client-Centric:</strong> Tailored strategies for every business</li>
              <li><strong>Quality Assurance:</strong> Rigorous testing & support</li>
              <li><strong>Affordable:</strong> High-end solutions at competitive prices</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 className="vp-about-title">Core Services</h3>
            <ul className="vp-list-unstyled">
              <li><strong>Web Development:</strong> Custom sites, e-commerce, APIs</li>
              <li><strong>Automation:</strong> Web scraping, bots, workflow automation</li>
              <li><strong>Cybersecurity:</strong> Penetration testing, secure networks</li>
              <li><strong>Design:</strong> Logos, banners, presentations</li>
              <li><strong>Digital Marketing:</strong> SEO, social media campaigns</li>
            </ul>
          </div>
          
          <div style={{ marginBottom: '2rem' }}>
            <h3 className="vp-about-title">Founder's Note</h3>
            <blockquote style={{ 
              color: '#555', 
              fontStyle: 'italic', 
              borderLeft: '3px solid #4a00e0', 
              paddingLeft: '1.5rem',
              marginLeft: '0',
              fontSize: '1.1rem'
            }}>
              "As a tech enthusiast, I founded VirtPak to bridge the gap between innovation and affordability. 
              Our team thrives on solving complex challenges with simplicity."
            </blockquote>
          </div>
          
          <div>
            <h3 className="vp-about-title">Contact Us</h3>
            <p className="vp-contact-info">
              <strong>Phone:</strong> <a href="tel:923032479703">923032479703</a><br />
              <strong>Email:</strong> <a href="mailto:faizantariq2479@gamil.com">faizantariq2479@gamil.com</a>
            </p>
          </div>
        </div>
      </section>
    );
  }
}

// Main VirtPak Component
const VirtPak = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const openImage = (img) => {
    setSelectedImage(img);
  };
  
  const closeImage = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="vp-container">
      {ImageModal.render({ selectedImage, closeImage })}
      {HeroSection.render()}
      <ProductsSection products={VirtPakData.products} />
      {UniquenessSection.render()}
      <ProjectsSection projects={VirtPakData.projects} openImage={openImage} />
      {ServicesSection.render({ services: VirtPakData.services })}
      {WhyChooseSection.render()}
      {AboutSection.render()}
    </div>
  );
};

export default VirtPak;