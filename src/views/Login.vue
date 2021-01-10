<template>
  <div id="login">
    <div class="wrapper">
      <div class="content">
        로그인
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
    box-shadow: 6px 6px 30px rgba(0,0,0,.1);
  }
</style>
