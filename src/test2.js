// import { create } from "domain";
// import { spawn } from "child_process";

// export default {
//   // h -->createElement
//   render(h) {
//     return h(
//       "h1",
//       {
//         on: {
//           click() {
//             alert("world");
//           }
//         },
//         attrs: {
//           id: "box"
//         }
//       },
//       [h("span", {}, "hello")]
//     );
//   }
//   // 第一個參數表示要創建什麽樣的標簽
//   // 第二個標簽表示這個標簽中的屬性
//   // 第三個參數表示這個標簽中的内容
// };


// jsx
// export default {
//   render(h) {
//     //   若果要在html文件中写js代码，需要加上{}
//       return <h1 on-Click ={()=>{alert("world")}}><span>hello</span></h1>
//   }
// };


export default {
    props:{
        n:{
            type:Number
        }
    },
    render(h){
        let tag='h'+this.n
        return <tag>{this.$slots.default}</tag>
    }
  };