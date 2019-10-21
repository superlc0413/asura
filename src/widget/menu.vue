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
      visible: false,
      menuItems: [
        { id: 1, type: "hash", name: "首页", path: "index" },
        { id: 2, type: "hash", name: "CS全脑双师", path: "csqnss" },
        { id: 3, type: "hash", name: "品牌资讯", path: "news" },
        { id: 4, type: "hash", name: "合作服务", path: "cooperation" },
        {
          id: 5,
          type: "href",
          name: "登录",
          path: "https://www.sairuankeji.com"
        }
      ]
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
      switch (item.type) {
        case "href":
          location.href = item.path;
          break;
        case "hash":
        default:
          location.hash = `#/${item.path}`;
      }
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
  right: 0.1rem;
  top: 1.3rem;
  transform: scaleY(0);
  opacity: 0;
  transform-origin: 0% 0%;
  border: 1px solid #ccc;
  border-radius: 0.1rem;
  box-shadow: 0 0 4px #999;
  transition: 0.15s ease-out;
  overflow: hidden;
  &.visible {
    transform: scaleY(1);
    opacity: 1;
  }
  .app-menu__wrap {
    padding: 0.08rem 0.12rem;
    background: #fff;
    li {
      color: #333;
      border-bottom: 1px solid #999;
      font-size: 0.3rem;
      line-height: 2.7;
      min-width: 2.6rem;
      padding-left: 0.3rem;
      &:last-child {
        border-bottom: none !important;
      }
    }
  }

  &.dark {
    border: none;
    box-shadow: 0 0 3px #666;
    .app-menu__wrap {
      padding: 0;
      background: #666;
      li {
        color: #fff;
        border-bottom: 1px solid #777;
      }
    }
  }
}
</style>