import styled from 'styled-components'


export const ContactBlock = styled.section`
    padding: 120px 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: 350px) {
        padding: 120px 20px;
    }
`

export const Topic = styled.div`
    color: #868f97;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 50px;
    letter-spacing: .23em;
    text-transform: uppercase;

    @media screen and (max-width: 500px){
        font-size: 13px;
    }
`

export const Title = styled.div`
    font-family: "Manrope",sans-serif;
    font-size: 75px;
    font-weight: 800;
    position: relative;

    @media screen and (max-width: 350px){
        font-size: 28px;
    }

    ::after{
        content: "";
        position: absolute;
        background: #fff;
        width: 0;
        height: 5px;
        bottom: -6px;
        left: unset;
        right: 0;
        transition: width .2s linear;
    }

    :hover::after{
        width: 100%;
        left: 0;
        right: unset;
    }
`