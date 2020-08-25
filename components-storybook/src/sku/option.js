import Selector from './selector'

export default {
  components: {
    Selector
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  watch: {
    select(value) {
      this.$emit('input', value)
    }
  },
  data() {
    return {
      list: [],
      select: undefined
    }
  },
  render() {
    return (
      <selector list={this.list} name={this.name} v-model={this.select}></selector>
    )
  }
}
