import ServerComponent from './server/ServerComponent'
import InteractiveButton from './client/InteractiveButton'
import ClientWrapper from './client/ClientWrapper'

/**
 * Example of Server/Client composition pattern
 * This component itself is a server component that composes
 * both server and client components together
 */
export default function ComposedExample() {
  return (
    <ServerComponent title="Server/Client Composition Example">
      <p>This content is rendered on the server.</p>

      {/* Client component embedded within server component */}
      <ClientWrapper>
        <InteractiveButton
          label="Click me (Client Component)"
        />
      </ClientWrapper>

      <p>This is also server-rendered content after the client component.</p>
    </ServerComponent>
  )
}
