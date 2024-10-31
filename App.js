import { SafeAreaView } from 'react-native';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';


function App() {
  const [tasks, setTasks] = useState([
    'Do Laundry',
    'Go to the gym',
    'Walk the dog',
  ]);

  return (
    <SafeAreaView style={{marginTop:10}}>
      <ToDoForm />
      <ToDoList tasks={tasks} />
    </SafeAreaView>
  );
}



export default App;