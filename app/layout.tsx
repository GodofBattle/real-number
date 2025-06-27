import { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';

import ThemeProvider from '@/components/theme-provider';

import './globals.css';

const ibm_plex_mono = IBM_Plex_Mono({ weight: '400' });

const metadata: Metadata = {
    title: 'MY REAL NUMBER',
    description: 'ALEX',
};

const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
    return (
        <html lang='kr' suppressHydrationWarning>
            <head />
            <body className={`${ibm_plex_mono.className} antialiased`}>
                <ThemeProvider attribute={'class'} defaultTheme='dark' enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
};

export default RootLayout;
export { metadata, viewport };
