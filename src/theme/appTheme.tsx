import { StyleSheet } from "react-native";

export const colores = {
    primary: '#5856D6'
};

export const styles = StyleSheet.create({
    globalMargin : {
        marginHorizontal: 20
    },

    title: {
        fontSize: 30,
        marginBottom: 10
    },

    boton: {
        width: 80,
        height: 80,
        backgroundColor: 'orange',
        borderRadius: 10,
        justifyContent: 'center',
        padding: 10,
        marginTop: 10
    },

    botonText: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
    avatarContainer: {
        alignItems: 'center',
        padding: 10
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 100
    },
    menuContainer: {
        padding: 20,
        alignItems: 'center' 
    },
    menuBoton: {
        marginVertical: 10
    },
    textMenu: {
        fontSize: 20,
        lineHeight: 30
    }



});