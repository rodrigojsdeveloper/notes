import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Notes',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Toaster richColors />
    </html>
  )
}
