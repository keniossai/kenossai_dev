import styled from 'styled-components'


export const Landing = styled.div`
    position: relative;
    background: #0b0b0f;
    color: #fff;
    z-index: 2;
    height: unset;
    overflow: hidden;
`

export const Section = styled.section`
    padding: 180px 100px 160px;
    text-align: center;
    font-weight: 800;
    position: relative;
    overflow: hidden;
    max-height: 100vh;
    font-family: "Manrope",sans-serif;

    @media screen and (max-width: 400px){
        padding: 180px 50px 80px;
        text-align: left;
    }
`

export const Sub = styled.div`
    transform: translate(0px);
    opacity: 1;
    font-size: 14px;
    color: #868f97;
    text-transform: uppercase;
    letter-spacing: .2em;

    @media screen and (max-width: 763px){
        /* text-align: left; */
    }
`

export const LandingMain = styled.h1`
    font-size: 75px;
    line-height: 1.2;
    margin-top: 30px;
    margin-bottom: 50px;
    position: relative;

    @media screen and (max-width: 670px){
        display: none;
    }
`
export const LandingMain2 = styled.h1`
    display: none;
    font-weight: 800;
    @media screen and (max-width: 670px){
        display: block;
        font-size: 40px;
    }
`

export const TextCon = styled.span`
    position: relative;
    display: inline-block;
    overflow: hidden;
    white-space: pre;

    .text{
        opacity: 1;
        transform: translate(0px);
    }
`
export const LinkDiv = styled.div`
    font-weight: 800;
`

export const Link = styled.a`
    opacity: 1;
    color: #0E76A8;
    text-decoration: none;
`

export const Project = styled.span`
    margin-left: 10px;
    opacity: 1;
    color: #FF3562;
`
export const Dash = styled.span`
    opacity: 1;
    margin-left: 10px;
`
export const SideScroll = styled.div`
    display: inline;
    position: absolute;
    left: 30px;
`