import styled from "styled-components";


export const FooterSec = styled.footer`
    background: #0b0b0f;
    padding: 50px 100px;
    position: relative;
    z-index: 1;

    @media screen and (max-width: 768px){
        padding: 50px 40px 10px;
    }

    hr{
        border-color: #858383;
        border-width: 1px;
        margin-bottom: 60px;
        opacity: .4;
    }
`

export const FooterTop = styled.div`
    font-size: 15px;
    font-weight: 500;

    @media screen and (max-width: 570px){
        font-size: 14px;
    }
`
export const Message = styled.div`
    text-transform: uppercase;
    letter-spacing: .2em;
    margin-bottom: 15px;
`
export const Links = styled.div`
    color: #868f97;
    display: flex;

    @media screen and (max-width: 425px){
        flex-direction: column;
    }
`

export const Linkd = styled.div`

    p{
        margin-bottom: 20px;
    }

    a{
        position: relative;
        text-decoration: none;
        color: inherit;
    }
    :first-of-type{
        margin-right: 15em;
    }

    a::after{
        color: #fff;
        position: absolute;
        overflow: hidden;
        content: attr(data-text);
        background-color: transparent;
        width: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        -webkit-transition: width .2s linear;
        transition: width .2s linear;
    }

    a:hover::after{
        width: 100%;
    }
`

export const LinkLi = styled.div`
    a{
        position: relative;
        text-decoration: none;
        color: inherit;
    }

    a::after{
        color: #fff;
        position: absolute;
        overflow: hidden;
        content: attr(data-text);
        background-color: transparent;
        width: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        -webkit-transition: width .2s linear;
        transition: width .2s linear;
    }

    a:hover::after{
        width: 100%;
    }
`

export const Copyright = styled.div`
    color: #868f97;
    padding: 140px 0 0;
    text-align: right;
    font-size: 16px;
    
@media screen and (max-width: 570px){
    text-align: left;
    font-size: 14px;
    padding: 100px 0 40px;
}
`