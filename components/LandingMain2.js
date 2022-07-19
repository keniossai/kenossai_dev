import React from 'react'
import styled from 'styled-components'
import AnimatedText from 'react-animated-text-content';



function LandingMain2 (){
    return(
        <LandingMain>
            <AnimatedText 
                type="chars" // animate words or chars
                  animation={{
                    x: '200px',
                    y: '-20px',
                    scale: 1.1,
                    ease: 'ease-in-out',
                  }}
            >

            I am always delighted 
            with my creativity.
            </AnimatedText>
        </LandingMain>
    )
}

export default LandingMain2

const LandingMain = styled.h1`
    display: none;
    font-weight: 800;
    @media screen and (max-width: 670px){
        display: block;
        font-size: 40px;
    }
`