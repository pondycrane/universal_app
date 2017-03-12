import React, { Component } from 'react';
import { Navigator, Text } from 'react-native';
import MainScreen from './MainScreen';
import BlogScreen from './BlogScreen'; 

function renderScene(route, navigator) {
  switch( String( route.index ).split('_')[0]) {
  case '0':
    return (<MainScreen navigator={navigator} />);
  case 'blog':
    return (<BlogScreen navigator={navigator} />);
  default:
    return (<Text>Ops, screen not found. Route index is {route.index}, title is {route.title}</Text>);
  }
}

class Router extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{index: '0', title: 'Home Screen'}}
        renderScene={renderScene} />
    );
  }
}

export default Router;
