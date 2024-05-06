import React from 'react'
import { AboutContainer, ImageBg, AboutContent, AboutH1, AboutP } from './AboutElements'
// import fidelis from '../../images/fidelis.jpg';
import fide from '../../images/fide.jpg';


const AboutSection = () => {

    return (
        <AboutContainer id="about" className="about-container">
            <div>
                <ImageBg src={fide} alt="Your image" />
            </div>
            <AboutContent>
                <AboutH1>ABOUT ME</AboutH1>
                <AboutP>
                Hi there, I'm <strong>Fidelis Takyi Mensah</strong>, a passionate Software Engineer with a strong background in solving real-world industry problems through innovative web development. I'm dedicated to creating web experiences that are not only visually appealing but also highly functional and user-friendly.
                </AboutP>
            </AboutContent>
        </AboutContainer>
    )
}

export default AboutSection
