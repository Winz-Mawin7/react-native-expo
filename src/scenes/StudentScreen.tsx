import React from "react";
import { AvatarStack } from "../components/AvatarStackComponent";
import { ScrollView } from "react-native";
import { Button, Divider, Text } from "@ui-kitten/components";

import ModalClockin from "../components/ModalClockin";

import { stacks } from "../core/mockup/stacks.data";
import { students } from "../core/mockup/clockin.data";

export default () => {
  return (
    <ScrollView>
      <Text>Student Screen</Text>
      <AvatarStack stacks={stacks} />

      {students.studyStatList.map((photo, index) =>
        photo.faceIn && photo.faceOut ? (
          <>
            <ClockinButton key={index} photo={photo.faceIn} title="Show Image FaceIn" />
            <ClockinButton key={++index} photo={photo.faceOut} title="Show Image FaceOut" />
          </>
        ) : photo.faceIn ? (
          <ClockinButton status="warning" key={index} photo={photo.faceIn} title="Show Image FaceIn Only" />
        ) : photo.faceOut ? (
          <ClockinButton status="danger" key={index} photo={photo.faceOut} title="Show Image FaceOut Only" />
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
