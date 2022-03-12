import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity 
} from 'react-native';

import { styles } from './styles';

export function Home() {
  const [novaTarefa, setNovaTarefa] = useState();
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Ola, Leonardo!
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite a tarefa"
        placeholderTextColor="#555"
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => setCount(count+1)}
      >
        <Text style={styles.buttonText}>
          Adicionar
        </Text>

      </TouchableOpacity>
      <Text style={ [styles.text, { marginTop: 20}] }>
        Você clicou {count} vezes
      </Text>
    </SafeAreaView>
  );
}

// SafeAreaView: componente que evita que, no caso do ios,
// o conteúdo da tela fique por cima da barra de status.
// No Android, SafeAreaView não tem efeito.