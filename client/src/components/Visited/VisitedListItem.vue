<template>
  <div class="visitedListItemBox" v-if=isMySiblingClicked>
    <li class="listItem"
        v-for="(item, index) in locationArray" :key="index">Visited <strong>{{ item.location }}</strong> on <strong>{{ item.date }}</strong> 
      <button @click="removeItem(index, item.key)" class="removeButton"><i class="fas fa-trash-alt removeButtonIcon"></i></button>
    </li>
  </div>
</template>

<script>

import * as firebase from "firebase";

export default {

  props: {
    isMySiblingClicked : {
        type: Boolean
    }
},

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
          updatedLocationsArray.push({date: locations[key].date, location: locations[key].location, key: key})
        }
        updatedLocationsArray = [];
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
    flex-wrap: wrap;
  }

  .listItem {
    margin: .5rem;
    padding: 3rem;
    /* list-style: none; */
    -webkit-box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
    box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  }

.removeButton {
  text-align: center;
  height: 1rem;
  width: 1rem;
  border-radius: 10rem;
  font-size: 1.2rem;
  color: #ffffff;
  transition: all 0.4s;
  cursor: pointer;
  -webkit-box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  border-style: solid;
  margin: .5rem;
}

.removeButton:hover {
  transform: translateY(-0.4rem);
  -webkit-box-shadow: 3px 1px 5px -5px rgba(0, 0, 0, 0.83);
  box-shadow: 3px 1px 5px -5px rgba(0, 0, 0, 0.83);
}

.removeButton:active {
  transform: translateY(-0.1rem);
}

.removeButton:focus {
  outline: none;
}

.removeButtonIcon {
  font-size: .8rem;
  color: green;
}

</style>
