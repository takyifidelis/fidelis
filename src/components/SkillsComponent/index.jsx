import React from 'react'
import { SkillsContainer, SkillSectionData, SkillSectionDataList, SkillSectionHeader, SkillHeaderMain } from './SkillsElement';
import 'aos/dist/aos';


function Skills() {


    return (
        <div>
            <SkillsContainer id="skills">
                <SkillHeaderMain>SKILLS</SkillHeaderMain>


                <div>
                    <SkillSectionHeader>Technologies</SkillSectionHeader>
                    <SkillSectionData>
                        <SkillSectionDataList>Microsoft Office (Word, Excel, Assess, PowerPoint)</SkillSectionDataList>
                        <SkillSectionDataList>AutoCAD Electrical</SkillSectionDataList>
                        <SkillSectionDataList>Xilinx Vivado (VHDL)</SkillSectionDataList>
                        <SkillSectionDataList>MATLAB</SkillSectionDataList>
                    </SkillSectionData>
                </div>

                <div>
                    <SkillSectionHeader>Relevant Courses</SkillSectionHeader>
                    <SkillSectionData>
                        <SkillSectionDataList>Electrical Measurements and Instrumentation</SkillSectionDataList>
                        <SkillSectionDataList>Fault Diagnosis and Failure Tolerance</SkillSectionDataList>
                        <SkillSectionDataList>Computer Programming for Engineers</SkillSectionDataList>
                        <SkillSectionDataList> Digital and Analogue communication</SkillSectionDataList>
                        <SkillSectionDataList>Classical Control Systems</SkillSectionDataList>
                        <SkillSectionDataList>Digital Control System</SkillSectionDataList>
                        <SkillSectionDataList>Digital Computer Design</SkillSectionDataList>
                        <SkillSectionDataList>Photovoltaic Systems</SkillSectionDataList>
                        <SkillSectionDataList>Computer Networking</SkillSectionDataList>
                        <SkillSectionDataList>Power Electronics</SkillSectionDataList>
                        <SkillSectionDataList>Digital Computing</SkillSectionDataList>
                        <SkillSectionDataList>Embedded Systems</SkillSectionDataList>
                        <SkillSectionDataList>Electric Drives</SkillSectionDataList>
                        <SkillSectionDataList>Microprocessor</SkillSectionDataList>
                    </SkillSectionData>
                </div>


                <div>
                    <SkillSectionHeader>Programming Languages</SkillSectionHeader>
                    <SkillSectionData>
                        <SkillSectionDataList>JavaScript</SkillSectionDataList>
                        <SkillSectionDataList>C++</SkillSectionDataList>
                        <SkillSectionDataList>Python</SkillSectionDataList>
                        <SkillSectionDataList>Matlab</SkillSectionDataList>
                        <SkillSectionDataList>Latex</SkillSectionDataList>
                    </SkillSectionData>
                </div>

            </SkillsContainer>
        </div>
    )
}

export default Skills
