<template>
  <div class="visitedListItemBox" >
    <li class="listItem"
        v-for="(item, index) in locationArray" 
        :key="index">Visited 
        <h1 class="countryHeader">{{ item.location }}</h1>
        <h3 class="dateHeader">{{ item.day }} / {{ item.month }} / {{ item.year }} </h3> 
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
          updatedLocationsArray.push({
              day: locations[key].day, 
              month: locations[key].month, 
              year: locations[key].year, 
              location: locations[key].location, 
              key: key})
          }
      });

      this.locationArray = updatedLocationsArray
      //this.locationArray.sort()
      //this.locationArray.reverse()
       // Måste använda Vue.set() ?

       // Det finns 2 problem. 1: Denna method körs endast när sidan laddas. När man lägger till nytt objekt så görs det, men denna method körs inte igen.
       // Vad jag en gör i denna method så kommer inte det ske förens created() sker?

    },


    removeItem(index, key) {
      const database = firebase.database();
      const ref = database.ref(`location/${key}`);
      ref.remove();
      this.$delete(this.locationArray, index); // Kanske inte behövs om sidan laddar om
    }
  },

mounted() {
    console.log("Nu körs this.fetchLocations() i created()")
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
  min-width: 8rem;
  margin: 1rem;
  padding: 2rem;
  -webkit-box-shadow: -1px 4px 14px -1px rgba(46,74,117,0.33);
  -moz-box-shadow: -1px 4px 14px -1px rgba(46,74,117,0.33);
  box-shadow: -1px 4px 14px -1px rgba(46,74,117,0.33);
  animation: flip-horizontal-bottom .9s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;
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

@keyframes flip-horizontal-bottom {
  0% {
            transform: rotateX(180deg);
  }
  100% {
            transform: rotateX(360deg);
  }
}

  @media only screen and (max-width: 600px) {
    .listItem {
        width: 65%;
        text-align: center;
    }
}

</style>
