import { Box, Container } from '@mui/material'
import React from 'react'
import { PostList } from '../components/PostList'

export const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <PostList />
      </Box>
    </Container>
  )
}
