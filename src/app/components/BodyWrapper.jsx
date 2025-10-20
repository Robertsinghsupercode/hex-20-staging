"use client";

import { usePathname } from 'next/navigation';
import SmoothScrollProvider from './SmoothScrollProvider';

export default function BodyWrapper({ children }) {
  const pathname = usePathname();
  const isDark = pathname === '/blogs' || pathname.startsWith('/blogs/') ||
                 pathname === '/media' || pathname.startsWith('/media/');

  return (
    <body className={isDark ? 'bodyDark' : ''}>
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </body>
  );
}