import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
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
            <FeatureBody>
                <a href="" className='feature-item'>
                    <Card className="red">
                        <span>UI Design</span>
                        <p className='bold'>TimePad Time Tracker</p>
                        <Image src="/mobile.png" width={700} height={550} alt='Insurance Meets Tech' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="" className='feature-item'>
                    <Card className="brown">
                        <span>Title</span>
                        <Image src="/med.png" width={700} height={550} alt='Insurance Meets Tech' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="" className='feature-item'>
                    <Card className="white">
                        <span>Title</span>
                        
                        <Image src="/med.png" width={700} height={550} alt='Insurance Meets Tech' />
                    </Card>
                </a>
            </FeatureBody>
          </Boxes>
      </LandingWork>
    )
  
}

export default Portfolio

const Card = styled.div`
    padding: 30px;
    /* box-shadow: 0 0 20px -13px white; */
    border-radius: 10px;

    .bold{
        font-weight: 600 !important;
        color: #000;
        font-size: 1rem;
        text-align: left;
        color: white;
    }

    span{
        color: white;
        font-family: Poppins,sans-serif;
        font-weight: 500 !important;
    }

    :hover{
        box-shadow: 0 0 20px -13px white;
    }
`

const FeatureBody = styled.div`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    padding-bottom: 10px;

    @media screen and (min-width: 768px){
        -webkit-box-flex: 0;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
    }

    .feature-item{
        color: #007bff;
        background-color: transparent;
    }

    
    
`

 const LandingWork = styled.section`
    background: #131419;
    padding: 90px 60px;
    position: relative;

    @media screen and (max-width: 350px){
        padding: 90px 20px;
    }
`
 const FadeInTitle = styled.div`
    opacity: 1;
    -webkit-transform: none;
    visibility: visible;
    transition: opacity .6s ease-out,transform 1.2s ease-out,-webkit-transform 1.2s ease-out;
    will-change: opacity,visibility;
`

 const Title = styled.div`
    font-weight: 800;
    font-size: 55px;
    color: #fff;

    @media screen and (max-width: 522px){
        font-size: 45px;
    }
`

 const Boxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    margin-top: 50px;

    @media screen and (max-width: 600px){
        grid-template-columns: repeat(auto-fit,minmax(260px,1fr));
    }

`
