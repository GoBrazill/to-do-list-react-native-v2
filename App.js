import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { theme } from './src/styles/global';

import AddTask from './src/components/AddTask'
import EditTask from './src/components/EditTask'
import TaskCard from './src/components/TaskCard'
import SearchBar from './src/components/SearchBar'
import { useState } from 'react';

export default function App() {

  const [tasks, setTasks] = useState([])
  const [searchText, setSearchText] = useState('')
  const [addVisible, setAddVisible] = useState(false)
  const [editVisible, setEditVisible] = useState(false)
  const [selectedTask, setSelectedTask] = useState(null)

  const addTask = (newTask) => {
    setTasks([...tasks, { newTask, id: Date.now().toString() }])
    setAddVisible(false)
  }

  const updateTask = (updateTask) => {
    setTasks(tasks.map(t => t.id === updateTask.id ? updateTask : t))
    setAddVisible(false)
  }

  const deleteTask = (id) => setTasks(tasks.filter(t => t.id !== id))

  const filteredTasks = tasks.filter(t => t.title.toLowerCase().includes(searchText.toLowerCase()))

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Todo List</Text>

      <SearchBar value={searchText} onChangeText={setSearchText} />

      <FlatList
        data={filteredTasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TaskCard item={item} onDelete={deleteTask} onEdit={openEdit} />
        )}
      />

      <TouchableOpacity style={styles.button} onPress={() => setAddVisible(true)}>
        <Text style={styles.adicionar}>+</Text>
      </TouchableOpacity>

      <AddTask visible={addVisible}
        onSave={addTask}
        onClose={() => setAddVisible(false)}
      />

      <EditTask visible={editVisible}
        taskData={selectedTask}
        onSave={addTask}
        onClose={() => setEditVisible(false)}
      /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: 20,
    paddingTop: 60
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
  }
});
