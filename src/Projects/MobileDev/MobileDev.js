import React from 'react';

import {VISION_TRANSLATOR, STUDENT_GRADER, VISUAL_ASSISTANCE, SFU_ONCAMPUS, BOOK_MARKET, CURRENCY_CONVERSIONER} from './MobileProjects';
import VerticalTimeline from '../../VerticalTimeline/VerticalTimeline';

import {
    Card,
    CardTitle,
} from 'react-md';


const mobdev = () => {
        
    const andriod_info = [
        VISION_TRANSLATOR,
        STUDENT_GRADER,
        VISUAL_ASSISTANCE,
        BOOK_MARKET,
        CURRENCY_CONVERSIONER
    ];

    const iOS_info = [
        SFU_ONCAMPUS
    ];

    const style = { 
        flex: 1
    };

    return (
        <section style={style}>
            <Card className="md-cell md-cell--12">
                <CardTitle title="iOS Development" />
                <div className="md-grid">
                    <VerticalTimeline listInfo={iOS_info}/>
                </div>
            </Card>
            <Card className="md-cell md-cell--12">
                <CardTitle title="Andriod Development" />
                <div className="md-grid">
                    <VerticalTimeline listInfo={andriod_info}/>
                </div>
            </Card>
        </section>
    );
};

export default mobdev;
