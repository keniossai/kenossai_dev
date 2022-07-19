import styled from "styled-components";


export const LandingWork = styled.section`
    background: #131419;
    padding: 90px 60px;
    position: relative;

    @media screen and (max-width: 350px){
        padding: 90px 20px;
    }
`
export const FadeInTitle = styled.div`
    opacity: 1;
    -webkit-transform: none;
    visibility: visible;
    transition: opacity .6s ease-out,transform 1.2s ease-out,-webkit-transform 1.2s ease-out;
    will-change: opacity,visibility;
`

export const Title = styled.div`
    font-weight: 800;
    font-size: 55px;
    color: #fff;

    @media screen and (max-width: 522px){
        font-size: 45px;
    }
`

export const Boxes = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(450px,1fr));
    grid-column-gap: 75px;
    grid-row-gap: 60px;

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    }

    .red-container{
        margin-top: -130px;

        @media screen and (max-width: 968px){
        margin-top: 0;
    }
    }
`

export const LinkDiv = styled.div`
    display: inherit;
    opacity: 1;
    transform: none;
    visibility: visible;
    transition: opacity .6s ease-out,transform 1.2s ease-out,-webkit-transform 1.2s ease-out;
    will-change: opacity,visibility;
    overflow: hidden;
`

export const Links = styled.a`
    background: #6F36C2;
    margin-top: 130px;
    height: 710px;
    position: relative;
    overflow: hidden;
    padding: 0 20px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 425px){
        height: 470px;
        padding-left: 10px;
    }
    @media screen and (max-width: 986px){
        margin-top: 100px;
    }


`
export const BlueContainer = styled.a`
    background: #2a6ef0;
    /* margin-top: 130px; */
    height: 710px;
    position: relative;
    overflow: hidden;
    padding: 0 20px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 425px){
        height: 470px;
        padding-left: 10px;
    }
`
export const DarkblueContainer = styled.a`
    background: #0e76a8;
    /* margin-top: 130px; */
    height: 710px;
    position: relative;
    overflow: hidden;
    padding: 0 20px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 425px){
        height: 470px;
        padding-left: 10px;
    }
`
export const RedContainer = styled.a`
    background: #e83151;
    /* margin-top: -130px; */
    height: 710px;
    position: relative;
    overflow: hidden;
    padding: 0 20px;
    text-decoration: none;
    cursor: pointer;

    @media screen and (max-width: 425px){
        height: 470px;
        padding-left: 10px;
    }

    /* @media screen and (max-width: 968px){
        margin-top: 0;
    } */
`


export const  BoxContent = styled.div`
    padding: 40px 20px 20px;
    z-index: 2;
    position: relative;

    @media screen and (max-width: 522px){
        padding-right: 10px;
    }
`
export const BoxTitle = styled.div`
    transform: translate(0px, 0.0748px);
    opacity: 0.9975;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 3px;
    font-size: 18px;
`

export const BoxtitleSub = styled.div`
    transform: translate(0px, 3.4663px);
    opacity: 0.8845;
    font-family: "Manrope",sans-serif;
    font-weight: 800;
    font-size: 37px;
    padding-right: 60px;
    margin-top: 20px;
    line-height: 1.2;

    @media screen and (max-width: 425px){
        padding-right: 0;
    }
    @media screen and (max-width: 522px){
        font-size: 25px;
        width: 250px;
    }
    
`
export const BoxTitleLink = styled.div`
    opacity: 0;
    transform: translate(0px, 21.7712px);
    font-weight: 600;
    margin-top: 20px;
    color: #000;
`

export const BoxImage = styled.div`
    /* margin-top: -15px; */
    position: relative;
    left: -70px;
    width: 108%;
    /* height: 109%; */
    /* background: url('../public/imt.png') no-repeat; */
    /* background-size: auto; */
    /* background-size: contain; */
    transition: transform .2s linear,-webkit-transform .2s linear;

    ::after{
        background: rgba(15,20,30,.8);
        position: absolute;
        display: block;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        opacity: 0;
        content: "";
        box-sizing: border-box;
        -webkit-transition: opacity .2s ease-in;
        transition: opacity .2s ease-in;
    }

    @media screen and (max-width: 425px){
        left: -40px;
    }
`

export const More = styled.button`
    outline: none;
    cursor: pointer;
    padding: 15px 30px;
    background: transparent;
    position: absolute;
    right: 17.5%;
    text-transform: none;
    font-weight: 500;
    font-family: "Inter",sans-serif;
    bottom: 6.8%;
    font-size: 16px;
    color: #2a97ff;
    border: 1px solid #2a97ff;
    transition: color .2s linear;

    :hover{
        color: #fff;
    }
    ::after{
        content: "";
        position: absolute;
        width: 0;
        top: 0;
        bottom: 0;
        left: unset;
        right: 0;
        height: 100%;
        transition: all .2s linear;
        background: #2a97ff;
    }
    
    :hover::after{
        width: 100%;
        left: 0;
        right: unset;
    }

    @media screen and (max-width: 986px){
        position: relative;
        left: unset;
        right: unset;
        display: block;
        margin: 60px auto 0;
    }
`

export const ButtonContent = styled.div`
    position: relative;
    z-index: 1;

    

    
`