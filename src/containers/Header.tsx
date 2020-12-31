import React from 'react'
import Image from 'next/image'
import styled, { ThemeContext } from 'styled-components'
import Switch from 'react-switch'
import { lighten } from 'polished'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 0;
`

const ThemeSwitcher = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
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

type HeaderProps = {
  toggleTheme(): void; 
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const { colors, title } = React.useContext(ThemeContext)

  return (
    <Container>
      <ThemeSwitcher>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          onColor={colors.primary}
          offColor={lighten(0.5, colors.text)}
        />
      </ThemeSwitcher>
      <ProfilePicture />
      <Name> Gabriel Campos </Name>
      <Description> A technology enthusiast passionate about JavaScript and OpenSource </Description>
    </Container>
  )
}

export default Header