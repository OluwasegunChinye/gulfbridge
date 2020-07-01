<template>
  <div>
    <div class="container-one">
      <div class="logo">
        <img src="../assets/gb-logo.svg" alt="">
      </div>
       <ul>
        <li><a href="#">contact us</a></li>
        <li><a href="#">our service</a></li>
        <li><a href="#">about us</a></li>
        <li><a href="#">home </a></li>
        <li style="float:left" class="gb">Gulfbridge Consulting</li>
      </ul>

      <div class="sub1">
        <p class="sub2">WE ARE THE BEST AT</p>
        <p class="sub3">HR Advisory, Training, Recruitment and providing <br>
           Professional HR management services to suit <br>
           your unique operations. </p>
           <img class="icons" src="../assets/twitter-brands.svg" alt="" srcset="">
           <img class="icons" src="../assets/facebook-f-brands.svg" alt="" srcset="">
           <img  class="icons" src="../assets/instagram-brands.svg" alt="" srcset="">
          <a href=""><img  class="icons" src="../assets/linkedin-in-brands.svg" alt="" srcset=""></a> 
      </div>
    </div>
    <div class="container-two"></div>
  
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.container-one {
  background-image: url("../assets/HomeBg.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;

  .logo {
    width: 60px;
    position: absolute;
    top: 20px;
    left: 5%;
  }
  ul {
    margin: 0;
    list-style-type: none;
    padding: 0px;
  }

  ul li {
    float : right;
    margin: 29px 32px 0px 0px ;

  }
  ul li a {
    text-decoration: none;
    font-size: 11px;
    padding: 0px 3px;
    color: #33a0ba;
    font-weight: bold;
    letter-spacing: 1px;
    padding:5px 5px;
  }
  ul li a:hover {
    color : #90b9f7;
    border-bottom: solid 2px #fcb9b2;
  }
  .gb {
    margin-left:130px;
    margin-top: 37px;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 2px;
    color: #33a0ba;
  }
  .sub1 {
    position: absolute;
    top: 36%;
    left: 5%;
    text-align: start;
  }
  .sub2 {
    font-size: 20px;
    font-weight: bold;
    color: #33a0ba;
    letter-spacing: 3px;
  }
  .sub3 {
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: bold;
    line-height: 30px;
    color: #33a0ba;
  }
  .icons {
    width: 12px;
    padding: 10px 10px;
    margin-top: 60px;
    color: #33a0ba;
  }
}


</style>
