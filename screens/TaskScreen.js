import React, { useEffect, useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
//import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import { collection, addDoc, onSnapshot, updateDoc, deleteDoc, doc } from "firebase/firestore";

import { db } from "../credenciales";
import TaskItem from "../conponets/TaskItem";



const TaskScreen = () => {
    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
        const tasksList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(tasksList);
      });
    
      return () => unsubscribe();
    }, []);
  
    const fetchTasks = async () => {
      const querySnapshot = await getDocs(collection(db, "tasks"));
      const tasksList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTasks(tasksList);
    };


    const addTask = async () => {
        if (title.trim() === "" || description.trim() === "") return;
    
        await addDoc(collection(db, "tasks"), {
          title,
          description,
          completed: false
        });
    
        setTitle("");
        setDescription("");
        fetchTasks();
      };

      const toggleComplete = async (id, completed) => {
        const taskRef = doc(db, "tasks", id);
        await updateDoc(taskRef, { completed: !completed });
        fetchTasks();
      };
    
      const deleteTask = async (id) => {
        await deleteDoc(doc(db, "tasks", id));
        fetchTasks();
      };
    
      return (
        <View style={{ padding: 20 }}>
          <TextInput
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
            style={styles.inputs}
          />
          <TextInput
            placeholder="Descripción"
            value={description}
            onChangeText={setDescription}
            multiline={true}  // Permite varias líneas
            numberOfLines={3} // Número inicial de líneas visibles
            style={styles.inputs1}
          />
          <Button title="Agregar Tarea" onPress={addTask} />
    
          <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TaskItem item={item} toggleComplete={toggleComplete} deleteTask={deleteTask} />
        )}
      />
        </View>
      );
    };

    const styles = {
      inputs: {
        borderWidth: 1,
        padding: 8,
        marginBottom: 10,
        borderRadius: 20,
        borderBottomColor: "black",
      },
      inputs1: {
        borderWidth: 1,
        padding: 8,
        minHeight: 50, 
        maxHeight: 150, 
        textAlignVertical: "top",
        marginBottom: 10,
        borderRadius: 20,
        borderBottomColor: "black",
      },
      
    };
    
    export default TaskScreen;
    
