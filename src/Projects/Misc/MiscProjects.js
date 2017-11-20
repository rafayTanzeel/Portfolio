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
const YouTubeBtnRef = ({url}) => <Button flat secondary iconClassName="fa fa-youtube-play" target="_blank" rel="noopener noreferrer" href={url} className="gitref">youtube</Button>;

const ChipGenerator = ({chips}) => (
    <div>
        {chips.map((chip, idx) => <Chip key={idx} className="chips" label={chip} />)}
    </div>
);

export const DIST_FILE_SERVER = {
    title : "Distributed File Server", 
    subtitle: "Parallel Computing", 
    summary: (
        <article>
            <p>
                Built a distributed file system with transactional semantics using Python. 
                A transaction is a sequence of file operations that follow the properties of (A)tomicity, 
                (C)consistency, (I)solation and (D)urability (ACID). That is, each sequence of file operations 
                appears atomic, leave the file system consistent, work in face of concurrency and survive server or 
                client failures.
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="The program supports both reads and writes, using TCP connection and runs in parallel(multithreaded) and is asynchronous." />
                <ListItem leftIcon={bulletpoint} primaryText="The system handles omission, byzantine and failstop failures on the client and failstop failures on the server." />
                <ListItem leftIcon={bulletpoint} primaryText="The server is stateful: it remembers about the operations it was doing before it crashed." />
            </List>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Python2.x"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/ACID-FTP-Server"/>
        </article>
    )
};

export const WEATHER_DESCRIPTOR = {
    title : "Weather Descriptor", 
    subtitle: "Machine Learning", 
    summary: (
        <article>
            <p>
                Built an application that could take an image as an input and classify it with an appropriate 
                weather description. Application internally uses various classification techniques including 
                random forest and support vector machine.
            </p>
            <br/>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Python2.x", "Numpy", "Pandas", "Scikit Learn"]}/>
            <br/>
            <h6> Reference: Available upon Request as I used 3rd party licensed images</h6>
        </article>
    )
};

export const ROBOT_BATTLE_CAR = {
    title : "Robot Battle Car", 
    subtitle: "LEGO MINDSTORM EV3", 
    summary: (
        <article>
            <p>
                Built a lego mindstorm ev3 robot battle car for Robot Battle Competition at Simon Fraser University.
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="The robot car used ultrasonic sensor to detect other cars in it’s proximity " />
                <ListItem leftIcon={bulletpoint} primaryText="Any object in its ultrasonic sensor range is attacked" />
                <ListItem leftIcon={bulletpoint} primaryText="Fail Safetly feature so robot car does not drive off the circular ring area" />
            </List>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["C", "Lego Mindstorm ev3"]}/>
            <YouTubeBtnRef url="https://youtu.be/E45EGAFlc8w"/>
        </article>
    )
};

export const DECAF_COMPILER = {
    title : "Decaf Compiler & Optimization", 
    subtitle: "Compiler Design", 
    summary: (
        <article>
            <p>
                Developed a new programming language called Decaf and its compiler using C++, Flex for lexical analysis, 
                Bison for creating grammar for the language and LLVM API for code generation.
            </p>
            <br/>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["C++", "Flex Bison", "LLVM"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/decafCompiler"/>
        </article>
    )
};