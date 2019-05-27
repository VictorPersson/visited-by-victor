<template>
  <div>
    <!-- try - catch -> This here generates error since before button click, no array is here, hence no formatted address -->
    <p>Country: {{ googleResultArray.slice(-1)[0].formatted_address  }}</p>
    <p>Full Street: {{ googleResultArray[0].formatted_address  }} </p>
  </div>
</template>

<script>


export default {
  props: ['googleResultArray'],
  data() {
    return {

    }
  },

  metods: {

    },
   }


</script>

<style scoped>

</style>
