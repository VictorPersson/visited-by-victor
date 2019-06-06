<template>
  <div class="hello">
      <h1 class="header mainHeader">Visited</h1>
      <h3 class="header secondaryHeader">by Victor</h3>
  </div>
</template>

<script>
export default {

  }

</script>

<style scoped>

  .mainHeader {
    font-family: 'Lobster', cursive;
    font-size: 5rem;
    text-align: center;
    color: #1e90ff;
    /* color: #3742fa; */
    margin: 0;
	  animation: slide-bottom 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  }

  .secondaryHeader{
   font-family: 'Libre Franklin', sans-serif;
   text-align: center;
   font-size: 1.7rem;
   color: #57606f;
   margin: 0;
    animation: scale-up-center 1.2s cubic-bezier(0.215, 0.610, 0.355, 1.000) both;
  }

  @keyframes scale-up-center {
  0% {
            transform: scale(0.5);
  }
  100% {
            transform: scale(1);
  }
}

@keyframes slide-bottom {
  0% {
            transform: translateY(-6rem);
  }
  100% {
            transform: translateY(0);
  }
}


</style>
