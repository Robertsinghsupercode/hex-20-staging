"use client"

import React, { useState, useEffect, useRef } from 'react'
import CtaBtn from '@/app/components/CtaBtn'
import Styles from '../css/openpositions.module.css'

export default function OpenPositions() {
    const jobs = [
        { id: '1', title: 'Marketing Lead', location: 'India', department: 'Marketing' },
    ];

    const [selectedDepartment, setSelectedDepartment] = useState('')
    const [selectedLocation, setSelectedLocation] = useState('')
    const [isDepartmentOpen, setIsDepartmentOpen] = useState(false)
    const [isLocationOpen, setIsLocationOpen] = useState(false)
    const departmentRef = useRef(null)
    const locationRef = useRef(null)

    const filteredJobs = jobs.filter(job => 
        (selectedDepartment === '' || job.department === selectedDepartment) &&
        (selectedLocation === '' || job.location.toLowerCase() === selectedLocation.toLowerCase())
    )

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (departmentRef.current && !departmentRef.current.contains(event.target)) {
                setIsDepartmentOpen(false)
            }
            if (locationRef.current && !locationRef.current.contains(event.target)) {
                setIsLocationOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    // Handle keyboard navigation
    const handleKeyDown = (e, setIsOpen) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(prev => !prev)
        } else if (e.key === 'Escape') {
            setIsOpen(false)
        }
    }

    // Create unique department and location options from jobs
    const departmentOptions = [
        { value: '', label: 'All Departments' },
        ...Array.from(new Set(jobs.map(job => job.department))).map(dep => ({ value: dep, label: dep }))
    ]

    const locationOptions = [
        { value: '', label: 'All Locations' },
        ...Array.from(new Set(jobs.map(job => job.location))).map(loc => ({ value: loc.toLowerCase(), label: loc }))
    ]

    return (
        <section className={`${Styles.OpenPositionsBanner}`}>
            <div className='container-main'>
                <div className={`${Styles.OpenPositionsHead} flex items-center justify-between`}>
                    <h4 className={`${Styles.OpenPositionsHeading} heading-3-sm heading-6`}>Current Open Positions</h4>
                    <div className={`${Styles.filterContainer} flex items-center gap-4`}>
                        <div className={`${Styles.filterBox}`} ref={departmentRef}>
                            <div
                                className={`${Styles.filterBoxTrigger} text-3`}
                                onClick={() => setIsDepartmentOpen(!isDepartmentOpen)}
                                onKeyDown={(e) => handleKeyDown(e, setIsDepartmentOpen)}
                                tabIndex={0}
                                role="combobox"
                                aria-expanded={isDepartmentOpen}
                                aria-label="Select Department"
                            >
                                {departmentOptions.find(opt => opt.value === selectedDepartment)?.label || 'All Departments'}
                            </div>
                            <div className={`${Styles.filterBoxMenu} ${isDepartmentOpen ? Styles.open : ''}`}>
                                {departmentOptions.map(opt => (
                                    <div
                                        key={opt.value}
                                        className={`${Styles.filterBoxItem} ${selectedDepartment === opt.value ? Styles.selected : ''} text-3 opcty-3`}
                                        onClick={() => {
                                            setSelectedDepartment(opt.value)
                                            setIsDepartmentOpen(false)
                                        }}
                                        role="option"
                                        aria-selected={selectedDepartment === opt.value}
                                    >
                                        {opt.label}
                                    </div>
                                ))}
                            </div>
                            <svg className={`${Styles.filterBoxArrow}`} xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                                <path opacity="0.4" d="M12 0.5L6.5 5.5L1 0.499999" stroke="black"/>
                            </svg>
                        </div>
                        <div className={`${Styles.filterBox}`} ref={locationRef}>
                            <div
                                className={`${Styles.filterBoxTrigger} text-3`}
                                onClick={() => setIsLocationOpen(!isLocationOpen)}
                                onKeyDown={(e) => handleKeyDown(e, setIsLocationOpen)}
                                tabIndex={0}
                                role="combobox"
                                aria-expanded={isLocationOpen}
                                aria-label="Select Location"
                            >
                                {locationOptions.find(opt => opt.value === selectedLocation)?.label || 'All Locations'}
                            </div>
                            <div className={`${Styles.filterBoxMenu} ${isLocationOpen ? Styles.open : ''}`}>
                                {locationOptions.map(opt => (
                                    <div
                                        key={opt.value}
                                        className={`${Styles.filterBoxItem} ${selectedLocation === opt.value ? Styles.selected : ''} text-3 opcty-3`}
                                        onClick={() => {
                                            setSelectedLocation(opt.value)
                                            setIsLocationOpen(false)
                                        }}
                                        role="option"
                                        aria-selected={selectedLocation === opt.value}
                                    >
                                        {opt.label}
                                    </div>
                                ))}
                            </div>
                            <svg className={`${Styles.filterBoxArrow}`} xmlns="http://www.w3.org/2000/svg" width="13" height="7" viewBox="0 0 13 7" fill="none">
                                <path opacity="0.4" d="M12 0.5L6.5 5.5L1 0.499999" stroke="black"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className={`${Styles.openPositionsBody} flex flex-column`}>
                    {filteredJobs.length > 0 ? (
                        filteredJobs.map(job => (
                            <div key={job.id} className={`${Styles.openPositionsContainer} flex items-center justify-between`}>
                                <div className={`${Styles.title} flex flex-column`}>
                                    <p className='text-6'>{job.title}</p>
                                </div>
                                <div className={`${Styles.openPositionsContainerRight} flex items-center`}>
                                    <div className={`${Styles.locationRoleContainer} flex items-center`}>
                                        <p className='text-1 opcty-4'>{job.location}</p>
                                        <p className='text-1 opcty-4 mobile-only'>/</p>
                                        <p className='text-1 opcty-4'>{job.department}</p>
                                    </div>
                                    <div className={`${Styles.btnContainer} flex flex-column`}>
                                    <CtaBtn 
                                        href={`/careers/${job.title.toLowerCase().replace(/\s+/g, '-')}` +
                                            `?title=${encodeURIComponent(job.title)}&location=${encodeURIComponent(job.location)}&department=${encodeURIComponent(job.department)}`} 
                                        text="Apply now" 
                                        variant="dark" 
                                        target="blank"
                                    />
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className={`${Styles.noMatch} text-1`}>No positions match the selected filters.</p>
                    )}
                </div>
            </div>
        </section>
    )
}