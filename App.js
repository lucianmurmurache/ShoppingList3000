import React, { useState } from 'react';
import { StyleSheet, FlatList, View, Alert } from 'react-native';

import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

import { uuid } from 'uuidv4';

const App = () => {

  const [items, setItems] = useState([
    { id: uuid(), text: 'Eggs' },
    { id: uuid(), text: 'Wine' },
    { id: uuid(), text: 'Tofu' },
    { id: uuid(), text: 'Chocolate' },
  ]);

  const deleteItem = (id) => {
    setItems(previousItems => {
      return previousItems.filter(item => item.id !== id);
    });
  };

  const addItem = text => {
    if (!text) {
      Alert.alert(
        'No item entered',
        'Please enter an item',
        [
          {
            text: 'Ok',
            style: 'cancel',
          },
        ],
        { cancelable: true },
      );
    } else {
      setItems(prevItems => {
        return [{ id: uuid(), text }, ...prevItems];
      });
    }
  };

  return (
    <View style={styles.container} >
      <Header />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
});

export default App;
