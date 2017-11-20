import React from 'react';
import { ExpansionList } from 'react-md';
import SkillList from "./SkillList";


import {
  Card,
  CardText,
  CardTitle,
} from 'react-md';


const skills = () => {
    const programming_lang = ["Java", "C++", "C", "Python", "Javascript", "Scala"];    
    const web_frameworks = ["Node.js", "Express.js", "Angular", "React", "Redux", "Next.js", "Preact", "Typescript", "Three.js"];   
    const bundlers = ["Webpack", "Grunt", "Gulp", "Node Package Manager", "Bower"];    
    const databases = ["PostgreSQL", "SQLite", "Realm", "MongoDB", "Redis"];    
    const cloud_comp = ["AWS", "Firebase", "Google Cloud"];
    const mobile_dev = ["Andriod Development", "iOS Development"];    
    const dev_env = ["Vagrant", "Docker", "Git", "Mercurial"];
    return (
        <Card className="md-cell md-cell--12">
            <CardTitle title="Skills"/>
            <CardText>
                <ExpansionList>
                    <SkillList title="Programming Languages" skills={programming_lang} />
                    <SkillList title="Web Frameworks" skills={web_frameworks}/>
                    <SkillList title="Bundlers" skills={bundlers} />
                    <SkillList title="Databases" skills={databases} />
                    <SkillList title="Cloud Computing" skills={cloud_comp} />
                    <SkillList title="Mobile Development" skills={mobile_dev} />
                    <SkillList title="Dev Environment" skills={dev_env} />
                </ExpansionList>
            </CardText>
        </Card>
    );
};

export default skills;
