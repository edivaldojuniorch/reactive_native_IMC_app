
import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style";

export default function ResultImc(props) {
    const onShare = async () => {
        const result = await Share.share({
            message: "Fiz um app em React Native. Nele é possível calcular o IMC. \
            O meu valor de hoje é:" + props.ResultImc,
        })
    }
    return (
        <View style={styles.resultImc}>
            <View style={styles.shareBoxButton}>
                {props.ResultImc != null ?
                    <TouchableOpacity onPress={onShare} style={styles.shareButton}>
                        <Text style={styles.shareText}>Share</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
        </View>
    );
}