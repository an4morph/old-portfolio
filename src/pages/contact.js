import React from 'react'
import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle'
import Button from '../components/Button'
import styles from './styles/contact.module.css'


const ContactPage = () => (
  <Layout>
    <div className="page">
      <SectionTitle
        title="Contact"
        description="Say hello!"
      />
      <div className={styles.row}>
        <form className={styles.form}>
          <div className={styles.title}>You can write me a letter right from here. Enter your name and e-mail for feedback</div>
          <label htmlFor="name">
              Name
            <input id="name" />
          </label>
          <label htmlFor="email">
              E-mail
            <input id="email" />
          </label>
          <label htmlFor="subject">
              Subject
            <input id="subject" />
          </label>
          <label htmlFor="text">
              Text
            <textarea id="text" />
          </label>
          <Button>Send</Button>
        </form>

        <div className={styles.contactInfo}>
          <div className={styles.text}>
            <div className={styles.textItem}>
              <i className="fa fa-globe" />
              Kyrgyzstan, Bishkek
            </div>
            <div className={styles.textItem}>
              <i className="fa fa-envelope" />
              avgustin456@gmail.com
            </div>
            <div className={styles.textItem}>
              <i className="fa fa-skype" />
              polina.antonova31
            </div>
          </div>
          <div className={styles.btns}>
            <Button
              link="https://t.me/an4morph"
              external
              className="longSocial"
            >
              <i className="fa fa-telegram" />
            Chat with Telegram
            </Button>
            <Button
              link="https://github.com/an4morph"
              external
              className="longSocial"
            >
              <i className="fa fa-github" />
            Github account
            </Button>
            <Button
              link="https://www.linkedin.com/in/polina-antonova-b08436161/"
              external
              className="longSocial"
            >
              <i className="fa fa-linkedin" />
            Linkedin profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
