import { ReactNode } from 'react'

// Common component props
export interface BaseComponentProps {
  children?: ReactNode
  className?: string
}

// Server component specific types
export interface ServerComponentProps extends BaseComponentProps {
  // Props that can be serialized and passed from server to client
}

// Client component specific types
export interface ClientComponentProps extends BaseComponentProps {
  // Props that may include functions, complex objects, etc.
  onClick?: () => void
  onSubmit?: (data: any) => void
}

// Composition pattern types
export interface CompositionProps {
  serverData?: any
  clientHandlers?: {
    [key: string]: (...args: any[]) => void
  }
}