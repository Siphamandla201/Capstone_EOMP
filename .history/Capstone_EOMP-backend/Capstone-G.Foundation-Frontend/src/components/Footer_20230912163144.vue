<template>
  <footer>
        <div class="footer-container">
            <ul class="footer-links">
                <p>Customer Service</p>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">FAQs</a></li>
                <li><a href="#">Orders and delivery</a></li>
                <li><a href="#">Returns and refunds</a></li>
                <li><a href="#">Payment and pricing</a></li>
                <li><a href="#">Cryptocurrency payments</a></li>
                <li><a href="#">Promotion terms and conditions</a></li>
                <li><a href="#">FARFETCH Customer Promise</a></li>
            </ul>
    
            <ul class="footer-links">
                <p>About FARFETCH</p>
                <li><a href="#">About us</a></li>
                <li><a href="#">Investors</a></li>
                <li><a href="#">FARFETCH partner boutiques </a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">FARFETCH app</a></li>
                <li><a href="#">Modern slavery statement</a></li>
            </ul>
    
            <div>
                <ul class="footer-links">
                    <p>Discounts and membership</p>
                    <li><a href="#">Affiliate program</a></li>
                    <li><a href="#">Refer a friend</a></li>
                    <li><a href="#">FARFETCH membership</a></li>
                    <li><a href="#">Student Beans and Graduates</a></li>
                    <li><a href="#">Student and Youth discount</a></li>
                    <li><a href="#">Donate and save</a></li>
                </ul>
                
                <ul class="social">
                    <p>Follow us</p>
                    <div class="social-links">
                        <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-pinterest-p"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-snapchat"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                    </div>
                </ul>
            </div>
        </div>
        <dic class="copyright">
            <ul class="links">
                <li>Privacy policy</li>
                <li>Terms and conditions</li>
                <li>Accessibility</li>
                <li>Sitemap</li>
            </ul>
            <div class="copyright-content">
                <p>
                    'FARFETCH' and the 'FARFETCH' logo are trade marks of FARFETCH UK Limited and are registered in numerous jurisdictions around the world.
                </p>
                <p>
                    © Copyright 2023 FARFETCH UK Limited. All rights reserved.
                </p>    
            </div>
        </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer-links a {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  text-align: justify;
  color: rgb(140, 149, 245);
  margin-left: 15px;
  cursor: pointer;
}

h3 {
  width: 250px;
  margin: 0%;
  margin-top: 50px;
  margin-left: 7px;
}

ul {
  list-style: none;
}

li {
  margin-bottom: 10px;
}

.copyright {
  display: flex;
  align-items: baseline;
  justify-content: center;
  text-align: center;
  height: 40px;
}
</style>
