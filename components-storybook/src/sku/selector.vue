<template>
  <div class="screen-style">
    <span class="style-name">{{ name }}：</span>
    <a href="#" @click.prevent="select(year)" v-for="year in list" :key="year.id">{{ year.name }}</a>
  </div>
</template>

<script>
  export default {
    props: {
      list: {
        type: Array,
        default() {
          return []
        }
      },
      name: String
    },
    methods: {
      select(item) {
        this.$emit('input', [item])
      }
    }
  }
</script>
