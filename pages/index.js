import Head from 'next/head'
import HomePage from '../components/Home/HomePage'
import Drift from "react-driftjs";
// import HomePage from './HomePage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ken Ossai : Portfolio</title>
        <meta name="description" content="Fullstack Developer: JavaScript, React, Laravel, NextJs, Git,  " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <div className="page">
      <HomePage />
      <Drift appId="km5b4vdi2ne6" style={{
    bottom: "100px",
  }} attributes={{ email: "kenossai1@gmail.com", company: "Dev Inc" }} />;
     </div>
    </>
  )
}
