<template>
  <div class="close-icon" @click="openAddOption">
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.59 6L10 8.59L7.41 6L6 7.41L8.59 10L6 12.59L7.41 14L10 11.41L12.59 14L14 12.59L11.41 10L14 7.41L12.59 6ZM10 0C4.47 0 0 4.47 0 10C0 15.53 4.47 20 10 20C15.53 20 20 15.53 20 10C20 4.47 15.53 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z"
        fill="#72717A"
      />
    </svg>
  </div>
  <form @submit.prevent="addItem" class="form-design">
    <span class="input-area">
      <label class="flex-col">
        <span>Name:</span>
        <input
          class="input-size"
          type="text"
          v-model="newItem.name"
          minlength="3"
          required
        />
      </label>
      <label class="flex-col">
        <span>Price:</span>
        <input
          class="input-size"
          type="number"
          step="0.1"
          min="0.1"
          v-model="newItem.price"
          required
        /> </label
    ></span>
    <label class="flex-col-textarea">
      <span class="text-start"> description:</span>
      <textarea v-model="newItem.description" minlength="3" required />
    </label>
    <button type="submit" class="submit-button">
      <svg
        width="21"
        height="18"
        viewBox="0 0 21 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.00999999 18L21 9L0.00999999 0L0 7L15 9L0 11L0.00999999 18Z"
          fill="#FF941A"
        />
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      newItem: {
        name: "",
        price: 0.1,
        completed: false,
        description: "",
      },
    };
  },
  methods: {
    addItem() {
      this.$emit("add-item", this.newItem);
      this.newItem.name = "";
      this.newItem.price = 0.1;
      this.newItem.description = "";
      this.newItem.completed = false;
      this.$emit("open-add-option");
    },
    openAddOption() {
      this.$emit("open-add-option");
    },
  },
};
</script>
