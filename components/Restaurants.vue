<template>
    <div class="columns" id="restaurants">
        <div class="column">
            <Tabs :getlocation="getLocations"/>
            <ListAddress :dataLocation="dataLocation" :onChangeLocation="onChangeLocation" />
        </div>        
        <div class="column">
            <Maps :coords="map" v-if="map.latitude != ''"/>
        </div>        
    </div>
</template>
<script>
export default {
    data() {
        return {
            active: 0,
            dataLocation: [],
            map:{latitude:'13.710566', longitude: '-89.231635'}
        }
    },
    methods: {
        async getLocations(val) {
            this.active = val;
            let res = await this.$store.dispatch("getLocations",  val == 1 ? 'takeaway' : 'delivery');
            this.dataLocation = res.data.data;
            console.log(this.dataLocation)
        },
        onChangeLocation(val) {
            this.map.latitude = val.latitude;
            this.map.longitude = val.longitude;
        }
    },
}
</script>