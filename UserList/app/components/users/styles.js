import { StyleSheet } from "react-native";

export default StyleSheet.create({
  progress: {
    flex: 1,
    justifyContent: "center"
  },
  flatList: {
    marginBottom: 50
  },
  listItem: {
    flex: 1,
    flexDirection: "row",
    borderTopWidth: 1,
    borderTopColor: "#eaeaed",
    paddingLeft: 15,
    paddingTop: 10,
    paddingBottom: 10
  },
  itemName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black"
  },
  itemEmail: {
    fontSize: 16,
    fontWeight: "bold"
  },
  header: {
    backgroundColor: "#E91E63",
    borderBottomWidth: 10,
    borderBottomColor: "#ddd"
  },
  imageContainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    overflow: "hidden",
    borderWidth: 2,
    borderColor: "#888889"
  },
  image: {
    flex: 1,
    width: null,
    height: null
  },
  userInfo: {
    flex: 8
  }
});
