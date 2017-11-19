import React, { Component } from 'react';
import { NavigationDrawer } from 'react-md';

import './App.css';
import Profile from './Profile/Profile';
import Work from './Work/Work';
import Skills from './Skills/Skills';

import inboxListItems from './Helper/NavListItems';

import { CircularProgress } from 'react-md';

class App extends Component {

  componentDidMount() {
    setTimeout(()=>{
      this.setState({loading: false});
    }, 1500);
  }

  constructor() {
    super();

    this.navItems = inboxListItems.map((item) => {
      if (item.divider) {
        return item;
      }

      return {
        ...item,
        onClick: () => this.setPage(item.key, item.primaryText),
      };
    });

    this.state = {
      key: inboxListItems[0].key,
      loading: true
    };
  }

  setPage = (key) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider && ['github', 'linkedin', 'send-mail'].includes(key)) {
        return item;
      }
      return { ...item, active: item.key === key };
    });


    switch (key) {
      case 'github':
        window.location.href = "https://github.com/rafayTanzeel";
        break;
      case 'linkedin':
        window.location.href = "https://www.linkedin.com/in/rafaytanzeel";   
        break;
      case 'send-mail':
        window.location.href = "mailto:rafaytanzeel@gmail.com";
        break;
      default:
        this.setState({ key });
    }
  };

  render() {
    const { key } = this.state;

    let display = null;
    let sectionClass = "md-grid"
    switch (key) {
      case 'profile':
        display = <Profile/>;
        break; 
      case 'work':
        display = <Work/>;
          break;
      case 'skills':
        sectionClass=""
        display = <Skills/>;
        break;
      default:
        sectionClass="md-grid"
        display = <Profile/>;
    }


    const footer = <h4 className="footer">&copy; Rafay Tanzeel {new Date().getFullYear()}</h4>
    
    return (
      <NavigationDrawer
        drawerTitle="Settings"
        toolbarTitle="Rafay Tanzeel"
        navItems={this.navItems}
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY_MINI}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        footer={footer}
      >
        {this.state.loading ? <CircularProgress className="loader"/>
        : <section className={sectionClass}>
          {display}
        </section>}
      </NavigationDrawer>
    );
  }
}

export default App;