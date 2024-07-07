import React, { useState } from 'react';
import { View, TextInput, SafeAreaView, StyleSheet } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const InputBox = () => {
    const [newMessage, setNewMessage] = useState('');
  
    const onSend = () => {
      console.warn('Sending a new message: ', newMessage);
  
      setNewMessage('');
    };
  
    return (
      <SafeAreaView edges={['bottom']} style={styles.container}>
        {/* Icon */}
        <AntDesign name="plus" size={20} color="royalblue" />
  
        {/* Text Input */}
        <TextInput
          value={newMessage}
          onChangeText={setNewMessage}
          style={styles.input}
          placeholder="type your message..."
        />
  
        {/* Icon */}
        <MaterialIcons onPress={onSend} style={styles.send} name="send" size={16} color="white" />
      </SafeAreaView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      backgroundColor: 'whitesmoke',
      padding: 5,
      paddingHorizontal: 10,
      alignItems: 'center',
    },
    input: {
      flex: 1,
      backgroundColor: 'white',
      height : 40,
      padding: 5,
      paddingHorizontal: 10,
      marginHorizontal: 10,
  
      borderRadius: 50,
      borderColor: 'lightgray',
      borderWidth: StyleSheet.hairlineWidth,
    },
    send: {
      backgroundColor: 'royalblue',
      padding: 7,
      borderRadius: 15,
      overflow: 'hidden',
    },
  });
  
  export default InputBox;