<template>
  <div>111</div>
</template>

<script setup>
import { getHomePage } from "../../api/index.js";

getHomePage().then((res) => {
  console.log(res);
}).catch((err)=>{
    console.log(err);
});
</script>
