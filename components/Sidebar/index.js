import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarLink, SidebarWrapper, SidebarMenu } from './SidebarElement'
import Link from 'next/link'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink onClick={toggle} data-text='Home'>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </SidebarLink>
                <SidebarLink  onClick={toggle} data-text='Resume'>
                <Link href="/resume">
                        <a>Resume</a>
                    </Link>
                </SidebarLink>
                <SidebarLink  onClick={toggle} data-text='Contact'>
                <Link href="/service">
                        <a>Contact</a> 
                    </Link>
                </SidebarLink>
                <SidebarLink  onClick={toggle} data-text='GitHub'>
                <Link href="/service">
                        <a>GitHub</a> 
                    </Link>
                </SidebarLink>
                <SidebarLink  onClick={toggle} data-text='LinkedIn'>
                <Link href="/service">
                        <a>LinkedIn</a> 
                    </Link>
                </SidebarLink>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar