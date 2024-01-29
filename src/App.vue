<script>
import { products } from "@/data/products.js";

import "@/assets/normalize.css";

import Header from "@/components/Header.vue";
import Catalog from "@/views/Catalog.vue";
import Cart from "@/views/Cart.vue"

export default {
  name: 'app',
  components: {
    Cart, Header, Catalog
  },
  data() {
    return {
      products,
      cart: []
    }
  },
  methods: {

    saveLocalStorageCart(){
      localStorage.removeItem('cart');
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },

    addToCart(product) {
      if (this.products[product.id - 1].inCart === false) {
        this.products[product.id - 1].inCart = true;
        this.products[product.id - 1].qty = product.qty;
        this.cart.push(product);
      } else {
        this.products[product.id - 1].qty = product.qty + 1;
        console.log(product)
      }

      this.saveLocalStorageCart();
    },

    removeFromCart(id) {
      for (let index = 0; index < this.cart.length; index++) {
        const cart_item_id = this.cart[index].id;

        if (cart_item_id === id) {
          this.cart.splice(index, 1)

          for (let i = 0; i < this.products.length; i++) {
            if (cart_item_id === this.products[i].id) {
              this.products[i].inCart = false;
              this.products[i].qty = 1;

              this.saveLocalStorageCart();
            }
          }
        }
        let cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
        if (cartLocalStorage.length === 0) {
          localStorage.removeItem("cart");
          console.clear();
        }
      }
    },

    clearCart() {
      this.cart = [];

      localStorage.removeItem("cart");
      console.clear();

      for (let i = 0; i < this.products.length; i++) {
        this.products[i].inCart = false;
      }
    },

    cartLocalStorage() {
      if (localStorage.getItem("cart")) {
        let cartLocalStorage = JSON.parse(localStorage.getItem("cart"));
        console.log(cartLocalStorage);
        return cartLocalStorage;
      } else {
        return [];
      }
    },
  },

  computed: {
    total() {
      let i = 0;
      for (let index = 0; index < this.cart.length; index++) {
        i += this.cart[index].price * this.cart[index].qty;
      }
      return i;
    },
  },

  mounted() {
    this.cart = this.cartLocalStorage();

    for (let id = 0; id < this.products.length; id++) {
      const product = this.products[id];

      if (localStorage.getItem("cart")) {
        let cartLocalStorage = JSON.parse(localStorage.getItem("cart"))

        for (let i = 0; i < cartLocalStorage.length; i++) {
          const cartItem = cartLocalStorage[i];

          if (product.id === cartItem.id) {
            product.inCart = true;
          }
        }
      }
    }
  }
}
</script>

<template>
  <Header
    :total="total"
  />
    <div class="container">
      <router-view

        v-bind:products="products"
        @add-to-cart="addToCart"
        :cartItems="cart"

        @remove-from-cart="removeFromCart"
        @clear-cart="clearCart"
        :total="total"

      ></router-view>
    </div>
</template>

<style scoped>

</style>