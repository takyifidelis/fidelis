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
                        
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1wSO7swjw4oWDur5s7mfRnLqe_SaBLab5/view?usp=sharing">Angular - The Complete Guide (Udemy)</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/10v8YDUmkzeMcyTnUjjTa-Ayc_3FwbcKr/view?usp=sharing">Google Project Management Certificate</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1qU6-puqp2IcOWUTgic0EynNlulX5OH4t/view?usp=sharing">jQuery Course</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1wSO7swjw4oWDur5s7mfRnLqe_SaBLab5/view?usp=sharing">BootStrap Course</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1hZJjgeeNCZTN9VL--1EQfKHZ5u49rtxd/view?usp=sharing">Git and GitHub Course</a></SkillSectionDataList>                        
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1hZJjgeeNCZTN9VL--1EQfKHZ5u49rtxd/view?usp=sharing">Complete JavaScript Course</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1wSO7swjw4oWDur5s7mfRnLqe_SaBLab5/view?usp=sharing">Lean Six Sigma, LinkedIn Learning</a></SkillSectionDataList>
                        <SkillSectionDataList><a href="https://drive.google.com/file/d/1MpN0HrJQmV5t9WNhLpP9_SEdrPC5BoZZ/view?usp=sharing">Google Data Analytics Certificate</a></SkillSectionDataList>
                        

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
