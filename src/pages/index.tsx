import React from 'react'

import { Header, Grid } from '@/containers'
import { SEO } from '@/components'

export default function Home() {
  return (
    <>
      <SEO 
        title='Home'
        description='A technology enthusiast passionate about JavaScript and OpenSource'
        image='/assets/me.jpeg'
      />
      <Header />
      <Grid />
    </>
  )
}
