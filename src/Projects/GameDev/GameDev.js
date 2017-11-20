import React from 'react';

import VerticalTimeline from '../../VerticalTimeline/VerticalTimeline';
import {GRIM_REAPER_TRAP} from './GameProjects';

import {
    Card,
    CardTitle,
 } from 'react-md';


const gamedev = () => {
        
    const web_info = [
        GRIM_REAPER_TRAP
    ];

    const style = { 
        flex: 1
    };

    return (
        <section style={style}>
            <Card className="md-cell md-cell--12">
                <CardTitle title="Game Development" />
                <div className="md-grid">
                    <VerticalTimeline listInfo={web_info}/>
                </div>
            </Card>
        </section>
    );
};

export default gamedev;
