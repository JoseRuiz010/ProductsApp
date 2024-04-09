import { Button, Icon, Layout } from '@ui-kitten/components';
import { Text, View } from 'react-native';
export const HomeScreen = () => {
  return (
    <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>HomeScreen</Text>
      <Text>{process.env.API_URL}</Text>
      <Button
        accessoryLeft={<Icon name="facebook" />}
      >Guardar</Button>
    </Layout>
  )
}