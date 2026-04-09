import { View, Text, TouchableOpacity, StyleSheet } from "react-native-web";

import { theme } from '../../styles/global'

export default function taskCard({ item, onDelete, onEdit }) {
    const priorityColor = theme.colors.priority
    [item.priority] || theme.colors.textSub

    return (
        <View style={[StyleSheet.card, {
            borderLeftColor: priorityColor
        }]}>
            <View style={{ flex: 1 }}>
                <Text style={style.title}>
                    {item.title}
                </Text>
                <Text style={StyleSheetList.desc}>
                    {item.description}
                </Text>
                <Text style={[styles.badge, {
                    color: priorityColor
                }]}>  {item.priority}
                </Text>
                <Text style={styles.date}>
                    {item.start} - {item.end}
                </Text>
            </View>

            <View style={styles.actions}>
                <TouchableOpacity onPress={onEdit}>
                    <Text style={styles.icon}></Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}