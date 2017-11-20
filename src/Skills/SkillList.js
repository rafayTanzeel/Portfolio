import React from 'react';

import { ExpansionPanel } from 'react-md';


import {
  Chip
} from 'react-md';

const skillList = (props) => (
    <ExpansionPanel focused={props.focused} columnWidths={props.columnWidths} label={props.title} footer={null}>
        {props.skills.map((skill, idx) => <Chip key={idx} className="chips" label={skill}/>)}
    </ExpansionPanel>
);

export default skillList;
