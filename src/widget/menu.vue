<template>
  <div class="app-menu" :class="{visible}">
    <ul class="app-menu__wrap">
      <li v-for="item in menuItems" :key="item.id" @click="goto(item)">{{item.name}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  },
  props: {
    menuItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    goto(item) {
      this.visible = false;
      location.hash = `#/${item.path}`;
    },
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    },
    toggle() {
      this.visible = !this.visible;
    }
  }
};
</script>
<style lang="scss">
.app-menu {
  position: fixed;
  right: 0.15rem;
  top: 0.15rem;
  transform: translateX(150%);
  border: 1px solid #999;
  border-radius: 2px;
  transition: 0.2s ease-out;
  &.visible {
    transform: translateX(0);
  }
  .app-menu__wrap {
    padding: 0.05rem 0.1rem;
    background: #fff;
    li {
      color: #333;
      border-bottom: 1px solid #999;
      font-size: 0.3rem;
      line-height: 2.7;
      min-width: 1.8rem;
      &:last-child {
        border-bottom: none;
      }
    }
  }
}
</style>