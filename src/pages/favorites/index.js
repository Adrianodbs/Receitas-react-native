import { View, Text, StyleSheet } from 'react-native'

export function Favorites() {
  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    height: 400
  },
  title: {
    fontSize: 24,
    marginTop: 100
  }
})
