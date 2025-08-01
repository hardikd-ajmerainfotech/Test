'use client'

import { Box, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
}))

const LogoIcon = styled('div')(({ theme }) => ({
  width: 32,
  height: 32,
  backgroundColor: theme.palette.primary.main,
  borderRadius: '6px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  fontWeight: 'bold',
  fontSize: '18px',
}))

/**
 * Client component for the Assetron logo
 */
export default function AssetronLogo() {
  return (
    <LogoContainer>
      <LogoIcon>A</LogoIcon>
      <Typography
        variant="h5"
        component="span"
        sx={{
          fontWeight: 600,
          color: 'text.primary',
        }}
      >
        Assetron
      </Typography>
    </LogoContainer>
  )
}