/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import ListItem from '../component/ListItem';
import Screen from '../component/Screen';
import ListItemseprator from '../component/ListItemseprator';
import ListItemDeleteaction from '../component/ListItemDeleteaction';
const initialMessage = [
  {id: 1, title: 'M1', description: 'd1', image: require('../assets/mosh.jpg')},
  {id: 2, title: 'M2', description: 'd2', image: require('../assets/mosh.jpg')},
  {id: 3, title: 'M3', description: 'd3', image: require('../assets/mosh.jpg')},
  {id: 4, title: 'M4', description: 'd4', image: require('../assets/mosh.jpg')},
];

export default function MessageScreen() {
  const [messages, setMessages] = useState(initialMessage);
  const [refreshing, setRefreshing] = useState(false);
  const handleDelete = message => {
    console.log(message);
    setMessages(messages.filter(m => m.id !== message.id));
  };
  return (
    <Screen>
      <FlatList
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: 'titl me',
              description: 'description',
              image: require('../assets/chair.jpg'),
            },
          ])
        }
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
          <ListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log('hello')}
            renderRightActions={() => (
              <ListItemDeleteaction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={<ListItemseprator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
