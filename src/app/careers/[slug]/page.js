"use client";

import React from 'react';
import JobInnerPage from './components/JobInnerPage'

import styles from './page.module.css';

export default function JobPage({ params }) {
    return (
    <section className={styles.pageContainer}>
        <div className='container-main'>
            <main className={styles.pageWrapper}>
                <JobInnerPage />
                <div>
                    {/* <p className='heading-1'>Form</p> */}
                </div>
            </main>
        </div>
    </section>
    );
}