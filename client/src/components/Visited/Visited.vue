<template>
  <div>
    <button @click="addPlace">Find me!</button>
    <p>Alt: Enter manually</p>
    <input type="text" placeholder="Country or address...">
    <VisitedDataCheck 
      v-on:buttonClicked="isSearched=false" 
      v-if="isSearched" 
      :googleResultArray="currentLocation" />
    <VisitedList v-if="isSearched"/>
  </div>
</template>

<script>

import VisitedList from "./VisitedList.vue";
import VisitedDataCheck from "./VisitedDataCheck.vue";

import APIKey from '../../config.js';
import axios from "axios";

export default {
  data() {
    return {
      currentLocation: [],
      isSearched: false
    }
  },

  components: {
    VisitedList,
    VisitedDataCheck
  },

  methods: {

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
       
      //  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=55.5907316, 13.020014500000002&key=${APIKey.googleMapsApi}`)
      //    .then((response) => {
      //      console.log("Test")
          
          this.currentLocation = [ { "address_components": [ { "long_name": "3B", "short_name": "3B", "types": [ "street_number" ] }, { "long_name": "Lantmannagatan", "short_name": "Lantmannagatan", "types": [ "route" ] }, { "long_name": "Norra Sofielund", "short_name": "Norra Sofielund", "types": [ "political", "sublocality", "sublocality_level_1" ] }, { "long_name": "Malmö", "short_name": "Malmö", "types": [ "postal_town" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] }, { "long_name": "214 44", "short_name": "214 44", "types": [ "postal_code" ] } ], "formatted_address": "Lantmannagatan 3B, 214 44 Malmö, Sverige", "geometry": { "location": { "lat": 55.59083520000001, "lng": 13.0199212 }, "location_type": "ROOFTOP", "viewport": { "northeast": { "lat": 55.59218418029151, "lng": 13.0212701802915 }, "southwest": { "lat": 55.58948621970851, "lng": 13.0185722197085 } } }, "place_id": "ChIJBRbxt2ehU0YRn3RSaXG4-Zs", "plus_code": { "compound_code": "H2R9+8X Malmö, Sverige", "global_code": "9F7MH2R9+8X" }, "types": [ "street_address" ] }, { "address_components": [ { "long_name": "21", "short_name": "21", "types": [ "street_number" ] }, { "long_name": "Trelleborgsgatan", "short_name": "Trelleborgsgatan", "types": [ "route" ] }, { "long_name": "Norra Sofielund", "short_name": "Norra Sofielund", "types": [ "political", "sublocality", "sublocality_level_1" ] }, { "long_name": "Malmö", "short_name": "Malmö", "types": [ "postal_town" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] }, { "long_name": "214 35", "short_name": "214 35", "types": [ "postal_code" ] } ], "formatted_address": "Trelleborgsgatan 21, 214 35 Malmö, Sverige", "geometry": { "location": { "lat": 55.5907051, "lng": 13.0193531 }, "location_type": "ROOFTOP", "viewport": { "northeast": { "lat": 55.5920540802915, "lng": 13.0207020802915 }, "southwest": { "lat": 55.5893561197085, "lng": 13.0180041197085 } } }, "place_id": "ChIJc7Q3x2ehU0YRdL9lQSBMuS4", "plus_code": { "compound_code": "H2R9+7P Malmö, Sverige", "global_code": "9F7MH2R9+7P" }, "types": [ "establishment", "point_of_interest" ] }, { "address_components": [ { "long_name": "25", "short_name": "25", "types": [ "street_number" ] }, { "long_name": "Trelleborgsgatan", "short_name": "Trelleborgsgatan", "types": [ "route" ] }, { "long_name": "Norra Sofielund", "short_name": "Norra Sofielund", "types": [ "political", "sublocality", "sublocality_level_1" ] }, { "long_name": "Malmö", "short_name": "Malmö", "types": [ "postal_town" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] }, { "long_name": "214 35", "short_name": "214 35", "types": [ "postal_code" ] } ], "formatted_address": "Trelleborgsgatan 25, 214 35 Malmö, Sverige", "geometry": { "location": { "lat": 55.5906354, "lng": 13.0198846 }, "location_type": "RANGE_INTERPOLATED", "viewport": { "northeast": { "lat": 55.5919843802915, "lng": 13.0212335802915 }, "southwest": { "lat": 55.5892864197085, "lng": 13.0185356197085 } } }, "place_id": "EipUcmVsbGVib3Jnc2dhdGFuIDI1LCAyMTQgMzUgTWFsbcO2LCBTd2VkZW4iGhIYChQKEgndvJzHZ6FTRhGJfnHuEjKEoxAZ", "types": [ "street_address" ] }, { "address_components": [ { "long_name": "Lantmannagatan", "short_name": "Lantmannagatan", "types": [ "route" ] }, { "long_name": "Norra Sofielund", "short_name": "Norra Sofielund", "types": [ "political", "sublocality", "sublocality_level_1" ] }, { "long_name": "Malmö", "short_name": "Malmö", "types": [ "postal_town" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] }, { "long_name": "214 44", "short_name": "214 44", "types": [ "postal_code" ] } ], "formatted_address": "Lantmannagatan, 214 44 Malmö, Sverige", "geometry": { "bounds": { "northeast": { "lat": 55.591188, "lng": 13.0204131 }, "southwest": { "lat": 55.59049040000001, "lng": 13.0201571 } }, "location": { "lat": 55.5908432, "lng": 13.0202575 }, "location_type": "GEOMETRIC_CENTER", "viewport": { "northeast": { "lat": 55.59218818029151, "lng": 13.0216340802915 }, "southwest": { "lat": 55.58949021970851, "lng": 13.0189361197085 } } }, "place_id": "ChIJA_MTtmehU0YRUj8qGGyqKbw", "types": [ "route" ] }, { "address_components": [ { "long_name": "214 44", "short_name": "214 44", "types": [ "postal_code" ] }, { "long_name": "Malmö", "short_name": "Malmö", "types": [ "postal_town" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "214 44 Malmö, Sverige", "geometry": { "bounds": { "northeast": { "lat": 55.592045, "lng": 13.0305289 }, "southwest": { "lat": 55.5851901, "lng": 13.0152369 } }, "location": { "lat": 55.58678630000001, "lng": 13.0242093 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 55.592045, "lng": 13.0305289 }, "southwest": { "lat": 55.5851901, "lng": 13.0152369 } } }, "place_id": "ChIJYZXXhWihU0YRkwDcB3iQAQs", "types": [ "postal_code" ] }, { "address_components": [ { "long_name": "Norra Sofielund", "short_name": "Norra Sofielund", "types": [ "political", "sublocality", "sublocality_level_1" ] }, { "long_name": "Malmö", "short_name": "Malmö", "types": [ "locality", "political" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "Norra Sofielund, Malmö, Sverige", "geometry": { "bounds": { "northeast": { "lat": 55.59239600000001, "lng": 13.0207581 }, "southwest": { "lat": 55.58418810000001, "lng": 13.0114471 } }, "location": { "lat": 55.5876511, "lng": 13.0161881 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 55.59239600000001, "lng": 13.0207581 }, "southwest": { "lat": 55.58418810000001, "lng": 13.0114471 } } }, "place_id": "ChIJ_8IUImihU0YREe2Hr1vCarE", "types": [ "political", "sublocality", "sublocality_level_1" ] }, { "address_components": [ { "long_name": "Malmö", "short_name": "Malmö", "types": [ "postal_town" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "Malmö, Sverige", "geometry": { "bounds": { "northeast": { "lat": 55.6409349, "lng": 13.153517 }, "southwest": { "lat": 55.54552899999999, "lng": 12.941545 } }, "location": { "lat": 55.588038, "lng": 13.0322252 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 55.6409349, "lng": 13.153517 }, "southwest": { "lat": 55.54552899999999, "lng": 12.941545 } } }, "place_id": "ChIJ_5HEdKUFU0YRUC7S8GEpouM", "types": [ "postal_town" ] }, { "address_components": [ { "long_name": "Malmö", "short_name": "Malmö", "types": [ "locality", "political" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "Malmö, Sverige", "geometry": { "bounds": { "northeast": { "lat": 55.639951, "lng": 13.1507609 }, "southwest": { "lat": 55.500386, "lng": 12.8811839 } }, "location": { "lat": 55.604981, "lng": 13.003822 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 55.639951, "lng": 13.1507609 }, "southwest": { "lat": 55.500386, "lng": 12.8811839 } } }, "place_id": "ChIJ_5HEdKUFU0YR5YhIvd8FqdM", "types": [ "locality", "political" ] }, { "address_components": [ { "long_name": "Malmö", "short_name": "Malmö", "types": [ "administrative_area_level_2", "political" ] }, { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "Malmö, Sverige", "geometry": { "bounds": { "northeast": { "lat": 55.6458581, "lng": 13.1510869 }, "southwest": { "lat": 55.49653499999999, "lng": 12.8811839 } }, "location": { "lat": 55.57905340000001, "lng": 13.0108705 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 55.6458581, "lng": 13.1510869 }, "southwest": { "lat": 55.49653499999999, "lng": 12.8811839 } } }, "place_id": "ChIJ7xnvNhGhU0YR9gdmGbJo3Lo", "types": [ "administrative_area_level_2", "political" ] }, { "address_components": [ { "long_name": "Skåne län", "short_name": "Skåne län", "types": [ "administrative_area_level_1", "political" ] }, { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "Skåne län, Sverige", "geometry": { "bounds": { "northeast": { "lat": 56.54260590000001, "lng": 14.5844781 }, "southwest": { "lat": 55.3353771, "lng": 12.4417551 } }, "location": { "lat": 55.99025719999999, "lng": 13.5957692 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 56.54260590000001, "lng": 14.5844781 }, "southwest": { "lat": 55.3353771, "lng": 12.4417551 } } }, "place_id": "ChIJP1A75D94TUYR4fC34heiR70", "types": [ "administrative_area_level_1", "political" ] }, { "address_components": [ { "long_name": "Sverige", "short_name": "SE", "types": [ "country", "political" ] } ], "formatted_address": "Sverige", "geometry": { "bounds": { "northeast": { "lat": 69.0599709, "lng": 24.1773101 }, "southwest": { "lat": 55.0059799, "lng": 10.5798 } }, "location": { "lat": 60.12816100000001, "lng": 18.643501 }, "location_type": "APPROXIMATE", "viewport": { "northeast": { "lat": 69.0599709, "lng": 24.1773101 }, "southwest": { "lat": 55.0059799, "lng": 10.5798 } } }, "place_id": "ChIJ8fA1bTmyXEYRYm-tjaLruCI", "types": [ "country", "political" ] } ]
          
          
          // Dives into the huge resons, finds the results array (all addresses) which is always orderd from most precise address at top (street), to most vauge at the bottom (country). slice(-1)[0] therefore targets the last elemen in the array

          // this.currentLocation = response.data.results
          // console.log(response)
          
        //  })
        //  .catch((error) => {
        //    console.log(error);
        //  })

        this.isSearched = true
       },
  }
};
</script>

<style>
</style>
