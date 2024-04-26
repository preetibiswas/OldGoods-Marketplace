/* eslint-disable prettier/prettier */
import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListItem from '../component/ListItem';
import AppIcon from '../component/AppIcon';
import Screen from '../component/Screen';
import colors from '../Config/colors';
import ListItemseprator from '../component/ListItemseprator';

const menuItem = [
  {
    title: 'My Listing',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: colors.primary,
    },
  },
  {
    title: 'My Message',
    icon: {
      name: 'email',
      backgroundColor: colors.secondary,
    },
    target: 'Messages',
  },
];

export default function AccountScreen({navigation}) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Preeti"
          subtitle="Programmer"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItem}
          keyExtractor={menuitem => menuitem.title}
          renderItem={({item}) => (
            <ListItem
              onpress={() => navigation.navigate(item.target)}
              title={item.title}
              ImageComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundcolor={item.icon.backgroundColor}
                />
              }
            />
          )}
          ItemSeparatorComponent={ListItemseprator}
        />
      </View>
      <ListItem
        title="Logout"
        ImageComponent={<AppIcon name="logout" backgroundcolor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  screen: {
    backgroundColor: colors.light,
  },
});
