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
const ChipGenerator = ({chips}) => (
    <div>
        {chips.map((chip, idx) => <Chip key={idx} className="chips" label={chip} />)}
    </div>
);

export const GRIM_REAPER_TRAP = {
    title : "Grim Reaper Trap", 
    subtitle: "Blender Game", 
    summary: (
        <article>
            <p>
            A first person runner to find the path to exit and avoid the grim reaper.
            Game programmed using python and Blender Game Logic Blocks.
            </p>
            <br/>
            <h4>Main Features:</h4>
            <List>
                <ListItem leftIcon={bulletpoint} primaryText="Enemy AI to pursue the target" />
                <ListItem leftIcon={bulletpoint} primaryText="Different rooms and hallways for open space to allow the player to openly run" />
                <ListItem leftIcon={bulletpoint} primaryText="Interactiive objects like doors and elevators" />
            </List>
            <h4>Libraries:</h4>
            <ChipGenerator chips={["Python", "Blender Game Enginer"]}/>
            <GitBtnRef url="https://github.com/rafayTanzeel/Grim-Reaper-Trap-Game"/>
        </article>
    )
};