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

export const confirmation: string | AnimationObject | { uri: string } = require("../assets/lottie/confirmation.json");
