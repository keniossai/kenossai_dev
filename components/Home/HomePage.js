import React, { Component } from 'react'
import { Landing, Section, Sub, LandingMain, TextCon, LinkDiv, Link, Dash, SideScroll, Project, LandingMain2 } from './HomeStyles'
import Portfolio from '../Work/Portfolio'
import Find from '../Work/Findme/Find'
import Contact from '../Contact/Contact'

export default class HomePage extends Component {
  render() {
    return (
      <Landing>
        <Section>
            <Sub>
                Fullstack Developer
            </Sub>
            <LandingMain>
                <TextCon>
                    <span className='text'>I</span>
                    <span className='text'> </span>
                    <span className='text'>a</span>
                    <span className='text'>m</span> 
                    <span className='text'> </span>
                    <span className='text'>a</span>
                    <span className='text'>l</span>
                    <span className='text'>w</span>
                    <span className='text'>a</span>
                    <span className='text'>y</span>
                    <span className='text'>s</span>
                    <span className='text'> </span>
                    <span className='text'>d</span>
                    <span className='text'>e</span>
                    <span className='text'>l</span>
                    <span className='text'>i</span>
                    <span className='text'>g</span>
                    <span className='text'>h</span>
                    <span className='text'>t</span>
                    <span className='text'>e</span>
                    <span className='text'>d</span>
                    <span className='text'> </span>
                    <br />
                    <span className='text'>w</span>
                    <span className='text'>i</span>
                    <span className='text'>t</span>
                    <span className='text'>h</span>
                    <span className='text'> </span>
                    <span className='text'>m</span>
                    <span className='text'>y</span>
                    <span className='text'> </span>
                    <span className='text'>c</span>
                    <span className='text'>r</span>
                    <span className='text'>e</span>
                    <span className='text'>a</span>
                    <span className='text'>t</span>
                    <span className='text'>i</span>
                    <span className='text'>v</span>
                    <span className='text'>i</span>
                    <span className='text'>t</span>
                    <span className='text'>y.</span>
                </TextCon>
            </LandingMain>
            <LandingMain2>
            I am always delighted 
            <br />
            with my creativity.
            </LandingMain2>
            <LinkDiv>
                <Link>
                    About Me
                </Link>
                <Dash>-</Dash>
                <Project>My Project</Project>
            </LinkDiv>
            <SideScroll>
                <svg width="12" height="109"><g fill="none"><path d="M2.072 35.648l1.072 1.68c-.832.432-1.184.896-1.184 1.552 0 .608.432 1.072 1.024 1.072 1.952 0 1.696-4.784 5.024-4.784 2.192 0 3.488 1.44 3.488 3.584 0 2.032-1.424 3.504-3.136 3.856l-1.056-1.68c1.2-.336 2.272-1.008 2.272-2.224 0-.864-.432-1.456-1.456-1.456-1.856 0-1.488 4.688-5.04 4.688-1.696 0-3.04-1.296-3.04-3.056 0-1.488.736-2.624 2.032-3.232zm6.4-7.63l.72-1.777c1.52.608 2.304 1.872 2.304 3.664 0 2.624-1.888 3.936-4.16 3.936-2.272 0-4.16-1.312-4.16-3.936 0-1.792.784-3.056 2.304-3.664l.72 1.776c-.848.416-1.328.992-1.328 1.888 0 1.248 1.04 1.856 2.464 1.856S9.8 31.153 9.8 29.905c0-.896-.48-1.472-1.328-1.888zm2.896-5.183v1.984H3.304v-1.984h1.312c-.944-.576-1.44-1.472-1.44-2.384 0-.352.064-.656.16-.976l1.84.368c-.144.24-.224.496-.224.832 0 1.152.944 2.16 3.552 2.16h2.864zm-4.032-4.03c-2.336 0-4.16-1.504-4.16-4.096S5 10.613 7.336 10.613c2.336 0 4.16 1.504 4.16 4.096s-1.824 4.096-4.16 4.096zm0-2.08c1.328 0 2.464-.736 2.464-2.016s-1.136-2.016-2.464-2.016-2.464.736-2.464 2.016 1.136 2.016 2.464 2.016zM.04 8.919V6.935h11.328v1.984H.04zm0-3.743V3.192h11.328v1.984H.04zM6.09 65.91h1v41.18h-1z" className="fill" fill="#fff"></path><path d="M7.008 107.3l-.712.006.354-.364.358.359zm1.87-2.649l.717.698-2.936 3.017-3.013-3.012.708-.708 2.296 2.296 2.229-2.29z" className="fill" fill="#fff"></path></g></svg>
            </SideScroll>
        </Section>
        <Portfolio />
        <Find />
        <Contact />
      </Landing>
    )
  }
}
