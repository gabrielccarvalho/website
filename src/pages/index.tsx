import React from 'react'

import { Header, Grid } from '@/containers'
import { SEO } from '@/components'

type HomeProps = {
  toggleTheme(): void;
}

export default function Home({ toggleTheme }: HomeProps) {
  return (
    <>
      <SEO 
        title='Home'
        description='A technology enthusiast passionate about JavaScript and OpenSource'
        image='/assets/me.jpeg'
      />
      <Header toggleTheme={toggleTheme} />
      <Grid />
    </>
  )
}
