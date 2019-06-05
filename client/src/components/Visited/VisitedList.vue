<template>
  <div>
    <ol class="locationList">
      <VisitedListItem />
    </ol>
  </div>
</template>

<script>

import VisitedListItem from './VisitedListItem.vue';


export default {
  data() {
    return {

    }
  },

  components: {
    VisitedListItem
  },

  methods: {
    },
   }


</script>

<style scoped>

  .locationList {
    padding: 0;
    margin-bottom: 5rem;
    list-style: none;
  }

</style>
