<template>
  <div id="reset-request">
    <div class="content">
      <h1 class="content__title">비밀번호 재설정
        <p class="title__desc">
          아이디를 입력하시면, 가입시 등록하신 이메일로
          비밀번호를 재설정할 수 있는 이메일을 보내드립니다.
        </p>
      </h1>
      <div class="content__form">
        <b-field label="아이디(이메일)" class="form__email">
          <b-input type="email"
            value=""
            placeholder="아이디(이메일)을 입력해주세요">
          </b-input>
        </b-field>
        <div class="buttons">
          <b-button @click="resetPw" type="is-primary" expanded>비밀번호 재설정</b-button>
        </div>
      </div>
      <div class="content__extra-func">
        <span>비밀번호가 생각나셨나요?&nbsp;<router-link  class="extra-func__btn" to="/login">로그인 바로가기</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'resetRequest',
  methods: {
    resetPw () {
      this.$emit('sendPw')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../common.scss";

  .content {
    width: 500px;
    border-radius: 24px;
    background: $--color-white;
    box-shadow: 6px 6px 30px rgba(0,0,0,.1);
    border: 1px solid $--color-white;
    box-sizing: border-box;
  }
  .content {
    position: relative;
    &__title {
      margin-top: 42px !important;
      margin-bottom: 62px !important;
      text-align: center;
      font: {
        size: 2em;
        weight: $--font-bold !important;
      }
      color: $--color-wetgray-60 !important;
      .title__desc {
        margin-top: 15px;
        line-height: 1.4;
        padding: 0 40px;
        word-break: keep-all;
        font: {
          size: 18px !important;
          weight: $--font-regular;
        }
      }
    }
    &__form {
      padding: 0 50px;
      .form {
        &__email {
          margin-bottom: 40px;
        }
      }
      .buttons {
        margin-bottom: 50px;
        justify-content: center;
        button {
          margin-bottom: 0px;
          border-radius: 8px !important;
          height: 60px !important;
        }
        .btn__join.button.is-primary.is-inverted {
          &.is-hovered {
            background-color: $--color-white !important;
            color: $--color-primary-9;
          }
          &:hover {
            background-color: $--color-white !important;
            color: $--color-primary-9;
          }
        }
      }
    }
    &__extra-func {
      width: 100%;
      position: absolute;
      left: 50%;
      bottom: -40px;
      transform: translateX(-50%);
      text-align: center;
      color: $--color-wetgray-60;
      .find-pw__btn {
        &:hover {
          color: $--color-primary-9;
        }
      }
    }
    .btn__join {
      margin-bottom: 50px;
    }
  }
</style>
