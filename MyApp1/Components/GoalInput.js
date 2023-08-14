import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  Image
} from 'react-native';

const GoalInput = (props) => {
  return (
    <Modal visible={props.modalOpen} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image style={styles.image}source={require('../assets/images/goal.png')}/>
        <TextInput
          onChangeText={props.goalInputHandler}
          style={styles.textInput}
          placeholder='Your course goal'
          value={props.inputGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={props.addGoalHandler} title='Add' color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button onPress={props.closeModal} title='Cancel' color="#f31282"/>
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: "#311b6b"
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 16
  },
  image:{
    width: 100,
    height:100,
    margin: 20
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color:'#120438',
    width: "100%",
    borderRadius: 6,
    padding: 16
  },
});
