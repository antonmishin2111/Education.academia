
$(document).ready(function() {
	/*круговые диаграммы*/
	$(window).scroll(function() {
		var start = $('#skills').offset().top-800;

		if ((($(this).scrollTop() > start)&($(this).scrollTop()< start+50))) {
			$('.dial1').knob();    
			$({animatedVal: 0}).animate({animatedVal: 70}, {
				duration: 1000,
				easing: 'swing',
				step: function() {
					$('.dial1').val(Math.ceil(this.animatedVal)).trigger('change');
					}
			});
			$('.dial2').knob();    
			$({animatedVal: 0}).animate({animatedVal: 90}, {
				duration: 1000,
				easing: 'swing',
				step: function() {
					$('.dial2').val(Math.ceil(this.animatedVal)).trigger('change');
					}
				});
			$('.dial3').knob();    
			$({animatedVal: 0}).animate({animatedVal: 60}, {
				duration: 1000,
				easing: 'swing',
				step: function() {
					$('.dial3').val(Math.ceil(this.animatedVal)).trigger('change');
					}
			});
			$('.dial4').knob();    
			$({animatedVal: 0}).animate({animatedVal: 40}, {
				duration: 1000,
				easing: 'swing',
				step: function() {
					$('.dial4').val(Math.ceil(this.animatedVal)).trigger('change');
					}
			});	
		}
	});
	/*End diagram*/
	
	/*слайдел Слик*/
	$('.skills-slider').slick({
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    arrows: true,
    prevArrow:'<i class="fa fa-angle-left skills-slider-arrows arrows-left"></i>', 
    nextArrow:'<i class="fa fa-angle-right skills-slider-arrows arrows-right"></i>',
    dots: false,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
 	});
 /*end slider*/	

 /*forms*/
 $('#footerbtn').click(function() {
   if ($('input#footername').val() == '') {
     $("#form-footer").trigger("reset");
     alert('Вы не заполнили поле Name'); 
     return false;
   } else if ($('input#footeremail').val() == '') {
     alert('Вы не заполнили поле Email');
     return false;
   } else if ($('input#footersubject').val() == '') {
     alert('Вы не заполнили поле Subject');
     return false;
   } else if ($('input#footermessage').val() == '') {
     alert('Вы не заполнили поле Message');
     return false;
   } else {
       $("#form-footer").submit(function() {
         $.ajax({
           type: "POST",
           url: "mail.php",
           data: $(this).serialize()
         }).done(function() {
           $(this).find("input").val("");
           alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
           $("#form-footer").trigger("reset");
         });
         return false;
       });
     }
   });
	/*end forms*/

	/*Menu*/
    $(function() {
        var pull    = $('.cmn-toggle-switch');
        menu    = $('.nav-menu-list');
        menuHeight  = menu.height();
        $(pull).on('click', function(e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(menu).slideToggle('slow');
        });
    });
	/*end menu*/

	/*animation*/
	new WOW().init();
	/*end animation*/

});
