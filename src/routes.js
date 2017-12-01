import React from 'react'
import { colors } from 'styles'
import { StackNavigator, TabNavigator } from 'react-navigation'

import Header from 'components/Header'

import Welcome from 'pages/welcome'
import Repositories from 'pages/repositories'
import Organizations from 'pages/organizations'

const createRootNavigator = (userExist) => StackNavigator({
  Welcome: { screen: Welcome },
  User: {
    screen: TabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations }
    }, {
      tabBarPosition: 'bottom',
      tabBarOptions: {
        showLabel: false,
        showIcon: true,
        activeTintColor: colors.white, 
        inactiveTintColor: colors.inactive,
        style: {
          backgroundColor: colors.primary
        }
      }
    })
  }
}, {
  initialRouteName: userExist ? 'User' : 'Welcome',
  navigationOptions: {
    header: props => <Header {...props} />,
  }
})

export default createRootNavigator