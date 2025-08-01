import type { Metadata } from 'next'
import ThemeProvider from '@/components/client/ThemeProvider'

export const metadata: Metadata = {
  title: 'Assetron',
  description: 'Assetron Sign In',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
