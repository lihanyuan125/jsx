
<template>
    <div>
        <template v-for="(item,index) in data">
            <li :key="index" v-if="!render">{{item}}</li>
            <test3 v-else :key="index" :render="render" :item="item"></test3>
        </template>
    </div>
</template>

<script>
import test3 from "./test3"
export default{
    components:{
        test3
    },
    props:{
        data:{
            type:Array
        },
        render:{
            type:Function
        }
    }
}
</script>