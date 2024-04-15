/* eslint-disable prettier/prettier */
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../Config/colors';
import AppText from './AppText';

export default function AppPicker({
  icon,
  placeholder,
  category,
  selectedItem,
  onSelectItem,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
        <View style={styles.container}>
          {icon && (
            <Icon
              name={icon}
              style={styles.icon}
              size={20}
              color={colors.medium}
            />
          )}
          <AppText style={styles.txt}>
            {selectedItem ? selectedItem.label : placeholder}
          </AppText>
          <Icon name="chevron-down" size={20} color={colors.medium} />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={showModal} animationType="slide">
        <Button title="close" onPress={() => setShowModal(false)} />
        <FlatList
          data={category}
          key={item => item.value.toString()}
          renderItem={({item}) => (
            <PickerItem
              label={item.label}
              onPress={() => {
                onSelectItem(item);
                setShowModal(false);
              }}
            />
          )}
        />
      </Modal>
    </>
  );
}

const PickerItem = ({label, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <AppText style={{padding: 20}}>{label}</AppText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: colors.light,
    marginVertical: 10,
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  txtinput: {
    fontSize: 18,
    color: colors.dark,
  },
  icon: {
    marginRight: 10,
  },
  txt: {
    flex: 1,
  },
});
