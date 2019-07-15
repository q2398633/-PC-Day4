<template>
  <div class="login-container">
    <!-- 卡片 -->
    <el-card class="login_box" shadow="hover">
      <img src="../../assets/images/logo_index.png" />
      <!-- 表单 -->
      <el-form ref="loginForm" status-icon :model="loginForm" :rules="loginRules">
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
          <el-button class="btn2" type="primary" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号
    const checkMobile = (rule, value, callback) => {
      // 逻辑校验
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('手机号格式不对'))
      }
    }
    return {
      // 绑定表单对应的对象
      loginForm: {
        mobile: '13911111111',
        code: '246810'
      },
      //   表单的校验规则
      loginRules: {
        mobile: [
          { required: true, message: '宝宝~手机号为必填项哦~!', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '宝宝~请输入验证码~!', trigger: 'blur' },
          { len: 6, message: '必须是6位哦', trigger: 'blur' }
        ]
      },
      // 默认选中复选框
      checked: true
    }
  },
  methods: {
    login () {
      // 整体表单的校验
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          // 如果校验成功,进行登录
          this.$http
            .post(
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm
            )
            .then(res => {
              const data = res.data
              console.log(data)
              // 登录成功后,应做什么?
              // 1.跳转到首页
              // 2.保存登录状态
              // 3.保存登录后返回的用户信息,包含token
              // 4.使用sessionStorage来储存 关闭浏览器绘画失效
              window.sessionStorage.setItem('jiuye04', JSON.stringify(res.data.data))
              this.$router.push('/')
            })
            .catch(() => {
              // 提示错误 使用组件 消息提示组件
              this.$message.error('用户名或密码输入错误')
            })
        }
      })
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
