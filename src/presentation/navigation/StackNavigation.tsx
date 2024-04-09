import { createStackNavigator, StackCardStyleInterpolator } from '@react-navigation/stack';
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

  const fadeAnimation: StackCardStyleInterpolator = ({ current }) => {
    return {
      cardStyle: {
        opacity: current.progress
      }
    }
  }

  return (
    <Stack.Navigator
      initialRouteName='HomeScreen'
      screenOptions={{
        headerShown: false,
        // cardStyleInterpolator: fadeAnimation
      }}
    >
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="LoginScreeen" component={LoginScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen options={{ cardStyleInterpolator: fadeAnimation }} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}