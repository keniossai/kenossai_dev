import React, {useEffect} from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Aos from 'aos'
import "aos/dist/aos.css"


function MoreProjects (){
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
    return(
        <>
            <More>
                <h1>My Projects</h1>
                <ProjectPage>
                    <ProjectCard data-aos="slide-left">
                        <ImageWrapper>
                            <ImgContent></ImgContent>    
                                <Image className="work-image" src="/energy.png" width={500} height={300} alt='iEnergy Africa' />
                        </ImageWrapper>
                        <ProjectCardContent>
                            <h3>Red Onion Website</h3>
                            <p>This Menu Item Order Restaurant Website with Next.js, React.js with Tailwind CSS </p>
                            <ProjectCardTag>
                                <span className="next">Next</span>
                                <span className="react">React</span>
                                <span className="tailwind">Tailwind</span>
                                <span className="axios">Axios</span>
                                <span className="redux">Redux</span>
                                <span className="paystack">Paystack</span>
                            </ProjectCardTag>
                            <ProjectLink>
                                <a data-text='Source Code' href="">Source Code</a>
                                <a data-text='Live Demo' href="">Live Demo</a>
                            </ProjectLink>
                        </ProjectCardContent>
                    </ProjectCard>
                    <ProjectCard data-aos="slide-up">
                        <ImageWrapper>
                            <ImgContent></ImgContent>    
                                <Image className="work-image" src="/energy.png" width={500} height={300} alt='iEnergy Africa' />
                        </ImageWrapper>
                        <ProjectCardContent>
                            <h3>Red Onion Website</h3>
                            <p>This Menu Item Order Restaurant Website with Next.js, React.js with Tailwind CSS </p>
                            <ProjectCardTag>
                                <span className="next">Next</span>
                                <span className="react">React</span>
                                <span className="tailwind">Tailwind</span>
                                <span className="axios">Axios</span>
                                <span className="redux">Redux</span>
                                <span className="paystack">Paystack</span>
                            </ProjectCardTag>
                            <ProjectLink>
                                <a data-text='Source Code' href="">Source Code</a>
                                <a data-text='Live Demo' href="">Live Demo</a>
                            </ProjectLink>
                        </ProjectCardContent>
                    </ProjectCard>
                    <ProjectCard data-aos="slide-right">
                        <ImageWrapper>
                            <ImgContent></ImgContent>    
                                <Image className="work-image" src="/energy.png" width={500} height={300} alt='iEnergy Africa' />
                        </ImageWrapper>
                        <ProjectCardContent>
                            <h3>Red Onion Website</h3>
                            <p>This Menu Item Order Restaurant Website with Next.js, React.js with Tailwind CSS </p>
                            <ProjectCardTag>
                                <span className="next">Next</span>
                                <span className="react">React</span>
                                <span className="tailwind">Tailwind</span>
                                <span className="axios">Axios</span>
                                <span className="redux">Redux</span>
                                <span className="paystack">Paystack</span>
                            </ProjectCardTag>
                            <ProjectLink>
                                <a data-text='Source Code' href="">Source Code</a>
                                <a data-text='Live Demo' href="">Live Demo</a>
                            </ProjectLink>
                        </ProjectCardContent>
                    </ProjectCard>
                    
                </ProjectPage>
            </More>
        </>
    )
}

export default MoreProjects

const More = styled.main`
    padding: 2rem;
    color: var(--text-color);
    -moz-box-flex: 1;
    height: 100%;
    /* overflow-y: auto; */
    
    h1{
        color: #fff;
        text-align: center;
        margin-top: 80px;
    }
`

const ProjectPage = styled.div`
    margin: 1.5rem 0;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(250px,1fr));
    gap: 1.5rem;
    margin-top: 150px;
`

const ProjectCard = styled.div`
    background: #1d2226;
    display: flex;
    -moz-box-orient: vertical;
    -moz-box-direction: normal;
    flex-direction: column;
    border-radius: 20px;
    cursor: pointer;
`

const ProjectCardContent = styled.div`
    padding: 1rem;
    border-radius: 0 0 20px 20px;
    color: #fff;
`

const ImageWrapper = styled.div`
    display: inline-block;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    margin: 0px;

.work-image{
    position: absolute;
    inset: 0px;
    box-sizing: border-box;
    padding: 0px;
    border: medium none;
    margin: auto;
    display: block;
    width: 0px;
    height: 0px;
    min-width: 100%;
    max-width: 100%;
    min-height: 100%;
    max-height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
`

const ImgContent = styled.div`
    box-sizing: border-box;
    display: block;
    max-width: 100%;

`
const ProjectCardTag = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: .5rem 0 1rem;

    span{
        margin: .5rem .5rem 0 0;
        padding: .2rem .5rem;
        border-radius: 20px;
        font-size: .75rem;
        transition: all .2s;
    }

    .next{
        border: 2px solid #0070f3;
    }
    .paystack{
        border: 2px solid #0070f3;
    }
    .react{
        border: .1rem solid #439eee;
    }
    .tailwind{
        border: .1rem solid #a71682;
    }
    .axios{
        border: .1rem solid #61fba1;
    }
    .redux{
        border: .1rem solid #764abc;
    }
`
const ProjectLink = styled.div`
    display: flex;
    gap: 1rem;

    a{
        padding: .2rem 0;
        font-size: .9rem;
        letter-spacing: 0;
        cursor: pointer;
        color: gray;
        text-decoration: none;
        position: relative;
    }

    a::after{
        color: #fff;
        position: absolute;
        overflow: hidden;
        content: attr(data-text);
        background-color: transparent;
        width: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        -webkit-transition: width .2s linear;
        transition: width .2s linear;
    }

    a:hover{
        text-decoration: underline;
    }
`