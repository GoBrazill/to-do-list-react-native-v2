import React, {useState, useEffect} from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native-web";
import { styles } from "./style";


export default function EditTask({visible, taskData, onSave, onClose}){
    const [currentTask, setCurrentTask] = useState(taskData)

    useEffect(() => { setCurrentTask(taskData)}, [taskData])

    return(
        <Modal visible={visible} animationType="fade">
            <View style={styles.modal}>
                <Text style={styles.titulo}>
                    Editar Tarefa
                </Text>

                <TextInput 
                value={currentTask?.title} 
                style={styles.title} 
                onChangeText={t => setCurrentTask({...currentTask, title: t})}
                />
            
                <TextInput value={currentTask?.description}
                style={styles.desc}
                onChangeText={t=> setCurrentTask({...currentTask({...currentTask, description: t})})} 
                />

                <TouchableOpacity style={styles.button} 
                onPress={() => onSave(currentTask)}
                >
                    <Text>Atualizar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} 
                onPress={onClose}
                >
                    <Text>Voltar</Text>
                </TouchableOpacity>

            </View>
        </Modal>
    )
}