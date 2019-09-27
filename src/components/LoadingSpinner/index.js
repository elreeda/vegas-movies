// CREDITS: https://codepen.io/alberta/pen/qZbpgv
import React from 'react'
import styled, { keyframes } from 'styled-components'

const loadinganim = keyframes`
  0% {
    transform: rotate(360deg);
  }
  100% {
    transform: rotate(0deg);
  }
`

const StyleBase = styled.div`
  min-height: 300px;
  color: white;
  text-align: center;
  display: table;
  width: 100%;
  #loading {
    display: table-cell;
    width: 100%;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 3px;
    vertical-align: middle;
  }
  #loading .bulletouter {
    animation: ${loadinganim} 1s infinite;
    animation-timing-function: linear;
    animation-direction: reverse;
    width: 50px;
    height: 50px;
    background: white;
    border-radius: 50%;
    margin: 0 auto;
  }
  #loading .bulletouter .bulletinner {
    position: relative;
    left: -5px;
    width: 45px;
    height: 45px;
    background: ${props => props.theme.darkBg};
    border-radius: 50%;
    margin: 0 auto;
  }
  #loading .bulletouter .mask {
    position: relative;
    left: -5px;
    top: -15px;
    width: 50px;
    height: 25px;
    background: ${props => props.theme.darkBg};
    transform: rotate(45deg);
  }
  #loading .bulletouter .dot {
    position: relative;
    left: 33px;
    top: -32px;
    width: 8px;
    height: 8px;
    background: white;
    border-radius: 50%;
  }
  #loading p {
    padding-top: 23px;
  }

`

const LoadingSpinner = () => {
  return (
    <StyleBase id='wrapper'>
      <div id='loading'>
        <div className='bulletouter'>
          <div className='bulletinner'></div>
          <div className='mask'></div>
          <div className='dot'></div>
        </div>
        <p>loading!</p>
      </div>
    </StyleBase>

  )
}

export default LoadingSpinner
