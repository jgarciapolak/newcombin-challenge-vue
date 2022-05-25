<template>
  <form class="form">
    <label v-show="errorText != ''" class="form-error">{{ errorText }}</label>
    <input
      class="form-input"
      type="text"
      placeholder="First Name"
      v-model="firstName"
      @keyup="checkInputs()"
    />
    <input
      class="form-input"
      type="text"
      placeholder="Last Name"
      v-model="lastName"
      @keyup="checkInputs()"
    />
    <input
      class="form-input"
      type="text"
      placeholder="Address"
      v-model="address"
      @keyup="checkInputs()"
    />
    <input
      class="form-input"
      type="text"
      placeholder="SSN"
      v-model="ssn"
      @keyup="checkInputs()"
    />
    <div class="form-btn-container">
      <button type="button" class="form-btn" @click="reset()">Reset</button>
      <button v-if="!canSave" type="button" class="form-btn" disabled
        >Save</button
      >
      <button v-if="canSave" type="button" class="form-btn" @click="save()"
        >Save</button
      >
    </div>
  </form>
</template>

<script>
export default {
  name: "Form",
  data() {
    return {
      firstName: "",
      lastName: "",
      address: "",
      ssn: "",
      errorText: "",
      canSave: false,
    };
  },
  methods: {
    // función para reiniciar los campos
    reset() {
      this.firstName = "";
      this.lastName = "";
      this.address = "";
      this.ssn = "";
    },
    // función para chequear los inputs
    checkInputs() {
      this.canSave = true;
      if (
        this.firstName.trim().length < 2 ||
        this.lastName.trim().length < 2 ||
        this.address.trim().length < 2
      ) {
        this.canSave = false;
      }

      let pattern = /[0-9]{3}-[0-9]{2}-[0-9]{4}$/;
      if (!this.ssn.match(pattern)) {
        this.canSave = false;
      }
    },
    // función para pasarle al Home el objeto a guardar
    save() {
      let formulario = {
        firstName: this.firstName.trim(),
        lastName: this.lastName.trim(),
        address: this.address.trim(),
        ssn: this.ssn,
      };
      this.$emit("save", formulario);
    },
  },
};
</script>

<style src="@/assets/css/components/form.css"></style>
