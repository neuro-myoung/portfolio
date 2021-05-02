import Head from 'next/head'
import About from '../components/about'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
      <title>Mike Young | Home</title>
    </Head>
      <div className={styles.content}>
        <div className="intro">
          <h1>Michael Young</h1>
          <h2>Electrophysiologist. Programmer. Film Fan.</h2>
        </div>
        <div className={styles.callToAction}>
          <button className={styles.buttonPrimary}>Read My CV</button>
          <button className={styles.buttonSecondary}>Contact Me</button>
        </div>
      </div>
      <About />
    </>
  )
}
