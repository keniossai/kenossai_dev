import React, { Component } from 'react'
import styled from 'styled-components'

export default class Resume extends Component {
	render() {
		return (
			<>
				<div className='transition'></div>
				<div className='transition2'></div>
				<About>
					<AboutInner>
						<AboutTop>
							<div className='my_name'>
								Kenneth <br /> Ossai
							</div>
							<Desc>
								<p>
									I am a Solution-driven Developer, adept at contributing to a
									highly collaborative work environment, finding solutions, and
									determining customer satisfaction. My core competences lies
									with developing consumer-focused web applications using,
									JavaScript, ReactJs, NodeJs, NextJs, Python, and Laravel.
									Built products for application users for over 6 years, meeting
									the highest standards for web/mobile app development, user
									experience, best practices, and speed. Designed and developed
									web applications across multiple APIs, third-party
									integrations, and databases.
								</p>
								<p>
									I&lsquo;ve also been a part of different teams, both on-site
									and remote acting in the lead and member capacities. My vast
									experience has equipped me with the ability to be culturally
									aware of diverse communities, whilst honing both technical and
									soft skills like communication, teamwork and adaptability.
								</p>
							</Desc>
							<a href=''>Download Resume</a>
						</AboutTop>
						<AboutBottom>
							<Experience>
								<div className='stackTitle'>
									<span>Technical Skills</span>
								</div>
								<Stacks>
									<div className='company'>
										<div className='stackName'>Core Stacks</div>
										<ul className='stacks'>
											<li>JavaScript</li>
											<li>React</li>
											<li>Redux</li>
											<li>Context API</li>
											<li>Laravel</li>
											<li>NextJs</li>
											<li>CSS/SASS</li>
											<li>CSS-in-JS</li>
											<li>Firebase</li>
										</ul>
									</div>
									<div className='company'>
										<div className='stackName'>Familiar</div>
										<ul className='stacks'>
											<li>Express</li>
											<li>NodeJs</li>
											<li>Python</li>
											<li>Java</li>
											<li>MySql</li>
											<li>MongoDB</li>
										</ul>
									</div>
								</Stacks>
							</Experience>
							<Experience>
								<div className='stackTitle'>
									<span>Experience</span>
								</div>
								<Stacks>
									<div className='company'>
										<div className='name'>
											Modion Communications <br />
											(Web Application Developer)
										</div>
										<div className='year'>Sept 2021 - Present</div>
										<ul className='stacks'>
											<li>
												Developing 3+ web applications by using responsive UI
												element via React concept for smooth performance,
											</li>
											<li>
												Building user interface code of 7+ web application using
												React.js and JavaScript based on the approved design,
											</li>
											<li>
												Documenting Node.js processes, including database
												schemas, as well as preparing reports,
											</li>
											<li>
												Ensuring Optimal performance of the central database and
												responsiveness to front-end requests,
											</li>
											<li>
												Developed User Interface components and implementing
												them following well-known React.js workflows,
											</li>
											<li>
												Developed high-performance Interface by writing
												testable, reusable, and efficient code,
											</li>
											<li>
												Built high-performance, reusable and adaptive UI
												components,
											</li>
											<li>
												Implemented flexible User Interface with Frontend
												technology such as HTML, CSS/SASS, and JavaScript
												application frameworks.
											</li>
										</ul>
									</div>
									<div className='company'>
										<div className='name'>Full-stack Developer</div>
										<div className='year'>June 2020 - Aug 2021</div>
										<ul className='stacks'>
											<li>
												Determined the design and layouts for 6 applications
												using HTML, CSS, and JavaScript with 100% accuracy,
											</li>
											<li>
												Collaborated with a team of 4 professionals and design
												the front-end architecture with the UI concept of 10
												websites,{' '}
											</li>
											<li>
												Installed and configured hypertext transfer protocol
												(HTTP) servers and associated operating systems,
											</li>
											<li>
												Created web models or prototypes that include physical,
												interface, logical, or data models,
											</li>
											<li>
												Provided clear and detailed descriptions of website
												specifications such as product features, activities,
												software, communication protocols, programming
												languages, and operating systems software and hardware,
											</li>
											<li>
												Conducted Requirement gathering and Validation as a part
												of collaboration for high profile external web app that
												helped to address important UI/UX parts of the
												system&lsquo;s user interface before the active
												Development Phase,
											</li>
											<li>
												Captured the best development practices in a way of a
												common condign standard team of 3 developers resulting
												in improvement of code stability and shared components
												reusability,
											</li>
											<li>
												Researched, documented and selected alternatives for Web
												Architecture or Technologies,
											</li>
											<li>
												Documented solution architecture for the high-profile
												progress web application standardizing the way of
												development amongst different projects and mitigating
												code duplicity.
											</li>
										</ul>
									</div>
									<div className='company'>
										<div className='name'>
											Key Solutions <br />
											(Senior Web Developer)
										</div>
										<div className='year'>Sept 2021 - Present</div>
										<ul className='stacks'>
											<li>
												Implemented rich user experiences by creating 30+ new
												features utilizing HTML/JS/CSS,
											</li>
											<li>
												Wrote 47 automated tests to raise code quality as part
												of the development process,
											</li>
											<li>
												Utilized and implemented 7+ attractive, responsive, and
												mobile-friendly website contexts and elements,
											</li>
											<li>
												Used JavaScript, HTML, and CSS, to translate User and
												business needs into functional frontend design,
											</li>
											<li>
												Created informative and effective documentation,
												reports, and inline comments on 100% of code/work
												accomplished,
											</li>
											<li>
												Designed, developed, and tested UI for web applications,
											</li>
											<li>
												Evaluated new methodologies and technologies aimed at
												improving the quality, reliability, and performance of
												product development systems and processes.
											</li>
										</ul>
									</div>
								</Stacks>
							</Experience>
						</AboutBottom>
					</AboutInner>
				</About>
			</>
		)
	}
}

const About = styled.div`
	position: relative;
	color: white;
	z-index: 2;
	height: 100%;
	visibility: visible;
`
const AboutInner = styled.div`
	opacity: 1;
`
const AboutTop = styled.div`
	padding: 180px 450px 150px 220px;
	background: #0b0b0f;

	@media screen and (max-width: 768px) {
		padding: 150px 40px 100px;
	}

	.my_name {
		font-family: 'Manrope', sans-serif;
		font-weight: 800;
		font-size: 55px;
		line-height: 1.2;
		margin-bottom: 30px;
		position: relative;

		@media screen and (max-width: 768px) {
			font-size: 30px;
		}
	}

	.my_name::before {
		position: absolute;
		content: '';
		height: 5px;
		width: 40px;
		background: #6935db;
		top: -20px;
		left: -60px;

		@media screen and (max-width: 768px) {
			left: 0;
		}
	}

	a {
		font-weight: 500;
		transition: color 0.2s linear;
	}

	a:hover {
		color: red;
	}
`

const Desc = styled.div`
	margin-top: 20px;
	color: #868f97;
	font-weight: 500;
	line-height: 1.6;
	margin-bottom: 40px;
`
const AboutBottom = styled.div`
	padding: 0 150px 0 250px;

	@media screen and (max-width: 768px) {
		padding: 0 40px;
	}
`

const Experience = styled.div`
	display: flex;

	@media screen and (max-width: 768px) {
		flex-direction: column;
	}

	.stackTitle {
		margin-right: 285px;
		text-transform: capitalize;
		font-weight: 600;
		font-size: 26px;
	}

	.stackTitle span {
		background: linear-gradient(
			0deg,
			rgba(255, 0, 255, 0),
			rgba(255, 0, 255, 0) 16%,
			#6935db 0,
			#6935db 32%,
			rgba(255, 0, 255, 0) 0
		);
		padding: 0.2em 0.1em;
		box-decoration-break: clone;
	}
`
const Stacks = styled.div`
	margin-top: 60px;
	font-size: 14px;

	.company {
		margin-bottom: 50px;
	}

	.stackName {
		font-weight: 600;
		margin-bottom: 20px;
		color: #8d61ec;
	}

	.stacks {
		list-style-type: square;
	}

	.stacks li {
		margin-bottom: 10px;
		line-height: 1.4;
	}

	.company .name {
		font-weight: 600;
		margin-bottom: 20px;
	}
	.company .year {
		color: #8d61ec;
		font-size: 12px;
	}
`
