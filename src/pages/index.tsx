import React from 'react'

import { SEO } from '@/components'
import { Sidebar, Grid } from '@/containers'

export default function Home() {
  return (
    <>
      <SEO 
        title='Home'
        description='A technology enthusiast passionate about JavaScript and OpenSource'
        image='/assets/me.jpeg'
      />
      <Sidebar />
      <Grid />
    </>
  )
}
