"use client"
import React, { useState, useEffect } from "react";
import styles from '../css/message.module.css';
import CtaBtn from '@/app/components/CtaBtn'


export default function Message() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailId, setEmailId] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    // Validation
    if (!firstName.trim()) {
      setErrorMessage("First Name is required.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!lastName.trim()) {
      setErrorMessage("Last Name is required.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!emailId.trim()) {
      setErrorMessage("Email ID is required.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    // Simple email regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailId)) {
      setErrorMessage("Please enter a valid email address.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!phoneNumber.trim()) {
      setErrorMessage("Phone Number is required.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    const phoneRegex = /^\d{7,}$/;
    if (!phoneRegex.test(phoneNumber)) {
      setErrorMessage("Phone Number must contain only digits and be at least 7 characters long.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!subject.trim()) {
      setErrorMessage("Subject is required.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    if (!message.trim()) {
      setErrorMessage("Message is required.");
      setTimeout(() => setErrorMessage(''), 5000);
      return;
    }
    const formData = {
      firstName,
      lastName,
      emailId,
      phoneNumber,
      subject,
      message
    };
    try {
      const response = await fetch('/api/save-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setFirstName('');
      setLastName('');
      setEmailId('');
      setPhoneNumber('');
      setSubject('');
      setMessage('');
      setSuccessMessage('Message submitted successfully!');
      setTimeout(() => {
        setSuccessMessage('');
      }, 5000);
    } catch (error) {
      setErrorMessage('Failed to save the message.');
      setTimeout(() => setErrorMessage(''), 5000);
    }
  };

  return (
    <div className={styles?.contactContainer} id="form">
      <div className={styles?.contactLeft}>
        <h1 className='heading-6 heading-1-sm'>
          LEAVE US A MESSAGE
        </h1>
        {/* <div className={`${styles?.contactAddress} text-1 text-1-sm`}>
          Mazdar Free Zone, Abu<br/>
          Dhabi, United Arab Emirates
        </div> */}
      </div>
      <form className={styles?.contactForm} onSubmit={handleSubmit}>
        <div className={`${styles?.formRow} ${styles?.twoCol}`}>
          <div className={styles?.inputGroup}>
              <input type="text" required id="firstName" placeholder=" " value={firstName} onChange={e => setFirstName(e.target.value)} />
              <label htmlFor="firstName" className={styles?.floatingLabel}>FIRST NAME</label>
          </div>
          <div className={styles?.inputGroup}>
              <input type="text" id="lastName" placeholder=" " value={lastName} onChange={e => setLastName(e.target.value)} />
              <label htmlFor="lastName" className={styles?.floatingLabel}>LAST NAME</label>
          </div>
        </div>
        <div className={`${styles?.formRow} ${styles?.twoCol}`}>
        <div className={styles?.inputGroup}>
              <input type="text" required id="emailId" placeholder=" " value={emailId} onChange={e => setEmailId(e.target.value)} />
              <label htmlFor="emailId" className={styles?.floatingLabel}>EMAIL-ID</label>
          </div>
        <div className={styles?.inputGroup}>
              <input type="tel" required id="phoneNumber" placeholder=" " value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
              <label htmlFor="phoneNumber" className={styles?.floatingLabel}>PHONE NUMBER</label>
          </div>
        </div>
        <div className={styles?.formRow}>          
          <div className={styles?.inputGroup}>
            <textarea id="subject" placeholder=" " rows={4} value={subject} onChange={e => setSubject(e.target.value)} />
            <label htmlFor="subject" className={styles?.floatingLabel}>SUBJECT</label>
          </div>   
        </div>
        <div className={styles?.formRow}>
          <div className={styles?.inputGroup}>
            <textarea id="message" placeholder=" " rows={4} value={message} onChange={e => setMessage(e.target.value)} />
            <label htmlFor="message" className={styles?.floatingLabel}>MESSAGE</label>
          </div>        
        </div>
                <CtaBtn
                  text=" send message"
                  variant="dark"
                  onClick={handleSubmit}
                />
                {errorMessage && (
                  <div
                    style={{
                      backgroundColor: 'black',
                      color: 'red',
                      padding: '10px',
                     display:"flex", justifyContent:"flex-start",
                      marginTop: '10px',
                    }}
                  >
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div style={{backgroundColor: 'black', color: 'white', padding: '10px',display:"flex", justifyContent:"flex-start", marginTop: '10px'}}>
                    {successMessage}
                  </div>
                )}
      </form>
    </div>
  );
}
