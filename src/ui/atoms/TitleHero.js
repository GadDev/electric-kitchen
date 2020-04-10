import React from "react"
import styled, { keyframes }from "styled-components"


const Flicker = keyframes`
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        
        text-shadow:
            -0.2rem -0.2rem 1rem #fff,
            0.2rem 0.2rem 1rem #fff,
            0 0 2rem #f40,
            0 0 4rem #f40,
            0 0 6rem #f40,
            0 0 8rem #f40,
            0 0 10rem #f40;
    
        box-shadow:
            0 0 .5rem #fff,
            inset 0 0 .5rem #fff,
            0 0 2rem #08f,
            inset 0 0 2rem #08f,
            0 0 4rem #08f,
            inset 0 0 4rem #08f;        
    }

    20%, 24%, 55% {        
        text-shadow: none;
        box-shadow: none;
    }  
  `

const StyledTitle = styled.h1`
    position: relative;
    font-family: 'Open Sans', sans-serif;
    z-index: 1;
    font-size: 2rem;
    font-weight: 200;
    color: #fff;
    padding: 2rem 2rem 2rem;
    border: 0.4rem solid #fff;
    border-radius: 2rem;
    text-transform: uppercase;
    animation: ${Flicker} 1.5s infinite alternate;

    &::selection {
        background-color: $neon-border-color;
        color: $neon-text-color;
    }
    &:focus {
        outline: none;
    }

    @media (min-width: 768px) {
        font-size: 9rem;
        padding: 4rem 4.8rem 4rem;
    }
`
function TitleHero({ title }) {
    return (
        <StyledTitle contenteditable spellcheck="false">{title}</StyledTitle>
    )
}

export default TitleHero