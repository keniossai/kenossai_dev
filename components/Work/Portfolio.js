import React, { Component, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
// import Link from 'next/link'
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
                <a href="https://insurancemeetstech.com" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="red">
                        <span>Development</span>
                        <h3 className='bold'>Insurance Meets Tech</h3>
                        <Image src="/imt.png" width={700} height={500} alt='Insurance Meets Tech' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://insidemainland.com/" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="brown">
                        <span>Development</span>
                        <h3 className='bold'>Inside Mainland</h3>
                        <Image src="/inside.png" width={700} height={500} borderRadius={10} alt='Inside Mainland' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
            <a href="https://lagosemploymentsummit.com/" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="white">
                        <span>Development</span>
                        <h3 className='bold'>Lagos State Employment Summit</h3>
                        <Image src="/lsetf.png" width={700} height={500} alt='Lagos Employment Summit' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://mediacomms.africa/" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="ash">
                        <span>Development</span>
                        <h3 className='bold'>MediaComms Africa</h3>
                        <Image src="/med.png" width={700} height={500} alt='MediaComms Africa' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://www.ienergy-africa.com/" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="light">
                        <span>Development</span>
                        <h3 className='bold'>iEnergy Africa</h3>
                        <Image src="/energy.png" width={700} height={500} alt='iEnergy Africa' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://afex-4z84on244-keniossai.vercel.app/welcome" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="green">
                        <span>Development</span>
                        <h3 className='bold'>Afex Dashboard</h3>
                        <Image src="/afex.png" width={700} height={500} alt='iEnergy Africa' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://www.figma.com/proto/vbcHJj7k0HD0My9zYQ1KyH/First-Standard-Insurance-Brokers?page-id=0%3A1&node-id=1%3A2&viewport=261%2C225%2C0.03&scaling=scale-down-width&starting-point-node-id=1%3A2" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="blue">
                        <span>UI Design</span>
                        <h3 className='bold'>First Standard Insurance Broker</h3>
                        <Image src="/fsib.png" width={700} height={500} alt='iEnergy Africa' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://www.figma.com/proto/Menz1msiJgPH3FwGkA9QfW/L'Oreal-Lotion?page-id=0%3A1&node-id=1%3A3&viewport=482%2C419%2C0.25&scaling=scale-down&starting-point-node-id=1%3A3" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="purple">
                        <span>UI Design</span>
                        <h3 className='bold'>LOreal Lotion Mobile Application</h3>
                        <Image src="/loreal.png" width={700} height={500} alt='iEnergy Africa' />
                    </Card>
                </a>
            </FeatureBody>
            <FeatureBody>
                <a href="https://www.figma.com/proto/n8LUiOA595wLjQLa5YjDnJ/Ecommerce-Shopping?page-id=0%3A1&node-id=1%3A65&viewport=508%2C680%2C0.46&scaling=scale-down-width" rel="noreferrer" target="_blank" className='feature-item'>
                    <Card className="ecom">
                        <span>UI Design</span>
                        <h3 className='bold'>Basket Ecommerce Web Application</h3>
                        <Image src="/ecom.png" width={700} height={500} alt='iEnergy Africa' />
                    </Card>
                </a>
            </FeatureBody>
          </Boxes>
         
      </LandingWork>
    )
  
}

export default Portfolio

const ButtonContent = styled.div`
    position: relative;
    z-index: 1;
`

const More = styled.button`
    outline: none;
    cursor: pointer;
    padding: 15px 30px;
    background: transparent;
    position: absolute;
    right: 17.5%;
    text-transform: none;
    font-weight: 500;
    font-family: "Inter",sans-serif;
    bottom: 6.8%;
    font-size: 16px;
    color: #2a97ff;
    border: 1px solid #2a97ff;
    transition: color .2s linear;
    /* padding-top: 30px; */

    :hover{
        color: #fff;
    }
    ::after{
        content: "";
        position: absolute;
        width: 0;
        top: 0;
        bottom: 0;
        left: unset;
        right: 0;
        height: 100%;
        transition: all .2s linear;
        background: #2a97ff;
    }
    
    :hover::after{
        width: 100%;
        left: 0;
        right: unset;
    }

    @media screen and (max-width: 986px){
        position: relative;
        left: unset;
        right: unset;
        display: block;
        margin: 60px auto 0;
    }
`

const Card = styled.div`
    padding: 30px;
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
    padding-top: 10px;

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
    /* -webkit-transform: none; */
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
