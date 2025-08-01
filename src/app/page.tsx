import ComposedExample from '@/components/ComposedExample'

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Assetron</h1>
      <p>Next.js + Material-UI with Server/Client Composition Pattern</p>
      
      <ComposedExample />
      
      <div style={{ marginTop: '2rem' }}>
        <h3>Pattern Benefits:</h3>
        <ul>
          <li>✅ Server components for data fetching and SEO</li>
          <li>✅ Client components for interactivity</li>
          <li>✅ Optimal performance with selective hydration</li>
          <li>✅ Clear separation of concerns</li>
        </ul>
      </div>
    </main>
  )
}