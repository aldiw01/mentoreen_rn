import { StyleSheet, Text, View, Image, Pressable, Dimensions } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Header, MovieList } from '../../components';
import axios from 'axios';
import { ScrollView } from 'react-native-gesture-handler';
import { COLOR_BACKGROUND } from '../../utils/constants';
import { removeToken } from "../../actions/authorization";

const Home = (props) => {
  const logout = () => {
    removeToken();
    props.navigation.navigate('Login');
  }

  return (
    <ScrollView style={styles.container}>
      <Pressable style={styles.button} onPress={logout}>
        <Text style={styles.buttonText}>Logout</Text>
      </Pressable>
    </ScrollView>
  );
};

export default Home;

const dimension = Dimensions.get('window')

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_BACKGROUND
  },
  trending: {
    marginLeft: 16,
    marginVertical: 16
  },
  text: {
    fontFamily: 'Ubuntu-Bold',
    fontSize: 24,
    marginLeft: 16,
    marginTop: 24
  },
  button: {
    marginTop: 16,
    backgroundColor: "rgba(250, 240, 202, 0.05)",
    width: 150,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: "center"
  },
  buttonText: {
    color: "white",
    fontFamily: "Lato-Regular",
    fontSize: 18
  }
});
