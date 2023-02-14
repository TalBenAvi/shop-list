<script setup>
import ItemsList from "../components/ItemsList.vue";
</script>

<template>
  <main>
    <ItemsList
      :items="items"
      @add-item="addItem"
      @toggle-completed="toggleCompleted"
      @delete-item="deleteItem"
    />
  </main>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  methods: {
    toggleCompleted(index) {
      this.$emit("toggle-completed", index);
    },
    deleteItem(index) {
      this.$emit("delete-item", index);
    },
    openAddOption() {
      this.isAddOpen = !this.isAddOpen;
    },
    addItem(newItem) {
      console.log(newItem.description);
      this.$emit("add-item", {
        name: newItem.name,
        id: newItem.id,
        price: parseFloat(newItem.price),
        completed: false,
        description: newItem.description,
      });
    },
  },
};
</script>
