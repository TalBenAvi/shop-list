<template>
  <div class="notch" />
  <div class="list-view">
    <h2>Shopping List</h2>
    <ul class="ul-design">
      <li v-for="(item, index) in items" :key="index" class="li-design">
        <router-link
          class="link-design"
          :to="{ name: 'ItemDetail', params: { id: index, item: item } }"
        >
          <span class="item-number">{{ index + 1 }}</span>
          <span
            v-if="item.completed"
            class="text-decoration-line-through item-data"
          >
            {{ item.name }} - ${{ item.price }}</span
          >
          <div v-else class="item-data">
            <div>{{ item.name }}</div>
            <div>${{ item.price }}</div>
          </div>
        </router-link>
        <div>
          <button
            @click="toggleCompleted(index)"
            class="button-style right-border"
          >
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z"
                fill="#7A7A93"
              />
            </svg>
          </button>
          <button @click="deleteItem(index)" class="button-style">
            <svg
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 16C1 17.1 1.9 18 3 18H11C12.1 18 13 17.1 13 16V4H1V16ZM14 1H10.5L9.5 0H4.5L3.5 1H0V3H14V1Z"
                fill="#7A7A93"
              />
            </svg>
          </button>
        </div>
      </li>
    </ul>
    <button class="add-button" @click="openAddOption()">+ Add Product</button>
    <div v-if="isAddOpen" class="add-screen">
      <add-item-form @add-item="addItem" @open-add-option="openAddOption()" />
    </div>
  </div>
</template>

<script>
import AddItemForm from "./AddItemForm.vue";
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  components: {
    AddItemForm,
  },
  data() {
    return {
      isAddOpen: false,
    };
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
        price: parseFloat(newItem.price),
        completed: false,
        id: this.items.length,
        description: newItem.description,
      });
    },
  },
};
</script>
