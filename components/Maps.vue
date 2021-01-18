<template>
    <div>
        <iframe 
            width="100%" 
            height="550" 
            frameborder="0" 
            scrolling="no" 
            marginheight="0" 
            marginwidth="0" 
            :src="'https://maps.google.com/maps?q='+coords.latitude+','+coords.longitude+'&hl=es&z=14&amp;output=embed'"
            >
        </iframe>
    </div>
</template>
<script>
  export default {
    props: {
        coords: { type: Object }
    }
  }
</script>