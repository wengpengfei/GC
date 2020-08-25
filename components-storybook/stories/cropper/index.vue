<template>
  <div>
    <el-upload
      action="https://jsonplaceholder.typicode.com/posts/"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      @click.native.prevent="visible = true"
    >
      <img
        class="el-upload-list__item-thumbnail"
        :src="`http://192.168.1.228:8080/mfs/${url}`"
        alt=""
        v-if="!!url"
        @click.stop="handlePictureCardPreview"
      />
      <i class="el-icon-plus" v-else></i>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="`http://192.168.1.228:8080/mfs/${url}`" alt="" />
    </el-dialog>
    <cropper
      :visible.sync="visible"
      :headers="headers"
      v-model="url"
      :actionUrl="'https://resourcev1.dev.59iedu.com:8443/auth/uploadBase64ToProtectedFile'"
    ></cropper>
  </div>
</template>

<script>
  import cropper from '@/cropper'

  export default {
    components: {
      cropper
    },
    data() {
      return {
        visible: false,
        headers: {
          'App-Authentication': `Basic eyJhcHBFbmQiOiJXZWIiLCJhcHBJZCI6InRlbXBfYXBwX2lkIiwicGxhdGZvcm1JZCI6IjA3NTQwZDc3Y3AyMTQ2M2I5NDk4MmM4NDU2anNrcTAyIiwicGxhdGZvcm1WZXJzaW9uSWQiOiJjcDk1YmM0NzIxNDc0MTAwODA4YmNhNTg4Mmpza3EwMiIsInByb2plY3RJZCI6IjQwMjg5Njc4NmU0NDlmMzkwMTZlNDQ5ZjIwMjAwMjA2Iiwic3ViUHJvamVjdElkIjoiNDAyODk2Nzg2ZTQ0OWYzOTAxNmU0NDlmMjAyMDBzdWIifQ==`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1OTE5Mzk3MDQsInVzZXJfbmFtZSI6IjEzNzk5NDMzNDQ4IiwiYXV0aG9yaXRpZXMiOlsiZWNmMWI2MWVjNjJjNDdlMDg5MDdiNzhkZjc2Y2EzZTAiXSwianRpIjoiZWY5NDQwZTAtNzNjZi00MWVmLThiZjktOGIwMTIwYzdkYzA5IiwiY2xpZW50X2lkIjoidGVtcF9hcHBfaWQiLCJzY29wZSI6WyJhbGwiXX0.gkk2zYF-Y7mGQTMVSvxgZsdN5DWR2KrXPjTgdVNl3mk`,
          'Content-Type': 'application/json;charset=utf-8'
        },
        url: '',
        dialogImageUrl: '',
        dialogVisible: false
      }
    },
    methods: {
      handlePictureCardPreview(url) {
        this.dialogImageUrl = url
        this.dialogVisible = true
      }
    }
  }
</script>
