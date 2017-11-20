import React from 'react';
import { FontIcon } from 'react-md';
import rafay from '../assets/rafay.jpg';
import {Radar} from 'react-chartjs-2';

import {
  Avatar,
  Card,
  CardText,
  CardTitle,
  Media,
  List,
  ListItem
} from 'react-md';

const cardFlex= {
    flex: 1
};

const styleCol1 = { 
    flex: 3,
    display: 'flex',
    flexDirection: 'column'
};

const styleCol2 = {
    flex: 4,
    display: 'flex',
    flexDirection: 'column'
};

const styleCol3 = {
    display: 'flex',
    flexDirection: 'column',
    flex: 4,
};

const profile = () => {

    const chartData = {
        labels: ["Web Dev", "Game Dev", "Algorithms", "Mobile Dev", "UX Design"],
        datasets: [{
          label: 'Concentration',
          data: [4, 2, 3, 4, 2],
          backgroundColor: "#ff408170",
          borderColor: "#ff4081ab"
        }]
      };

      const options = {
        // responsive: true,
        maintainAspectRatio: true,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 5
            }
        }
    };


    return (<Card className="md-cell md-cell--12">
        <CardTitle title="Profile"/>

        <div className="md-grid">
        <div  style={styleCol1} className="md-cell md-cell--6 md-cell--8-tablet">

            <Card style={cardFlex}>
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
        </div>
        <div  style={styleCol2} className="md-cell md-cell--4 md-cell--5-tablet">
            <Card style={cardFlex}>
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
            <Card style={cardFlex}>
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
        <div  style={styleCol3} className="md-cell md-cell--2 md-cell--3-tablet">
            <Card style={cardFlex}>
                <CardTitle title="Interest" subtitle="Hobbies" />
                <CardText>
                    <Radar data={chartData} options={options}/>
                </CardText>
            </Card>
            <Card style={cardFlex}>
                <CardTitle title="Achievements" subtitle="Awards" />
                <CardText>
                    <List>
                        <ListItem
                            primaryText="HoloJam Hackathon"
                            secondaryText="1st"
                            leftIcon={<FontIcon>star</FontIcon>}
                        />
                        <ListItem
                            primaryText="WICS & WEG Hackathon"
                            secondaryText="2nd"
                            leftIcon={<FontIcon>star</FontIcon>}
                        />
                        <ListItem
                            primaryText="SFU Software Engineer Inter-Class Competition"
                            secondaryText="3rd"
                            leftIcon={<FontIcon>star</FontIcon>}
                        />
                    </List>
                </CardText>
            </Card>
        </div>
        </div>
    </Card>)
};

export default profile;
