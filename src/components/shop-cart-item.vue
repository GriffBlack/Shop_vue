<template>
    <div class="shop-cart-item">
     <img class="shop-cart-item__image" :src=" require('../assets/images/' + cart_item_data.image)" alt="">
     <div class="shop-cart-item__info">
         <p>{{cart_item_data.name}}</p>
         <p>{{cart_item_data.price}}</p>
         <p>{{cart_item_data.article}}</p>
     </div>
     <div class="shop-cart-item__quantity">{{cart_item_data.quantity}}</div>
     <button>Delete</button>
    </div>
</template>

<script>
export default {
    name: 'shop-cart-item',
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return{ 
        }
    },
    computed: {

    },
    mounted() {
        // this.cart_item_data.quantity = 1;
        // this.$emit (this.cart_item_data, 'quantity', 1)
        this.$set(this.cart_item_data, 'quantity', 1)
        // this.cart_item_data.includes("quantity", 1)
    },
}
</script>

<style lang="scss">
.shop-cart-item {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 0 8px 0 #808080;
    padding: $padding*2;
    margin-bottom: $margin*2;
    &__image {
        max-width: 50px;
    }
}
</style>