import React from 'react';
import {View,TouchableOpacity} from 'react-native';
import { List, Avatar} from 'react-native-paper';


function ChatScreen({navigation}) {
  return (
    <>
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Chat1')}>
          <List.Item
            title="Adit"
            titleStyle={{color: 'black'}}
            description="Ayooo"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./ChatScreen/avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat2')}>
          <List.Item
            title="Zulham"
            titleStyle={{color: 'black'}}
            description="ohh ok zul"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./ChatScreen/avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat3')}>
          <List.Item
            title="Rifki"
            titleStyle={{color: 'black'}}
            description="bilang gini aja ya kira kira tugasnya apa pak?"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./ChatScreen/avatar.jpg')} size={50}/>}
          />
      </TouchableOpacity>
      <List.Item
            title="Agung"
            titleStyle={{color: 'black'}}
            description="Beli Batagor"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./ChatScreen/avatar.jpg')} size={50}/>}
          />
      <List.Item
            title="Denny"
            titleStyle={{color: 'black'}}
            description="Beli Batagor"
            descriptionStyle={{color: 'black'}}
            left={props => <Avatar.Image {...props} source={require('./ChatScreen/avatar.jpg')} size={50}/>}
          />
    </View>
    </>
  );
}

export default ChatScreen;