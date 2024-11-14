import { StyleSheet, View, Pressable, Text } from "react-native";

type Props = {
    label: string,
}

const styles = StyleSheet.create({
  buttonContainer: {
      width: 320,
      height: 60,
      marginHorizontal: 20,
      alignItems: "center",
      justifyContent: "center",
      padding:  3,
  },
  button: {
      borderRadius: 10,
      width: '100%',
      height: '100%',
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
  },
  buttonLabel: {
        color: '#fff',
        fontSize: 18,
  },
})
