import { View, Text, StyleSheet } from 'react-native'

export function Detail() {
  return (
    <View style={styles.container}>
      <Text>Detalhes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    height: 400
  },
  title: {
    fontSize: 24,
    marginTop: 100
  }
})
