<template>
    <div class="shop-cart">
        <h1>Cart</h1>
     <sShopCartItem 
        v-for="item in cart_data" 
        :key="item.article"
        :cart_item_data="item"
     />
    </div>
</template>

<script>
import sShopCartItem from './shop-cart-item'

export default {
    name: 'shop-cart',
    components: {
      sShopCartItem  
    },
    props: {
        cart_data: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data() {
        return{ 
        }
    },
    computed: {},
}
</script>

<style>
</style>