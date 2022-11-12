<template>
<div class="div">
  <Header />
  <Sidebar/>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
export default {
  name: "App",
    components: {
      Header,
      Sidebar,
    }
}
</script>

<style>
    body{
      background-color: whitesmoke
    }
    
</style>
