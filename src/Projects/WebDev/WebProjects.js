import React from 'react';

import {
  List,
  ListItem,
  Chip,
  Button,
  FontIcon
} from 'react-md';

const bulletpoint = <FontIcon key="data">keyboard_arrow_right</FontIcon>;
const GitBtnRef = ({url}) => <Button flat secondary iconClassName="fa fa-github" target="_blank" rel="noopener noreferrer" href={url} className="gitref">github</Button>;
const WebBtnRef = ({url}) => <Button flat secondary iconChildren="http" target="_blank" rel="noopener noreferrer" href={url} className="gitref">link</Button>;
const ChipGenerator = ({chips}) => (
    <div>
        {chips.map((chip, idx) => <Chip key={idx} className="chips" label={chip} />)}
    </div>
);

export const TEAM_UP = {
    title : "Team Up", 
    subtitle: "Node.js Web Application", 
    summary: (
        <article>
            <p>
                Web Application provides a team formation platform in order to play a specific sport with strangers in nearby parks. 
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Social Network SignIn and Local SignIn to authenticate the user" />
                <ListItem leftIcon={bulletpoint} primaryText="User can select any location on google map and set up an event date" />
                <ListItem leftIcon={bulletpoint} primaryText="Other users can join the sports events and chat interface enable them to chat with one another" />
                <ListItem leftIcon={bulletpoint} primaryText="Users have full control over configuring their profile settings" />
            </List>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Node.js", "Express.js", "MongoDB", "Socket.IO", "Nginx", "Webpack", "Babel", "Google Maps and Places API"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/Team_Up"/>
            <WebBtnRef url="https://team-ups.herokuapp.com/"/>
        </article>
    )
};


export const EARTH_GRAPHiCS = {
    title : "3D Earth WebGL Demo", 
    subtitle: "Node.js Web Application", 
    summary: (
        <article>
            <p>
                Project consist of a 3D rendered Earth with cloud animations and dynamic mouse motion to circle around the earth
            </p>
            <br/>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Node.js", "Express.js", "Three.js", "WebGL"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/3D-Earth-Demo"/>
            <WebBtnRef url="https://three-d-web-earth.herokuapp.com/"/>
        </article>
    )
};


export const JAVACRIPT_PROFILER = {
    title : "JavaScript Profiler for ES7 Typed Array Optimization", 
    subtitle: "Profiler Design", 
    summary: (
        <article>
            <p>
                Developed a JavaScript Profiler using dynamic analysis with Jalangi 2, to detect potential optimization of 
                Arrays, with the new Typed Arrays in ECMAScript 7.
            </p>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="The profiler scans over the entire JavaScript code" />
                <ListItem leftIcon={bulletpoint} primaryText="Performs instrumentation of the codes regresion points through Jalangi 2 dynamic analysis framework" />
                <ListItem leftIcon={bulletpoint} primaryText="Delivers a full report of potential optimization of each Array defined to be refactored into ECMAScript 7 Typed Arrays to gain additional performance " />
            </List>
            <br/>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Node.js", "Jalangi2"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/JavaScript_Profiler_Array_Optimization"/>
        </article>
    )
};


export const RAFAY_RECIPE = {
    title : "Rafay Recipes", 
    subtitle: "Favorite Food", 
    summary: (
        <article>
            <p>
                Rafay's Favorite Recipes are posted on this website
            </p>
            <br/>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Node.js", "Express.js", "Foundation", "Nginx"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/Recipes"/>
            <WebBtnRef url="https://rafay-recipe.herokuapp.com/"/>
        </article>
    )
};