<template>
  <div class="visitedBox">
    <button @click="loadLocation" class="trackButton">
      Find me!
      <i class="fas fa-location-arrow trackButtonIcon"></i>
    </button>
    <div class="manualInputBox">
      <p class="altText">Or, enter visited location manually</p>
      <i @click="saveManualInput" class="manualinputButton fas fa-chevron-right"></i>
      <input
        v-model="countryInput"
        v-on:keyup.enter="saveManualInput"
        class="manualInput"
        type="text"
        placeholder="Country... "
      >
    </div>
    <VisitedLoadingScreen v-if="isLoading" />
    <VisitedDataCheck
      v-on:buttonClicked="(isSearched=false, showList=true)"
      v-if="isSearched"
      :googleResultArray="currentLocation"
    />
    <VisitedList v-if="showList"/>
  </div>
</template>

<script>
import VisitedList from "./VisitedList.vue";
import VisitedDataCheck from "./VisitedDataCheck.vue";
import VisitedLoadingScreen from "./VisitedLoadingScreen.vue";

import APIKey from "../../config.js";
import axios from "axios";

export default {
  data() {
    return {
      countryInput: null,
      currentLocation: [],
      latitude: null,
      longitude: null,
      isSearched: false,
      showList: true,
      isLoading: false
    };
  },

  components: {
    VisitedList,
    VisitedDataCheck,
    VisitedLoadingScreen
  },

  methods: {
    saveManualInput() {
      console.log(this.countryInput);
      this.currentLocation.push({ formatted_address: this.countryInput });
      this.countryInput = "";
      this.showList = false;
      this.isSearched = true;
    },

    trackUser(callback) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(callback);
      } else {
        console.log(
          "Cannot track your locaiton, geolocation may not be supported in this browser."
        );
      }
    },

    getLocationData() {
      axios
        .get(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${
            this.latitude
          }, ${this.longitude}&key=${APIKey.googleMapsApi}`
        )

        .then(response => {
          this.currentLocation = response.data.results;
          this.isLoading = false;
          this.isSearched = true;
        })
        .catch(error => {
          console.log(error);
        });
    },

    loadLocation() {
      this.showList = false;
      this.isLoading = true;

      this.trackUser(location => {
        this.latitude = location.coords.latitude
        this.longitude = location.coords.longitude
        this.getLocationData();
      })
    }
  }
};
</script>

<style scoped>
.trackButton {
  text-align: center;
  padding: 0.5rem 2.5rem 0.5rem 2.5rem;
  border-radius: 3rem;
  background: white;
  font-size: 1.2rem;
  color: #1e90ff;
  transition: all 0.4s;
  cursor: pointer;
  -webkit-box-shadow: -1px 4px 14px -1px rgba(46,74,117,0.33);
  -moz-box-shadow: -1px 4px 14px -1px rgba(46,74,117,0.33);
  box-shadow: -2px 4px 14px -1px rgba(46,74,117,0.33);
  border-style: solid;

  margin-top: 2rem;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.trackButton:hover {
  transform: translateY(-0.4rem);
  -webkit-box-shadow: 3px 1px 5px -5px rgba(0, 0, 0, 0.83);
  box-shadow: 3px 2px 9px -6px rgba(0, 0, 0, 0.83);
}

.trackButton:active {
  transform: translateY(-0.1rem);
}

.trackButton:focus {
  outline: none;
}

.trackButtonIcon {
  display: block;
  padding-top: 0.4rem;
}

.altText {
  margin-top: 2rem;
  text-align: center;
  color: #57606f;
}

.manualInputBox {
  width: 30rem;
  margin: 0 auto;
}

.manualInput {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  font-family: "Libre Franklin", sans-serif;
  font-size: 1.4rem;
  text-align: center;
  font-size: 1.4rem;
  outline: none;
  border-style: solid;
  border-width: 0 0 0.5px 0;
}

.manualInput:focus {
  border-width: 0 0 0.7px 0;
  border-color: #1e90ff;
}

.manualInput:focus::placeholder {
  transition: all 0.4s;
  font-size: 1rem;
  transform: translateY(-0.4rem);
}

.manualinputButton {
  margin-left: 21rem;
  padding-right: 2rem;
  padding-left: 2rem;
  cursor: pointer;
  margin-top: 1rem;
  color: #1e90ff;
  font-size: 1.7rem;
  position: absolute;
  transition: all 0.6s;
}

.manualinputButton:hover {
  transform: translateX(0.5rem);
}

@media only screen and (max-width: 500px) {

.manualInputBox {
  width: auto
  }

.manualinputButton {
    margin-left: 20rem;
  }
}

@media only screen and (max-width: 400px) {

  .manualinputButton {
    margin-left: 15rem;
  }
}

@media only screen and (max-width: 300px) {

  .manualinputButton {
    padding: 1rem;
  }
}
</style>
