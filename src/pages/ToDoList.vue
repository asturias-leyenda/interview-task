<template>
  <div class="todo-container">
    <h1>TO-DO List</h1>

    <input
      id="task-input"
      type="text"
      placeholder="Write your task here"
      v-model="userInput"
    />
    <button @click="newTask()">Add task</button>

    <h2>Not finished tasks</h2>
    <div v-for="(task, index) in todoList" :key="index">
      <TaskItem
        v-if="task.finished == false"
        :taskTitle="task.title"
        :taskStatus="task.finished"
        :index="index"
      />
    </div>

    <h2>Finished tasks</h2>
    <div
      v-for="(task, index) in todoList"
      :key="'finished' + index"
      :style="{ opacity: '0.5' }"
    >
      <TaskItem
        v-if="task.finished == true"
        :taskTitle="task.title"
        :taskStatus="task.finished"
        :index="index"
      />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import TaskItem from "../components/TaskItem.vue";
export default {
  name: "ToDoList",
  components: { TaskItem },
  data() {
    return {
      userInput: "",
    };
  },
  computed: {
    ...mapState(["todoList"]),
  },
  methods: {
    newTask() {
      const task = document.getElementById("task-input");
      // Prevent user from adding an empty task
      if (this.userInput == "") {
        task.style.backgroundColor = "rgb(255, 195, 195)";
        task.placeholder = "Write your task here";
      } else {
        task.style.backgroundColor = "white";
        this.$store.commit("addTask", this.userInput);
        this.userInput = "";
      }
    },
  },
  watch: {
    userInput: function () {
      // All inputs are valid != ""
      const task = document.getElementById("task-input");
      task.style.backgroundColor = "white";
    },
  },
};
</script>

<style scoped>
.todo-container {
  min-width: 300px;
  max-width: 25%;
  margin-left: auto;
  margin-right: auto;
}

button {
  background-color: rgb(36, 189, 70);
  color: white;
  font-size: 16px;
  border-radius: 20px;
  border: none;
  padding: 8px 24px;
  cursor: pointer;
}

*:focus {
  -webkit-tap-highlight-color: transparent;
  outline: none;
}

h1 {
  font-size: 24px;
  font-weight: 400;
  color: rgb(163, 163, 163);
}

h2 {
  font-size: 16px;
  font-weight: 400;
  color: rgb(163, 163, 163);
  text-align: left;
  margin-top: 30px;
  margin-bottom: 10px;
}

input {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: none;
  border-radius: 10px;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  outline: none;
  font-size: 16px;
  color: rgb(0, 0, 0);
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box;
}

input::placeholder {
  color: rgb(163, 163, 163);
}
</style>