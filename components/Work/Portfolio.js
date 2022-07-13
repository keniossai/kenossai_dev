import React, { Component } from 'react'
import Image from 'next/image'
import { LandingWork, FadeInTitle, Title, Boxes, Links, BlueContainer, RedContainer, DarkblueContainer, BoxContent, BoxTitle, BoxTitleLink, BoxtitleSub, LinkDiv, BoxImage, More, ButtonContent, } from './ProjectStyles'
import Link from 'next/link'

export default class Portfolio extends Component {

  
  render() {
    return (
      <LandingWork>
          <FadeInTitle>
              <Title>
                  My
                  <br />
                  Projects -
              </Title>
          </FadeInTitle>
          <Boxes>
            <LinkDiv>
              <Links>
                <BoxContent>
                <BoxTitle>
                    iEnergy Africa
                  </BoxTitle>
                    <BoxtitleSub>
                    iEnergy is Africa’s authoritative energy news site.
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project
                      </BoxTitleLink>
                  
                </BoxContent>
                <Link href="https://www.ienergy-africa.com/" target="_blank" rel="noopener noreferrer">
                  <BoxImage>
                    <Image  src="/energy.png" width={700} height={400} alt='iEnergy Africa' />
                  </BoxImage>
                </Link> 
              </Links>
            </LinkDiv>
            <LinkDiv>
              <BlueContainer>
                <BoxContent>
                  <BoxTitle>
                    LSETF
                  </BoxTitle>
                    <BoxtitleSub>
                    Sustainable Job Creation, Collective Action and Prosperity for All 
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project
                      </BoxTitleLink>
                </BoxContent> 
                <Link href="https://lagosemploymentsummit.com/" target="_blank" rel="noopener noreferrer">
                  <BoxImage>
                    <Image src="/lsetf.png" width={700} height={400} alt='Lagos Summit 2022' />
                  </BoxImage>
                </Link>
              </BlueContainer>
            </LinkDiv>
            <LinkDiv>
              <DarkblueContainer>
                <BoxContent>
                  <BoxTitle>
                    Insurance Meets Tech
                  </BoxTitle>
                    <BoxtitleSub>
                    Disrupting the customer acquisition journey.
                    </BoxtitleSub>
                      <BoxTitleLink>
                        View Project 
                      </BoxTitleLink>
                </BoxContent>
                <Link href="https://insurancemeetstech.com/" target="_blank" rel="noopener noreferrer">
                  <BoxImage>
                    <Image src="/imt.png" width={700} height={400} alt='Insurance Meets Tech' />
                  </BoxImage>
                </Link> 
              </DarkblueContainer>
            </LinkDiv>
            <LinkDiv>
              <RedContainer>
                <BoxContent>
                <BoxTitle>
                    MediaComms Africa
                  </BoxTitle>
                    <BoxtitleSub>
                    Community website for democratic participation in Africa. 
                  </BoxtitleSub>
                    <BoxTitleLink>
                      View Project 
                    </BoxTitleLink>
                </BoxContent>
                <Link href="https://mediacomms.africa/" target="_blank" rel="noopener noreferrer">
                  <BoxImage>
                  <Image src="/med.png" width={700} height={400} alt='Insurance Meets Tech' />
                  </BoxImage>
                </Link> 
              </RedContainer>
            </LinkDiv>
          </Boxes>
          <Link href="https://github.com/keniossai">
            <More>
              <ButtonContent>
                View more projects
              </ButtonContent>
            </More>
          </Link>
      </LandingWork>
    )
  }
}
