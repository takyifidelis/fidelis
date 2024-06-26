import styled from 'styled-components';

export const SkillsContainer = styled.div`
    background-color:  rgb(242, 250, 255);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    padding: 20px 30px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
     
    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
` 

export const SkillHeaderMain  = styled.h1`
    flex-basis: 100%;
    margin-bottom: 100px;
    text-align: center;
    color: cornflowerblue;

    @media screen and (max-width: 768px){
       margin-bottom: 20px; 
    }
`


export const SkillsContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 8px 8px;
    max-width: 100vh;
    margin-left: 40px;    
`


export const SkillSectionHeader = styled.h1`
    font-size: 25px;
    color: #444;
    font-weight: lighter;
    margin-bottom: 15px;
    text-align: center;

    @media screen and (max-width: 768px){
        margin-bottom: 0;
        margin-top: 10px;
    }
    `

export const SkillSectionData= styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
  
    `

export const SkillSectionDataList= styled.li`
font-weight: lighter;
font-size: 20px;

margin-top: 10px;
color: #555;
text-align: left;

&:last-child{
    margin-bottom: 30px;
}
`