import React from "react";
import { Button } from "@ui-kitten/components";
import { v4 as uuidv4 } from "uuid";

import { AvatarStack } from "../components/AvatarStackComponent";
import ModalClockin from "../components/ModalClockin";

import { stacks } from "../core/mockup/stacks.data";
import { students } from "../core/mockup/clockin.data";
import { ScrollView, View } from "react-native";

export default function () {
  return (
    <ScrollView>
      <AvatarStack stacks={stacks} />
      {students.studyStatList.map((photo) =>
        photo.faceIn && photo.faceOut ? (
          <View key={uuidv4()} style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
            <ClockinButton key={uuidv4()} photo={photo.faceIn} title="Show Image FaceIn" />
            <ClockinButton key={uuidv4()} photo={photo.faceOut} title="Show Image FaceOut" />
          </View>
        ) : photo.faceIn ? (
          <ClockinButton key={uuidv4()} status="warning" photo={photo.faceIn} title="Show Image FaceIn Only" />
        ) : photo.faceOut ? (
          <ClockinButton key={uuidv4()} status="danger" photo={photo.faceOut} title="Show Image FaceOut Only" />
        ) : !photo.faceIn && !photo.faceOut ? (
          <ClockinButton key={uuidv4()} photo={photo.faceOut} title="No FaceIn and FaceOut" disable={true} />
        ) : null
      )}
    </ScrollView>
  );
}

const ClockinButton = ({ photo, title, status = "primary", disable = false }) => {
  const [visible, setVisible] = React.useState(false);
  const toggleModal = () => setVisible(!visible);

  return (
    <>
      <Button status={status} onPress={toggleModal} disabled={disable}>
        {title}
      </Button>
      <ModalClockin visible={visible} toggleModal={toggleModal} photo={photo} />
    </>
  );
};
