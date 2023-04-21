import styled from "styled-components";


export const SkillsContainer = styled.div`
    height:500px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background:transparent;
    

    @media screen and (max-width:768px){
        height:1100px;
    }

    @media screen and (max-width:480px){
        height:700px;
    }
    @media screen and (max-width:320px){
        height:500px;
    }

`

export const SkillWrapper = styled.div`

    max-width:1000px;
    margin:15px auto;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    align-items:center;
    grid-gap:16px;
    padding:0 50px;

    @media screen and (max-width:1000px){
        grid-template-columns:1fr 1fr;
    }

    @media screen and (max-width:768px){
        grid-template-columns:1fr;
        padding:0 20px;
    }

`

export const SkillCard = styled.div`

    
    display: flex;
    color:#000000;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-radius:10px;
    max-height:80px;
    padding:30px;
    
    

`

export const SkillH1 = styled.h1`
    font-size:3.5rem;
    color:rgb(12, 127, 176);
    margin-bottom:40px;
    font-family: var(--font-family-title);
    letter-spacing:3px;

    @media screen and (max-width:480px){
        font-size:2rem;
    }


`

export const SkillH2 = styled.h2`
    font-size:1rem;
    margin-bottom:10px;
    margin-left:20px;
`
// --------------------icons-----------


export const SkillIcon1 = styled.a`
    
    color:#f60;
    font-size:40px;
`
export const SkillIcon2 = styled.a`
    
    color:#264de4;
    font-size:40px;
`
export const SkillIcon3 = styled.a`
   
    color:#f7e018;
    font-size:40px;
`
export const SkillIcon4 = styled.a`
    
    color:#61dbfb;
    font-size:40px;
`
export const SkillIcon5 = styled.a`
    
    color:#f05033;
    font-size:40px;
`

export const SkillIcon6 = styled.a`
    
    color:#cf649a;
    font-size:40px;
`