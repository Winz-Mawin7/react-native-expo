interface AnimationObject {
  v: string;
  fr: number;
  ip: number;
  op: number;
  w: number;
  h: number;
  nm: string;
  ddd: number;
  assets: any[];
  layers: any[];
}

type LottieSourcePropType = string | AnimationObject | { uri: string };

export const confirmation: LottieSourcePropType = require("../assets/lottie/confirmation.json");
