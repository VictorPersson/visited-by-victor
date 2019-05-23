<template>
  <div>
    <button @click="addPlace">Add new place</button>
        <button @click="testButton">Test</button>
    <VisitedList />
  </div>
</template>

<script>
import VisitedList from "./VisitedList.vue";
import APIKey from '../../config.js';
import axios from "axios";

export default {
  data() {
    return {
      currentLocation: []
    }
  },

  components: {
    VisitedList
  },

  methods: {
    testButton() {
      console.log(this.currentLocation)
    },
    addPlace() {
      var options = {
        enableHighAccuracy: false,
        maximumAge: 0
      };

      function success(pos) {
        var coordinates = pos.coords;
      }

      function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
      }

      navigator.geolocation.getCurrentPosition(success, error, options);

      axios
        .get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=55.5907316, 13.020014500000002&key=${APIKey.googleMapsApi}`)
        .then(function(response) {
          console.log(response);
          this.currentLocation.push(respons.data.results[0].adress_components)
        })
        .catch(function(error) {
          console.log(error);
        })
    }
  }
};
</script>

<style>
</style>
