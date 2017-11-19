import React from 'react';
import { TabsContainer, Tabs, Tab } from 'react-md';

import './Skills.css';
import MobileDev from './MobileDev/MobileDev'
import WebDev from './WebDev/WebDev'
import GameDev from './GameDev/GameDev'
import Misc from './Misc/Misc'

const skills = (props) => (
  <TabsContainer panelClassName="md-grid" colored themed className="tabs__page-layout">
    <Tabs tabId="simple-tab" centered>

      <Tab label="Mobile Dev">
        <MobileDev/>
      </Tab>
      <Tab label="Web Dev">
        <WebDev/>
      </Tab>
      <Tab label="Game Dev">
        <GameDev/>
      </Tab>
      <Tab label="Misc">
        <Misc/>
      </Tab>

    </Tabs>
  </TabsContainer>
);


export default skills;