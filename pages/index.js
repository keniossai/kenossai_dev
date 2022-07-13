import Head from 'next/head'
import HomePage from '../components/Home/HomePage'
// import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ken Ossai : Portfolio</title>
        <meta name="description" content="Fullstack Developer: JavaScript, React, Laravel, NextJs, NodeJs, Git,  " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className="page">
      <HomePage />
     </div>
    </>
  )
}
