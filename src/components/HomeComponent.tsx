import React from "react";
import { Icon, Menu, MenuItem } from "@ui-kitten/components";

const ParentIcon = (props) => <Icon {...props} name="people" />;
const StudentIcon = (props) => <Icon {...props} name="person" />;
const TeacherIcon = (props) => <Icon {...props} name="book-open" />;
const ForwardIcon = (props) => <Icon {...props} name="arrow-ios-forward" />;

export default function HomeComponent({ navigation }) {
  return (
    <>
      <Menu>
        <MenuItem
          title="Parent"
          accessoryLeft={ParentIcon}
          accessoryRight={ForwardIcon}
          onPress={() => navigation.navigate("Parent")}
        />
        <MenuItem
          title="Student"
          accessoryLeft={StudentIcon}
          accessoryRight={ForwardIcon}
          onPress={() => navigation.navigate("Student")}
        />
        <MenuItem
          title="Teacher"
          accessoryLeft={TeacherIcon}
          accessoryRight={ForwardIcon}
          onPress={() => navigation.navigate("Teacher")}
        />
      </Menu>
    </>
  );
}
