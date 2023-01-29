import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    padding: 15,
    backgroundColor: '#023047',
  },
  text: {
    color: '#8ecae6',
    fontSize: 18,
    lineHeight: 20,
    textAlign: 'center',
  },
});

Header.defaultProps = {
  title: 'Page Title',
};

export default Header;
