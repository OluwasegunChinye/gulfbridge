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
          <a href=""><img  class="icons" src="../assets/medium-m-brands.svg" alt="" srcset=""></a>
      </div>
    </div>
    <div class="container-two">
      <div class="about-us">
        <h3>ABOUT US</h3>
        <p>Gulfbridge Consulting Limited is Human Resources Management, Training Services and Strategy Consulting practice based in Lagos. We are propelled by and founded upon about many years of collective industry experience and a deployment of technology and technical competence to solve the knottiest challenges a company’s management faces.
        We are a company incorporated to help discerning businesses bridge the gap between their status quo and where they want to be in human capital terms and business strategy execution. Our interventions address the needs of companies who want to optimize performance and get value for their human capital development budget. Our solutions address the knottiest of human capital and strategy challenges both in the public and private sectors. 
        Our approach is to do little things well because we believe that it is the little things done well that aggregate to form the whole of the structure that others see and come to like and patronize. So, we pay attention to details without losing sight of the larger goal/objective or the big picture that is to be achieved.</p>
      </div>
      <div class="advantage">
         <h3>THE GULFBRIDGE ADVANTAGE</h3>
        <p>We are extremely agile/responsive organization run by passionate HR and business professionals with combine hands-on experience of about many years, cutting across industry lines – Hospitality & Tourism, Telecommunications, Real Estates, Aviation, Financial Services, Consulting, Oil & Gas, Not-For-Profit, Information Technology, Engineering, Media, etc.
        Our people are carefully selected and have high sense of duty and responsibility. We are professional and absolutely up-to-date with the latest HR issues, debates, development and concepts. With our monthly day-long conference, we are able to keep our people top notch and smoothen out rough edges, all in the process of serving you better.
        We are absolutely professional and will not in any way or form, use information or material obtained or gathered from you, to the detriment of your organization. We will be ready to execute a non-disclosure agreement with your company.</p>
      </div>
      <div class="img-one">
        <img src="../assets/Img1.svg" alt="" srcset="">
      </div>
    </div>

    <div class="container-three">
      <div class="service">
        <h3>OUR SERVICE</h3>
        <ul>
          <li>HR Advisory</li>
          <li>Service Design</li>
          <li>Business Strategy Implementation</li>
          <li>Training & Development</li>
          <li>Recruitment Services</li>
          <li>Customer Attention, Retention & Experience (CARE) Services</li>
          <li>Outsourcing Services</li>
        </ul>
      </div>
      <div class="how">
        <h3>HOW WE SERVE YOU</h3>
        <p>We start our engagement with you, our valued client, with thorough understanding of your business (strategy and operating model) and its need(s), with which we will formulate your recruitment, training and other needs, as agreed, and we work from there.
        A staff will be dedicated to liaise with you with a dual reporting line to you and to one of our Senior Consultants to you, so that you are kept abreast of the emerging issues and what we have done or intend to do about them.
        Critical issues like recruitment and other activities that have financial actions will still be subject to your approval. Regular meetings at predetermined intervals will help keep you up to date on all issues outsourced to us so that you can devote a higher percentage of your time to other core HR issues.</p>
      </div>
      <div class="img-2">
        <img src="../assets/Img2.svg" alt="" srcset="">
      </div>
    </div>

    <div class="footer">
      <div class="logo2">
        <img src="../assets/gb-logo.svg" alt="" srcset="">
      </div>
      
      <div class="addy">
        <p>  <strong> 5, Shakiru Adeoye Street, Ogudu, Lagos.<br>
            +234 807 777 6770 | +234 806 462 7196<br>
            connect@gulfbridgeconsulting.com </strong><br></p>
      </div>
      <div class="iconics">
         <img class="icon" src="../assets/twitter-brands.svg" alt="" srcset="">
          <img class="icon" src="../assets/facebook-f-brands.svg" alt="" srcset="">
          <img  class="icon" src="../assets/instagram-brands.svg" alt="" srcset="">
          <a href="#"><img  class="icon" src="../assets/linkedin-in-brands.svg" alt="" srcset=""></a> 
          <a href="#"><img  class="icon" src="../assets/medium-m-brands.svg" alt="" srcset=""></a>
      </div>
      <p class="copy"> <strong>&copy; 2020 Gulfbridge Consulting Limited </strong></p>
    </div>
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
    margin: 26px 32px 0px 0px ;

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
    margin-top: 80px;
    color: #33a0ba;
  }
}

.container-two {
  display : grid;
  padding: 50px 60px;
  grid-template-areas:
  'myabout myabout  myimg myimg'
  'myabout myabout  myimg myimg'
  'myad myad  myad myad';
  grid-gap: 20px;
  text-align: justify; 

  h3 {
    color: #1b3164;
    display: inline-block;
    font-size: 20px;
    letter-spacing: 2px;
    border-bottom: #fcb9b2 solid 2px ;
    padding:5px;
  }
  p {
    font-size: 14px;
    color: #33a0ba;
    letter-spacing: 1px;
    line-height: 22px;
  }

  .about-us {
    grid-area: myabout ;
  }
  .advantage {
    grid-area: myad;
  }
  .img-one{
    grid-area: myimg;
    width: 800px;
    margin-top: 60px;
  }
}

.container-three {
  display : grid;
  background-color:#33a0ba;
  padding:50px 60px;
  text-align: justify;
  grid-template-areas: 
  'myservice myservice myimg2 myimg2'
  'myservice myservice myimg2 myimg2'
  'myhow myhow  myimg2 myimg2'
  'myhow myhow myimg2 myimg2';
  grid-gap: 20px;

  h3 {
    color: #1b3164;
    display: inline;
    font-size: 20px;
    letter-spacing: 2px;
    padding:5px;
  }
  ul {
    margin-top : 15px;
    color: white;
  }
  li {
    padding: 10px;
    font-size: 14px;
  }

  p {
    font-size: 14px;
    color: white;
    letter-spacing: 1px;
    line-height: 22px;
  }
  .service {
    grid-area: myservice;
  }
  .how {
    grid-area: myhow;
  }
  .img-2 {
    grid-area: myimg2;
    width: 700px;
  } 
}

.footer {
  display: grid;
  padding: 0px 60px;
  height : 20vh;
  background-image: url('../assets/footerBg.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  grid-template-areas: 'myaddy mycopy  myicon mylogo2';
  align-content: center;
  justify-content: space-around;

  .logo2 {
    width:60px;
    grid-area: mylogo2;
    align-self:end;
  }
  .iconics {
    grid-area: myicon;
    align-self:end;
    .icon {
      width: 12px;
      padding: 10px 10px;
      color: #33a0ba;
      
    }
  }
  .addy {
    grid-area: myaddy;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: 1px;
    color:#1b3164;
    margin-top: 5px;
  }
  .copy {
    grid-area: mycopy;
    align-self:end;
    color: #1b3164;
  }
}


/* styling for Media query below*/

@media only screen and (max-device-width: 1024px) {

  .container-one {
    background-image: url("../assets/mobileBg.svg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 900px;
    height: 1600px;
    
    .logo {
      display: none;
      width: 190px;
      top: 340px;
      left: 12%;
    }
    ul li:not(.gb) {
      display: none;
    }


    .gb {
      display: none;
      margin-left:50px;
      margin-top: 490px;
      font-size: 50px;
      font-weight: bolder;
      letter-spacing: 2px;
      color:#1b3164;
    }
    .sub1 {
      display: none;
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
    display: none;
    }
  }


  .container-two {
    display : grid;
    grid-template-areas:
    'myabout'
    'myimg'
    'myad';
    grid-gap: 5px;
    text-align: justify;
    margin-top: 100px; 
    

    h3 {
      color: #1b3164;
      display: inline-block;
      font-size: 45px;
      letter-spacing: 1px;
      border-bottom: red solid 4px ;
      padding:10px;
      font-weight: bolder;
    }
    p {
      font-size: 35px;
      color: #1b3164;
      letter-spacing: 1px;
      line-height: 70px;
      font-weight: bold;
    }

    .about-us {
      grid-area: myabout ;
    }
    .advantage {
      grid-area: myad;
    }
    .img-one{
      grid-area: myimg;
      width: 760px;
      margin: 100px 0px 100px 0px;
      padding: 20px 0px;
    }
  }


  .container-three {
    display : grid;
    background-color:#ffff;
    text-align: justify;
    grid-template-areas: 
    'myimg2'
    'myservice'
    'myhow';
    grid-gap: 0px;
    font-weight: bold;

    h3 {
      color: #1b3164;
      display: inline-block;
      font-size: 45px;
      letter-spacing: 2px;
      border-bottom: red solid 2px ;
      padding:10px;
      font-weight: bolder;
      margin-top: 30px;
    }
    ul {
      margin-top : 15px;
      color: #1b3164
    }
    li {
      padding: 10px;
      font-size: 35px;
      text-align: start;
      list-style: spacing 1px;
      line-height:70px;
    }

    p {
      font-size: 35px;
      color: #1b3164;
      letter-spacing: 1px;
      line-height: 70px;
      
    }
    .service {
      grid-area: myservice;
      background-color:#ffff;
      margin: 80px 0px 80px 0px;
     
    }
    .how {
      grid-area: myhow;
      background-color:#ffff;
      margin-bottom: 80px;
    }
    .img-2 {
      grid-area: myimg2;
      width: 800px;
      margin: 100px 0px 100px 0px;
    } 
  }

    
  .footer {
    display: grid;
    padding: 10px 15px;
    height : 350px;
    width: 800px;
    background-image: url('../assets/footerBg.png');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    grid-template-areas: 
    'myaddy' 
    'myicon'
    'mycopy';
    justify-content:start;

    .logo2 {
      display:none;
     
    }
    .iconics {
      grid-area: myicon;
      margin-left: 1px;

      .icon {
        width: 25px;
        padding: 0px 10px;
      }
    }
    .addy {
      grid-area: myaddy;
      font-size: 31px;
      line-height: 50px;
      letter-spacing: 1px;
      color:#1b3164;
      margin-top: 0px;
      font-weight: bold;
    }
    .copy {
      grid-area: mycopy;
      color:#1b3164;
      font-size: 31px;
      padding: 0px 0px;
      font-weight: bold;
    }
  }
}

</style>
