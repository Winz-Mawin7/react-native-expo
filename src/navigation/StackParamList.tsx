import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { ImageSourcePropType } from "react-native";

export type StackParamList = {
  Home: undefined;
  Parent: undefined;
  Student: undefined;
  Teacher: undefined;
  Profile: undefined;
  StudentDetail: {
    name: string;
    photo: ImageSourcePropType;
    courses: Array<{ subject: string; spendTime: number; totalTime: number }>;
    achieve: Array<string>;
  };
};

export type StackParamProps<T extends keyof StackParamList> = {
  navigation: StackNavigationProp<StackParamList, T>;
  route: RouteProp<StackParamList, T>;
};
