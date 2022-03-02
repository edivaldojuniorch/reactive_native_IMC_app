import { React, useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration } from "react-native"
import ResultImc from "./ResultIMC";
import styles from "./style"

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preecha o peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMensage, setErrorMensage] = useState(null)

    function imcCalculator() {
        return setImc((weight / (height * height)).toFixed(2))
    }

    function fieldVerification() {
        if (imc == null) {
            Vibration.vibrate(200)
            setErrorMensage("Campo obrigatório*")
        }
    }

    function validationImc() {
        // console.log("weight:", weight)
        // console.log("height:", height)
        if (weight != null && height != null) {
            setTextButton("Calcular")
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual:")
            setTextButton("Calular Novamente")
            setErrorMensage(null)

        } else {
            fieldVerification()
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preecha o peso e altura")

            setHeight(null)
            setWeight(null)

        }
    }
    return (
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    style={styles.formInput}
                    value={height}
                    onChangeText={setHeight}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                ></TextInput>
                <Text style={styles.errorMensage}>{errorMensage}</Text>
                <Text style={styles.formLabel}>Peso</Text>
                <TextInput
                    style={styles.formInput}
                    value={weight}
                    onChangeText={setWeight}
                    placeholder="Ex. 73.375"
                    keyboardType="numeric"
                ></TextInput>
                <Text style={styles.errorMensage}>{errorMensage}</Text>
                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text>{textButton}</Text>
                </TouchableOpacity>
            </View>
            <ResultImc messageResultImc={messageImc} ResultImc={imc} />
        </View>
    );
}