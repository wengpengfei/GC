<template>
  <div>
    <div class="m-array-style-2 mb5 clear">
      <span class="title">筛选条件：</span>
      <span class="clear-btn">清空筛选条件</span>
    </div>
    <div class="m-screen">
      <div class="screen-style">
        <span class="style-name">培训年度：</span>
        <a href="#" class="current">全部</a>
        <a href="#">2020</a>
        <a href="#">2019</a>
      </div>
      <div class="screen-style">
        <span class="style-name">培训类别：</span>
        <a href="#">全部</a>
        <a href="#">新训</a>
        <a href="#">复训</a>
      </div>
      <div class="screen-style">
        <span class="style-name">培训对象：</span>
        <a href="#">全部</a>
        <a href="#">三类人员</a>
        <a href="#">放射工作人员</a>
      </div>
      <div class="screen-style">
        <span class="style-name">岗位类别：</span>
        <a href="#">全部</a>
        <a href="#">用人单位主要负责人</a>
        <a href="#">职业卫生管理人员</a>
        <a href="#">接触危害劳动者</a>
      </div>
      <div class="screen-style">
        <span class="style-name">单位类别：</span>
        <a href="#">全部</a>
        <a href="#">医用辐射机构</a>
        <a href="#">非开展核医用辐射机构</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$important: #ff2f2f;
$base: #2a82fe;

.m-array-style-2 {
  height: 36px;
  background-color: #fafafa;
  border: 1px solid #e6e6e6;
  line-height: 36px;
  padding-left: 10px;
  position: relative;

  .title {
    display: inline-block;
    width: 93px;
    text-align: right;
    font-weight: bold;
  }

  .t-r:hover {
    color: $important;
  }

  .conditions-btn {
    display: inline-block;
    background-color: #fff;
    padding-left: 8px;
    padding-right: 30px;
    line-height: 24px;
    height: 24px;
    font-size: 12px;
    color: #333;
    margin-top: 5px;
    margin-right: 5px;
    border: 1px solid #ddd;
    position: relative;
    vertical-align: top;

    .txt {
      color: $base;
    }

    .close-ico {
      background-position: -94px -374px;
      width: 24px;
      height: 24px;
      display: inline-block;
      margin-left: 5px;
      cursor: pointer;
      position: absolute;
      top: 0;
      right: 0;
    }

    &:hover {
      border: 1px solid $base;
      text-decoration: none;

      &:hover {
        text-decoration: none;
      }

      .close-ico {
        background-position: -94px -389px;
        background-color: $base;
      }
    }
  }

  .conditions-btn-2 {
    padding-right: 5px;
  }

  .clear-btn {
    display: inline-block;
    color: #666;
    font-size: 12px;
    cursor: pointer;

    &:hover {
      color: $base;
      text-decoration: none;
    }
  }
}

.m-screen {
  position: relative;

  .screen-style {
    line-height: 48px;
    position: relative;
    padding-left: 110px;
    border-bottom: 1px dotted #ddd;
    min-height: 48px;

    a {
      height: 30px;
      line-height: 30px;
      text-align: center;
      display: inline-block;
      color: #888;
      margin-right: 10px;
      min-width: 56px;
      padding: 0 15px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
      border-radius: 5px;

      &:hover {
        color: #fff;
        text-decoration: none;
        background-color: $base;
      }
    }

    button {
      height: 30px;
      line-height: 30px;
      text-align: center;
      display: inline-block;
      color: #888;
      margin-right: 10px;
      min-width: 56px;
      padding: 0 15px;

      &:hover {
        color: #fff;
        text-decoration: none;
        background-color: $base;
      }
    }

    .current {
      background-color: $base;
      color: #fff;
    }
  }

  .style-name {
    width: 105px;
    position: absolute;
    top: 0;
    left: 0;
    color: #333;
    font-weight: bold;
    text-align: right;
  }
}
</style>
