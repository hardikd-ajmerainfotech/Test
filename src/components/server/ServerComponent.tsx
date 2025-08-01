import { ReactNode } from 'react'

interface ServerComponentProps {
  children?: ReactNode
  title: string
}

/**
 * Server component example - runs on the server
 * Can fetch data, access databases, etc.
 * Cannot use browser APIs or event handlers
 */
export default function ServerComponent({ children, title }: ServerComponentProps) {
  // This runs on the server
  const serverData = {
    timestamp: new Date().toISOString(),
    environment: 'server'
  }

  return (
    <div>
      <h2>{title}</h2>
      <p>Generated on server at: {serverData.timestamp}</p>
      {children}
    </div>
  )
}