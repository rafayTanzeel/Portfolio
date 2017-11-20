import React, { Component } from 'react';
import { NavigationDrawer, CircularProgress } from 'react-md';

import './App.css';

import Profile from './Profile/Profile';
import Work from './Work/Work';
import Skills from './Skills/Skills';
import Projects from './Projects/Projects';
import inboxListItems from './Helper/NavListItems';

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
    
    console.log("୧༼ ͡◉ل͜ ͡◉༽୨");
    console.log("Hello!!");
    console.log("Don't waste your time digging through minified code");
    console.log("Just pm me at rafatanzeel@gmail.com");
    console.log("I will give you the source code");
    console.log("Have a nice day. Cheers");
  }

  setPage = (key) => {
    this.navItems = this.navItems.map((item) => {
      if (item.divider && ['github', 'linkedin', 'send-mail'].includes(key)) {
        return item;
      }
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
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
      case 'skills':
        display = <Skills/>;
        break;
      case 'work':
        display = <Work/>;
        break;
      case 'projects':
        sectionClass=""
        display = <Projects/>;
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
        mobileDrawerType={NavigationDrawer.DrawerTypes.TEMPORARY}
        tabletDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        desktopDrawerType={NavigationDrawer.DrawerTypes.PERSISTENT_MINI}
        footer={footer}
      >
        {this.state.loading ? <CircularProgress id="cprogress" aria-describedby="loading page" aria-busy className="loader"/>
        : <section className={sectionClass}>
          {display}
        </section>}
      </NavigationDrawer>
    );
  }
}

export default App;
