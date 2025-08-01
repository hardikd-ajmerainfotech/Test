'use client'

import { ReactNode } from 'react'

interface ClientWrapperProps {
  children: ReactNode
}

/**
 * Client wrapper component for wrapping server components that need client-side features
 * Use this when you need to add client-side interactivity to server components
 */
export default function ClientWrapper({ children }: ClientWrapperProps) {
  return (
    <div className="client-wrapper">
      {children}
    </div>
  )
}