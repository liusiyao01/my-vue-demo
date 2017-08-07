<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名:</span>
        <div class="g-form-input">
          <input type="text"
                 v-model="usernameModel" placeholder="请输入用户名"/>
        </div>
        <span class="g-form-error">{{ userError.userErrorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码:</span>
        <div class="g-form-input">
          <input type="password"
                 v-model="passwordModel" placeholder="请输入密码"/>
        </div>
        <span class="g-form-error">{{ passwordError.psdErrorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onSubmit">登录</a>
        </div>
      </div>
      <p>{{ errorText }}</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        usernameModel: '',
        passwordModel: '',
        errorText: ''
      };
    },
    computed: {
      userError() {
        let status, userErrorText;
        if (!/@/g.test(this.usernameModel)) {
            status = false;
            userErrorText = '用户名包含@';
        } else {
            status = true;
            userErrorText = '';
        }
        if (!this.userFlag) {
          userErrorText = '';
          this.userFlag = true;
        } else if (this.usernameModel === '') {
          userErrorText = '用户名不得为空';
        }
        return {
          status, userErrorText
        };
      },
      passwordError() {
        let status, psdErrorText;
        if (!/^\w{1,6}$/g.test(this.passwordModel)) {
          status = false;
          psdErrorText = '密码1-6位';
        } else {
          status = true;
          psdErrorText = '';
        }
        if (!this.psdFlag) {
          psdErrorText = '';
          this.psdFlag = true;
        }
        return {
          status, psdErrorText
        };
      }
    },
    methods: {
      onSubmit() {
        if (!this.userError.status || !this.passwordError.status) {
          this.errorText = '无法提交';
        }
        this.$http.get('api/login').then((res) => {
          console.log(res);
          this.$emit('has-log', res.body.username);
        }, (error) => {
          console.log(error);
        });
      }
    }
  };
</script>

<style scoped>
  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
