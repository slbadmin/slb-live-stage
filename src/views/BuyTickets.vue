<template>
    <v-div>
        <h1>Buy Tickets Now!</h1>
    </v-div>
</template>


<script>
export default {
    data : {
        cart: 0
    },
    methods: {
        addToCart: function() {
            this.cart += 1;
        }
    }
}
</script>
