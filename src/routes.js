import React from 'react'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Header from './components/Header'

import Welcome from './pages/welcome'
import Repositories from './pages/repositories'
import Organizations from './pages/organizations'

const createRootNavigator = (userExist) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations }
    })
  }
}, {
  initialRouteName: userExist ? 'User' : 'Welcome',
  navigationOptions: {
    header: props => <Header {...props} />,
  }
})

export default createRootNavigator