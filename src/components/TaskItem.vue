<template>
  <div class="task-container">
    <div :index="index" class="inline">
      <div @click="toggleStatus(index)" class="checkbox">
        <img
          class="tick"
          v-if="taskStatus == true"
          src="../assets/checked.png"
          alt=""
        />
      </div>
      <div class="title" :class="{ 'strike-through': taskStatus == true }">
        {{ taskTitle }}
      </div>
      <img
        @click="removeTask(index)"
        class="close"
        src="../assets/close.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  props: { taskTitle: String, taskStatus: Boolean, index: Number },
  methods: {
    toggleStatus(index) {
      this.$store.commit("updateTaskStatus", index);
    },
    removeTask(index) {
      this.$store.commit("deleteTask", index);
    },
  },
};
</script>

<style scoped>
.inline {
  display: grid;
  grid-template-areas: "checkbox title close";
  grid-template-columns: 0.15fr 0.7fr 0.15fr;
  grid-template-rows: 1fr;
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.25);
  padding: 10px 16px;
  margin-top: 6px;
}

.checkbox {
  grid-area: checkbox;
  justify-self: start;
  border: 2px solid rgb(163, 163, 163);
  height: 20px;
  width: 20px;
}

.checkbox:hover {
  cursor: pointer;
  background-color: rgb(243, 243, 243);
}

.title {
  grid-area: title;
  text-align: start;
  align-self: center;
}

.close {
  grid-area: close;
  width: 15px;
  place-self: end;
  align-self: center;
  cursor: pointer;
}

.tick {
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
  vertical-align: middle;
  width: 16px;
}

.strike-through {
  text-decoration: line-through;
}

.task-container {
  width: 100%;
}
</style>