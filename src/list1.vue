<template>
  <div>
    <template v-for="(item,index) in data">
      <li v-if="!render" :key="index">{{item}}</li>
      <listItem v-else :key="index" :item=item :render="render"></listItem>
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
    render: {
      type: Function
    }
  },
  components:{
   listItem,
  }
};
</script>