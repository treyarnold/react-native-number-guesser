import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameoverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over</Text>
      <Text>Number of Rounds: {props.roundsNumber}</Text>
      <Text>Your number was: {props.userNumber}</Text>
      <Button title="Play Again?" onPress={props.onRestart} />
    </View>
  )

};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});

export default GameoverScreen;