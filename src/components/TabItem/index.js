import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLOR_RED, COLOR_DISABLE } from '../../utils/constants'
import Icon from 'react-native-vector-icons/Ionicons'

const TabItem = ({ isFocused, onPress, onLongPress, label }) => {
  const TabIcon = () => {
    if (label === 'Home') return isFocused ? <Icon name="home-outline" size={32} color={COLOR_RED} /> :
      <Icon name="home-outline" size={32} color={COLOR_DISABLE} />
    if (label === 'MentorKu') return isFocused ? <Icon name="star-half" size={32} color={COLOR_RED} /> :
      <Icon name="star-half" size={32} color={COLOR_DISABLE} />
    if (label === 'MenteeKu') return isFocused ? <Icon name="people-circle-outline" size={32} color={COLOR_RED} /> :
      <Icon name="people-circle-outline" size={32} color={COLOR_DISABLE} />
    if (label === 'Profil') return isFocused ? <Icon name="person-outline" size={32} color={COLOR_RED} /> :
      <Icon name="person-outline" size={32} color={COLOR_DISABLE} />
    return <Icon name="home-outline" size={32} color={COLOR_DISABLE} />
  }
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}
    >
      <TabIcon />
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  text: {
    fontSize: 13,
    color: '#C8C8C8'
  },
  text: (isFocused) => ({
    fontSize: 13,
    color: isFocused ? COLOR_PRIMARY : COLOR_DISABLE,
    marginTop: 8
  })
})