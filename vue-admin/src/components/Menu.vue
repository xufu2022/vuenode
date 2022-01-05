<template>
  <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
    <div class="sidebar-sticky pt-3">
      <ul class="nav flex-column">
        <li class="nav-item">
          <router-link to="/dashboard" active-class="active" class="nav-link">Dashboard</router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
import {computed} from 'vue';
import {useStore} from "vuex";

export default {
  name: "Menu",
  setup() {
    const store = useStore();


    return {
          }
  }
}
</script>
