<script>
  import Logo from "@/components/icons/ic_logo.vue";
  import Cart from "@/components/icons/ic_cart.vue";
  export default {
    name: 'header',
    props: {
      total: {}
    },
    components: {
      Logo, Cart
    },
  }
</script>

<template>
  <header class="header">
    <nav class="header__inner">

      <div class="header__item logo">
        <Logo />
      </div>

      <router-link to="/catalog" class="header__item">Товары</router-link>

      <router-link to="/cart" class="header__item cart">
        <Cart />
        <span class="totalPrice">{{ total + ' руб' }}</span>
      </router-link>

    </nav>
  </header>
</template>

<style scoped>
  .header {
    font-family: Inter, sans-serif;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    background-color: white;

    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
  }
  .header__inner {
    display: flex;
    height: 60px;
    flex-direction: row;
    align-items: center;
    padding: 0 10px;
    max-width: 1400px;
    margin: 0 auto;
  }
  .header__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 36px;
    gap: 2px;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 8px;
  }
  .header__item:hover {
    background-color: #F8F8F8;
  }
  .cart {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-left: auto;
  }
  .totalPrice {
    color: var(--color-main);
    font-weight: 600;
  }
  a {
    text-decoration: none;
    color: var(--color-black);
    font-weight: 500;
  }
  @media (min-width: 320px) and (max-width: 420px) {
    .totalPrice {
      display: none;
    }
  }
</style>