import { View, Text } from "react-native";
import React from "react";
import { Button, Card, ListItem } from "@rneui/themed";
import StatusBubble from "./StatusBubble";
const TaskBubble = ({ task }) => {
  return (
    <ListItem style={{ width: "100%", marginBottom: 0, borderColor:"grey", borderWidth:1 }} containerStyle={{ width: "100%", marginBottom: 0 }}>
      {/* <Card style={{ width: "100%", marginBottom: 0 }} containerStyle={{ width: "100%", marginBottom: 0 }}> */}
        <View style={{ width: "100%", flexDirection: "row" }}>
          <View style={{ width: "73%", justifyContent: "space-between", marginRight: 10 }}>
            <Card.Title style={{ textAlign: "left" }}>{task.taskName}</Card.Title>
            <Card.Title style={{ textAlign: "left" }}>By {task.assignUser.name.split(" ")[0]}</Card.Title>
          </View>
          <View style={{  alignItems: "center", justifyContent: "center",width:"27%" }}>
            <StatusBubble status={task.status} />
          </View>
        </View>
      {/* </Card> */}
    </ListItem>
  );
};

export default TaskBubble;