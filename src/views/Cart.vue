<script>

export default {
  props: {
    cartItems: {
      type: Array,
      default: () => []
    },
    total: {}
  },
  methods: {
    removeFromCart(id) {
      this.$emit('remove-from-cart', id)
    },
    clearCart() {
      this.$emit('clear-cart')
    },
  }
}


</script>

<template>
  <div class="cart">
    <h2 class="cart__title">Корзина</h2>
    <span class="cart__header" v-if="cartItems.length > 0">
      <div class="cart__total">Итого: {{ total }} руб.</div>
      <button class="cart__button--clear" @click="clearCart">Отчистить корзину</button>
    </span>
    <div class="cart__inner" v-if="cartItems.length > 0">
      <ul class="cart__list">
        <li v-for="item in cartItems" :key="item.id" class="cart__item">
          <img class="cart__item--img" v-bind:src=item.img alt="">
          <span>
            <p class="cart__name">{{ item.title }}</p>
            <input class="cart__qty" v-model="item.qty" type="number" min="1" max="100" step="1" value=":item.qty">
            <small> * {{ item.price }} руб.</small>
          </span>
          <strong class="cart__price--total">{{ item.price * item.qty }} руб</strong>
          <button class="cart__button--delete" @click="removeFromCart(item.id)">Удалить</button>
        </li>
      </ul>
    </div>
    <div v-else class="cart__empty">
      Корзина пуста
    </div>
  </div>
</template>

<style scoped>
  .cart {
    margin-top: 80px;
    font-family: Inter, sans-serif;
  }
  .cart__title {}
  .cart__header {
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    align-items: center;
  }
  .cart__total {
    font-weight: 600;
    font-size: 20px;
  }
  .cart__button--clear {
    margin-left: auto;
    padding: 10px 20px;
    background-color: var(--color-white);
    border: none;
    color: var(--color-black);
    border-radius: 8px;
  }
  .cart__button--clear:hover {
    opacity: 0.9;
    color: #ff4848;;
    cursor: pointer;
  }
  .cart__button--delete {
    padding: 10px 20px;
    max-height: 40px;
    background-color: var(--color-white);
    border: none;
    color: #ff4848;
    border-radius: 8px;
    margin-left: auto;
  }
  .cart__button--delete:hover {
    background-color: rgba(255, 85, 85, 0.11);
    cursor: pointer;
  }
  .cart__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .cart__item {
    background-color: var(--color-white);
    padding: 20px;
    border-radius: 8px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
  .cart__item--img {
    width: 80px;
  }
  .cart__name {
    margin-right: auto;
    width: 300px;
  }
  .cart__price--total {
    display: flex;
    align-items: center;
    margin-left: auto;
    min-width: fit-content;
  }
  .cart__empty {
    margin: 200px auto;
    display: flex;
    justify-content: center;
    font-size: 32px;
    font-weight: 600;
    color: #b7b7b7;
  }

  @media (min-width: 540px) and (max-width: 720px) {
    .cart__name {
      width: fit-content;
    }
  }

  @media (min-width: 320px) and (max-width: 540px) {
    .cart__item {
      flex-direction: column;
    }
    .cart__name {
      width: 100%;
      text-align: center;
    }
    .cart__total {
      font-weight: 500;
      font-size: 18px;
    }
  }
</style>