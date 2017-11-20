import React from 'react';

import visier_team_pic from '../assets/visierTeam.jpg'



import {
  Card,
  CardText,
  CardTitle,
  Media,
  List,
  ListItem
} from 'react-md';

const style = { 
    // maxWidth: 400,
    // width: 'auto'
    flex: 3
    
};

const style2 = {
    flex: 2,
};


const work = () => (
    <Card className="md-cell md-cell--12">
        <CardTitle title="Work Experience"/>

        <div className="md-grid">
        
        <Card style={style} className="md-cell md-cell--6 md-cell--8-tablet">
            <CardTitle
            title="Visier Inc"
            subtitle="Feature Developer &amp; Tester (2015 - 2016)"
            />
            <Media aspectRatio="4-3">
                <img src={visier_team_pic} alt="Nature from lorempixel" />
            </Media>
            <CardText>
                <h5>About Visier</h5>
                <p>
                    Visier is a phenomenal company with a very googlish like structure.
                    Initiation of new employees was followed by a series of orientations and small training
                    program to get the new employees up and running quickly.
                </p>
                <p>
                    This training program included a bunch of presentations delivered by senior developers 
                    to give a sense of company’s business model and overall software architecture. Employees also 
                    underwent a Scala and JavaScript certifications, core technologies used by the company.
                </p>
                <p>
                    I was part of a team of 11 developers, and we collaborated with each other to help improve Visier's product. 
                    I worked closely with senior software developer to perform regression and automation performance 
                    analysis, heap dump analysis of garbage collection to find memory leaks, extensive memory profiling and writing scripts in Scala 
                    to improve the regression testing workflow of the Visier Cloud Application.
                </p>
            </CardText>
        </Card>
        <Card style={style2} className="md-cell md-cell--6 md-cell--8-tablet">
            <CardTitle title="Experience"/>
            <CardText>
                <List>
                    <ListItem
                        primaryText="Scala &amp; Javascript Certification"
                        secondaryText="Passed Visier Scala &amp; Javascript Certification Training program"
                        threeLines
                    />
                    <ListItem
                        primaryText="Continous Integration with Jenkins"
                        secondaryText="Responsible for setting up continous integration with Jenkins using Scala and Gatling tools"
                        threeLines
                    />
                    <ListItem
                        primaryText="Performance Optimization"
                        secondaryText="Improved 80% of performance for Visier Cloud Application by figuring out memory leaks through heap dump analysis and profiling"
                        threeLines
                    />
                    <ListItem
                        primaryText="Code Enchancements"
                        secondaryText="Enchancements made to legacy code and rewrote new performance analysis code"
                        threeLines
                    />
                    <ListItem
                        primaryText="Automation of Performance Analysis"
                        secondaryText="Automated the entire process of regression detection using meta programming in python with Jenkins and PostgreSQL"
                        threeLines
                    />
                </List>
            </CardText>
        </Card>
        </div>
    </Card>
);

export default work;
