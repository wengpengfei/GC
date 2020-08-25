<template>
  <div>
    <el-card>
      <sku v-model="sku"></sku>
    </el-card>
    <el-card>
      {{ sku }}
    </el-card>
  </div>
</template>

<script>
import Sku from "@/sku";
import { text, boolean } from "@storybook/addon-knobs";

export default {
  components: {
    Sku
  },
  props: {
    isDisabled: {
      default: boolean("Disabled", false)
    },
    text: {
      default: text("Text", "Hello Storybook")
    }
  },
  data() {
    return {
      sku: {}
    };
  }
};
</script>
