<template>
  <div class="helloWorld">
    <ul>
      <li v-for="(note, id) in notes" :key="id">
        <a href="javascript:;" class="remove" @click="deleteNote(note.id)">x</a>
        {{ note.text }}
      </li>
    </ul>

    <form @submit="addNote(text)" v-on:submit.prevent>
      <input v-model="text" placeholder="Enter note..." />
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  name: "helloWorld",
  data() {
    return {
      notes: [],
      text: ""
    };
  },
  firestore() {
    return {
      notes: db.collection("notes").orderBy("date", "asc")
    };
  },
  methods: {
    addNote(text) {
      db.collection("notes").add({
        text: text,
        date: new Date()
      });

      this.text = "";
    },
    deleteNote(id) {
      db.collection("notes")
        .doc(id)
        .delete();
    }
  }
};
</script>

<style>
form {
  text-align: left;
}
ul {
  text-align: left;
  list-style-type: none;
}
.remove {
  margin-right: 20px;
}
</style>
