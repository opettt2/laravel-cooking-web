<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/style1.css">
    <title>Recipe for Your food</title>
</head>

<body>

<header>
    <h1>Masak.ID</h1> 
    <div class="search">
        <input type="text" id="searchInput" placeholder="Enter an ingredient...">
        <button id="searchButton">Search</button>
    </div>
    <div class="navigation">
        <a href="/">Home</a> | <a href="/team">About Us</a>
    </div>   
</header>
<!-- slider section -->
<section class="slider_section position-relative">
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="container">
          <div class="row">
            <div class="col-lg-10 col-md-11 mx-auto">
              <div class="detail-box text-center">
                <h1>
                  Tentang Kita
                </h1>
                <p>
                  Meluncurkan situs web resep makanan adalah usaha yang menyenangkan dan memuaskan, memungkinkan Anda untuk menggabungkan kecintaan Anda pada seni kuliner, fotografi, dan bercerita, sambil berbagi resep lezat dengan audiens global. "Cooking Delights" adalah inisiatif kami yang berdedikasi, yang berusaha untuk menjadi surga bagi para pecinta makanan, baik pemula yang ingin menguasai dasar-dasar memasak atau koki berpengalaman yang mengejar inspirasi kuliner tanpa akhir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    </ol>
  </div>
</section>
<!-- end slider section -->

<section class="trainer_section layout_padding">
  <div class="container">
    <div class="heading_container">
      <h2>
        Our Team 
      </h2>
    </div>
    <div class="row">
      <!-- Member 1 -->
      <div class="col-lg-3 col-md-6">
        <div class="box">
          <div class="img-box">
            <img src="images/shem2.jpg" alt="Shem">
          </div>
          <div class="name">
            <h5>
              Shem
            </h5>
            <h6>
              20221054
            </h6>
          </div>
        </div>
      </div>
      <!-- Member 2 -->
      <div class="col-lg-3 col-md-6">
        <div class="box">
          <div class="img-box">
            <img src="images/Nita (1).jpg" alt="Trinitha Pricilia Barung">
          </div>
          <div class="name">
            <h5>
              Trinitha Pricilia Barung
            </h5>
            <h6>20221064</h6>
          </div>
        </div>
      </div>
      <!-- Member 3 -->
      <div class="col-lg-3 col-md-6">
        <div class="box">
          <div class="img-box">
            <img src="images/aji (1).jpg" alt="Nismat Hajjim Setyadi">
          </div>
          <div class="name">
            <h5>
              Nismat Hajjim Setyadi
            </h5>
            <h6>
              20221056
            </h6>
          </div>
        </div>
      </div>
      <!-- Member 4 -->
      <div class="col-lg-3 col-md-6">
        <div class="box">
          <div class="img-box">
            <img src="images/dapid (1).jpg" alt="David Kalta Imanuel">
          </div>
          <div class="name">
            <h5>
              David Kalta Imanuel
            </h5>
            <h6>
              20221072
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



    <div id="mealList" class="meal-list"></div>
    <div class="modal-container">
        <button id="recipeCloseBtn" class="close-button">&times;</button>
        <div class="meal-details-content">
            <!-- Content from js will be inserted here -->
        </div>
    </div>



    <script src="js/script.js"></script>
</body>

</html><?php /**PATH C:\Users\zethv\OneDrive\Documents\Joki\joki_gas\resources\views/team.blade.php ENDPATH**/ ?>