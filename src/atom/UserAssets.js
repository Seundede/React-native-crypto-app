import { atom, selector } from "recoil";

export const userAsset = atom({
  key: "userAsset",
  default: allUserAssets,
});

export const allUserAssets = selector({
  key: "allUserAssets",
  get: async () => {
      return [{id: 'bitcoin'}]
  },
});
