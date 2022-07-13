import React from 'react'
import { FooterSec, FooterTop, Message, Links, Linkd, LinkLi, Copyright } from './FooterStyle'
import Link from 'next/link'

export const Footer = () => {
  return (
    <FooterSec>
        <hr />
        <FooterTop>
            <Message>Say Hello</Message>
            <Links>
                <Linkd>
                    <p>
                        <a data-text="kenossai1@gmail.com" href="mailto:kenossai1@gmail.com">
                            kenossai1@gmail.com
                        </a>
                    </p>
                </Linkd>
                <LinkLi className='link'>
                    <p><Link data-text='Resume' href="/resume">Resume</Link></p>
                    <p><Link data-text="Contact" href="/service">Contact</Link></p>
                </LinkLi>
            </Links>
        </FooterTop>
        <Copyright>&copy; Kenneth Ossai 2022</Copyright>
    </FooterSec>
  )
}
