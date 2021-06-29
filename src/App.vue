<template>
  <div id="app">
    <ToDoList />
  </div>
</template>

<script>
import ToDoList from "./pages/ToDoList.vue";
export default {
  name: "app",
  components: { ToDoList },
};
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  text-align: center;
  margin-top: 40px;
}
</style>
