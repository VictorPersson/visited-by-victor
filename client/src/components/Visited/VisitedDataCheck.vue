<template>
  <div class="visitedDataCheckBox">
    <p
      class="dataCheckPara"
    >My advanced AI tells me that you are currently in: <p class="locationPara">{{ googleResultArray.slice(-1)[0].formatted_address }}</p></p>
    <!-- try - catch -> This here generates error since before button click, no array is here, hence no formatted address -->
    <p class="dataCheckPara">Is this correct?</p>
    <div class="buttonBox">
      <button @click="removeItem" class="checkButton buttonNo">
        <i class="checkButtonIconYes fas fa-times"></i>
      </button>
      <button @click="saveToFireBase" class="checkButton buttonYes">
        <i class="checkButtonIconNo fas fa-check"></i>
      </button>
    </div>
    <!-- <p>Full Street: {{ googleResultArray[0].formatted_address  }} </p> -->
  </div>
</template>

<script>
import axios from "axios";
import * as firebase from "firebase";

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
      const database = firebase.database();
      const ref = database.ref("location");

      // Finds the last item in the googleResultArray (which is always the country)
      let country = this.googleResultArray.slice(-1)[0].formatted_address;
      let currentDate = new Date().toDateString();
      console.log(typeof currentDate);

      let locationData = {
        location: country,
        date: currentDate
      };

      ref.push(locationData);
      this.$emit("buttonClicked");
    }
  }
};
</script>

<style scoped>

.visitedDataCheckBox {
  background: #ffffffd3;
  height: 50vh;
}

.dataCheckPara {
  margin-top: 3rem;
  text-align: center;
}

.buttonBox {
  display: flex;
  justify-content: center;
  align-items: center;
}

.locationPara {
  text-align: center;
  color: #1e90ff;
  margin-top: 0;
  font-size: 2.5rem;
  text-transform: uppercase;
}

.checkButton {
  text-align: center;
  height: 3rem;
  width: 3rem;
  border-radius: 10rem;
  font-size: 1.2rem;
  color: #ffffff;
  transition: all 0.4s;
  cursor: pointer;
  -webkit-box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  box-shadow: 3px 8px 5px -5px rgba(0, 0, 0, 0.21);
  border-style: solid;
  display: inline-block;
  margin: .5rem;
}

.checkButton:hover {
  transform: translateY(-0.4rem);
  -webkit-box-shadow: 3px 1px 5px -5px rgba(0, 0, 0, 0.83);
  box-shadow: 3px 1px 5px -5px rgba(0, 0, 0, 0.83);
}

.checkButton:active {
  transform: translateY(-0.1rem);
}

.checkButton:focus {
  outline: none;
}

.checkButtonIconYes {
  font-size: 2rem;
}

.checkButtonIconNo {
  font-size: 2rem;
}

.buttonYes {
  background-color: #1e90ff;
}

.buttonNo {
  background-color: #57606f;
}

</style>
