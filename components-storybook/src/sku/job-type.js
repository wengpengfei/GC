import Option from './option'

export default {
  mixins: [Option],
  async created() {
    const result = await this.$http.get('/web/job-type')
    this.list = result.data
  }
}
