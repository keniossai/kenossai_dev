import React, { Component } from 'react'
import { FindMe, Title, Topic, SocialBox, Content, Item, User, Name } from './FindmeStyles'
import { ImGithub, ImTwitter, ImLinkedin2 } from 'react-icons/im'
import { SiInstagram } from 'react-icons/si'
import { FaDev } from 'react-icons/fa'

export default class Find extends Component {
  render() {
    return (
      <FindMe>
        <Title>
          Find <br /> Me
        </Title>
        <Topic>Also write something</Topic>
        <SocialBox>
          <a href="https://github.com/keniossai" className="gitHub">
            <Content>
              <ImGithub className='gitIcon' />
              <Item>
                <Name>Github</Name>
                <User>/keniossai</User>
              </Item>
            </Content>
          </a>
          <a href="https://twitter.com/keniossai" className="twitter">
            <Content>
              <ImTwitter className='gitIcon' />
              <Item>
                <Name>Twitter</Name>
                <User>/keniossai</User>
              </Item>
            </Content>
          </a>
          <a href="https://stackblitz.com/@keniossai" className="codePen">
            <Content>
              <svg viewBox="0 0 28 28"  className="StackBlitz"><path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.671-10.227z"></path></svg>
              <Item>
                <Name>StackBlitz</Name>
                <User>/keniossai</User>
              </Item>
            </Content>
          </a>
          <a href="" className="Dev">
            <Content>
              <FaDev className='gitIcon' />
              <Item>
                <Name>Dev</Name>
                <User>/kennethossai</User>
              </Item>
            </Content>
          </a>
          <a href="https://www.linkedin.com/in/kenneth-ossai/" className="linkedIn">
            <Content>
              <ImLinkedin2 className='gitIcon' />
              <Item>
                <Name>LinkedIn</Name>
                <User>/kenneth-ossai</User>
              </Item>
            </Content>
          </a>
          <a href="https://www.instagram.com/keniossai/" className="instagram">
            <Content>
              <SiInstagram className='gitIcon' />
              <Item>
                <Name>Instagram</Name>
                <User>/keniossai</User>
              </Item>
            </Content>
          </a>
        </SocialBox>
      </FindMe>
    )
  }
}
