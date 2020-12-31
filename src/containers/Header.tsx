import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import ThemeMenu from './ThemeMenu'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`

const ProfilePicture = styled(Image).attrs({ 
  src: '/assets/me.jpeg',
  alt: 'Picture of the author',
  width: 200,
  height: 200,
  layout: 'fixed'
  })`
  border-radius: 50%;
`

const Name = styled.h1`
  margin: 2rem 0 1rem 0;
  font-size: 3.5rem;
  line-height: 1.15;
  text-align: center;
  letter-spacing: -0.02em;
`

const Description = styled.p`
  margin: 0;
  text-align: center;
  line-height: 1.5;
  font-size: 1.3rem;
`

const Header = () => {

  return (
    <Container>
      <ThemeMenu />
      <ProfilePicture />
      <Name> Gabriel Campos </Name>
      <Description> A technology enthusiast passionate about JavaScript and OpenSource </Description>
    </Container>
  )
}

export default Header