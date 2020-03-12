<template>
  <div class="helloWorld">
    <ul>
      <li v-for="(note, id) in notes" :key="id">
        {{ note.text }}
      </li>
    </ul>
    <form @submit="addNote(text)">
      <input v-model="text" placeholder="Enter note...">
      <button type="submit">Add</button>
    </form>
  </div>
</template>

<script>
import { db } from "../db";
// import { Timestamp } from '../db'

export default {
  name: "HelloWorld",
  data() {
    return {
      notes: [],
      text: "",
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
      })
    }
  }
};
</script>


<style>
ul {
  text-align: left;
}
</style>