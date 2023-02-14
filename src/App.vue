<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView
    :items="items"
    @add-item="addItem"
    @toggle-completed="toggleCompleted"
    @delete-item="deleteItem"
  />
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          id: 0,
          name: "Apples",
          price: 1.99,
          completed: false,
          description:
            "An apple is an edible fruit produced by an apple tree (Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found today. Apples have been grown for thousands of years in Asia and Europe and were brought to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.",
        },
        {
          id: 1,
          name: "Bananas",
          price: 0.99,
          completed: false,
          description:
            "A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called plantains, distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.",
        },
      ],
    };
  },
  methods: {
    addItem(item) {
      this.items.push(item);
    },
    deleteItem(index) {
      this.items.splice(index, 1);
    },
    toggleCompleted(index) {
      this.items[index].completed = !this.items[index].completed;
    },
  },
};
</script>
