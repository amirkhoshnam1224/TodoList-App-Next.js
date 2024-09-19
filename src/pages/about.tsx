import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/about.module.css'
import Footer from '../components/Footer'

const About: NextPage = () => {
  
  return (
    <div>
      <Head>
        <title>About | Todo App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" rel="stylesheet"/> 
      </Head>
      <Header openProjects={()=>{}} />
      <main className={`${styles.mainContent} centerContainer`}>
          
          <section className={styles.contentBlock}>
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_checklist__re_2w7v_1_EBpT5tUGgO.png?updatedAt=1636555587766" alt="" />
              <div className={styles.textBlock}>
                <h2>About the project</h2>
                <p>It&apos;s a simple <b>web app</b> project and provide some features to the user manage your projects and tasks.</p>
                <p>It was developed to be part of my <a href="https://patrickrios.github.io">professional portfolio</a>.</p>
              </div>
            </section>

            <section className={styles.contentBlock}>
              <div className={styles.textBlock}>
                <h2>Used techs and tools</h2>
                <p>The main tech behind it is the <a href="https://nextjs.org/">Next.JS</a> framework</p>
                <ul className={styles.textList}>
                  <h3>Some tools used</h3>
                  <li>
                    <a href="https://pt-br.reactjs.org/docs/context.html">
                      Context api
                    </a>
                    <span>- share data between pages and components</span>
                  </li>
                  <li>
                    <a href="https://github.com/css-modules/css-modules">
                      CSS Modules
                    </a>
                    <span>- use stylesheet as a object in JS/TS code</span>
                  </li>
                  <li>
                    <a href="https://www.emailjs.com/">
                      EmailJS
                    </a>
                    <span>- service used to send email to author</span>
                  </li>
                  <li>
                    <a href="https://www.framer.com/motion/">
                      Framer Motion
                    </a>
                    <span>- animations and transitions</span>
                  </li>
                  <li>
                    <a href="https://react-hook-form.com/">
                      React Hook Form
                    </a>
                    <span>- handle form inputs and validations</span>
                  </li>
                  <li>
                    <a href="https://www.figma.com/">
                      FIGMA
                    </a>
                    <span>- UI Design project editor and prototyping</span>
                  </li>
                </ul>
              </div>
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_web_tech_xbG0aEh3UfI.png?updatedAt=1636583164512" alt="" />
            </section>

      </main>
      <Footer/>
    </div>
  )
}

export default About
