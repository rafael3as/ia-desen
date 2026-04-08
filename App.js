import { StyleSheet, View } from 'react-native';
import CartaoTarefa from './components/CartaoTarefa';

export default function App() {
  return (
    <View style={styles.container}>
      <CartaoTarefa
        titulo="Estudar React Native"
        categoria="Estudo"
        prazo="10/04/2026"
        concluida={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 16,
  },
});