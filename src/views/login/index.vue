<template>
  <div class="login-container">
      11
    <!-- 卡片 -->
    <el-card class="login_box">
      <img src="../../assets/images/logo_index.png" />
      <!-- 表单 -->
      <el-form ref="loginForm" :model="loginForm" :rules="loginRules">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" placeholder="请输入验证码" class="text"></el-input>
          <el-button class="btn1">发送验证码</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked"></el-checkbox>我已同意并同意
          <el-link type="primary">用户协议</el-link>和
          <el-link type="primary">隐私条款</el-link>
        </el-form-item>
        <el-form-item>
          <el-button class="btn2" type="primary">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // 绑定表单对应的对象
      loginForm: {
        mobile: '',
        code: ''
      },
      //   表单的校验规则
      loginRules: {
        mobile: [
          { required: true, message: '宝宝~手机号为必填项哦~!', trigger: 'blur' },
          { }
        ],
        code: [
          { required: true, message: '宝宝~请输入验证码~!', trigger: 'blur' }
        ]
      }
    }
  }
}
</script>

<style scoped lang='less'>
.login-container {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
  .login_box {
    width: 450px;
    height: 350px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto 30px;
    }
  }
}
.el-checkbox {
  margin-right: 5px;
}
.text {
  width: 280px;
}
.btn1 {
  float: right;
}
.btn2 {
  width: 100%;
}
</style>
