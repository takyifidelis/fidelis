import React from 'react'
import { SkillsContainer, SkillSectionData, SkillSectionDataList, SkillSectionHeader, SkillHeaderMain } from './SkillsElement';
import 'aos/dist/aos';


function Skills() {


    return (
        <div>
            <SkillsContainer id="skills">
                <SkillHeaderMain>SKILLS</SkillHeaderMain>
                <div>
                    <SkillSectionHeader>Language</SkillSectionHeader>
                    <SkillSectionData>
                        <SkillSectionDataList>English</SkillSectionDataList>
                    </SkillSectionData>
                </div>

                <div>
                    <SkillSectionHeader>Programming Languages</SkillSectionHeader>
                    <SkillSectionData>
                        <SkillSectionDataList>C++</SkillSectionDataList>
                        <SkillSectionDataList>Python</SkillSectionDataList>
                        <SkillSectionDataList>Matlab</SkillSectionDataList>
                        <SkillSectionDataList>SQL</SkillSectionDataList>
                    </SkillSectionData>
                </div>
                <div>
                    <SkillSectionHeader>Technologies</SkillSectionHeader>
                    <SkillSectionData>
                        <SkillSectionDataList>Microsoft SQL Server</SkillSectionDataList>
                    </SkillSectionData>
                </div>
            </SkillsContainer>
        </div>
    )
}

export default Skills
