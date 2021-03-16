$(document).ready(function () {


  $('.owl-carousel').owlCarousel({
    margin: 10,
    dots: false,
    nav: true,
    navText: ['<img src="img/arrow_left.png" alt="">', '<img src="img/arrow_right.png" alt="">'],
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  })


  // Services Icon Hover

  var original_text = $('p#services').text();
  var services_p = $('p#services');
  var popover = $('.over-wind');
  if (document.documentElement.clientWidth >= 768) {
    $('div.service-item').hover(
      function () {
        var text = $(this).children('.front').children('p').text();
        $(services_p).fadeOut(200, function () { $(services_p).text(text).fadeIn(200); });
        $(".services br").fadeOut(300);
      },
      function () {
        if (document.documentElement.clientWidth >= 992) {
          $(services_p).fadeOut(200, function () { $(services_p)/* text(original_text) */.html(original_text).fadeIn(200); });
        } else {
          $(services_p).fadeOut(200, function () { $(services_p)/* text(original_text) */.html(original_text + '<br><br>').fadeIn(200); });
        }
      }
    );
  } else {
    original_text = "Коснитесь элемента, чтобы увидеть дополнительную информацию";
    $(services_p).html(original_text);
    $('div.service-item').mousedown(
      function () {
        var text = $(this).children('.front').children('p').text();
        $(popover).text(text).show("fast");
        // $(services_p).fadeOut(200, function(){ $(services_p).text(text).fadeIn(200); });
      });
    $('div.service-item').mouseup(function () {
      $(popover).hide("fast");
      // $(services_p).fadeOut(200,function(){ $(services_p).html(original_text).fadeIn(200); });
    })
  }


  $('div.preview .hover-area').click(
    function () {
      var id = $(this).attr('post-id');
      $('div.preview').fadeOut(200, function () { $(this).next('.content[post-id="' + id + '"]').fadeIn(200); });
    }
  )
  $('div.content .hover-area').click(
    function () {
      $('div.content').fadeOut(0, function () { $('div.preview').fadeIn(500); });
    }
  )



  $(function () {
    $('.menu-top').slicknav({
      label: '<i class="fas fa-bars"></i>',
      prependTo: "header",
      brand: "Treviso"
    });
  });

});