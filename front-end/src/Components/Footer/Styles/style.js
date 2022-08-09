import styled from 'styled-components'

export const Container = styled.div`
padding: 10px 10px;
  background:  #2A363B;
  position: fixed;
  bottom: 0;
  width: 100%;
  
`

export const Wrapper = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 100px;
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
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 20px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
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
  margin-bottom: 40px;
  font-weight: bold;
`;