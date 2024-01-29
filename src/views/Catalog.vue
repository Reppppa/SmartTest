<script>
import "@/assets/variable.css";

import CartPlus from "@/components/icons/ic_cartPlus.vue";

export default {
  props: {
    products: {
      type: Object,
      required: true
    }
  },
  components: {
    CartPlus,
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)
    }
  }
}
</script>

<template>
  <div class="product">
    <h2 class="product__title">Товары</h2>
    <ul class="product__list">
      <li
          v-for="product of products"
          :key="product.id" class="product__item">
        <img class="product__img" v-bind:src=product.img alt="">
        <p class="product__name">{{ product.title }}</p>
        <span>
          <p class="product__price">{{ product.price + ' ₽'}}</p>
          <button @click="addToCart(product)" class="product__button">Купить<CartPlus /></button>
        </span>
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .product {
    margin-top: 80px;
  }
  .product__title {
    font-size: 28px;
    color: var(--color-black);
    font-family: Inter, sans-serif;
    font-weight: 600;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .product__list {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .product__item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border-radius: 10px;
    background-color: var(--color-white);
    font-family: Inter, sans-serif;
    font-weight: 600;
    color: var(--color-black);
  }
  .product__img {
    width: 100px;
    margin-right: 20px;
  }
  .product__name {
    margin-right: auto;
    margin-bottom: auto;
    font-weight: 500;
    text-align: left;
  }
  .product__price {
    font-size: 20px;
    color: var(--color-black);
    font-weight: 500;
  }
  .product__button {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 20px;
    border-radius: 8px;
    border: none;
    color: var(--color-white);
    background-color: var(--color-main);
    font-family: Inter, sans-serif;
    font-weight: 500;
  }
  .product__button:hover {
    cursor: pointer;
    opacity: 0.9;
  }
  .product__item span {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 320px) and (max-width: 544px) {
    .product__item {
      flex-direction: column;
    }
    .product__name {
      width: 100%;
      text-align: center;
    }
    .product__button {
      width: 300px;
      display: flex;
      justify-content: center;
    }
  }
</style>