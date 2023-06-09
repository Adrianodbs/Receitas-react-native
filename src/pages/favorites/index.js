import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import { useState, useEffect } from 'react'
import { getFavorites } from '../../utils/storage'
import { useIsFocused } from '@react-navigation/native'
import { FoodList } from '../../components/foodlist'

export function Favorites() {
  const [receipes, setReceipes] = useState([])
  const isFocused = useIsFocused()

  useEffect(() => {
    let isActive = true

    async function getReceipes() {
      const result = await getFavorites('@appreceitas')
      if (isActive) {
        setReceipes(result)
      }
    }

    if (isActive) {
      getReceipes()
    }

    return () => {
      isActive = false
    }
  }, [isFocused])
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Receitas favoritas</Text>

      {receipes.length === 0 && (
        <Text>Você ainda não tem nenhuma receita salva!</Text>
      )}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 14 }}
        data={receipes}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FoodList data={item} />}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f9ff',
    flex: 1,
    paddingStart: 14,
    paddingEnd: 14,
    paddingTop: 36
  },
  title: {
    color: '#000',
    fontSize: 24,
    fontWeight: 'bold'
  }
})
