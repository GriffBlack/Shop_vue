<template>
    <div class="shop-catalog-item">
        <img class="shop-catalog-item__image" :src=" require('../assets/images/' + product_data.image)" alt="">
        <p class="shop-catalog-item__name">{{product_data.name}}</p>
        <p class="shop-catalog-item__price">Price {{product_data.price}} P</p>
        <button 
        class="shop-catalog-item__add_to_cart_btn btn" 
        @click="addToCart"
        >Add to cart
        </button>
    </div>
</template>

<script>
export default {
    name: 'shop-catalog-item',
    props: {
        product_data: {
            type: Object,
            default() {
                return
            }  
        }
    },
    data() {
        return{
        }
    },
    computed: {},
    methods: {
        addToCart() {
            this.$emit ('addToCart' , this.product_data)
        }
        // sendDataToParent() {
        //     this.$emit('sendArticle', this.product_data.article)
        // }
    },
}
</script>

<style lang="scss">
.shop-catalog-item {
    flex-basis: 25%;
    box-shadow: 0 0 8px 0 #808080;
    padding: $padding*2;
    margin-bottom: $margin*2;
&__image {
    width: 100px;
}
}
</style>