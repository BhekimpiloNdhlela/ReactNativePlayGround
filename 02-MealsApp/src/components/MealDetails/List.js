import {
    View,
    Text,
    StyleSheet,
} from "react-native"

const List = ({ list }) => {

    return (
        <>
            {list.map((listItem, index) =>
                <View style={styles.listItem} key={index}>
                    <Text style={styles.itemText}>{listItem}</Text>
                </View>
            )}
        </>
    )
}

export default List;

const styles = StyleSheet.create({
    listItem: {
        borderRadius: 6,
        paddingHorizontal: 8,
        marginVertical: 4,
        paddingVertical: 4,
        marginHorizontal: 12,
        backgroundColor: '#e2b497',
    },
    itemText: {
        color: '#351401',
        textAlign: 'center',
    }

});