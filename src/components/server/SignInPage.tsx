import { Box, Container, Typography } from '@mui/material'
import SignInForm from '../client/SignInForm'
import AssetronLogo from '../client/AssetronLogo'

/**
 * Server component for the sign-in page
 * Handles the layout and static content
 */
export default function SignInPage() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 4,
        }}
      >
        {/* Logo */}
        <Box sx={{ mb: 6 }}>
          <AssetronLogo />
        </Box>

        {/* Sign In Form */}
        <Box
          sx={{
            width: '100%',
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              mb: 4,
              fontWeight: 400,
              color: 'text.primary',
            }}
          >
            Sign in
          </Typography>

          <SignInForm />
        </Box>

        {/* Footer */}
        <Box
          sx={{
            position: 'fixed',
            bottom: 16,
            left: 16,
            right: 16,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © Assetron.ai 2024
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              Contact Us
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              Terms of Service
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" color="primary" sx={{ cursor: 'pointer' }}>
              Cookie Policy
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}