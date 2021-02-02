<template>
  <div id="global-nav">
    <div class="nav__wrapper">
      <div class="nav__content">
        <ul class="content__menu">
          <li class="menu__item" @click="selectMenu('links')">링크보드</li>
          <li class="menu__item" @click="selectMenu('theme')">테마설정</li>
          <li class="menu__item" @click="selectMenu('insight')">인사이트</li>
        </ul>
        <div class="content__user">
          <div class="user__content">
            <span class="user__id">dachan.kim</span>
            <span class="user__profile">
              <img src="" alt="">
            </span>
            <ul class="user__menu">
              <li class="user__item">계정관리</li>
              <li class="user__item">공지사항</li>
              <li class="user__item">FAQ</li>
              <li class="user__item logout"><span>로그아웃</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'globalNav',
  data () {
    return {
      isCurrentMenu: ''
    }
  },
  created () {
    this.isCurrentMenu = 'links'
    if (this.$route.name === 'Board') {
      this.selectMenu('links')
    } else {
      this.selectMenu(this.$route.name) // 이게 실행되도록 하는 것. this.$route.name 은 links다.
    }
  },
  methods: {
    selectMenu (page) {
      if (page !== this.isCurrentMenu) {
        this.isCurrentMenu = page
        this.$emit('selected', this.isCurrentMenu)
      }
    }
  },
  watch: {
    $route (to) {
      this.isCurrentMenu = to.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../common.scss";
#global-nav {
}

.nav {
  &__wrapper {
    width: 100%;
    height: 64px;
    background: $--color-white;
  }
  &__content {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1315px;
    height: 100%;
    box-sizing: border-box;
    &::after {
      display: block;
      content: '';
      clear: both;
    }
    color: $--color-wetgray-60 !important;
    .content {
      &__menu {
        float: left;
        height: 100%;
        .menu__item {
          display: inline-block;
          margin-right: 40px;
          height: 100%;
          line-height: 3.625em;
          cursor: pointer;
          &:last-child {
            margin: 0;
          }
          &:hover {
            border-bottom: 2px solid $--color-primary;
          }
        }
      }
      &__user {
        float: right;
        height: 100%;
        .user {
          &__content {
            position: relative;
            height: 100%;
            cursor: pointer;
            font-size: 2.25rem;
            vertical-align: middle;
            &:hover {
              ul.user__menu {
                display: block;
              }
            }
          }
          &__id {
            text-align: right;
            font-size: 1rem;
            vertical-align: middle;
          }
          &__profile {
            margin-left: 20px;
            display: inline-block;
            width: 40px;
            height: 40px;
            background: $--color-black-3;
            border: 1px solid $--color-black-5;
            border-radius: 40px;
            box-sizing: border-box;
            vertical-align: middle;
          }
          &__menu {
            display: none;
            position: absolute;
            bottom: -240px;
            right: 0;
            width: 230px;
            font-size: 1rem;
            background: $--color-white;
            box-shadow: 0px 3px 6px rgba(0,0,0,.16);
            border-radius: 8px;
            border: 1px solid $--color-white;
            box-sizing: border-box;
            .user__item {
              margin-top: 10px;
              padding: 10px 0px 10px 20px;
              &:hover {
                background: $--color-black-3;
              }
            }
            .user__item.logout {
              margin: 20px;
              padding: 0px;
              span {
                padding: 10px 0px;
                display: block;
                text-align: center;
                border-radius: 8px;
                background: $--color-black-3;
                &:hover {
                  background: $--color-black-10;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
