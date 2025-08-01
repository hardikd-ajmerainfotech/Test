# Server/Client Composition Pattern

This project uses the Server/Client composition pattern to optimize performance and maintain clear separation of concerns.

## Directory Structure

```
src/
├── components/
│   ├── client/          # Client components ('use client')
│   ├── server/          # Server components (default)
│   └── ComposedExample.tsx  # Composition examples
├── lib/
│   └── composition-utils.ts # Utility functions
└── types/
    └── index.ts         # TypeScript definitions
```

## Pattern Guidelines

### Server Components (Default)
- **Location**: `src/components/server/`
- **Purpose**: Data fetching, SEO, initial rendering
- **Capabilities**: 
  - Access to server-side APIs
  - Database queries
  - File system access
  - Environment variables
- **Limitations**: 
  - No browser APIs
  - No event handlers
  - No React hooks (useState, useEffect, etc.)

### Client Components ('use client')
- **Location**: `src/components/client/`
- **Purpose**: Interactivity, browser APIs, state management
- **Capabilities**:
  - React hooks
  - Event handlers
  - Browser APIs
  - Third-party libraries that require browser environment
- **Limitations**:
  - Cannot directly access server-side resources
  - Increases bundle size

### Composition Rules

1. **Server components can import and render client components**
2. **Client components cannot import server components directly**
3. **Pass server data to client components via props**
4. **Use composition to combine server and client functionality**

## Example Usage

```tsx
// Server Component (default)
export default function ServerPage() {
  const serverData = await fetchData() // Server-side data fetching
  
  return (
    <div>
      <h1>Server Rendered Title</h1>
      {/* Embed client component */}
      <InteractiveButton data={serverData} />
    </div>
  )
}

// Client Component
'use client'
export default function InteractiveButton({ data }) {
  const [state, setState] = useState(data)
  
  return (
    <button onClick={() => setState(newState)}>
      Interactive Button
    </button>
  )
}
```

## Benefits

- **Performance**: Only necessary JavaScript is sent to the client
- **SEO**: Server components are fully rendered for search engines
- **Security**: Sensitive operations stay on the server
- **Developer Experience**: Clear separation of concerns
- **Bundle Size**: Reduced client-side JavaScript

## Best Practices

1. Start with server components by default
2. Use client components only when needed for interactivity
3. Keep client components small and focused
4. Pass serializable data from server to client components
5. Use composition to combine server and client functionality