<template>
  <div>
    <template v-for="(item,index) in data">
      <!-- 作用域插槽 -->
      <slot :item ="item"></slot>
    </template>
  </div>
</template>

<script>
import listItem from "./listItem"
export default {
  props: {
    data: {
      type: Array
    },
  },
  components:{
   listItem,
  }
};
</script>