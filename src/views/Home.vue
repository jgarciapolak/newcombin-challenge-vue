<template>
  <div class="home">
    <div class="home-body">
      <div class="home-form-container">
        <Form @save="save"></Form>
        <Table :members="members"></Table>
      </div>
    </div>
    <div class="home-footer">
      <label class="home-footer-copy">copyright</label>
      <label class="home-footer-rights">All rights reserved</label>
    </div>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Table from "@/components/Table.vue";

export default {
  name: "Home",
  components: { Form, Table },
  data() {
    return {
      members: [],
      timer: null,
    };
  },
  // Antes de crear el componente pedimos la autorización al backend y la guardamos dentro de los headers de axios
  beforeCreate() {
    var that = this;
    let body = {
      username: "sarah",
      password: "connor",
    };
    this.$axios
      .post(process.env.VUE_APP_BACKEND_URL + "/auth", body)
      .then(function (response) {
        that.$axios.defaults.headers.common["Authorization"] =
          "Bearer " + response.data.token;
        that.getMembers();
      })
      .catch(function (response) {
        // handle error
        console.log(response);
      });
  },
  methods: {
    // función para pedir los miembros al backend
    getMembers() {
      let that = this;
      this.$axios
        .get(process.env.VUE_APP_BACKEND_URL + "/api/members")
        .then(function (response) {
          that.members = response.data;
          that.borrarTimer();
        })
        .catch(function (response) {
          // handle error
          console.log(response);
        });
    },
    // función para guardar un nuevo miembro
    save(formulario) {
      let that = this;
      this.$axios
        .post(process.env.VUE_APP_BACKEND_URL + "/api/members", formulario)
        .then(function (response) {
          console.log(response);
          that.borrarTimer();
          that.members.push(formulario);
        })
        .catch(function (response) {
          // handle error
          console.log(response);
          if (
            response != null &&
            response.response != null &&
            response.response.data != null &&
            response.response.data.message != null
          ) {
            alert(response.response.data.message);
          }
        });
    },
    // función para reiniciar el timer por inactividad cada 2 minutos, tomo como inactividad no guardar nada nuevo en el backend
    borrarTimer() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.getMembers();
      }, 120000);
    },
  },
};
</script>

<style src="@/assets/css/views/home.css"></style>
