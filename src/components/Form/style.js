import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext: {
        width: "100%",
        height: "100%",
        bottom: 0,
        backgroundColor: "#ffffff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignContent: "center",
        marginTop: 30
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        paddingTop: 30,
    },
    formLabel: {
        color: "#000000",
        fontSize: 18,
        paddingLeft: 20,
        paddingTop: 15,
    },
    formInput: {
        width: "90%",
        borderRadius: 30,
        backgroundColor: "#f6f6f6",
        height: 45,
        margin: 20,
        paddingLeft: 10,
        marginBottom: 4
    },
    textbuttonCalculator: {
        fontSize: 25,
        color: "#ffffff"

    },
    buttonCalculator: {
        borderRadius: 45,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30

    },
    errorMensage: {
        fontSize: 10,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 25,
        marginBottom: 10,
        marginTop: 0,

    }
});

export default styles