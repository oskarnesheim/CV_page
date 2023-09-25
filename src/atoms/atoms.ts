import { atom } from "recoil";

export const bigScreen = atom({
  key: 'bigScreen', // unique ID (with respect to other atoms/selectors)
  default: true as boolean, // default value (aka initial value)
});