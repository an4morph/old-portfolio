import React from "react"
import styles from './styles/resume.module.css'
import Layout from '../components/Layout'
import SectionTitle from '../components/SectionTitle'
import BlockTitle from '../components/BlockTitle'
import Timeline from '../components/Timeline'
import Skills from '../components/Skills'
import SEO from '../components/SEO'

const jobs = [
  {
    id: 1,
    date: 'October 2018',
    company: 'VEON',
    position: 'Frontend Developer',
    description: `Department of digital development, mobile operator Beeline, SCRUM team.
    Created startup project - AYA.kg. This is a client booking system for beauty masters.`,
  },
  {
    id: 2,
    date: 'April 2018',
    company: 'Chronos',
    position: 'Frontend Developer',
    description: `The project was created for the training of astrologers.
    We worked on tools for creating natal maps and receiving feedback from the user.
    Got skills in working with canvas.js, mathematical formulas and testing complex systems.`,
  },
  {
    id: 3,
    date: 'June 2017',
    company: 'Maddevs',
    position: 'Junior Frontend Developer',
    description: `I gained experience working with large international projects. 
    Participated in the creation restaurant reservation platform, billing, and merchant system 
    for it. Also created an admin panel for an application based on Google Glasses`,
  },
]
const education = [
  {
    id: 1,
    date: '2015-2018',
    company: 'Bishkek, Kyrgyzstan',
    position: 'KGTU',
    description: 'Kyrgyz State Technical University, faculty of Information Technology, Software Engineering',
  },
]
const skills = [
  {
    id: 1,
    name: 'JavaScript',
    percent: 85,
  },
  {
    id: 2,
    name: 'HTML',
    percent: 100,
  },
  {
    id: 3,
    name: 'CSS',
    percent: 100,
  },
  {
    id: 4,
    name: 'React',
    percent: 90,
  },
  {
    id: 5,
    name: 'Redux',
    percent: 100,
  },
  {
    id: 6,
    name: 'Bootstrap',
    percent: 95,
  },
  {
    id: 7,
    name: 'JQuery',
    percent: 95,
  },
  {
    id: 8,
    name: 'Svelte',
    percent: 40,
  },
  {
    id: 9,
    name: 'Vue',
    percent: 45,
  },
  {
    id: 10,
    name: 'Webpack',
    percent: 90,
  },
  {
    id: 11,
    name: 'Node.js',
    percent: 30,
  },
  {
    id: 12,
    name: 'Canvas',
    percent: 80,
  },
]

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
      <div className="page">
        <SectionTitle
          title="Resume"
          description="2+ year expierence"
        />
        <div className={styles.row}>
          <div className={styles.leftCol}>
            <BlockTitle
              title="Expierence"
            />
            <Timeline items={jobs} className={styles.timeline} />
            <BlockTitle
              title="Education"
            />
            <Timeline items={education} className={styles.timeline} />
          </div>
          <div className={styles.rightCol}>
            <BlockTitle
              title="Skills"
            />
            <Skills items={skills} className={styles.skills} />
          </div>
        </div>
      </div>
    </Layout>
)

export default ResumePage
