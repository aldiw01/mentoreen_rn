import { StyleSheet, Text, View, ImageBackground, Image, Dimensions } from 'react-native';
import React, { useEffect } from 'react';
import { Logo } from '../../assets';
import { storeUserData, getUserData } from '../../actions/authorization';
import { UPDATE_USER_DATA } from '../../reducer/LoginReducer';
import { useDispatch, useSelector } from 'react-redux';

const Splash = ({ navigation }) => {
  const reducer = useSelector(state => state);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   setTimeout(async () => {
  //     const result = await getUserData();
  //     if (result != null) {
  //       dispatch({
  //         type: UPDATE_USER_DATA,
  //         userData: result,
  //       });
  //       navigation.replace('MainPage');
  //     } else {
  //       navigation.replace('Login');
  //     }
  //   }, 3000)
  // }, [navigation])

  // FOR DEVELOPMENT TESTING
  useEffect(() => {
    setTimeout(async () => {
      navigation.replace('MainPage');
    }, 3000)
  }, [navigation])

  const dimension = Dimensions.get('window')

  return (
    <View style={styles.background}>
      <Logo
        width={dimension.width / 2} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 222,
    height: 105
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
    fontFamily: 'Lato-Black',
  }
});
