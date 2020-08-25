<template>
  <el-card>
    <el-button @click="dialog01 = true" class="btn-com mr15 mb15">阅读协议</el-button>
    <el-dialog title="阅读协议" :visible.sync="dialog01" width="720px" :show-close="true">
      <div class="f15">
        <p>第1条 遵守国家有关法律、行政法规和管理规章，严格执行信息安全管理规定。</p>
        <p class="mt10">
          第2条
          根据《互联网信息服务管理办法》规定，国家对经营性互联网信息服务实行许可制度；对非经营性互联网信息服务实行备案制度。甲方未取得许可或者未履行备案手续，将不得从事互联网信息服务。甲方需要开展电子公告服务的，须遵守《互联网电子公告服务管理规定》。
        </p>
        <p class="mt10">
          第3条
          依据《非经营性互联网备案管理办法》规定，如备案信息不真实，将关闭网站并注销备案。用户保证所有备案信息真实有效，当用户的备案信息发生变化时应及时到备案系统中提交更新信息，如因未及时更新而导致备案信息不准确，将对网站进行关闭处理。
        </p>
        <p class="mt10">第4条 用户不得利用乙方服务发布含有下列内容之一的信息：</p>
        <p class="mt10">1、反对宪法所规定的基本原则的；</p>
        <p class="mt10">2、危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的；</p>
        <p class="mt10">3、损坏国家荣誉和利益的；</p>
        <p class="mt10">4、煽动民族仇恨、民族歧视、破坏民族团结的；</p>
        <p class="mt10">5、破坏国家宗教政策，宣扬邪教和封建迷信的；</p>
        <p class="mt10">6、散布谣言、扰乱社会秩序、破坏社会稳定的；</p>
        <p class="mt10">7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；</p>
        <p class="mt10">8、侮辱或者诽谤他人，侵害他人合法权益的；</p>
        <p class="mt10">9、含有法律、行政法规禁止的其他内容的。</p>
        <p class="mt10">第5条 客户发布的信息必须遵守国家有关知识产权的法律、政策规定。</p>
        <p class="mt10">
          第6条
          客户在联网测试、试运行期间以及业务正式开通后，应保证其所提供业务内容的安全性与稳定性，不对电信运营商的相关业务平台造成危害。
        </p>
        <p class="mt10">
          第7条 客户应建立有效的信息安全保密管理制度和技术保障措施，并接受相关业务主管部门的管理、监督和检查。
        </p>
        <p class="mt10">
          第8条
          若违反上述规定，服务方、电信运营商或电信行业主管部门有权采取必要措施，关闭相关信息源接入通道和信息发送通道，情节严重者终止合作业务，追究客户的法律责任，并追索由此产生的相应的经济损失。
        </p>
        <p class="mt10">
          第9条
          在使用培训服务过程中，服从监督和管理；若我司违反本承诺书的承诺，本公司愿意承担由此引起的一切法律责任，并接受相应的处罚。
        </p>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini">请阅读（8s）</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialog02 = true" class="btn-com mr15 mb15">试试人脸识别的效果</el-button>
    <el-dialog title="试试人脸识别的效果" :visible.sync="dialog02" width="720px" :show-close="true">
      <div class="face-recognition-box clear">
        <div class="qrcode-box">
          <div class="tit"><i class="el-icon-warning worm-ico-o"></i>使用微信“扫一扫”功能，扫以下二维码。</div>
          <div class="rel mt20">
            <img class="wx-qrcode" src="./images/pic-code-gzh.png" />
            <a class="wx-refresh" href="#"><img src="./images/icon-refresh.png" alt=" "/></a>
          </div>
          <div class="f15 mb20">扫码后，拍摄人像照片</div>
        </div>
        <div class="take-photo-tip-box">
          <div class="tit">拍摄人脸照片，请正对手机，确保光线充足</div>
          <div class="con">
            <img src="./images/pic-take-photo.jpg" />
          </div>
          <div class="tip">请确保是本人操作</div>
        </div>
      </div>
    </el-dialog>
    <el-button @click="dialog03 = true" class="btn-com mr15 mb15">修改基准照片1</el-button>
    <el-dialog title="修改基准照片" :visible.sync="dialog03" width="720px" :show-close="true">
      <div class="face-recognition-box clear">
        <div class="qrcode-box">
          <div class="tit"><i class="el-icon-warning worm-ico-o"></i>使用微信“扫一扫”功能，扫以下二维码。</div>
          <div class="rel mt20">
            <img class="wx-qrcode" src="./images/pic-code-gzh.png" alt="" width="150" />
            <!--二维码失效-->
            <a class="wx-refresh" href="#"><img src="./images/icon-refresh.png" alt=" "/></a>
          </div>
          <div class="f15 mb20">扫码后，拍摄人像照片</div>
        </div>
        <div class="take-photo-tip-box">
          <div class="tit">拍摄人脸照片，请正对手机，确保光线充足</div>
          <div class="con">
            <img src="./images/pic-take-photo.jpg" />
          </div>
          <div class="tip">请确保是本人操作</div>
        </div>
      </div>
    </el-dialog>
    <el-button @click="dialog04 = true" class="btn-com mr15 mb15">修改基准照片2</el-button>
    <el-dialog title="修改基准照片" :visible.sync="dialog04" width="720px" :show-close="true">
      <div class="face-recognition-box clear">
        <div class="qrcode-box" style="margin-left: auto; margin-right: auto; float: none;">
          <div class="tit"><img src="./images/pic-warning.png" />请确认上传的人脸认证照片</div>
          <div class="confirm-photo-box tc">
            <div class="photo">
              <img src="./images/user-man.jpg" width="144" height="200" />
            </div>
            <div class="mb10">
              <el-checkbox v-model="checked" size="medium">
                我已阅读
                <el-link href="#" target="_blank" class="cb">《人脸认证协议》</el-link>
              </el-checkbox>
            </div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button size="mini">重新拍摄</el-button>
        <el-button type="primary" size="mini">确认并提交</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialog05 = true" class="btn-com mr15 mb15">修改基准照提示</el-button>
    <el-dialog title="提示" :visible.sync="dialog05" width="300px" :show-close="true">
      <div class="f15 tc">修改基准照次数已用完，无法修改。</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini">确定</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialog06 = true" class="btn-com mr15 mb15">基准照次数提示</el-button>
    <el-dialog title="基准照次数" :visible.sync="dialog06" width="300px" :show-close="true">
      <div class="f15 tc">当前仅剩 <span class="fb ci">2</span> 次机会修改基准照片</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini">确认修改</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialog07 = true" class="btn-com mr15 mb15">人脸照片比对中</el-button>
    <el-dialog title="" :visible.sync="dialog07" width="240px" :show-close="false">
      <div class="icon"><img src="./images/loading.gif" /></div>
      <div class="f15 tc mt20">人脸照片比对中...</div>
    </el-dialog>
    <el-button @click="dialog08 = true" class="btn-com mr15 mb15">比对通过</el-button>
    <el-dialog title="" :visible.sync="dialog08" width="240px" :show-close="false">
      <div class="icon"><img src="./images/pic-success.png" /></div>
      <div class="f15 tc mt20">比对通过，可成功进入学习！</div>
    </el-dialog>
    <el-button @click="dialog09 = true" class="btn-com mr15 mb15">比对不通过</el-button>
    <el-dialog title="" :visible.sync="dialog09" width="480px" :show-close="false">
      <div class="icon"><img src="./images/pic-wrong.png" /></div>
      <div class="mt10 tc">当前拍摄的照片与基准照片比对不通过，无法进入学习！</div>
      <div class="mt20 bg-g p20">
        您可以通过以下方式，提升比对成功率：<br />
        1.请确认为本人操作；<br />
        2.拍照环境光线尽量充足，或者开启相机闪光灯;<br />
        3.在线咨询平台客服， 核对基准比对照片。
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini">重新拍摄</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialog10 = true" class="btn-com mr15 mb15">人像对比成功</el-button>
    <el-dialog title="" :visible.sync="dialog10" width="240px" :show-close="false">
      <div class="icon"><img src="./images/pic-success.png" /></div>
      <div class="f15 tc mt20">人像对比成功</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini">确定</el-button>
      </div>
    </el-dialog>
    <el-button @click="dialog011 = true" class="btn-com mr15 mb15">人像对比失败</el-button>
    <el-dialog title="" :visible.sync="dialog011" width="240px" :show-close="false">
      <div class="icon"><img src="./images/pic-wrong.png" /></div>
      <div class="f15 tc mt20">人像对比失败</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" size="mini">重新拍摄</el-button>
      </div>
    </el-dialog>
  </el-card>
</template>
<script>
export default {
  data() {
    return {
      dialog01: false,
      dialog02: false,
      dialog03: false,
      dialog04: false,
      dialog05: false,
      dialog06: false,
      dialog07: false,
      dialog08: false,
      dialog09: false,
      dialog10: false,
      dialog011: false
    };
  },
  computed: {},
  watch: {},
  methods: {}
};
</script>

<style lang="scss">
$important: #ff2f2f;
$base: #2a82fe;

// **********人脸识别********** //
.face-recognition-box {
  width: 630px;
  margin: 0 auto;

  .qrcode-box {
    float: left;
    width: 260px;
    text-align: center;
    margin-top: 30px;

    .tit {
      font-size: 12px;
      background: #f5f5f5;
      border-radius: 5px;
      height: 36px;
      line-height: 36px;

      img {
        width: 16px;
        height: 16px;
        vertical-align: middle;
        margin-right: 5px;
        margin-bottom: 2px;
      }
    }

    .confirm-photo-box {
      .photo {
        width: 144px;
        height: 200px;
        border-radius: 5px;
        border: 1px solid $base;
        margin: 20px auto;
        overflow: hidden;

        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }

  .take-photo-tip-box {
    float: right;
    width: 310px;
    height: 230px;
    padding-top: 20px;
    border-radius: 5px;
    background: #353743;
    margin-top: 20px;
    color: #fff;
    text-align: center;
    position: relative;

    .tit {
      font-weight: bold;
    }

    .con {
      img {
        width: 180px;
        height: 160px;
      }
    }

    .tip {
      font-size: 12px;
      color: #9296aa;
      margin-top: 10px;
    }

    &::before {
      content: "";
      position: absolute;
      top: 50px;
      left: -30px;
      width: 0;
      border-width: 15px;
      border-style: solid;
      border-color: transparent #353743 #353743 transparent;
    }
  }

  .wx-refresh {
    width: 72px;
    height: 72px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin: -36px 0 0 -36px;
    display: inline-block;
  }

  .wx-qrcode {
    width: 160px;
    height: 160px;
  }
}

.icon {
  width: 64px;
  height: 64px;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
}

.dialog-footer {
  text-align: center;
}
</style>
