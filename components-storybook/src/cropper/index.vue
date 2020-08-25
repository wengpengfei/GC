<template>
  <el-dialog
    :visible.sync="dialogVisible"
    :title="title"
    @closed="dialogClose"
    width="700px"
    :modal-append-to-body="false"
    :append-to-body="true"
  >
    <div class="upload-img-panel">
      <div class="upload-img-box">
        <div class="avatar-uploader">
          <div class="el-upload">
            <!-- :img="option.img"
              :output-size="option.size"
              :output-type="option.outputType"
              :info="true"
              :full="option.full"
              :fixed="fixed"
              :fixed-number="fixedNumber"
              :can-move="option.canMove"
              :can-move-box="option.canMoveBox"
              :fixed-box="option.fixedBox"
              :original="option.original"
              :auto-crop="option.autoCrop"
              :auto-crop-width="option.autoCropWidth"
              :auto-crop-height="option.autoCropHeight"
              :center-box="option.centerBox"
              :high="option.high"
              :max-img-size="option.max" -->
            <vue-cropper
              ref="cropper"
              style="width: 100%; height: 100%;"
              @realTime="realTime"
              mode="cover"
              v-bind="option"
            ></vue-cropper>
          </div>
        </div>
      </div>
      <div class="view-box">
        <span class="tit">效果预览</span>
        <el-select v-model="ratio" style="width: 80px; margin-left: 5px;" size="mini">
          <el-option value="16/9" label="16:9"></el-option>
          <el-option value="1/1" label="1:1"></el-option>
          <el-option value="4/3" label="4:3"></el-option>
        </el-select>
        <div
          class="view-item view-item-1 preview"
          style="font-size: 30px;"
          :style="{
            width: `${previews.w * 1.2}px`,
            height: `${previews.h * 1.2}px`,
            overflow: 'hidden',
            margin: '5px'
          }"
        >
          <div :style="previews.div">
            <img :src="previews.url" :style="previews.img" />
          </div>
        </div>
      </div>

      <div class="test-button">
        <label class="btn" for="uploads">上传</label>
        <input
          type="file"
          id="uploads"
          style="position:absolute; clip:rect(0 0 0 0);"
          accept="image/png, image/jpeg, image/gif, image/jpg"
          @change="uploadImg($event, 1)"
        />
        <button @click="refreshCrop" class="btn">
          重新截图
        </button>
        <!-- 放大 -->
        <el-button icon="el-icon-plus" @click="changeScale(1)" circle class="btn"></el-button>
        <!-- 缩小 -->
        <el-button icon="el-icon-minus" @click="changeScale(-1)" circle class="btn"></el-button>
        <!-- 左转 -->
        <el-button icon="el-icon-refresh-left" @click="rotateLeft" circle class="btn">左转</el-button>
        <!-- 右转 -->
        <el-button icon="el-icon-refresh-right" @click="rotateRight" circle class="btn">右转</el-button>
      </div>
      <div class="hb-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button @click="startCrop" type="primary" :loading="isUploading">
          {{ isUploading ? '上传中' : '确 定' }}
        </el-button>
      </div>
    </div>
  </el-dialog>
</template>

<script>
  import { VueCropper } from 'vue-cropper'
  import axios from 'axios'

  export default {
    components: {
      VueCropper
    },
    props: {
      // 是否有原先就需要进行裁剪的图片
      value: {
        type: String,
        default: ''
      },
      // 传参地址
      actionUrl: {
        type: String,
        default: ''
      },
      title: {
        type: String,
        default: '修改头像'
      },
      visible: {
        type: Boolean,
        default: false
      },
      headers: {
        type: Object,
        default: function() {
          return {}
        }
      }
    },
    data() {
      return {
        model: false,
        modelSrc: '',
        crap: false,
        previews: {},
        option: {
          img: '',
          outputSize: 1,
          full: false, // 是否输出原图比例的截图
          outputType: 'png', // 输出图片格式
          canMove: true, // 能否拖动图片
          fixedBox: false, // 截图框固定大小
          original: false, //上传图片是否显示原始宽高 (针对大图 可以铺满)
          canMoveBox: true, // 能否拖动截图框
          autoCrop: true, // 是否自动生成截图框
          // 只有自动截图开启 宽度高度才生效
          autoCropWidth: 160,
          autoCropHeight: 90,
          centerBox: false, // 截图框是否限制在图片里(只有在自动生成截图框时才能生效)
          high: true, // 是否根据dpr生成适合屏幕的高清图片
          fixedNumber: [16, 9], // 图片比例
          maxImgSize: 99999,
          info: true,
          fixed: true
        },
        show: true,
        types: ['image/jpeg', 'image/gif', 'image/bmp', 'image/png', 'image/jpg'],
        ratio: '16/9',
        dialogVisible: false,
        isUploading: false
      }
    },
    watch: {
      value(val) {
        this.option.img = val
      },
      ratio(value) {
        this.option.fixedNumber[0] = Number(value.split('/')[0])
        this.option.fixedNumber[1] = Number(value.split('/')[1])
        this.refreshCrop()
      },
      dialogVisible() {
        this.$emit('update:visible', this.dialogVisible)
      },
      visible() {
        console.log(this.dialogVisible)
        this.dialogVisible = this.visible
        if (this.visible) {
          this.$set(this.option, 'img', this.value)
        }
      }
    },
    methods: {
      //清空
      clearCrop() {
        // clear
        this.$refs.cropper.clearCrop()
      },
      // 重置
      refreshCrop() {
        // clear
        this.$refs.cropper.refresh()
      },
      // 放大or缩小
      changeScale(num) {
        num = num || 1
        this.$refs.cropper.changeScale(num)
      },
      // 左转
      rotateLeft() {
        this.$refs.cropper.rotateLeft()
      },
      // 右转
      rotateRight() {
        this.$refs.cropper.rotateRight()
      },
      // 输出截图图片
      finish(type) {
        // 输出
        if (type === 'blob') {
          return new Promise(resolve => {
            this.$refs.cropper.getCropBlob(data => {
              const img = window.URL.createObjectURL(data)
              this.model = true
              this.modelSrc = img
              resolve()
            })
          })
        } else {
          return new Promise(resolve => {
            this.$refs.cropper.getCropData(data => {
              this.model = true
              this.modelSrc = data
              resolve()
            })
          })
        }
      },
      // 实时预览函数
      realTime(data) {
        this.previews = data
      },
      uploadImg(e) {
        if (e) {
          //上传图片
          // this.option.img
          // 大小 单位M
          const file = e.target.files[0]
          const is2MB = file.size / 1024 / 1024 < 2
          if (!/\.(gif|jpg|jpeg|png|bmp|GIF|JPG|PNG)$/.test(e.target.value)) {
            alert('图片类型必须是.gif,jpeg,jpg,png,bmp中的一种')
            return false
          }
          if (!is2MB) {
            return false
          }
          // 校验通过之后，转为base图片
          const reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onloadend = () => {
            // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
            const dataURL = reader.result
            this.option.img = dataURL
          }
          return
        }
      },
      handleAvatarSuccess() {
        this.$message.success('上传图片成功！')
      },
      //  上传
      async getResourceUrl() {
        const data = {
          base64Data: this.modelSrc.split(',')[1]
        }
        // 转为图片
        // const baseUrl = `https://resourcev1.dev.59iedu.com:8443/auth/uploadBase64ToProtectedFile`
        const baseUrl = this.actionUrl
        try {
          axios.post(baseUrl, data, { headers: this.headers }).then(data => {
            this.imageCode = data.data.url
            this.$emit('input', this.imageCode)
            this.dialogClose()
          })
        } catch (error) {
          this.$message('图片上传失败')
        }
      },
      // 取消
      cancel() {
        this.dialogClose()
      },
      // 开始上传
      async startCrop() {
        this.isUploading = true
        await this.finish('base64')
        await this.getResourceUrl()
        this.isUploading = false
      },
      // 关闭的时候
      dialogClose() {
        this.dialogVisible = false
        this.clearCrop() // 清空
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import './styles/style.scss';
</style>
