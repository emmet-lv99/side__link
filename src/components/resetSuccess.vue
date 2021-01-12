<template>
  <div id="reset-request">
    <div class="content">
      <h1 class="content__title">
        <p class="title__icn">
          <img src="../assets/locked.png" alt="">
        </p>
        가입시 등록하신 이메일로
        비밀번호를 재설정할 수 있는
        이메일을 보내드렸습니다.
        <p class="title__desc">
          발송된 이메일은 6시간 동안 유효하며,<br/>
          6시간 뒤에는 비밀번호를 재설정하셔야 합니다.
        </p>
      </h1>
      <div class="content__form">
        <div class="buttons">
          <b-button @click="$router.push('/login')" type="is-primary" expanded>로그인 화면으로 이동</b-button>
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
      margin-bottom: 48px !important;
      padding: 0 50px;
      text-align: center;
      line-height: 1.4em !important;
      font: {
        size: 2em;
        weight: $--font-bold !important;
      }
      word-break: keep-all;
      color: $--color-primary !important;
      .title__icn {
        margin-bottom: 20px !important;
        img {
          width: 70px;
        }
      }
      .title__desc {
        margin-top: 56px;
        line-height: 1.4;
        word-break: keep-all;
        font: {
          size: 18px !important;
          weight: $--font-regular;
        }
        color: $--color-wetgray-60;
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
