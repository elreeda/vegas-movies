import styled from 'styled-components'

export const StyleBase = styled.div`
  max-width: 232px;
  a {
    color: inherit;
    text-decoration: none;
  }
`

export const AddToWL = styled.div`
  opacity: 0;
  svg {
    height: 20px;
    fill: #FFF;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      fill: ${props => props.theme.primary};
    }
  }
`

export const FavoriteBtn = styled.div`
  opacity: 0;
  svg {
    height: 20px;
    fill: #FFF;
    opacity: 0.5;
    &:hover {
      opacity: 1;
      fill: ${props => props.theme.primary};
    }
  }
`

export const Poster = styled.div`
  background-position: center;
  background-size: cover;
  height: 300px;
  border-radius: 4px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
  }
  transition: .15s opacity ease-in;
  &:hover {
    ${AddToWL}, ${FavoriteBtn} {
      opacity: 1;
    }
  }
`

export const Stars = styled.div`
  
`

export const Details = styled.div`
  margin-top: 10px;
  h3 {
    font-size: 14px;
    line-height: 0.8;
    font-weight: 500;
  }
  span {
    font-size: 11px;
    color: ${props => props.theme.darkGrey};
  }
`
