<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="#">Company name</a>
  </nav>
</template>

<script>
import {computed} from 'vue';
import {useRouter} from "vue-router";
import {useStore} from "vuex";
import axios from 'axios';

export default {
  name: "Nav",
  setup() {
    const router = useRouter();


    return {
    }
  }
}
</script>
