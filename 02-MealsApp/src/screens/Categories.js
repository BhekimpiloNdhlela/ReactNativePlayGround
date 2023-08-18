import { FlatList } from "react-native";
import { Text, View } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from '../data/dummy-data'



const Categories = ({ navigation }) => {

    const renderItem = (itemData) => {
        const onPressHandler = () => {
            navigation.navigate("Meals", {
                categoryID: itemData.item.id
            });
        }

        return (
            <CategoryGridTile
                onPress={onPressHandler}
                title={itemData.item.title}
                color={itemData.item.color}
            />
        )
    }


    return (
        <View>
            <FlatList
                data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(item) => renderItem(item)}
                numColumns={2}
            />
        </View>
    );
}

export default Categories;