"use client"
import React from 'react'
import { usePathname } from 'next/navigation'

export default function Canonical() {
    const pathname = usePathname()

    console.log('pathname: ', pathname);

    const baseUrl = 'https://hex20.space';
    const canonicalUrl = `${baseUrl}${pathname}`;

    return (
        <link rel="canonical" href={canonicalUrl} />
    )
}