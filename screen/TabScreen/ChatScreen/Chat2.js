import React from 'react';
import { StyleSheet, View, ImageBackground} from 'react-native';
import { Appbar, Text, Avatar} from 'react-native-paper';

function Chat2({navigation}) {
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => navigation.goBack('') }/>
        <Avatar.Image size={50} source={require('./avatar.jpg')} />
        <Appbar.Content title="Zulham" subtitle="Online" />
        <Appbar.Action icon="video" onPress={() => {}} />
        <Appbar.Action icon="phone" onPress={() => {}} />
        <Appbar.Action icon="dots-vertical" onPress={() => {}} />
      </Appbar.Header>

      <View style ={{flex : 1}} >
        <ImageBackground style={{flex : 1}} source={require('./bg.jpeg')}>
          <Text style={styles.container}>Kameranya lu atur gas</Text>
          <Text style={styles.container}>Cari aja tutorial atur kamera render</Text>
          <Text style={styles.container}>agak susah jelasinnya gw</Text>
          <Text style={styles.container2}>oh ok zul</Text>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container : {
    // flex: 0.3,
    justifyContent: "space-between",
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    // borderWidth : 5,
    borderRadius: 20,
    marginRight : 'auto' 
  },
  container2 : {
    // flex: 0.3,
    justifyContent: "space-between",
    backgroundColor: "#C0EDA6",
    padding: 20,
    margin: 10,
    // borderWidth : 5,
    textAlign : 'right',
    borderRadius: 20,
    marginLeft : 'auto'
  }
});

export default Chat2;