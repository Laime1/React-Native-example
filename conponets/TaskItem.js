import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Checkbox from "expo-checkbox";
import Icon from 'react-native-vector-icons/FontAwesome'; 

const TaskItem = ({ item, toggleComplete, deleteTask }) => {
  return (
    <View style={styles.container}>
      <Checkbox
        value={item.completed}
        onValueChange={() => toggleComplete(item.id, item.completed)}
      />
      <View style={styles.taskInfo}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
        <Text style={styles.status}>
          Estado: {item.completed ? "Completado ✅" : "Pendiente"}
        </Text>
      </View>
      <TouchableOpacity onPress={() => deleteTask(item.id)} style={styles.deleteButton}>
      <Icon name="trash" size={20} color="red" />  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  taskInfo: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  status: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007BFF",
  },
  deleteButton: {
    flexDirection: 'row', // Asegura que el texto y el ícono estén en línea
    alignItems: 'center',
  },
  deleteText: {
    color: 'red',
    marginLeft: 5, // Espacio entre el ícono y el texto
  },
});

export default TaskItem;
