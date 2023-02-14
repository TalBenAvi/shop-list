<template>
  <div class="notch" />
  <div class="list-view">
    <button class="exit-button">
      <router-link :to="{ name: 'ItemList' }">
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.828 7L16 7V9L3.828 9L9.192 14.364L7.778 15.778L0 8L7.778 0.222L9.192 1.636L3.828 7Z"
            fill="#B1B0B8"
          />
        </svg>
      </router-link>
    </button>
    <div v-if="item">
      <h1>{{ item.name }}</h1>
      <p>{{ item.description }}</p>
    </div>
    <div v-else>
      <p>Item not found.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      item: null,
    };
  },
  created() {
    const itemId = this.$route.params.id;
    console.log(itemId);
    console.log(this.items);
    this.item = this.items.find((item) => item.id === parseInt(itemId));
    console.log(this.item);
  },
};
</script>
