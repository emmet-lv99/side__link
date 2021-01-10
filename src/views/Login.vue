<template>
  <div id="login">
    <div class="wrapper">
      <div class="content">
        <h1 class="content__title">로그인</h1>
        <div class="content__form">
          <b-field label="아이디(이메일)">
            <b-input type="email"
              value=""
              placeholder="아이디(이메일)을 입력해주세요">
            </b-input>
          </b-field>
          <b-field label="비밀번호">
            <b-input type="password"
              value=""
              password-reveal>
            </b-input>
          </b-field>
          <div class="buttons">
            <b-button type="is-primary" expanded>로그인</b-button>
            <b-button type="is-primary" inverted>회원가입</b-button>
          </div>
        </div>
        <div class="content__join">
          <span>비밀번호를 잊으셨나요?<a href="">비밀번호 재설정</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import "../common.scss";
  #login {
    display: flex;
    flex-direction: column;
    height: 100%;
    background: $--color-black-5;
  }
  .wrapper {
    flex: 1; /* flex: 1 1 0 */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
  .content {
    width: 500px;
    height: 500px;
    border-radius: 24px;
    background: $--color-white;
    box-shadow: 6px 6px 30px rgba(0,0,0,.1);
  }
  .content {
    position: relative;
    &__title {
      text-align: center;
    }
    &__form {
      padding: 0 50px;
    }
    &__join {
      width: 100%;
      position: absolute;
      left: 50%;
      bottom: -40px;
      transform: translateX(-50%);
      text-align: center;
    }
  }
</style>
