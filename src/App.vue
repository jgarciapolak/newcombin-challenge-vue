<template>
  <div id="app">
    <div class="app-top">
      <div class="app-top-seccion" @click="$router.push('/')">
        <label>Home</label>
      </div>
      <div class="app-top-seccion" @click="$router.push('/other')">
        <label>Other page</label>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style src="@/assets/css/app.css"></style>
