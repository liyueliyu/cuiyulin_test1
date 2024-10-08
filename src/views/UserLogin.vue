<template>
  <div class="w-[100%] h-[50vw] flex justify-between">
    <div class="w-[40%] h-[50vw]">
      <img
        class="w-[100%] h-[50vw]"
        src="../assets/images/appm3V1L6Y3C3podIGShCo686dXRRY4i.png"
        alt=""
      />
    </div>
    <div class="w-[60%] h-[50vw]">
      <div class="w-[70vw] ml-[50%] translate-x-[-25%] mt-[10%] text-[3vw] font-bold">登录，即刻创造您的应用</div>
      <div class="w-[40%] h-[20vw] ml-[50%] translate-x-[-50%] mt-[5%]">
        <input
          class="w-[100%] mt-[2vw] px-[15px] leading-[40px] text-[#606266] box-border rounded-[1vw] bg-white border outline-none"
          type="text"
          placeholder="账号"
        /><br />
        <input
          class="w-[100%] mt-[2vw] px-[15px] leading-[40px] text-[#606266] box-border rounded-[1vw] bg-white border outline-none"
          type="password"
          placeholder="密码"
        />
        <el-button class="w-[100%] mt-[3vw] rounded-[2vw]" type="primary" @click="fn">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { UserLogin } from "../api/index.js";


UserLogin().then((res) => {
  console.log(res);
});

const fn =() =>{
  
}
</script>
