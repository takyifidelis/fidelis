import React from 'react'
import { AboutContainer, ImageBg, AboutContent, AboutH1, AboutP } from './AboutElements'
import fidelis from '../../images/fidelis.jpg';


const AboutSection = () => {

    return (
        <AboutContainer id="about" className="about-container">
            <div>
                <ImageBg src={fidelis} alt="Your image" />
            </div>
            <AboutContent>
                <AboutH1>ABOUT ME</AboutH1>
                <AboutP>
                    I am Fidelis Takyi Mensah, I am a Graduate Electrical and Electronic engineer with demonstrated experience in solving real world industry problems, i completed basic school at Navy Basic School in the year 2013 and proceeded to GSTS that same year. I was a General Science student and completed in May 2016. I was admitted in University of Energy and Natural Resources in August 2017 to read BSc Electrical and Electronic Engineering.</AboutP>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutSection
