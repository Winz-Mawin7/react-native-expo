import React from "react";
import { AvatarStack } from "../components/AvatarStackComponent";
import { ScrollView } from "react-native";
import { Button, Text } from "@ui-kitten/components";
import { v4 as uuidv4 } from "uuid";

import ModalClockin from "../components/ModalClockin";

import { stacks } from "../core/mockup/stacks.data";
import { students } from "../core/mockup/clockin.data";

export default () => {
  return (
    <ScrollView>
      <Text>Student Screen</Text>
      <AvatarStack stacks={stacks} />

      {students.studyStatList.map((photo) =>
        photo.faceIn && photo.faceOut ? (
          <React.Fragment key={uuidv4()}>
            <ClockinButton key={uuidv4()} photo={photo.faceIn} title="Show Image FaceIn" />
            <ClockinButton key={uuidv4()} photo={photo.faceOut} title="Show Image FaceOut" />
          </React.Fragment>
        ) : photo.faceIn ? (
          <ClockinButton key={uuidv4()} status="warning" photo={photo.faceIn} title="Show Image FaceIn Only" />
        ) : photo.faceOut ? (
          <ClockinButton key={uuidv4()} status="danger" photo={photo.faceOut} title="Show Image FaceOut Only" />
        ) : null
      )}
    </ScrollView>
  );
};

const ClockinButton = ({ photo, title, status = "primary" }) => {
  const [visible, setVisible] = React.useState(false);

  const toggleModal = () => {
    setVisible(!visible);
  };

  return (
    <>
      <Button status={status} onPress={toggleModal}>
        {title}
      </Button>
      <ModalClockin visible={visible} toggleModal={toggleModal} photo={photo} />
    </>
  );
};
