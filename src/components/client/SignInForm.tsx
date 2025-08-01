'use client'

import { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
  Link,
} from '@mui/material'
import { Google as GoogleIcon } from '@mui/icons-material'

/**
 * Client component for the sign-in form
 * Handles user interactions and form state
 */
export default function SignInForm() {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGoogleSignIn = () => {
    setIsLoading(true)
    // TODO: Implement Google sign-in logic
    console.log('Google sign-in clicked')
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleEmailNext = () => {
    if (!email) return
    setIsLoading(true)
    // TODO: Implement email sign-in logic
    console.log('Email sign-in:', email)
    setTimeout(() => setIsLoading(false), 1000)
  }

  const handleForgotPassword = () => {
    console.log('Forgot password clicked')
  }

  const handleSignUp = () => {
    console.log('Sign up clicked')
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* Google Sign In Button */}
      <Button
        fullWidth
        variant="outlined"
        size="large"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleSignIn}
        disabled={isLoading}
        sx={{
          mb: 3,
          py: 1.5,
          borderColor: '#dadce0',
          color: '#3c4043',
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 500,
          '&:hover': {
            borderColor: '#dadce0',
            backgroundColor: '#f8f9fa',
          },
        }}
      >
        Sign in with Google
      </Button>

      {/* Divider */}
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
        <Divider sx={{ flex: 1 }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ px: 2 }}
        >
          or
        </Typography>
        <Divider sx={{ flex: 1 }} />
      </Box>

      {/* Email Input */}
      <TextField
        fullWidth
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="outlined"
        sx={{
          mb: 3,
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#dadce0',
            },
            '&:hover fieldset': {
              borderColor: '#1976d2',
            },
          },
        }}
      />

      {/* Next Button */}
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={handleEmailNext}
        disabled={!email || isLoading}
        sx={{
          mb: 2,
          py: 1.5,
          textTransform: 'none',
          fontSize: '14px',
          fontWeight: 500,
          backgroundColor: '#1976d2',
          '&:hover': {
            backgroundColor: '#1565c0',
          },
        }}
      >
        Next
      </Button>

      {/* Forgot Password Link */}
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Link
          component="button"
          variant="body2"
          onClick={handleForgotPassword}
          sx={{
            color: '#1976d2',
            textDecoration: 'none',
            cursor: 'pointer',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          Forgot password?
        </Link>
      </Box>

      {/* Sign Up Link */}
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="body2" color="text.secondary">
          Don&apos;t have an account?{' '}
          <Link
            component="button"
            onClick={handleSignUp}
            sx={{
              color: '#1976d2',
              textDecoration: 'none',
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  )
}
