import React from 'react'
import fidelis from '../../images/fidelis.jpg';
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { LandingPageSectionContainer, ImageBg, LandingPageSectionContent, LandingPageSectionH1, LandingPageSectionP, Socials, SocialsItem } from './IntroElements';

function IntroSection() {
    return (
        <>
            <LandingPageSectionContainer id="home">
                <div>
                    <ImageBg src={fidelis} alt="Image" />
                </div>

                <LandingPageSectionContent>
                    <LandingPageSectionH1>I'm Fidelis</LandingPageSectionH1>
                    <LandingPageSectionP>What you do </LandingPageSectionP>
                    <Socials>
                        <SocialsItem target="_blank" href='https://www.linkedin.com/in/fidelis-mensah-3b13291a3/'><FaLinkedin /></SocialsItem>
                        <SocialsItem target="_blank" href='https://github.com/takyifidelis/'><FaGithub /></SocialsItem>
                        <SocialsItem target="_blank" href='https://twitter.com/fidelistakyi?s=08/'><FaTwitter /></SocialsItem>
                        <SocialsItem target="_blank" href='https://www.facebook.com/takyifidelis/'><FaFacebook /></SocialsItem>
                    </Socials>

                </LandingPageSectionContent>

            </LandingPageSectionContainer>
        </>
    )
}

export default IntroSection


