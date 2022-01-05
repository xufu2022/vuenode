<template>
  <Nav />
  <div class="container-fluid">
    <div class="row">
      <Menu />
      <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import { onMounted, ref } from "vue";
import axios from 'axios';
import Menu from "@/components/Menu.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "Wrapper",
  components: {
    Menu,
    Nav,
  },
    setup() {
        onMounted(async () => {
            const response = await axios.get('user');
            console.log(response);
            
        });
    }
};
</script>
<style lang=""></style>
