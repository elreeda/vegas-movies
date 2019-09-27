import styled, { css } from 'styled-components'

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
  ${props => props.isInWatchList && css`
    svg {
      opacity: 1;
    }
  `}
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
  ${props => props.isFavorite && css`
    svg {
      fill: #dd303c;
      opacity: 1;
    }
  `}
`

export const Poster = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 34%, rgba(0, 0, 0, 0.2) 66%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.6)), url(${props => props.img});
  background-position: center;
  background-size: cover;
  height: 300px;
  border-radius: 4px;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  > div {
    display: flex;
    justify-content: space-between;
  }
  transition: .15s opacity ease-in;
  &:hover {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6)), url(${props => props.img});
    box-shadow: inset 0 0 0 3px ${props => props.theme.primary};
    ${AddToWL}, ${FavoriteBtn} {
      opacity: 1;
    }
  }
`

export const Footer = styled.div``

export const Stars = styled.div`
  &::before {
  content: '★★★★★';
  letter-spacing: 3px;
  background: linear-gradient(90deg, #fc0 ${props => props.value}%, #fff 0%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
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
