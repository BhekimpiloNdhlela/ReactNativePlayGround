import {
    Pressable,
    StyleSheet,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const IconButton = ({onPress, color, icon }) => {
    return (
        <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressed}>
            <MaterialIcons name={icon} size={24} color={color} />
        </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    pressed: {
        opacity: 0.75
    }
});