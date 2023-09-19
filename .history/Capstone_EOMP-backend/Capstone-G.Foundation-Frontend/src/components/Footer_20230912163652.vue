<template>
  <section class="footer">
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
        <div class="copyright">
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
      </section>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.footer {
    font-family: 'Roboto', sans-serif;
    color: #222222;
    background-color: #94ACC4;
    text-align: justify;
}

a {
  text-decoration: none;
}

.footer-container {
    padding: 20px 90px;
    display: flex;
    justify-content: space-between;
    border-bottom: 2px solid white;
}

.footer-links {
    display: flex;
    flex-direction: column;
    color: #222222;
    gap: 15px;
    width: 300px;
}

ul p {
    font-weight: bold;
    color: #222222;
}

ul li {
    list-style: none;
    color: #222222;
    font-weight: lighter;
}

ul li:hover {
    text-decoration: underline;
}

.social-links {
    display: flex;
    gap: 25px;
}

.social-links li {
    font-size: 25px;
    width: 44px;
    height: 44px;
}

.social-links a:hover {
    width: 44px;
    height: 44px;
    background-color: rgb(231, 230, 230);
    border-radius: 4px;
    color: #222222;
}

.copyright {
    display: flex;
    flex-direction: column;
}

.links {
    padding: 20px 90px;
    display: flex;
    justify-content: space-between;
    width: 40%;
    text-decoration: underline;
}

.copyright-content {
    padding: 0px 90px 20px;
    font-size: 14px;
    line-height: 5px;
}


</style>
