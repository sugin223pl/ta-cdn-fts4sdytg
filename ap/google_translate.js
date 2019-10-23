		function googleTranslateElementInit() {
		  new google.translate.TranslateElement({pageLanguage: 'en', includedLanguages: 'en,ca,de,es,fr,it,nl', layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT, autoDisplay: true}, 'google_translate_element');
		}
		 //to get currently selected language
		window.setInterval(function(){
			 lang_txt = $("select.goog-te-combo option:selected").text();
			 lang_val = $("select.goog-te-combo option:selected").val();
				if(lang_val.length > 1) {
					$('.lang_text').html('<span class="flag-icon flag-icon-'+lang_val+'"></span>');
				} else {
					$('.lang_text').html('<span class="flag-icon flag-icon-en"></span>');
				}
		}, 2000);
		
		$("a.lang_text").click(function() {
			$('html,body').animate({
				scrollTop: $("#google_translate_element").offset().top},
				'slow');
		});

		$(window).load(function() {
			$(".goog-logo-link").empty();
			$('.goog-te-gadget').html($('.goog-te-gadget').children());
		});
		$.bind(
			"mouseenter mouseleave",
			function (event) {
				if (event.type === 'mouseenter')    { google_trans_tt.css('z-index', -1000); }
				else                                { google_trans_tt.css('z-index',  1000); }
			}
		);