<template>
  <div id="link-board">
    <div class="wrapper">
      <div class="wrapper__link">
        <div class="link__content">
          <div class="link__url">
            <span class="link__url--path">https://linklinklink.vip/username</span>
            <span class="link__url--share">공유</span>
          </div>
          <div class="link__link-area">
            <b-button class="link-area__btn--add" type="is-primary" expanded>+ 새로운 링크 추가</b-button>
            <link-board-welcome v-if="noItemMsg"/>
          </div>
        </div>
      </div>
      <div class="wrapper__preview">프리뷰</div>
    </div>
  </div>
</template>

<script>
import linkBoardWelcome from '@/components/linkBoardWelcome.vue'

export default {
  name: 'linkBoard',
  components: {
    linkBoardWelcome
  },
  data: () => ({
    noItemMsg: true
  })
}
</script>

<style lang="scss" scoped>
@import "../common.scss";

.wrapper {
  margin: 0 auto;
  padding: 0 20px;
  width: 100%;
  max-width: 1315px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
}

.wrapper {
  &__link {
    padding: 0 20px;
    max-width: 768px;
    display: flex;
    justify-content: center;
    flex: 1 0 400px;
    box-sizing: border-box;
  }
  &__preview {
    padding-left: 20px;
    max-width: 405px;
    flex: 1 0 320px;
    background-color: blue;
    box-sizing: border-box;
  }
}

.link__content {
  padding-top: 113px;
  width: 600px;
  .link {
    &__url {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 30px;
      width: 100%;
      height: 60px;
      border-radius: 8px;
      background: $--color-white;
      &--path {
        color: $--color-wetgray-80;
      }
      &--share {
        display: inline-block;
        height: 40px;
        line-height: 40px;
        color: $--color-primary;
        cursor: pointer;
      }
    }
    &__link-area {
      padding-top: 20px;
      button.link-area__btn--add {
        margin-bottom: 0px;
        border-radius: 8px !important;
        height: 60px !important;
      }
    }
  }
}

@media  (max-width:768px) {
  .wrapper {
    &__preview {
      display: none;
    }
  }
}

</style>
