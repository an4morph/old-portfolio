import React from 'react'
import Layout from '../../components/Layout'
import SectionTitle from '../../components/SectionTitle'
import PortfolioItem from '../../components/PortfolioItem'
import ItekaImg from '../../images/itk/logo.svg'
import ChronosImg from '../../images/chr/logo.png'
import AyaImg from '../../images/aya/logo.svg'

const data = [
  {
    id: 1,
    link: '/aya',
    title: 'AYA - catalog of beauty masters for clients',
    alt: 'Aya.kg logo',
    imgUrl: AyaImg,
    description: `Aya - is a startup project created with the support 
    of VEON holding. It contains a b2b mobile application and a web 
    application designed specifically for customers.`,
  },
  {
    id: 2,
    link: '/chronos',
    title: 'Chronos.mg',
    alt: 'Chronos logo',
    imgUrl: ChronosImg,
    description: 'CHRONOS - system for astrologers',
  },
  {
    id: 3,
    link: '/iteka',
    title: 'i-teka',
    alt: 'iteka',
    imgUrl: ItekaImg,
    description: 'ITEKA - pharmacy referral service',
  },
]

const PortfolioPage = () => (
  <Layout>
    <div className="page">
      <SectionTitle
        title="Portfolio"
        description="My works"
      />
      {
        data.map(item => (
          <PortfolioItem
            key={item.id}
            {...item}
          />
        ))
      }
    </div>
  </Layout>
)

export default PortfolioPage
