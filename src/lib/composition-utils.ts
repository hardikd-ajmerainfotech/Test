/**
 * Utility functions for Server/Client composition pattern
 */

// Helper to serialize data for passing from server to client components
export function serializeServerData<T>(data: T): string {
  return JSON.stringify(data)
}

// Helper to deserialize data in client components
export function deserializeServerData<T>(serializedData: string): T {
  return JSON.parse(serializedData)
}

// Type guard to check if we're on the server
export function isServer(): boolean {
  return typeof window === 'undefined'
}

// Type guard to check if we're on the client
export function isClient(): boolean {
  return typeof window !== 'undefined'
}

// Helper to create a boundary between server and client components
export function createCompositionBoundary<TServerProps, TClientProps>(
  serverComponent: React.ComponentType<TServerProps>,
  clientComponent: React.ComponentType<TClientProps>
) {
  return {
    Server: serverComponent,
    Client: clientComponent
  }
}