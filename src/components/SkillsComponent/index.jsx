import React from 'react'
import { SkillsContainer, SkillSectionData, SkillSectionDataList, SkillSectionHeader, SkillHeaderMain } from './SkillsElement';
import 'aos/dist/aos';


function Skills() {


    return (
        <div>
            <SkillsContainer id="skills">
                <SkillHeaderMain>SKILLS AND EXPERTISE</SkillHeaderMain>


                <div>
                    <SkillSectionHeader>Languages and Frameworks</SkillSectionHeader>
                    <SkillSectionData>
                        
                   
                        <SkillSectionDataList>SQL (Data Analytics)</SkillSectionDataList>                        
                        <SkillSectionDataList>Git (Version Control)</SkillSectionDataList>
                        <SkillSectionDataList>LateX (Documentation)</SkillSectionDataList>
                        <SkillSectionDataList>Python (Data Analytics)</SkillSectionDataList>
                        <SkillSectionDataList>Angular (Web Development)</SkillSectionDataList>
                    </SkillSectionData>
                </div>

                <div>
                    <SkillSectionHeader>Certifications</SkillSectionHeader>
                    <SkillSectionData>
                        
                        <SkillSectionDataList>Angular - The Complete Guide (Udemy)</SkillSectionDataList>
                        <SkillSectionDataList>Google Project Management Certificate</SkillSectionDataList>
                        <SkillSectionDataList>jQuery Course</SkillSectionDataList>
                        <SkillSectionDataList>BootStrap Course</SkillSectionDataList>
                        <SkillSectionDataList>Git and GitHub Course</SkillSectionDataList>                        
                        <SkillSectionDataList>Complete JavaScript Course</SkillSectionDataList>
                        <SkillSectionDataList>Lean Six Sigma, LinkedIn Learning</SkillSectionDataList>
                        <SkillSectionDataList>Google Data Analytics Certificate</SkillSectionDataList>
                        

                    </SkillSectionData>
                </div>


                <div>
                    <SkillSectionHeader>Projects</SkillSectionHeader>
                    <SkillSectionData>
                      
                        <SkillSectionDataList><a href="https://storefront.amalitech-dev.net/">StoreFront</a></SkillSectionDataList>                       
                        <SkillSectionDataList><a href="https://phase2-tictactoe-fidelis.netlify.app/">TicTacToe Game</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://bmi-calculator-fidelis.netlify.app/">BMI Calculator</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://rest-country-api-25202.web.app/">Rest Country API</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://github.com/cypher20b/ATS">Application Track System</a></SkillSectionDataList>
                    
                    </SkillSectionData>
                </div>

            </SkillsContainer>
        </div>
    )
}

export default Skills
