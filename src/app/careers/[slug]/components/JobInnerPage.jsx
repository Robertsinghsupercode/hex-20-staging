"use client"

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Styles from '../css/jobinnerpage.module.css'
import CareersStyles from '@/app/components/css/contact.module.css'
import CtaBtn from '@/app/components/CtaBtn'
// import 

export default function JobinnerPage() {
    const searchParams = useSearchParams()
    const title = searchParams.get('title') || 'Job Title'
    const location = searchParams.get('location') || 'Unknown Location'
    const department = searchParams.get('department') || 'Unknown Department'

    return (
        <>
            <div className={`${Styles.jdContent}`}>
                <div className={`${Styles.jdContentHeader}`}>
                    <h1 className={`heading-4`}>{decodeURIComponent(title)}</h1>
                    <div className={`${Styles.jdLocation} flex`}>
                        <div>
                            <p className='text-5 opcty-5'>Location</p>
                            <p className='text-1'>{decodeURIComponent(location)}</p>
                        </div>
                        <div>
                            <p className='text-5 opcty-5'>Department</p>
                            <p className='text-1'>{decodeURIComponent(department)}</p>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.jdContentBody}`}>
                    <div className={`${Styles.jd} flex flex-column`}>
                        <p className='text-7'>Job description</p>
                        <p className='text-1'>
                            We’re seeking a Marketing Lead to drive HEX20’s marketing strategy, strengthen global brand presence, and support business growth across international markets.
                        </p>
                    </div>

                    <div className={`${Styles.jdkeyContainer} flex flex-column`}>
                        <div className={`${Styles.keyResponsibilities}`}>
                            <p className='text-7'>Key Responsibilities</p>
                            <ul className='flex flex-column gap-20'>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    5+ years in marketing, preferably in tech, aerospace, or innovation sectors.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Strong communication, content creation, and project management skills.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Experience with CRM, digital marketing tools, and analytics.
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div className={`${Styles.keyResponsibilities}`}>
                            <p className='text-7'>Qualifications</p>
                            <ul className='flex flex-column gap-20'>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Lead market research and trend analysis to identify growth opportunities.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Develop and execute marketing and branding strategies across digital and traditional channels.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Ensure customer awareness before business engagement.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Manage marketing collaterals, investor reports, and internal/external communications.
                                    </p>
                                </li>
                                <li className='flex items-start'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="13" viewBox="0 0 25 13" fill="none">
                                        <path d="M19 1L24 6.49997L19 12" stroke="#090909"/>
                                        <path opacity="0.3" d="M9 1L14 6.49997L9 12" stroke="#090909"/>
                                        <path opacity="0.1" d="M1 1L6 6.49997L1 12" stroke="#090909"/>
                                    </svg>
                                    <p className='text-1'>
                                    Plan and coordinate events and exhibitions, including ROI tracking and outreach.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <Message />
        </>
    )
}

// function Message() {
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [emailId, setEmailId] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [message, setMessage] = useState('');
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async (e) => {
//     if (e && typeof e.preventDefault === "function") e.preventDefault();
//     // Validation
//     if (!firstName.trim()) {
//       setErrorMessage("First Name is required.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     if (!lastName.trim()) {
//       setErrorMessage("Last Name is required.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     if (!emailId.trim()) {
//       setErrorMessage("Email ID is required.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     // Simple email regex
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailId)) {
//       setErrorMessage("Please enter a valid email address.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     if (!phoneNumber.trim()) {
//       setErrorMessage("Phone Number is required.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     const phoneRegex = /^\d{7,}$/;
//     if (!phoneRegex.test(phoneNumber)) {
//       setErrorMessage("Phone Number must contain only digits and be at least 7 characters long.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     if (!message.trim()) {
//       setErrorMessage("Message is required.");
//       setTimeout(() => setErrorMessage(''), 5000);
//       return;
//     }
//     const formData = {
//       firstName,
//       lastName,
//       emailId,
//       phoneNumber,
//       message
//     };
//     try {
//       const response = await fetch('/api/careers-form', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       setFirstName('');
//       setLastName('');
//       setEmailId('');
//       setPhoneNumber('');
//       setMessage('');
//       setSuccessMessage('Message submitted successfully!');
//       setTimeout(() => {
//         setSuccessMessage('');
//       }, 5000);
//     } catch (error) {
//       setErrorMessage('Failed to save the message.');
//       setTimeout(() => setErrorMessage(''), 5000);
//     }
//   };

//   return (
//     <div className={CareersStyles?.contactContainer} id="form">
//       <div className={CareersStyles?.contactLeft}>
//       </div>
//       <form className={CareersStyles?.contactForm} onSubmit={handleSubmit}>
//         <div className={`${CareersStyles?.formRow} ${CareersStyles?.twoCol}`}>
//           <div className={CareersStyles?.inputGroup}>
//               <input type="text" required id="firstName" placeholder=" " value={firstName} onChange={e => setFirstName(e.target.value)} />
//               <label htmlFor="firstName" className={CareersStyles?.floatingLabel}>FIRST NAME</label>
//           </div>
//           <div className={CareersStyles?.inputGroup}>
//               <input type="text" id="lastName" placeholder=" " value={lastName} onChange={e => setLastName(e.target.value)} />
//               <label htmlFor="lastName" className={CareersStyles?.floatingLabel}>LAST NAME</label>
//           </div>
//         </div>
//         <div className={`${CareersStyles?.formRow} ${CareersStyles?.twoCol}`}>
//         <div className={CareersStyles?.inputGroup}>
//               <input type="text" required id="emailId" placeholder=" " value={emailId} onChange={e => setEmailId(e.target.value)} />
//               <label htmlFor="emailId" className={CareersStyles?.floatingLabel}>EMAIL-ID</label>
//           </div>
//         <div className={CareersStyles?.inputGroup}>
//               <input type="tel" required id="phoneNumber" placeholder=" " value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
//               <label htmlFor="phoneNumber" className={CareersStyles?.floatingLabel}>PHONE NUMBER</label>
//           </div>
//         </div>
//         <div className={CareersStyles?.formRow}>
//           <div className={CareersStyles?.inputGroup}>  
//             <p className={`${CareersStyles?.fileMessage} text-2 text-2-sm opcty-4 sentence-case`}>
//               Please upload in either DOC, DOCX or PDF file format (file size not more than 1MB)
//             </p>

//             <div className={`${CareersStyles.fileInputContainer}`}>
//               <input
//                 type="file"
//                 id="resume"
//                 accept=".pdf,.doc,.docx"
//                 onChange={e => setMessage(e.target.files[0])}
//               />
//               <div className={`${CareersStyles.fileInput} flex justify-between`}>
//                 <label htmlFor="resume" className={CareersStyles?.floatingLabel}>
//                   ATTACH CV
//                 </label>
//                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
//                   <path opacity="0.5" d="M1.57547 7.85294L7.48104 1.94738C8.74358 0.684811 10.7906 0.684811 12.0531 1.94738C13.3156 3.20988 13.3156 5.25686 12.0531 6.51942L4.90927 13.6633C4.01496 14.5576 2.565 14.5576 1.67072 13.6633C0.776428 12.769 0.776428 11.319 1.67072 10.4247L8.81456 3.28087C9.34063 2.7548 10.1935 2.7548 10.7196 3.28087V3.2809C11.2456 3.80693 11.2456 4.65984 10.7196 5.1859L4.814 11.0915" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
//                 </svg>
//               </div>
//             </div>

//           </div>
//         </div>
//         <div className={CareersStyles?.formRow}>
//           <div className={CareersStyles?.inputGroup}>
//             <textarea id="message" placeholder=" " rows={4} value={message} onChange={e => setMessage(e.target.value)} />
//             <label htmlFor="message" className={CareersStyles?.floatingLabel}>ANY MESSAGE</label>
//           </div>        
//         </div>
//                 <CtaBtn
//                   text=" Submit"
//                   variant="dark"
//                   onClick={handleSubmit}
//                 />
//                 {errorMessage && (
//                   <div
//                     style={{
//                       backgroundColor: 'black',
//                       color: 'red',
//                       padding: '10px',
//                      display:"flex", justifyContent:"flex-start",
//                       marginTop: '10px',
//                     }}
//                   >
//                     {errorMessage}
//                   </div>
//                 )}
//                 {successMessage && (
//                   <div style={{backgroundColor: 'black', color: 'white', padding: '10px',display:"flex", justifyContent:"flex-start", marginTop: '10px'}}>
//                     {successMessage}
//                   </div>
//                 )}
//       </form>
//     </div>
//   );
// }