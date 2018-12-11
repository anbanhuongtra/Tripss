import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './BackButton.Style'
import { View } from 'react-native'
import { Images } from '../../Themes'

export default class BackButton extends Component {
  static defaultProps = {
    text: 'TAKE A TOUR',
    onPress: () => {}
  }

  static propTypes = {
    onPress: PropTypes.func,
    text: PropTypes.string
  }

  render() {
    const { text, onPress } = this.props
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.TouchableOpacity, this.props.styles]}
      >
        <LinearGradient
          colors={['#EAD199', '#D0A561']}
          start={{ x: 1, y: 1 }}
          end={{ x: 0, y: 0 }}
          style={styles.LinearGradient}
        >
          <Image source={Images.images.backArrow} style={styles.BackArrow} />
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}
