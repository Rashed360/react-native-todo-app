import React, { useState } from 'react'
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

const App = () => {
	const [items, setItems] = useState([
		{ id: 103, text: 'Milk' },
		{ id: 102, text: 'Juice' },
		{ id: 101, text: 'Bread' },
		{ id: 100, text: 'Eggs' },
	])

	const deleteItem = id => {
		setItems(prevItems => {
			return prevItems.filter(item => item.id !== id)
		})
	}

	const addItem = text => {
		if (!text) {
			Alert.alert('No Name', 'Please provide an item name', [{ text: 'Okay' }])
		} else {
			setItems(prevItems => {
				return [{ id: items.length + 100, text }, ...prevItems]
			})
		}
	}

	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
			<AddItem addItem={addItem} />
			<FlatList data={items} renderItem={({ item }) => <ListItem item={item} deleteItem={deleteItem} />} />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
})

export default App
