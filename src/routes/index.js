import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../pages/home'
import { Favorites } from '../pages/favorites'

import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        // Para remover o nome no header
        headerShown: false,
        // Para esconder a Tab bar quando for digitar algum texto
        tabBarHideOnKeyboard: true,
        //Para remover o nome na TabBar e deixar só o ícone
        tabBarShowLabel: false,
        //Para mudar a cor quando estiver ativa
        tabBarActiveTintColor: '#121212',
        tabBarStyle: {
          backgroundColor: 'fff',
          borderTopWidth: 0
        }
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="home" color="#000" size={size} />
            }

            return <Ionicons name="home-outline" color={color} size={size} />
          }
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: ({ color, size, focused }) => {
            if (focused) {
              return <Ionicons name="heart" color="#ff4141" size={size} />
            }

            return <Ionicons name="heart-outline" color={color} size={size} />
          }
        }}
      />
    </Tab.Navigator>
  )
}
