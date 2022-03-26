import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015'
    },
    text: {
        fontSize: 25,
        color: 'white',
        margin: 20
    },
    input: {
        backgroundColor: '#1F1E25',
        color: 'white',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginHorizontal: 20
    },
})