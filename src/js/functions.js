jQuery(document).ready(function($) {
	
	function validateEmail(form_id) {
        var email = $("#" + form_id + " input[name=email]").val(),
            emailPattern = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(email)) {
            $("#" + form_id + " input[name=email]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=email]").addClass('error_input');
        return false;
    }

    function validateName(form_id) {
        var name = $("#" + form_id + " input[name=name]").val(),
            patt =  /^[а-яА-Яa-zA-Z\s\.]{3,30}$/;
        if (patt.test(name)) {
            $("#" + form_id + " input[name=name]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=name]").addClass('error_input');
        return false;
    }
    function validateForm(form_id) {
        var a = validateEmail(form_id),
            c = validateName(form_id);
        return a && c;
    }

    function ajaxFormRequest(result_id, form_id, url) {
        if (validateForm(form_id)) {
            $.ajax({
                url:    url,
                type:     "POST",
                dataType: "html",
                data: $("#" + form_id).serialize(),
                beforeSend: function () {
                    $("#" + result_id).html("Идет отправка...");
                },
                success: function (response) {
                    $("#" + result_id).html(response);
                    $("#" + form_id).trigger("reset");
                },
                error: function () {
                    $("#" + result_id).html("ERROR");
                }
            });
        } else {return false; }
    }

    $('#feedback_form').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sendresult1', 'feedback_form', 'processform.php');
    });
	
	 $('#feedback_form2').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sendresult2', 'feedback_form2', 'processform.php');
    });
	
	 var sudoSlider = $("#main_slider").sudoSlider({
      numeric: false,
	  effect: "fadeZoomIn, fadeZoomOut, unzip, unzipDown, unzipLeft, unzipRight, unzipUp",
	  touch: true,
	  prevNext:true,
	  continuous: true,
	  prevHtml:'<a href="#" class="prevBtn"></a>',
	  nextHtml:'<a href="#" class="nextBtn"></a>',
	  auto:true,
	  pause: '5000'
   });
   
   $("#logo_carousel").owlCarousel({
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 400,
        loop: true,
        navRewind: true,
        nav: true,
        items: 6,
        dots: false,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 2
            },
            480: {
                items: 3
            },
            960: {
                items: 4
            },
			1280: {
                items: 5
            },
			1600: {
                items: 6
            }
        }
    });
	
	$("#news_carousel").owlCarousel({
        margin: 34,
        autoplay: false,
        smartSpeed: 400,
        loop: false,
        navRewind: false,
        nav: true,
        items: 3,
        dots: false,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });
	
	$("#reviews").owlCarousel({
        margin: 38,
        autoplay: true,
        autoplayTimeout: 8000,
		autoplayHoverPause:true,
        smartSpeed: 400,
        loop: true,
        navRewind: true,
        nav: true,
        items: 2,
        dots: false,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            760: {
                items: 2
            }
        }
    });
	
	//$('table').wrap('<div class="table_wrap"></div>');
	
	if ($(window).width()<961){
		$(".crp_container img").attr("src", "images/crp_mobile.png");
	}
			
	$(window).resize(function(){
		if ($(window).width()<961){
			$(".crp_container img").attr("src", "images/crp_mobile.png");
		} else {
			$(".crp_container img").attr("src", "images/crp.png");	
		}
	})
	
});