import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
`

const Bar = styled.div`
  align-self: center;
  margin: 0 1rem;
  display: flex;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.text};
  height: 8px;
  width: 100%;
`

const Value = styled.div<{ progress: number }>`
  display: flex;
  align-self: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 8px;
  width: ${({ progress }) => progress}%;
`

const Skill = styled.p`
  margin: 0;
  line-height: 1.5;
  font-size: 1.3rem;
  max-width: 25rem;

  @media (max-width: 425px) {
    padding: 0 1rem;
  }
`

const Percentage = styled.p``

const Progress = ({ value, skill } : { value: number, skill: string }) => {
  return (
    <Wrapper>
      <Skill>{skill}</Skill>
      <Bar>
        <Value progress={value}  />
      </Bar>
      <Percentage>{value}%</Percentage>
    </Wrapper>
  )
}

export default Progress
