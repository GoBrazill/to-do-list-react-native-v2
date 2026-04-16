import React, { useState } from "react";
import { Modal, View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './style'

export default function AddTask({ visible, onSave, onClose }) {

    const [task, setTask] = useState({
        title: '',
        description: '',
        priority: '',
        start: '',
        end: ''
    })

    const handleSave = () => {
        onSave(task)
        setTask({
            title: '',
            description: '',
            priority: '',
            start: '',
            end: ''
        })
    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.modal}>
                <Text style={styles.titulo}>
                    Nova Tarefa
                </Text>

                <TextInput
                    style={styles.input}
                    placeholder='Título'
                    onChangeText={t => setTask({
                        ...task, title: t
                    })}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Descrição'
                    onChangeText={t => setTask({
                        ...task, description: t
                    })}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Prioridade: Alta, Média ou Baixa'
                    onChangeText={t => setTask({
                        ...task, priority: t
                    })}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Data de Início: DD/MM'
                    onChangeText={t => setTask({
                        ...task, start: t
                    })}
                />

                <TextInput
                    style={styles.input}
                    placeholder='Data de Término: DD/MM'
                    onChangeText={t => setTask({
                        ...task, end: t
                    })}
                />

                <TouchableOpacity style={styles.button} onPress={ handleSave }>
                    <Text>Salvar Tarefa</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={ onClose }>
                    <Text style={styles.txtCancelar}>Cancelar</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}