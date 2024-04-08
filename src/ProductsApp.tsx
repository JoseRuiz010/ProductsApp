import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './presentation/navigation/StackNavigation';
export const ProductApp = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}