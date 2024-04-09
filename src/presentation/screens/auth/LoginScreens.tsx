import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MyIcon } from '../../components/ui/MyIcon';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../../navigation/StackNavigation';

interface Props extends StackScreenProps<RootStackParams, 'LoginScreeen'> {

}

export const LoginScreen = ({ navigation }: Props) => {
  const { height } = useWindowDimensions()
  return (
    <Layout style={{ flex: 1 }}>
      <ScrollView style={{ marginHorizontal: 40 }}>
        <Layout style={{ paddingTop: height * 0.25 }}>
          <Text category='h1'>Ingresar</Text>
          <Text category='p2'>Pro favor, ingrese para continuar</Text>
        </Layout>
        <Layout style={{ marginTop: 20 }}>
          <Input accessoryLeft={<MyIcon name='email-outline' />} placeholder='Correo electronico' keyboardType='email-address' autoCapitalize='none' style={{ marginBottom: 10 }} />
          <Input accessoryLeft={<MyIcon name='lock-outline' />} placeholder='Contraseña' autoCapitalize='none' secureTextEntry style={{ marginBottom: 10 }} />
        </Layout>
        <Layout style={{ height: 20 }} />
        <Button accessoryRight={<MyIcon name='arrow-forward-outline' white />} onPress={() => console.log('ingresar')}>Ingresar</Button>

        <Layout style={{ height: 50 }} />

        <Layout style={{ alignItems: 'flex-end', flexDirection: 'row', justifyContent: 'center' }}>
          <Text>¿No tienes cuenta?</Text>
          <Text status='primary' category='s1' onPress={() => navigation.navigate('RegisterScreen')}>Crear una</Text>
        </Layout>
      </ScrollView>
    </Layout>
  )
}