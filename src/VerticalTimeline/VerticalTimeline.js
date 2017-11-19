import React from 'react';
import './VerticalTimeline.css'

import {
    Paper,
    Card,
    CardText,
    CardTitle,
} from 'react-md';

const vtimeline = (props) => (
    <Paper className="timeline-outer">
        <div className="timeline">
            {props.listInfo.map((info, idx) => {
                return (
                <Card key={idx} className="event">
                    <CardTitle title={info.title} subtitle={info.subtitle}/>
                    <CardText>
                        {info.summary}
                    </CardText>
                </Card>
                );
            })}
        </div>
    </Paper>
);

export default vtimeline;
