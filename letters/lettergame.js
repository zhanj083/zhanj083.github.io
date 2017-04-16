var canpress = true;
var clickword;







$('.takeguess1').click(function() {
	if (clickword==1) {
		console.log('wrong');
	var url = $('.takeguess1').data('target2');
    location.replace(url);
	}
	
	if (clickword==2) {
		console.log('wrong');
	var url = $('.takeguess1').data('target2');
    location.replace(url);
	}
	

	if (clickword==3) {
		console.log('wrong');
var url = $('.takeguess1').data('target2');
    location.replace(url);
	}


	if (clickword==4) {
		console.log('ture');
		var url = $('.takeguess1').data('target');
    location.replace(url);
 
	}
 
	// $(".takeguess1").location.href = "currect.html"

})











$('.takeguess2').click(function() {
	if (clickword==1) {
		console.log('ture');
	var url = $(this).data('target');
    location.replace(url);
	}
	  


	if (clickword==2) {
		console.log('wrong');
var url = $('.takeguess2').data('target2');
    location.replace(url);
	}
	if (clickword==3) {
		console.log('wrong');
var url = $('.takeguess2').data('target2');
    location.replace(url);
	}
	if (clickword==4) {
		console.log('wrong');
var url = $('.takeguess2').data('target2');
    location.replace(url);
	}



})



$('.takeguess3').click(function() {
	if (clickword==1) {
		console.log('wrong');
var url = $('.takeguess3').data('target2');
    location.replace(url);
	}



	if (clickword==2) {
		console.log('ture');
		var url = $(this).data('target');
    location.replace(url);

	}
	

	if (clickword==3) {
		console.log('wrong');
var url = $('.takeguess3').data('target2');
    location.replace(url);
	}
	if (clickword==4) {
		console.log('wrong');
var url = $('.takeguess3').data('target2');
    location.replace(url);
	}
})




$('.takeguess4').click(function() {
	if (clickword==1) {
		console.log('wrong');
var url = $('.takeguess4').data('target2');
    location.replace(url);
	}
	if (clickword==2) {
		console.log('wrong');
var url = $('.takeguess4').data('target2');
    location.replace(url);
	}
	if (clickword==3) {
		console.log('true');
	var url = $(this).data('target');
    location.replace(url);

	}

	
    
	if (clickword==4) {
		console.log('wrong');
var url = $('.takeguess4').data('target2');
    location.replace(url);
	}
})





$('.box1').click(function() {
	if (canpress) {
	$('.f').css('opacity', 1 );
	$(this).css('background', '#D0011B');
	$('.takeguess1').css('background','white');
	$('.takeguess1').css('color','#D0011B');

		canpress=false;
		$(".takeguess1").html("fuji");
		$(".takeguess2").html("fuck");
		$(".takeguess3").html("feet");
		$(".takeguess4").html("flap");
		clickword=1;
}
})





$('.box2').click(function() {
	if (canpress) { 
	$('.u').css('opacity', 1);
	$(this).css('background', '#D0011B');
	$('.takeguess2').css('background','white');
	$('.takeguess2').css('color','#D0011B');
		canpress=false;
		$(".takeguess1").html("luck");
		$(".takeguess2").html("jump");
		$(".takeguess3").html("fuck");
		$(".takeguess4").html("junk");

		clickword=2;

}

})



$('.box3').click(function() {
	if (canpress) { 
	$('.c').css('opacity', 1);
	$(this).css('background', '#D0011B');
	$('.takeguess3').css('background','white');
	$('.takeguess3').css('color','#D0011B');
		canpress=false;
	$(".takeguess1").html("luck");
		$(".takeguess2").html("duck");
		$(".takeguess3").html("suck");
		$(".takeguess4").html("fuck");

		clickword=3;

}


})

$('.box4').click(function() {
			if (canpress) { 
	$('.k').css('opacity', 1);
	$(this).css('background', '#D0011B');
	$('.takeguess4').css('background','white');
	$('.takeguess4').css('color','#D0011B');
		canpress=false;
	$(".takeguess1").html("fuck");
		$(".takeguess2").html("trik");
		$(".takeguess3").html("kick");
		$(".takeguess4").html("jerk");

		clickword=4;
}

})












	// if ($(window).scrollTop() >50){
	// console.log($(window).scrollTop());
	// $('.point').css("height", 500);

	// console.log($(window).scrollTop());
	// $('.it').css("margin-left", 700);








	// if ($(this).hasClass('i')) {
	// 	$('.i').removeClass('box1');
	// } else if ($(this).hasClass('baseball-link')) {
	// 	$('.baseball').removeClass('hide');
	// }


