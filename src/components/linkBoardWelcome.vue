<template>
  <div id="link-board-welcome">
    <img src="@/assets/welcome.png" alt="" class="welcome__img">
    <p class="welcome__msg">
      <span class="welcome__msg--deco">환영합니다!</span>
      새로운 링크를 만들고,<br/>
      사람들과 나의 멋진 일상을<br/>
      공유할 수 있어요!
    </p>
  </div>
</template>

<script>
export default {
  name: 'linkBoardWelcome'
}
</script>

<style lang="scss" scoped>
@import "../common.scss";

#link-board-welcome {
  padding-top: 80px;
  text-align: center;
}

[class*="msg"] {
  font: {
    size: 32px;
    weight: $--font-bold;
  }
  color: $--color-wetgray-60;
}

.welcome {
  &__img {
    line-height: 0;
  }
  &__msg {
    line-height: 1.44em;
    &--deco {
      display: block;
      font-size: 24px;
      color: $--color-primary;
    }
  }
}
</style>
