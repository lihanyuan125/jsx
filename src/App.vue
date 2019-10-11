

<template>
  <div id="app">
    <!-- <test :n="1">app</test>
    <test :n="2">app</test>
    <test :n="3">app</test>
    <test :n="4">app</test>-->

    <!-- <test2></test2> -->
    <!-- <test2 :n=1>app</test2> -->

    <!-- <test3 :data="['css','js','html']" :render = "render"> -->
    <!-- </test3> -->

    <!-- jsx -->
    <!-- <list1 :data="['vue','koa','node','react','express']" :render="render"></list1> -->

    <!-- slot  作用域插槽 -->
    <list2 :data="['vue','koa','node','react','express']" :render="render">
      <template v-slot ="{item}">
        <span>{{item}}</span>
      </template>
    </list2>
  </div>
</template>

<script>
// import test from "./views/test ";
// import test2 from "./test2";
// import test3 from "./test3.vue";
// import list1 from "./list1";
// import list1 from "./list1";
import list2 from "./list2";
export default {
  methods: {
    render(h, item) {
      return <h1>{item}</h1>;
    }
  },
  components: {
    // test，
    // test2,
    // test3,
    // list1,
    list2
  }
};
</script>