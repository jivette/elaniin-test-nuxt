<template>
<div class="tabs is-toggle">
  <ul class="columns m-0 p-0">
    <li class="column p-0" :class="activeButton == 1 ? 'is-active' : ''" @click="locations(1);">
      <a>
        <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
        <span class="syne_bold">Para llevar</span>
      </a>
    </li>
    <li class="column p-0" :class="activeButton == 2 ? 'is-active' : ''" @click="locations(2);">
      <a>
        <span class="icon is-small"><i class="fas fa-music" aria-hidden="true"></i></span>
        <span class="syne_bold">Domicilio</span>
      </a>
    </li>
  </ul>
</div>
</template>
<style  lang="scss" scoped>
    .tabs.is-toggle li.is-active a {
        background-color: black;
    }
</style>
<script>
  export default {
    props: {
        getlocation: { type: Function }
    },
    mounted() {
        this.locations(1)
    },
    data() {
        return {
            activeButton: 1
        }
    },
    methods: {
        async locations(val) {
            this.activeButton = val;
            this.getlocation(val)
        }
    },

  }
</script>