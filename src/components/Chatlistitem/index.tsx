import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Pressable } from 'react-native';
import data from '../../../assets/data/chats.json'; 
import { useNavigation } from '@react-navigation/native';

const Chartlistitem = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      {data.map((item) => {
        return (
        <Pressable
          onPress={() => navigation.navigate('Chat', { id: item.id, name: item.user.name })}
          key={item.id}
          style={styles.itemContainer}
        >
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: item.user.image }}
              style={styles.image}
            />
          </View>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text style={styles.userName}>{item.user.name}</Text>
              <Text style={styles.date}>
                {new Date(item.lastMessage.createdAt).toLocaleDateString('en-US', { weekday: 'long' })}
              </Text>
            </View>
            <Text numberOfLines={2} style={styles.message}>{item.lastMessage.text}</Text>
          </View>
        </Pressable>
)})}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161818',
  },
  itemContainer: {
    width: '100%',
    height: 100,
    flexDirection: 'row',
  },
  imageContainer: {
    height: 120,
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '75%',
    height: '75%',
    resizeMode: 'cover',
    borderRadius: 100,
  },
  textContainer: {
    flex: 3,
    borderBottomWidth: 0.5,
    justifyContent: 'center',
    borderBottomColor: 'grey',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userName: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  date: {
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
  },
  message: {
    fontSize: 18,
    color: 'white',
  },
});

export default Chartlistitem;