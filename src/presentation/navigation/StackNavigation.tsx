import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/home/HomeScreen';
import { ProductScreen } from '../screens/products/ProductsScreen';
import { RegisterScreen } from './../screens/auth/RegisterScreen';
import { LoadingScreen } from '../screens/LoadingScreen';
import { LoginScreen } from '../screens/auth/LoginScreens';

export type RootStackParams = {
  LoadingScreen: undefined,
  LoginScreeen: undefined,
  RegisterScreen: undefined,
  HomeScreen: undefined,
  ProductScreen: { productId: string }
}

const Stack = createStackNavigator<RootStackParams>();


export const MyStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="LoginScreeen" component={LoginScreen} />
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}