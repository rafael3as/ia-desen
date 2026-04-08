import { View, Text, TouchableOpacity, Alert } from 'react-native';

export default function CartaoTarefa({ titulo, categoria, prazo, concluida }) {
  return (
    <View>
      <Text>{titulo}</Text>
      <Text>Categoria: {categoria}</Text>
      <Text>Prazo: {prazo}</Text>
      <Text style={{ color: concluida ? 'green' : 'red' }}>
        {concluida ? 'Concluída' : 'Pendente'}
      </Text>

      <TouchableOpacity onPress={() => Alert.alert(titulo, `Prazo: ${prazo}`)}>
        <Text>Ver Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}