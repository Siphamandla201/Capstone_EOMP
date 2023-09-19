# grey-foundation_web

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

.featured {
  margin-left: 30px;
  padding-top: 20px;
  font-size: larger;
  font-weight: 600;
}

.products-holder {
  padding: 30px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 80px;
}

.products-card {
  height: 400px;
  width: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
}

.product-img {
  height: 300px;
  width: 250px;
  background-color: rgb(88, 154, 132);
}

.product-info {
  margin-top: 5px;
}

/* |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||| BANNERS / PROMOTIONS |||||||||||||||||||||||||||||||||||||||||| */

.banner-full {
  object-fit: contain;
  height: 500px;
  margin-bottom: 10px;
  position: relative;
}

.banner-full img {
  height: 100%;
  width: 100%;
  filter: grayscale(80%);
  position: relative;
}

.banner-full .img {
  filter: brightness(0.5);
  filter: grayscale(100%);
}

.banner-description {
  position: absolute;
  height: 100px;
  color: black;
  text-align: justify;
  z-index: 1;
  top: 150px;
  left: 0;
  padding: 20px;
}

.banner-description h3 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.banner-description p {
  color: rgb(255, 255, 255);
  margin-top: 15px;
  font-size: 1.25rem;
  margin-bottom: 10px;
  word-wrap: normal;
  word-spacing: 1.5px;
}

.banner-btn {
  color: rgb(255, 255, 255);
  font-size: 0.75rem;
  transition: background-color 0.2s ease;
}

.banner-halves {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 400px;
  margin: 20px;
  text-align: center;
  color: rgb(255, 255, 255);
}

.banner-halves {
  height: 45%;
}

.banner-halves :hover {
  animation: grow 0.8s forwards;
}

.banner-header {
  margin-top: 20px;
}

.banner-men a,
.banner-women a {
  color: rgb(255, 255, 255);
}

.banner-men {
  filter: grayscale(100%);
  width: 40%;
  height: 100%;
}

.banner-women {
  filter: grayscale(100%);
  
  width: 48%;
  height: 100%;
}

@keyframes grow {
  0% {
    scale: 0.8;
  }
  
  100% {
    scale: 1.1;
    margin-bottom: 10px;
  }
}
