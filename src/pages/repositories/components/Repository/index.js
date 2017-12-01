import React, { Component } from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import styles from './styles'

export default class Repository extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>gonative</Text>
        <View style={styles.infoContainer}>
          <View style={styles.info}>
            <Icon name="star" size={14} style={styles.infoIcon}/>
            <Text style={styles.infoText}>200</Text>
          </View>
          <View style={styles.info}>
            <Icon name="code-fork" size={14} style={styles.infoIcon}/>
            <Text style={styles.infoText}>200</Text>
          </View>
          <View style={styles.info}>
            <Icon name="eye" size={14} style={styles.infoIcon}/>
            <Text style={styles.infoText}>200</Text>
          </View>
        </View>
      </View>
    )
  }
}