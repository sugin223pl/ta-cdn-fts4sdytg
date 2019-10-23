//var chi = 'Check in';
//var cho = 'Check out';
var loader = '<span class="_1fvdack"><div class="_1cffqulc"><div class="_ds5osx4"></div><div class="_1sfmw165"></div><div class="_1thhr0se"></div></div></span>';

calcGuests();
	function calcPrice(holder, action, checkin, checkout, adults = 1, children = 0, infants = 0) {
		if(action == 'getCalcResults') {
			$('#book-btn').html(loader);
			$('._193ed0j7').prop('disabled', true);
		}
		$(holder).html(loader);
			$.post(location.href, {
				action: action,
				checkin: checkin,
				checkout: checkout,
				adults: adults,
				children: children,
				infants: infants
			},	function(data, status) {
					console.log(status);
					console.log('.................. done .............................');
					$(holder).html(data);
				});	
	}
	function donewDate(date) {
		date    = new Date(date),
		yr      = date.getFullYear(),
		month   = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth(),
		day     = date.getDate()  < 10 ? '0' + date.getDate()  : date.getDate(),
		newDate = month + '/' + day + '/' + yr;
		return newDate;
	}

	$picker = $('.datepicker-here');
	$picker.datepicker({
		dateFormat: 'mm/dd/yyyy',
		onShow: function(){
			$('.checkin_label').css("background", "rgb(153, 237, 230)");
			$('.datepicker--pointer').css("left", "10px");
			$('.datepicker--pointer').css("right", "");
			$('.minstay').html(ch_minstay + ' ' + minstay + ' ' + ch_nights);
			$('.updated').html(ch_updated);
		},
		onSelect: function() {
			$('.checkin_label').css("background", "none");
			$('.checkout_label').css("background", "rgb(153, 237, 230)");
			$('.datepicker--pointer').css("left", "");
			$('.datepicker--pointer').css("right", "10px");
			
		},
        clearButton: true,
        language: ch_lang,
        minDate: new Date(),
        autoClose: true,
          onHide: function(dp, animationCompleted) {
            if (!animationCompleted) {
                //console.log('start hiding')
            } else {
                //console.log('finished hiding');
                console.log(dp);
				if (dp.selectedDates[0] == null || dp.selectedDates[1] == null) {
					$('.checkin_label').text(chi);
					$('.checkout_label').text(cho);
					$('.checkin_label, .checkout_label').css("background", "none");
					$('#checkin, #checkout').val("");
					$('#calc-results').html("");
					$('._193ed0j7').prop('disabled', true);
					$('#book-btn').text(cha);
				} else {
					var selecteDates = dp._prevOnSelectValue.split('-');
					var checkIn = selecteDates[0];
					var checkOut = selecteDates[1];

					var diff =  Math.floor(( Date.parse(checkOut) - Date.parse(checkIn) ) / 86400000);
						if(diff < minstay) {
							$('.minstay').css('color','red');
							console.log('ERROR: ' + diff);
							this.show();
							return false;
						}
					console.log(chi + ': '+ checkIn);
					console.log(cho + ': '+ checkOut);
					console.log(chn + ': '+ diff);

					$('.checkin_label').text(checkIn);
					$('#checkin').val(checkIn);
					$('.checkout_label').text(checkOut);
					$('#checkout').val(checkOut);
					$('.checkin_label, .checkout_label').css("background", "none");

					calcPrice('#top-price', 'getCalc', checkIn, checkOut);
					calcPrice('#bottom_price', 'getCalc', checkIn, checkOut);
					calcPrice('#bottom_price_mob', 'getCalc', checkIn, checkOut);
					calcPrice('#calc-results', 'getCalcResults', checkIn, checkOut);
				}
            }
		  }
		  
	  });
	  console.log('.................. done .............................');
$('.checkin_label').text(chi);
$('.checkout_label').text(cho);
$('.datepicker-here').val(chu);

//$('#chclass').click(function() {
 //   $(this).toggleClass('_5rmajzg _5e950g');
//});
$(document).ready(function(){
    $("#chclass").click(function() {
        $("._sk1dbeq").toggle(function(){
			//alert("Selecte Guests");
			
        });
		$(this).toggleClass('_5rmajzg _5e950g');
		$('#html_guests').toggleClass('_marker_on');
		$(".svg-down").toggle();
		$(".svg-up").toggle();
	});
    $("#chclasss").click(function() {
        $("._sk1dbeq").toggle(function(){
            //alert("Selecte Guests");
        });
		
		$('#html_guests').toggleClass('_marker_on');
		$(".svg-down").toggle();
		$(".svg-up").toggle();
    });
});
function calcGuests() { 
	console.log(chx + ': ' + guests);
	var input_guests 	= $('#number_of_guests');
	var input_adults 	= $('#number_of_adults');
	var input_children 	= $('#number_of_children');
	var input_infants 	= $('#number_of_infants');

	var html_guests		= $('#html_guests');
	var html_adults		= $('#html_adults');
	var html_children	= $('#html_children');
	var html_infants	= $('#html_infants');
	
	var total_guests = parseInt(html_adults.text()) + parseInt(html_children.text());
	console.log(ch_totalguests + ': ' + total_guests);

	input_guests.val(total_guests);
	input_adults.val(parseInt(html_adults.text()));
	console.log(ch_adults + ': ' + input_adults.val());

	input_children.val(parseInt(html_children.text()));
	console.log(ch_children + ': ' + input_children.val());

	input_infants.val(parseInt(html_infants.text()));
	console.log(ch_infants + ': ' + input_infants.val());

		if(total_guests === 1) {
			html_guests.html(total_guests + " " + ch_guest);
		} else {
			html_guests.html(total_guests + " " + ch_guests);
		}
		console.log('Total: ' + html_guests.html());
		console.log('.................. done .............................');
		return total_guests;
		
}
	  
$(function() {
  $("._1wfgrf01").on("click", function() {
    var $button = $(this);
	console.log($button.data('type'));
    var oldValue = $button.parent().parent().find("div._1uvlw8cd").text();
	console.log(oldValue);
	var type = $button.data('type');
			if (type == "plus" && oldValue < guests) {
				var newVal = parseFloat(oldValue) + 1;
			  } else if (type == "minus") {
				if (oldValue > 0) {
					var newVal = parseFloat(oldValue) - 1;
					$('#max-guests-label').css({"color":""});
					} else {
					newVal = 0;
				  }
			} else {
			   $('#max-guests-label').css({"color":"red"});
			}
	 if(calcGuests() < guests || type == 'minus') {
		$button.parent().parent().find("div._1uvlw8cd").text(newVal);
		$('#max-guests-label').css({"color":""});
	 } else if(calcGuests() === guests || type == 'plus') {
		$('#max-guests-label').css({"color":"red"});
	 }
	 if($button.parent().parent().find("div._1uvlw8cd").attr('id') == "html_adults" && $button.parent().parent().find("div._1uvlw8cd").text() == "0") {
		 $button.parent().parent().find("div._1uvlw8cd").text(1);
	 }
	 calcGuests();
	 
  });
});


$( "#book_it_form" ).submit(function( event ) {
	console.log( "Handler for .submit() called." );
	$('#book-btn').html(loader);
	$('._193ed0j7').prop('disabled', true);
	//event.preventDefault();
	//bookNow($(this));
  });
function bookNow(form) {
	console.log("function started");
	var $form = form;
	var data = {
	  'action' : 'BookNow'
	};
	formData = $form.serialize() + '&' + $.param(data);
	$.ajax({
	  'type' : 'POST',
	  'dataType' : 'json',
	  'url' : $form.attr('action'),
	  'data': formData,
	 
	  'success': function(data) {
		$('#clear-session').html(data);
	  }
	});
}