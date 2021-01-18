<template>
    <div class="columns is-flex-direction-column is-right">
        <div v-for="(value, key, index) in dataLocation" :key="index" 
            :class="selected == value.id ? 'is-active' : ''"
            class="p-4 m-2 item column is-10" @click="selectedRestaurant(value, value.id)">
            <p class="syne_bold title is-5 has-text-black m-1   "> {{ value.name }} </p>
            <p clasS="sans_regular subtitle is-6 has-text-black m-0 p-0"> Abierto de {{ value.opening_time }} - {{ value.closing_time }} </p>
            <p clasS="sans_regular subtitle is-6 has-text-black m-0 p-0"> {{ value.address }} </p>
        </div>
    </div>
</template>
<style  lang="scss" scoped>
    .is-right {
        align-items: flex-end;
            @media(max-width: 767px) { /* <== You can change this break point as per your  needs */
                padding:25px;
            }
        .item {
            border: 1px solid black; 
            cursor: pointer;
            &.is-active {
                background-color: $active;
                border: none;
            }   
        }    
    }    
</style>
<script>
  export default {
    props: {
        dataLocation: { type: Array },
        onChangeLocation: { type: Function }
    },
    data() {
        return {
            selected: null
        }
    },
    methods: {
        async selectedRestaurant(val, key) {
            this.selected = key;
            this.onChangeLocation(val)
        }
    },

  }
</script>