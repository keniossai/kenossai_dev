import { Nav, Links, MobileIcon, NavItem, NavMenu} from './Headerstyles'
import {FaBars} from 'react-icons/fa'
import Link from 'next/link'
import AnimatedText from 'react-animated-text-content'

const  Header = ({toggle}) => {
  
    return (
      <Nav>
              <Link href="/">
                <Links>
                    <span className='svg'>K</span> <span className='ossai'>OSSAI</span>
                </Links>
              </Link>
                <MobileIcon onClick={toggle}>
                    <FaBars className='icon' />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <Link className='anchor' href='/resume'>Resume</Link>
                    </NavItem>
                    <NavItem>
                        <Link href='/service'>Contact</Link>
                    </NavItem>
                    <NavItem>
                        <Link href='https://github.com/keniossai'>GitHub</Link>
                    </NavItem>
                    <NavItem>
                        <Link href='https://www.linkedin.com/in/kenneth-ossai/'>LinkedIn</Link>
                    </NavItem>
                </NavMenu>
      </Nav>
    )
}

export default Header
