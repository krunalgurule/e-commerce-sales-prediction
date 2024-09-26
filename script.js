// script.js

// Hero Section Animation
$(document).ready(function() {
    $(".hero").animate({
      opacity: 1
    }, 1000);
  });
  
  // Features Section Animation
  $(document).ready(function() {
    $(".feature-card").hover(function() {
      $(this).animate({
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)"
      }, 500);
    }, function() {
      $(this).animate({
        boxShadow: "none"
      }, 500);
    });
  });
  
  // Call-to-Action Section Animation
  $(document).ready(function() {
    $(".cta-btn").hover(function() {
      $(this).animate({
        backgroundColor: "#444",
        color: "#fff"
      }, 500);
    }, function() {
      $(this).animate({
        backgroundColor: "#fff",
        color: "#333"
      }, 500);
    });
  });
  
  // Scroll to Top Button
  $(document).ready(function() {
    $(window).scroll(function() {
      if ($(this).scrollTop() > 100) {
        $(".scroll-to-top").fadeIn();
      } else {
        $(".scroll-to-top").fadeOut();
      }
    });
    $(".scroll-to-top").click(function() {
      $("html, body").animate({
        scrollTop: 0
      }, 1000);
    });
  });
  
  // Form Validation
  $(document).ready(function() {
    $("#signup-form").submit(function(event) {
      event.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      if (name == "" || email == "") {
        alert("Please fill in all fields.");
      } else {
        $.ajax({
          type: "POST",
          url: "signup.php",
          data: {
            name: name,
            email: email
          },
          success: function(data) {
            alert("Thank you for signing up!");
          }
        });
      }
    });
  });