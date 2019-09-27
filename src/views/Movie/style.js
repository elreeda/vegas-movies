import styled from 'styled-components'

export const StyleBase = styled.div`
  display: flex;
  height: 80vh;
  margin-top: 20px;
`

export const Poster = styled.div`
  background-image: url(${props => props.img});
  background-position: center;
  background-size: cover;
  width: 400px;
  height: 80vh;
  border-radius: 4px;
`

export const Details = styled.div`
  width: calc(100% - 400px);
  padding-left: 20px;
  h3 {
    font-size: 34px;
  }
  > div {
    margin: 20px 0;
    font-size: 13px;
    font-weight: 500;
  }
  .dot-separator {
    margin: 0 10px;
  }
`

export const Genres = styled.span`
  span:not(:last-child)::after {
    content: '/';
    margin: 0 5px;
  }
`

export const Stars = styled.span`
  &::before {
    content: '★★★★★';
    letter-spacing: 3px;
    background: linear-gradient(90deg, #fc0 ${props => props.value}%, #fff 0%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
