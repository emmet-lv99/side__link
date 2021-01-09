<template>
  <div class="home">
    <router-link to="/">홈</router-link><br/>
    <router-link to="/login">로그인</router-link><br/>
    <router-link to="/login">회원가입</router-link><br/>
    <router-link to="/login">패스워드리셋</router-link><br/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  }
}
</script>
