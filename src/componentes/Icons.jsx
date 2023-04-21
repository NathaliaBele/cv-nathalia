import React from "react";


import { AiFillHtml5 } from "react-icons/ai";
import {FaCss3Alt,FaReact,FaGitAlt,FaSass} from 'react-icons/fa'
import {SiJavascript} from 'react-icons/si'
import {BsWordpress} from 'react-icons/bs'


import {
  SkillsContainer,
  SkillWrapper,
  SkillCard,
  SkillH1,
  SkillIcon1,
  SkillIcon2,
  SkillIcon3,
  SkillIcon4,
  SkillIcon5,
  SkillIcon6,
  SkillH2
  
} from "./SkillsElements";






const Skills = () => {
  return (
    <SkillsContainer id="skills">
      <SkillH1>Skills</SkillH1>
      <SkillWrapper>
        <SkillCard>
          <SkillIcon1>
            <AiFillHtml5 />
          </SkillIcon1>
          <SkillH2>HTML</SkillH2>
        </SkillCard>

        <SkillCard>
          <SkillIcon2>
            <FaCss3Alt />
          </SkillIcon2>
          <SkillH2>CSS</SkillH2>
        </SkillCard>

        <SkillCard>
          <SkillIcon3>
            <SiJavascript />
          </SkillIcon3>
          <SkillH2>JAVASCRIPT</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillIcon4>
            <FaReact />
          </SkillIcon4>
          <SkillH2>REACT</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillIcon5>
            <FaGitAlt />
          </SkillIcon5>
          <SkillH2>GIT</SkillH2>
        </SkillCard>
        <SkillCard>
          <SkillIcon6>
            <FaSass />
          </SkillIcon6>
          <SkillH2>SASS</SkillH2>
        </SkillCard>
      </SkillWrapper>
    </SkillsContainer>
  );
};

export default Skills;