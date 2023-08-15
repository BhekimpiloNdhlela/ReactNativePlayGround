import { useState } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Button
} from 'react-native';
import { StatusBar } from 'expo-status-bar';

import GoalItem from './Components/GoalItem';
import GoalInput from './Components/GoalInput';

const App = () => {
  const [inputGoal, setInputGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const goalInputHandler = (inputText) => {
    setInputGoal(inputText)
  }

  const goalDeleteHandler = (id) => {
    setGoals((currentGoals) =>
      currentGoals.filter((goal) => id !== goal.id)
    );
  }

  const openAddGoalHandler = () => {
    setModalVisible(true);
  }

  const addGoalHandler = () => {
    if (inputGoal) {
      setGoals((currentGoals) =>
        [
          ...currentGoals,
          { title: inputGoal, id: currentGoals.length + 1 }
        ]
      );
      setInputGoal('');
      return;
    }

    alert("Goal can not be empty.");
  }

  const closeAddGoalModalHandler = () => {
    setModalVisible(false);
    setInputGoal('');
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={openAddGoalHandler}
        />
        <GoalInput
          modalOpen={modalVisible}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          inputGoal={inputGoal}
          closeModal={closeAddGoalModalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) =>
              <GoalItem
                id={itemData.item.id}
                goal={itemData.item.title}
                onDelete={goalDeleteHandler}
              />
            }
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </>
  );
}

export default App;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: '#1e085a',
  },
  goalsContainer: {
    flex: 5
  }
});