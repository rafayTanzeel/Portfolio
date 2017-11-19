import React from 'react';
import { FontIcon } from 'react-md';
import rafay from '../assets/rafay.jpg';

import {
  Avatar,
  Card,
  CardText,
  CardTitle,
  Media,
  List,
  ListItem
} from 'react-md';

const styleCol1 = { 
    flex: 2
};

const styleCol2 = {
    flex: 5,
};

// "https://avatars0.githubusercontent.com/u/11380870?s=600&u=3bc83ad3cd2409b42128548716bd1df601a1f0bf&v=4"

const profile = () => (
    <Card className="md-cell md-cell--12">
        <CardTitle title="Profile"/>

        <div className="md-grid">
        
        <Card style={styleCol1} className="md-cell md-cell--6 md-cell--8-tablet">
            <CardTitle
            title="Rafay Tanzeel"
            subtitle="Software Engineer"
            avatar={<Avatar suffix="red">R</Avatar>}
            />
            <Media aspectRatio="1-1">
                <img src={rafay} alt="Nature from lorempixel" />
            </Media>
            <CardText>
                <h5>About Me</h5>
                <p>
                    I am a full-stack web and mobile engineer with a passion for innovation and building scalable applications, 
                    which incorporate design, functionality as well as usability across devices and browsers.
                </p>
                <p>Occasionally, I am also a hobbyist designer and artist.</p>
            </CardText>
        </Card>

        <div  style={styleCol2} className="md-cell md-cell--6 md-cell--8-tablet">
            <Card>
                <CardTitle title="Contact" subtitle="Availability" />
                <CardText>
                    <List>
                        <ListItem
                            primaryText="Email Address"
                            secondaryText="rafaytanzeel@gmail.com"
                            leftIcon={<FontIcon>email</FontIcon>}
                        />
                        <ListItem
                            primaryText="Mobile No"
                            secondaryText="(604) 442–4115"
                            leftIcon={<FontIcon>call</FontIcon>}
                        />
                        <ListItem
                            primaryText="Location"
                            secondaryText="Toronto, Ontario"
                            leftIcon={<FontIcon>room</FontIcon>}
                        />
                    </List>
                </CardText>
            </Card>
            <Card>
                <CardTitle title="Education" subtitle="BSc in Computer Science" />
                <CardText>
                    <List>
                        <ListItem
                            primaryText="Simon Fraser University"
                            secondaryText="2013 - 2017"
                            leftIcon={<FontIcon>school</FontIcon>}
                        />
                        <ListItem
                            primaryText="Degree"
                            secondaryText="Bachelor of Science"
                            leftIcon={<FontIcon>class</FontIcon>}
                        />
                        <ListItem
                            primaryText="Location"
                            secondaryText="Vancouver, British Columbia"
                            leftIcon={<FontIcon>room</FontIcon>}
                        />
                    </List>
                </CardText>
            </Card>
        </div>
        </div>
    </Card>
);

export default profile;
