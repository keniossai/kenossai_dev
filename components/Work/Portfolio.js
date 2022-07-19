import React, { Component, useEffect } from 'react'
import Image from 'next/image'
import { LandingWork, FadeInTitle, Title, Boxes, Links, BlueContainer, RedContainer, DarkblueContainer, BoxContent, BoxTitle, BoxTitleLink, BoxtitleSub, LinkDiv, BoxImage, More, ButtonContent, } from './ProjectStyles'
import Link from 'next/link'
import Aos from 'aos'
import "aos/dist/aos.css"

const Portfolio = () => {
  
  
    useEffect(() => {
      Aos.init({
        disable: false, 
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99,
        duration: 3000,

      });
    }, [])
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
            <LinkDiv data-aos="slide-right">
              <Links >
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
            <LinkDiv data-aos="slide-left">
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
            <LinkDiv data-aos="slide-down">
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
            <LinkDiv className='red-container' data-aos="slide-up">
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
          <Link href="/projects">
            <More>
              <ButtonContent>
                View more projects
              </ButtonContent>
            </More>
          </Link>
      </LandingWork>
    )
  
}

export default Portfolio