<template>
  <div>
    <div class="selected-list clear">
      <span class="title">筛选条件：</span>
      <a href="#" class="conditions-btn" v-for="sku in selectedSkus" :key="sku.id">
        {{ sku.name }}：
        <span class="txt">{{ sku }}</span>
        <span class="p-ico close-ico" @click.prevent="sku.clear()"><i class="el-icon-close"></i></span>
      </a>
      <span class="clear-btn" v-if="selectedSkus.length" @click.prevent="clearAll()">清空筛选条件</span>
      <span style="color: gray" v-else>请选择筛选条件</span>
    </div>
    <div class="m-screen">
      <component
        v-show="!sku.selected.length"
        :is="`sku-${sku.id}`"
        :name="sku.name"
        v-for="sku in skuList"
        :key="sku.id"
        v-model="sku.selected"
      ></component>
    </div>
  </div>
</template>

<style lang="scss">
  @import "index.scss";
</style>

<script>
  import SkuYear from './year'
  import SkuTrainingType from './trainning-type'
  import SkuTrainees from './trainees'
  import SkuJobType from './job-type'
  import SkuUnitType from './unit-type'

  class SkuOption {
    id = ''
    name = ''
    visible = true
    selected = []

    toString() {
      return this.selected.map(item => item.name).join('、')
    }

    clear() {
      this.selected = []
    }

    constructor(id, name) {
      this.id = id
      this.name = name
    }
  }

  export default {
    components: {
      SkuYear,
      SkuTrainingType,
      SkuTrainees,
      SkuJobType,
      SkuUnitType
    },
    data() {
      return {
        skuList: [
          new SkuOption('year', '培训年度'),
          new SkuOption('training-type', '培训类别'),
          new SkuOption('trainees', '培训对象'),
          new SkuOption('job-type', '岗位类别'),
          new SkuOption('unit-type', '单位类别')
        ]
      }
    },
    computed: {
      selectedSkus() {
        const result = this.skuList.filter(sku => {
          return sku.selected.length
        })
        this.$emit(
          'input',
          result.map(item => {
            return {
              type: item.id,
              ...item.selected[0]
            }
          })
        )
        return result
      }
    },
    methods: {
      getParams() {
        return this.selectedSkus
      },
      clearAll() {
        this.selectedSkus.forEach(sku => {
          sku.clear()
        })
      }
    }
  }
</script>
