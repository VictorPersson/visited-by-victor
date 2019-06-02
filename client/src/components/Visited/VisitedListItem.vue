<template>
  <div class="visitedListItemBox" >
    <li class="listItem"
        v-for="(item, index) in locationArray" 
        :key="index">Visited 
        <h1 class="countryHeader">{{ item.location }}</h1>
        <h3 class="dateHeader">{{ item.date }}</h3> 
        <button @click="removeItem(index, item.key)" class="removeButton">
          <i class="fas fa-trash-alt removeButtonIcon"></i>
        </button>
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

      ref.once("value", function recivedData(data) {
        let locations = data.val();
        let firebaseKeys = Object.keys(locations);
        
        for (let i = 0; i < firebaseKeys.length; i++) {
          let key = firebaseKeys[i];
          updatedLocationsArray.push({date: locations[key].date, location: locations[key].location, key: key})
        }
      });
      this.locationArray = updatedLocationsArray
    },


    removeItem(index, key) {
      const database = firebase.database();
      const ref = database.ref(`location/${key}`);
      ref.remove();
      this.$delete(this.locationArray, index); // Kanske inte behövs om sidan laddar om
    }
  },

created() {
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
    flex-wrap: wrap;
  }

  .listItem {
    margin: .5rem;
    padding: 3rem;
    /* list-style: none; */
    -webkit-box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
    box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  }

  .countryHeader {
    margin: 0;
    color: #1e90ff;
  }

.removeButton {
  background: none;
  border: none;
}

.removeButtonIcon {
  cursor: pointer;
  font-size: 1.5rem;
  color: #57606f;
  transition: all .5s;
  outline: none;
}

.removeButtonIcon:hover {
  transform: translateY(-0.4rem);
  color: orangered;
}

.removeButtonIcon:active {
  transform: translateY(-0.1rem);
}

.removeButtonIcon:focus {
  outline: none;
}

</style>
