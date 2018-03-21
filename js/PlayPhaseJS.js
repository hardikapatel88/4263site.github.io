
      var slideIndex = 1;
      PlayPhase(slideIndex);
      function plusSlides(n) {
        PlayPhase(slideIndex += n);
      }

      function currentSlide(n) {
        PlayPhase(slideIndex = n);
      }

      function PlayPhase(n) {
        var i;
        var slides = document.getElementsByClassName("PlayPhase");
        var dots = document.getElementsByClassName("dot");
        if(n > slides.length) {slideIndex = 1}
        if(n < 1) {slideIndex = slides.length}
          
          for(i = 0; i < slides.length; i++){
            slides[i].style.display = "none";
          }

          for(i = 0; i < dots.length; i++){
            dots[i].className = dots[i].className.replace("active", "");
          }
          slides[slideIndex-1].style.display = "block";
          dots[slideIndex-1].className += " active";
      }

