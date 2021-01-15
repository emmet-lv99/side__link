<!-- 보드
todo
1. 네비게이션 컴포넌트 추가
2. 라우터 뷰 이중 구조로 세팅 -->
<template>
  <div id="board">
    <div class="wrapper">
      <global-nav @selected="pageChange"/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import globalNav from '@/components/globalNav.vue'

export default {
  name: 'board',
  components: {
    globalNav
  },
  methods: {
    pageChange (page) {
      this.$router.push('/p/' + page.toLowerCase())
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../common.scss";
#board {
  display: flex;
  flex-direction: column;
  height: 100%;
  background: $--color-black-5;
}

.container {
  width: 100%;
}
</style>
