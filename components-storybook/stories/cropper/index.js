import Preview from "./index.vue";
import { withKnobs } from "@storybook/addon-knobs";

export const Index = () => Preview;

export default {
  title: "cropper",
  decorators: [withKnobs]
};
