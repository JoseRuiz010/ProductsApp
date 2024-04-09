import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { MyStack } from './presentation/navigation/StackNavigation';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { useColorScheme } from 'react-native';
import { EvaIconsPack } from '@ui-kitten/eva-icons';


export const ProductApp = () => {

  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light
  const backgroundColor = colorScheme === 'dark' ? theme['color-base-800'] : theme['color-base-100']
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider  {...eva} theme={theme}>
        <NavigationContainer theme={{
          dark: colorScheme === 'dark',
          colors: {
            primary: theme['color-primary-500'],
            background: backgroundColor,
            card: theme['color-base-100'],
            text: theme['text-basic-color'],
            border: theme['color-base-800'],
            notification: theme['color-primary-500'],
          }
        }}>
          <MyStack />
        </NavigationContainer>
      </ApplicationProvider>
    </>
  )
}