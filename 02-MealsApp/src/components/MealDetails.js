import {
    View,
    Text,
    Image,
    StyleSheet,
} from "react-native"

const MealShortDetails = ({duration, complexity, affordability, style, textStyle}) => {

    return (
        <View>
            <View style={[styles.details, style]}>
                <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
                <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
                <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
            </View>
        </View>
    )
}

export default MealShortDetails;

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },
    detailItem: {
        marginHorizontal: 4,
        fontSize: 12,
    },
});