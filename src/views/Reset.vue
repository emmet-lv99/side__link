<template>
  <div id="reset">
    <div class="wrapper">
      <reset-request
        @sendPw="resetPw"
        v-if='!isActive'
      />
      <reset-success
        v-if='isActive'
      />
    </div>
  </div>
</template>

<script>
import resetRequest from '@/components/resetRequest.vue'
import resetSuccess from '@/components/resetSuccess.vue'
export default {
  name: 'reset',
  data () {
    return {
      isActive: false
    }
  },
  components: {
    resetRequest,
    resetSuccess
  },
  methods: {
    resetPw () {
      this.isActive = !this.isActive
      this.sendEmail()
    },
    sendEmail () {
      console.log('Email')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../common.scss";
  #reset {
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
</style>
