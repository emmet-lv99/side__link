<template>
  <div id="link-board">
    <div class="wrapper">
      <div class="wrapper__link">링크</div>
      <div class="wrapper__preview">프리뷰</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'linkBoard'
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
    width: 100%;
    flex: 1 0 400px;
    background-color: red;
    box-sizing: border-box;
  }
  &__preview {
    padding-left: 20px;
    max-width: 405px;
    width: 100%;
    flex: 1 0 320px;
    background-color: blue;
    box-sizing: border-box;
  }
}

</style>
