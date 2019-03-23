<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { CanvasParticle } from "../public/js/canvas-particle.js";
export default {
  data() {
    return {
      config: {
        vx: 4, //小球x轴速度,正为右，负为左
        vy: 4, //小球y轴速度
        height: 3, //小球高宽，其实为正方形，所以不宜太大
        width: 3,
        count: 200, //点个数
        color: "121, 162, 185", //点颜色
        stroke: "69,137,148", //线条颜色
        dist: 20000, //点吸附距离
        e_dist: 22000, //鼠标吸附加速距离
        max_conn: 7 //点到点最大连接数
      }
    };
  },
  mounted() {
    CanvasParticle(this.config);
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
