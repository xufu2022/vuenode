<template>
<Nav/>
  <div class="container-fluid">
  <div class="row">
      <Menu/>
          </div>
  </div>
</template>

<script lang="ts">
import {onMounted, ref} from 'vue';
import Menu from "@/components/Menu.vue";
import Nav from "@/components/Nav.vue";
export default {
  name: "Secure",
  components: {
    Menu,
    Nav
  },
  setup() {
     onMounted(async () => {
       console.log('hi')
       
     });
     return{

     }
  }
}
</script>
