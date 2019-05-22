<template>
  <div>
    <VisitedList/>
    <VisitedListItem/>
  </div>
</template>

<script>

import VisitedList from "./components/VisitedList/VisitedList.vue";
import VisitedListItem from "./components/VisitedListItem/VisitedListItem.vue";

export default {
  components: {
    VisitedList,
    VisitedListItem
  }
};
</script>

<style>
</style>
