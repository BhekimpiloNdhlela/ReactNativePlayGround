import {
    View,
    Text,
    StyleSheet,
} from "react-native"

const Subtitle = ({ subtitle }) => {

    return (
        <View style={styles.subTitleContainer}>
            <Text style={styles.subTitle}>{subtitle}:</Text>
        </View>
    )
}

export default Subtitle;

const styles = StyleSheet.create({
    subTitle: {
        color: '#e2b497',
        fontSize: 18,
        fontWeight: 'bold',
    },
    subTitleContainer: {
        margin: 4,
        padding: 6,
        marginHorizontal: 12,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
        alignItems: 'center'
    }
});