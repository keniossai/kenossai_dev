import styled from 'styled-components'

export const Nav = styled.div`
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 10px;
    right: 10px;
    padding: 20px 50px 0;
    align-items: center;
    z-index: 10;

    @media screen and (max-width: 768px){
        padding: 20px 20px 0;
    }
`


export const Links = styled.a`
    background: rgba(11, 11, 15, 0.8) none repeat scroll 0% 0%;
    top: 30px;
    left: 30px;
    padding: 10px;
    width: 160px;
    z-index: 10;
    cursor: pointer;

    .ossai{
        text-decoration: none;
        text-align: center;
        color: #fff;
        font-size: 20px;
        letter-spacing: .2rem;
    }
    .svg{
        font-size: 20px;
        font-weight: bold;
        border: 2px solid #fff;
        padding: 5px 10px;
        border-radius: 100%;
        align-items: center;
        color: #fff;
    }
`




export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`


export const MobileIcon = styled.div`
    display: none;
    .icon{
        color: #fff;
        align-items: center;
        margin-top: 5px;
    }

    @media screen and (max-width: 760px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }

`
export const NavItem = styled.li`
    height: 80px;
    color: #fff;
    display: flex;
    text-decoration: none;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:active{
        border-bottom: 3px solid #01bf71;
    }

    :hover{
        color: #e83151;
    }
`
