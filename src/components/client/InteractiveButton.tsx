'use client'

import { useState } from 'react'
import { Button } from '@mui/material'

interface InteractiveButtonProps {
  label: string
}

/**
 * Client component example - runs in the browser
 * Can use hooks, event handlers, browser APIs
 * Note: Event handlers are defined within the client component
 */
export default function InteractiveButton({ label }: InteractiveButtonProps) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)
    console.log('Button clicked from client component!')
    setTimeout(() => setClicked(false), 1000)
  }

  return (
    <Button
      variant="contained"
      onClick={handleClick}
      color={clicked ? 'success' : 'primary'}
    >
      {clicked ? 'Clicked!' : label}
    </Button>
  )
}
