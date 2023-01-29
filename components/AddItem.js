import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const AddItem = ({ addItem }) => {
	const [text, setText] = useState('')

	const addAction = () => {
		addItem(text)
		setText('')
	}
	return (
		<View style={styles.container}>
			<TextInput placeholder='Item name..' style={styles.input} onChangeText={setText} value={text} />
			<TouchableOpacity style={styles.btn} onPress={addAction}>
				<Text style={styles.btnText}>
					<Icon name='plus' size={15} /> Add Item
				</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		margin: 5,
	},
	input: {
		padding: 8,
		fontSize: 15,
		borderColor: '#023047',
		borderBottomWidth: 1,
	},
	btn: {
		backgroundColor: '#8ecae6',
		padding: 9,
		marginTop: 5,
	},
	btnText: {
		color: '#023047',
		fontSize: 15,
		textAlign: 'center',
	},
})

export default AddItem
