import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { Progress } from '@/components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60rem;

  @media (max-width: 1110px) {
    flex-direction: column;
    align-items: center;
    width: unset;
  }
`

const Col = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  @media (max-width: 1024px) {
    padding: 1rem;
  }
`

const Row = styled.div`
  display: flex;
  padding: 0.5rem 0;
`

const ProfilePicture = styled(Image).attrs({ 
  src: '/assets/me.jpeg',
  alt: 'Gabriel Campos',
  width: 400,
  height: 400,
  layout: 'responsive'
  })`
  border-radius: 5rem;
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
  max-width: 25rem;

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`

const Header = () => {
  return (
    <Wrapper>
      <Col>
        <ProfilePicture />
        <Name> Gabriel Campos </Name>
        <Description> A technology enthusiast passionate about JavaScript and OpenSource </Description>
        <Description
          style={{
            paddingTop: '1rem',
            fontSize: '1.8rem',
            fontWeight: 600,
            marginTop: '1rem',
            borderTop: '2px solid #fff',
          }}
        >
          Skills
        </Description>
        <Row>
          <Progress skill={`React (JS/RN)`} value={100} />
        </Row>
        <Row>
          <Progress skill='Next' value={100} />
        </Row>
        <Row>
          <Progress skill='HTML' value={100} />
        </Row>
        <Row>
          <Progress skill='CSS' value={100} />
        </Row>
      </Col>
    </Wrapper>
  )
}

export default Header
