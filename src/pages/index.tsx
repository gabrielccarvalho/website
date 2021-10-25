import React from 'react'
import styled from 'styled-components'

import { SEO } from '@/components'
import { Sidebar, Grid } from '@/containers'

const Wrapper = styled.div`
  display: flex;

  @media (max-width: 1110px) {
    flex-direction: column;
  }
`

export default function Home() {
  return (
    <>
      <SEO 
        title='Home'
        description='A technology enthusiast passionate about JavaScript and OpenSource'
        image='/assets/me.jpeg'
      />
      <Wrapper>
        <Sidebar />
        <Grid />
      </Wrapper>
    </>
  )
}
