import React, { useState } from 'react';
import { 
  SafeAreaView, 
  Text, 
  TextInput, 
  TouchableOpacity,
  ScrollView,
  FlatList 
} from 'react-native';

import { styles } from './styles';

export function Home() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleAddNewTask() {
    setTasks(oldState => [...oldState, newTask]);
  }

  return (
    <SafeAreaView style={styles.container} >
      <Text style={styles.text}>
        Ola, Leonardo!
      </Text>
      <TextInput 
        style={styles.input}
        placeholder="Digite a tarefa"
        placeholderTextColor="#555"
        onChangeText={setNewTask}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Text style={styles.buttonText}>
          Adicionar
        </Text>

      </TouchableOpacity>
      <Text style={ [styles.text, { marginTop: 20}] }>
        Minhas Tarefas
      </Text>

      <FlatList
        data={tasks}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.buttonTask}
          >
            <Text style={styles.textTask}>
              {item}
            </Text>
          </TouchableOpacity>
        )
        }
      />
    </SafeAreaView>
  );
}

// SafeAreaView: componente que evita que, no caso do ios,
// o conteúdo da tela fique por cima da barra de status.
// No Android, SafeAreaView não tem efeito.