import React, { useState } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'

const App = () => {
	const [items, setItems] = useState([
		{ id: 101, text: 'Milk' },
		{ id: 102, text: 'Juice' },
		{ id: 103, text: 'Bread' },
		{ id: 104, text: 'Eggs' },
	])

	const deleteItem = id => {
		setItems(prevItems => {
			return prevItems.filter(item => item.id !== id)
		})
	}

	return (
		<View style={styles.container}>
			<Header title='Shopping List' />
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
