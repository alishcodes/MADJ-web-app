import styled from 'styled-components'

export const Container = styled.div`
padding: 10px 10px;
  background:  #2A363B;
  display: flex;
  flex-direction: column;
  min-height: 40vh
`

export const Wrapper = styled.div`
 flex: 1;
  justify-content: center;
  margin: 0 auto;
`

export const Column = styled.div`
display: flex;
  flex-direction: column;
  text-align: left;
  margin: 60px;
  
  
`

export const Row = styled.div`
  display: flex;
  grid-gap: 20px;
  
`;

export const Link = styled.a`
  color: #fff;
  font-size: 17px;
  
  text-decoration: none;
  &:hover {
      color: gray;
      transition: 200ms ease-in;
  }
`;

export const Title = styled.p`
  
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;