import React from 'react';

import {TEAM_UP, EARTH_GRAPHiCS, JAVACRIPT_PROFILER, RAFAY_RECIPE} from './WebProjects';
import VerticalTimeline from '../../VerticalTimeline/VerticalTimeline';

import {
    Card,
    CardTitle,
} from 'react-md';


const webdev = () => {
        
    const web_info = [
        TEAM_UP,
        EARTH_GRAPHiCS,
        JAVACRIPT_PROFILER,
        RAFAY_RECIPE
    ];

    const style = { 
        flex: 1
    };

    return (
        <section style={style}>
            <Card className="md-cell md-cell--12">
                <CardTitle title="Web Development" />
                <div className="md-grid">
                    <VerticalTimeline listInfo={web_info}/>
                </div>
            </Card>
        </section>
    );
};

export default webdev;
