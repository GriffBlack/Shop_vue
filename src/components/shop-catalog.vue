<template>
    <div class="shop-catalog">
        <h1>catalog</h1>
        <div class="shop-catalog__list">
            <sCatalogItem 
            v-for="product in PRODUCTS"
            :key="product.article"
            :product_data="product"
            @addToCart='addToCart'
            />
    </div>
    </div>
</template>

<script>
import sCatalogItem from './shop-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
    name: 'shop-catalog',
    components: {
        sCatalogItem
    },
    props: {},
    data() {
        return{
 
        }
    },
    computed: {
    ...mapGetters ([
        'PRODUCTS'
    ])
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
          addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
if (response.data) {
    console.log('Data arrived')
}
        })
    },
}
</script>

<style lang="scss">  
.shop-catalog {
    &__list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
}
</style>