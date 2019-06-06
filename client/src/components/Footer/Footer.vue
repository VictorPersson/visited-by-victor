<template>
  <div class="footerBox">
   <p class="footerText">Created with love by Victor</p>
   <a target="_blank" href="https://github.com/VictorPersson"><i class="fab fa-github footerIcon"></i></a>
  </div>
</template>

<script>
export default {

  }

</script>

<style scoped>

  .footerBox {
    position: fixed;
    background: linear-gradient(to right, #1e90ff, #3742fa);
    width: 100vw;
    bottom: 0;
  }

  .footerText {
    color: #ffffff;
    font-family: 'Libre Franklin', sans-serif;
    text-align: center;
    font-size: 1rem;
  }

  .footerIcon {
      color: #ffffff;
      font-size: 1.5rem;
      position: absolute;
      bottom: .9rem;
      right: 2rem;
      cursor: pointer;
      transition: all 1s;
  }

  .footerIcon:hover {
    transform: rotate(360deg);
  }

</style>