import styled from 'styled-components'

export const StyleBase = styled.div`
  display: flex;
  padding-top: 20px;
  justify-content: space-between;
  align-items: flex-start;
`

export const Browse = styled.div`
  display: flex;
  a {
    font-size: 14px;
    color: ${props => props.theme.lightGrey};
    margin-bottom: 10px;
    border-bottom: 4px solid transparent;
    color: inherit;
    text-decoration: none;
    padding-bottom: 10px;
    display: block;
    margin-right: 32px;
    &.selected-tab {
      font-weight: 500;
      border-color: ${props => props.theme.primary};
    }
  }
`


export const SearchInputStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #000;
  border: 1px solid #FFF;
  padding: 0 10px;
  svg {
    height: 16px;
    width: 16px;
  }
`

export const Input = styled.input`
  background: transparent;
  border: none;
  min-width: 200px;
  color: #FFF;
  padding: 7px 14px 7px 7px;
  font-size: 14px;
  &:focus {
    outline: 0;
  }
`
