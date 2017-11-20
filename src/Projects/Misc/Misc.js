import React from 'react';

import {DIST_FILE_SERVER, WEATHER_DESCRIPTOR, DECAF_COMPILER, ROBOT_BATTLE_CAR} from './MiscProjects';
import VerticalTimeline from '../../VerticalTimeline/VerticalTimeline';

import {
  Card,
  CardTitle,
} from 'react-md';


const misc = () => {
    const web_info = [
        DIST_FILE_SERVER,
        WEATHER_DESCRIPTOR,
        DECAF_COMPILER,
        ROBOT_BATTLE_CAR
    ];

    const style = { 
        flex: 1
    };
    
    return (
        <section style={style}>
            <Card className="md-cell md-cell--12">
                <CardTitle title="Misc Development" />
                <div className="md-grid">
                    <VerticalTimeline listInfo={web_info}/>
                </div>
            </Card>
        </section>
    );
};

export default misc;
