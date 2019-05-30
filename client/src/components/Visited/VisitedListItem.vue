<template>
  <div>
    <button @click="fetchLocations">Load visits</button>
    <li v-for="(item, index) in locationArray" :key="index">{{ item.location }} <button @click="removeItem(index, item.key)">X</button></li>
  </div>
</template>

<script>

import * as firebase from "firebase";

export default {
  data() {
    return {
      locationArray: []
    };
  },

  methods: {

    fetchLocations() {
      
      const database = firebase.database();
      const ref = database.ref("location");
      let updatedLocationsArray = [];

      ref.on("value", function recivedData(data) {
        let locations = data.val();
        let firebaseKeys = Object.keys(locations);

        for (let i = 0; i < firebaseKeys.length; i++) {
          let key = firebaseKeys[i];
          let user = locations[key].user;
          let location = locations[key].location;
          console.log(key)

          updatedLocationsArray.push({user: user, location: location, key: key})
          console.log(updatedLocationsArray)
        }
      });

      this.locationArray = updatedLocationsArray
    },

    removeItem(index, key) {
      console.log(index, key)
      const database = firebase.database();
      const ref = database.ref(`location/${key}`);
      ref.remove();

      this.$delete(this.locationArray, index); // Kanske inte behövs om sidan laddar om
    }
  },

mounted() {
    this.fetchLocations()
},

};
</script>

<style scoped>
</style>
