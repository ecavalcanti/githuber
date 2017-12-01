import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import 'config/ReactotronConfig'
import createRootNavigator from 'routes'

export default class App extends Component {
  state = {
    userExists: false,
    userChecked: false
  }

  async componentDidMount() {
    const response = await this.checkUser()

    this.setState({userExists: response, userChecked: true})
  }

  checkUser = async() => {
    const user = await AsyncStorage.getItem('@Githuber:username')
    return user !== null
  }

  render() {
    const { userChecked, userExists } = this.state
    
    if (!userChecked) return null
    
    const Layout = createRootNavigator(userExists)
    return <Layout />
  }
}