import { StyleSheet, Text, View, Pressable } from 'react-native'
import { TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';
import { COLOR_PRIMARY, ENDPOINT_REGISTER } from '../../utils/constants';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const register = () => {
    const userAccount = {
      "email": email,
      "password": password,
      "name": name
    };

    console.log(userAccount)
    axios
      .post(ENDPOINT_REGISTER, userAccount, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        setMessage("User successfully registered, enter your credential at Login Page")
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e.response.data.message)
        setMessage(e.response.data.message)
      });
  }

  const login = () => {
    navigation.replace('Login');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.loginHeader}>Register</Text>
      <TextInput
        style={styles.textInput}
        theme={{ colors: { text: '#BBBBBB', primary: 'transparent' }, roundness: 5 }}
        left={<TextInput.Icon name={() => <Icon name='user' size={20} style={styles.inputIcon} />} />}
        onChangeText={(text) => setEmail(text)}
        value={email}
        placeholder={'Email'}
        placeholderTextColor={'#BCBCBC'}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        theme={{ colors: { text: '#BBBBBB', primary: 'transparent' }, roundness: 5 }}
        left={<TextInput.Icon name={() => <Icon name='key' size={20} style={styles.inputIcon} />} />}
        onChangeText={(text) => setPassword(text)}
        value={password}
        placeholder={'Password'}
        placeholderTextColor={'#BCBCBC'}
      />
      <TextInput
        style={styles.textInput}
        theme={{ colors: { text: '#BBBBBB', primary: 'transparent' }, roundness: 5 }}
        left={<TextInput.Icon name={() => <Icon name='star' size={20} style={styles.inputIcon} />} />}
        onChangeText={(text) => setName(text)}
        value={name}
        placeholder={'Your Name'}
        placeholderTextColor={'#BCBCBC'}
      />
      <Pressable style={styles.button} onPress={register}>
        <Text style={styles.buttonText}>Register</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={login}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </Pressable>
      <Text>{message}</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 24,
    flex: 1,
  },
  loginHeader: {
    marginTop: 50,
    fontSize: 24,
    color: COLOR_PRIMARY,
    fontFamily: 'Lato-Bold',
    textTransform: 'uppercase'
  },
  textInput: {
    marginTop: 20,
    backgroundColor: '#211F30',
  },
  inputIcon: {
    color: COLOR_PRIMARY
  },
  button: {
    marginTop: 16,
    backgroundColor: 'rgba(250, 240, 202, 0.05)',
    width: 150,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontFamily: 'Lato-Regular',
    fontSize: 18,

  },
})