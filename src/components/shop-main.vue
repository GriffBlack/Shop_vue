<template>
    <div class="shop-main">
<p>{{title}}</p>
     <vCatalog />
     <vCart 
        v-if="CART.length"
        :cart_data="CART"
     />
     </div>
</template>

<script>
import vCatalog from './shop-catalog'
import vCart from './shop-cart'
import {mapGetters} from 'vuex'



export default {
    name: 'shop-main',
    components: {
        vCatalog,
        vCart
    },
    props: {},
    data() {
        return{
            title: 'Shop main'
        }
    },
    computed: {
        ...mapGetters ([
            'CART'
        ]
        )
    },
    methods: {},
    watch: {},
    mounted() {
        console.log('Hello i am alive')
    }
}
</script>

<style>
.shop-main {
    max-width: 900px;
    margin: 0 auto;
}
</style>