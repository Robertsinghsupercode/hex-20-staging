"use client"
import { useState } from 'react';
import styles from './css/contact.module.css';
import CtaBtn from './CtaBtn'

export default function ContactForm() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!firstName.trim()) {
      setErrorMessage('First name is required.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!lastName.trim()) {
      setErrorMessage('Last name is required.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!emailId.trim()) {
      setErrorMessage('Email ID is required.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    // Simple email regex validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      setErrorMessage('Please enter a valid email address.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMessage('Phone number is required.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    // Validate phone number contains only digits and at least 7 digits
    const phoneRegex = /^\d{7,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage('Please enter a valid phone number with at least 7 digits.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!message.trim()) {
      setErrorMessage('Message is required.');
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }

    const formData = { firstName, lastName, emailId, phoneNumber, message };
    try {
      const response = await fetch('/api/save-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Optionally clear form or show success message
        setFirstName('');
        setLastName('');
        setEmailId('');
        setPhoneNumber('');
        setMessage('');
        setSuccessMessage("Form submitted successfully!");
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        // Handle error
        console.error('Failed to save form data');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className={`${styles.contactSection}`}>
     <div className="container-main flex justify-center">
        <div className={styles.contactContainer}>
            <h2 className="heading-6 heading-2-sm">Contact us for more details and pricing</h2>
        <form className={styles?.contactForm} onSubmit={handleSubmit}>
        <div className={`${styles?.formRow} ${styles?.twoCol}`}>
          <div className={styles?.inputGroup}>
              <input type="text" required id="firstName" placeholder=" " value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              <label htmlFor="firstName" className={styles?.floatingLabel}>FIRST NAME</label>
          </div>
          <div className={styles?.inputGroup}>
              <input type="text" id="lastName" placeholder=" " value={lastName} onChange={(e) => setLastName(e.target.value)} />
              <label htmlFor="lastName" className={styles?.floatingLabel}>LAST NAME</label>
          </div>
        </div>
        <div className={`${styles?.formRow} ${styles?.twoCol}`}>
        <div className={styles?.inputGroup}>
              <input type="text" required id="emailId" placeholder=" " value={emailId} onChange={(e) => setEmailId(e.target.value)} />
              <label htmlFor="emailId" className={styles?.floatingLabel}>EMAIL-ID</label>
          </div>
        <div className={styles?.inputGroup}>
              <input type="tel" required id="phoneNumber" placeholder=" " value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
              <label htmlFor="phoneNumber" className={styles?.floatingLabel}>PHONE NUMBER</label>
          </div>
        </div>
        <div className={styles?.formRow}>
          <div className={styles?.inputGroup}>
            <textarea id="message" placeholder=" " rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
            <label htmlFor="message" className={styles?.floatingLabel}>MESSAGE</label>
          </div>        
        </div>
        {/* <button className={styles?.ctaBtn} type="submit">
          SEND MESSAGE <span className={styles?.arrow}>{'>>'}</span>
        </button> */}
        <CtaBtn onClick={handleSubmit} text=" send message"></CtaBtn>
      </form>
      {successMessage && (
        <div style={{ backgroundColor: 'white', color: 'black', padding: '10px', display:"flex", justifyContent:"flex-start", marginTop: '10px' }}>
          {successMessage}
        </div>
      )}
      {errorMessage && (
        <div style={{ backgroundColor: 'white', color: 'red', padding: '10px', display:"flex", justifyContent:"flex-start", marginTop: '10px' }}>
          {errorMessage}
        </div>
      )}
        </div>
     </div>
    </section>
  );
}