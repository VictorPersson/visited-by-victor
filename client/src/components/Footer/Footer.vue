<template>
  <div class="footerBox">
   <p class="footerText">Created with love by Victor</p>
  </div>
</template>

<script>
export default {

  }

</script>

<style scoped>

  .footerBox {
    background: linear-gradient(to right, #1e90ff, #3742fa);
    position: fixed;
    width: 100vw;
    bottom: 0;
  }

  .footerText {
    color: #ffffff;
    font-family: 'Libre Franklin', sans-serif;
    text-align: center;
    font-size: 1rem;
  }

</style>

--

<template>
  <div class="visitedListItemBox">
    <li class="listItem"
        v-for="(item, index) in locationArray" :key="index">Visited <strong>{{ item.location }}</strong> on <strong>{{ item.date }}</strong> 
      <button @click="removeItem(index, item.key)"><i class="fas fa-trash-alt removeButton"></i></button>
    </li>
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
      let updatedLocationsArray = []

      ref.on("value", function recivedData(data) {
        let locations = data.val();
        let firebaseKeys = Object.keys(locations);
        
        for (let i = 0; i < firebaseKeys.length; i++) {
          let key = firebaseKeys[i];
          let location = locations[key].location;
          let date = locations[key].date;
          console.log('Before push =>' , updatedLocationsArray)
          updatedLocationsArray.push({date: date, location: location, key: key})
          console.log('After push =>' , updatedLocationsArray)
        }
        updatedLocationsArray = [];
        // Här tömms den rätt utan dubbletter,  men uppdateras ej med nya värdet / DOM uppdateras ej
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

  .visitedListItemBox {
    margin-top: 4.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .listItem {
    margin: .5rem;
    padding: 3rem;
    list-style: none;
    -webkit-box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
    box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  }

</style>

