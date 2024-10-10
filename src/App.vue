<script setup>
import {App,ConfigProvider} from "ant-design-vue"
</script>

<template>
 <App>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#032bec',
      },
    }"
  >
  <RouterView></RouterView>
  </ConfigProvider>
 </App>

</template>
