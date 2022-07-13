import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
// import { Link as LinkS } from 'react-router-dom'


export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen ? '100%' : '0')};
    top: ${({isOpen}) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const CloseIcon = styled(FaTimes)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarLink = styled.li`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5rem;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;
    opacity: 1;
    transform: translate(0px);

    &:hover{
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }

    ::before{
        content: attr(data-text);
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%,-50%);
        transform: translate(-50%,-50%);
        color: #fff;
        z-index: -1;
        white-space: nowrap;
        font-size: 2em;
        pointer-events: none;
        opacity: 0;
        letter-spacing: 20px;
        transition: .5s;
    }
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;


    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
        margin-left: -35px;
    }
`