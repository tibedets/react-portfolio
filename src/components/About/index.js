import { useEffect, useState } from 'react'
import {
  faPython,
  faCss3,
  faGitAlt,
  faAws,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          I am an experienced sales manager with a history in Information Technology,
          sales, services, and customer service. I am currently seeking employment 
          in the Data Science industry where I can combine my knowledge of sales,
          analytics, technology, and management to good use. 
          </p>
          <p>
          What else would someone that is good with both technology and people, 
          has a natural analytical mind, and an ability to accidentally remember 
          numbers be good at? 
          I have used Excel, SQL, R, Python, PowerBI, and QlikView for my data projects. 
          I am available for:
          </p>
          <p align="LEFT">
          <ul>Providing expertise in data storage structures, data mining, and data cleansing <br />
          Translating numbers and facts to inform strategic business decisions<br />
          Analyzing sales figures, market research, logistics, or transport data<br />
          Creating and following processes to keep data confidentiality<br />
          Coming up with solutions to costly business problems<br />
          </ul>
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#FFD43B" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#FF9900" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
