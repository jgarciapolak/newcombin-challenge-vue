<template>
  <div class="table-container">
    <table class="table">
      <tr class="table-row">
        <th>First Name</th>
        <th>Last Name</th>
        <th>Address</th>
        <th>SSN</th>
      </tr>
      <tr class="table-row" v-for="member in members" :key="member.ssn">
        <td>{{ member.firstName }}</td>
        <td>{{ member.lastName }}</td>
        <td>{{ member.address }}</td>
        <td>{{ member.ssn }}</td>
      </tr>
      <tr></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "Table",
  components: {},
  props: {
    members: [Array],
  },
};
</script>

<style src="@/assets/css/components/table.css"></style>
