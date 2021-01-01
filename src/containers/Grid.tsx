import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 800px;
  margin-top: 1.5rem;
`

const Card = styled.a`
  margin: 1rem;
  flex-basis: 45%;
  padding: 1.5rem;
  text-align: left;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.foreground};
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.text};
    border-color: ${({ theme }) => theme.colors.text};
  }

  @media (max-width: 375px) {
    flex-grow: 1;
    max-width: 80%;
  }
`

const Title = styled.h2`
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  line-height: 1.15;
`

const Description = styled.p`
  margin: 0;
  font-size: 1.25rem;
  line-height: 1.5;
`

const CARDS = [
  {
    name: 'GitHub',
    link: 'https://github.com/gabrielccarvalho',
    description: 'Some of the work I\'ve been doing.',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/gabrielcamposs10',
    description: 'Great place to know me better.',
  },
  {
    name: 'Linkedin',
    link: 'https://www.linkedin.com/in/gabriel-campos-b7618418a',
    description: 'The easiest way to find me and get in thouch is through linkedin.',
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@gabrielcamposc',
    description: 'I\'m starting to write some articles here.',
  },
]

export default function Grid() {
  
  const cards = CARDS.map((c, i) => (
    <Card href={ c.link } target='_blank' rel='noreferrer noopener' key={i}>
      <Title> { c.name } </Title>
      <Description> { c.description } </Description>
    </Card>
  ))

  return (
    <Container>
      <CardContainer>
        {cards}
      </CardContainer>
    </Container>
  )
}
