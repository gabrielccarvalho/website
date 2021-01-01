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

  @media (max-width: 425px) {
    padding: 0;
    padding-top: 6.5rem;
    padding-bottom: 2rem;
  }
`

const ThemeSwitcher = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  top: 1rem;
  right: 1rem;

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    top: 1rem;
    left: 0;
    right: 0;
  }
`

const ThemeTitle = styled.p`
  margin: 0;
  padding-right: 10px;
  text-align: left;
  line-height: 1.5;
  font-size: 1.3rem;

  @media (max-width: 425px) {
    padding-right: 0;
    padding-bottom: 0.5rem;
  }
`

const ProfilePicture = styled(Image).attrs({ 
  src: '/assets/me.jpeg',
  alt: 'Gabriel Campos',
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

  @media (max-width: 425px) {
    font-size: 2.5rem;
  }
`

const Description = styled.p`
  margin: 0;
  text-align: center;
  line-height: 1.5;
  font-size: 1.3rem;

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`

type HeaderProps = {
  toggleTheme(): void; 
}

const Header = ({ toggleTheme }: HeaderProps) => {
  const { colors, title } = React.useContext(ThemeContext)

  return (
    <Container>
      <ThemeSwitcher>
        <ThemeTitle>
          { title === 'dark'
            ? 'Turn the lights back on'
            : 'Turn all the lights off'
          }
        </ThemeTitle>
        <Switch 
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={
            <svg 
              viewBox="-4 -3 24 24" 
              width="20" 
              height="20" 
              stroke="currentColor" 
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              fill="none" 
              shape-rendering="geometricPrecision"
            >
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          }
          uncheckedIcon={
            <svg
              viewBox="-5 -5 24 24"
              width="20"
              height="20"
              stroke="currentColor" 
              stroke-width="1.5" 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              fill="none" 
              shape-rendering="geometricPrecision"
            >
              <circle cx="12" cy="12" r="5"></circle>
              <path d="M12 1v2"></path>
              <path d="M12 21v2"></path>
              <path d="M4.22 4.22l1.42 1.42"></path>
              <path d="M18.36 18.36l1.42 1.42"></path>
              <path d="M1 12h2"></path>
              <path d="M21 12h2"></path>
              <path d="M4.22 19.78l1.42-1.42"></path>
              <path d="M18.36 5.64l1.42-1.42"></path>
            </svg>
          }
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