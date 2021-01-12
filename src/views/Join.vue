<template>
  <div id="join">
    <div class="wrapper">
      <div class="content">
        <h1 class="content__title">회원가입</h1>
        <div class="content__form">
          <b-field label="이메일주소(아이디)" class="form__email">
            <b-input type="email"
              value=""
              placeholder="아이디(이메일)을 입력해주세요">
            </b-input>
          </b-field>
          <b-field label="닉네임" class="form__email">
            <b-input
              value=""
              placeholder="닉네임을 입력해주세요">
            </b-input>
          </b-field>
          <b-field label="비밀번호" class="form__pw">
            <b-input type="password"
              value="123">
            </b-input>
          </b-field>
          <b-field class="form__pw">
            <b-input type="password"
              value="123">
            </b-input>
          </b-field>
          <div class="buttons">
            <b-button type="is-primary" expanded>로그인</b-button>
            <b-button class="btn__join" type="is-primary" inverted>회원가입</b-button>
          </div>
        </div>
        <div class="content__extra-func">
          <span>이미 가입하셨나요?&nbsp;<a class="extra-func__btn" href="">로그인 바로가기</a></span>
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
  #join {
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
    border-radius: 24px;
    background: $--color-white;
    box-shadow: 6px 6px 30px rgba(0,0,0,.1);
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
    }
    &__form {
      padding: 0 50px;
      .form {
        &__email {
          margin-bottom: 26px;
        }
        &__pw {
          margin-bottom: 40px;
        }
      }
      .buttons {
        margin-bottom: 30px;
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
  }
</style>
