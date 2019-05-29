<template>
  <div class="visitedDataCheckContainer">
    <p>My advanced AI tells me that you are currently in: {{ googleResultArray.slice(-1)[0].formatted_address }}</p>
    <!-- try - catch -> This here generates error since before button click, no array is here, hence no formatted address -->
    <p>Is this correct?</p>
    <button @click="saveToFireBase" class="buttonYes">Yes, save it!</button>
    <button @click="removeItem" class="buttonNo">No, remove it</button>
    <!-- <p>Full Street: {{ googleResultArray[0].formatted_address  }} </p> -->
  </div>
</template>

<script>

import axios from "axios";
import * as firebase from 'firebase'

export default {
  props: ["googleResultArray"],
  data() {
    return {};
  },

  methods: {


    removeItem() {
      // Removes the requested object from the array
      // Closes the dataCheck pop component
      this.$emit("buttonClicked");
    },


    saveToFireBase() {
      const database = firebase.database()
      const ref = database.ref('location');

      // Finds the last item in the googleResultArray (which is always the country)
      let country =  this.googleResultArray.slice(-1)[0].formatted_address

      let locationData = {
        location: country,
        user: 'Victor'
      }

      ref.push(locationData)
      this.$emit("buttonClicked");
    }
  }
};

</script>

<style scoped>
.visitedDataCheckContainer {
  background-color: blueviolet;
}

.buttonYes {
  background-color: greenyellow;
}

.buttonNo {
  background-color: orangered;
}
</style>
