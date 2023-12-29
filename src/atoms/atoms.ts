import { atom } from "recoil";

export const bigScreen = atom({
  key: "bigScreen", // unique ID (with respect to other atoms/selectors)
  default: (window.innerWidth > 768) as boolean, // default value (aka initial value)
});
