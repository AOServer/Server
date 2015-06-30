
$(document).ready(function(){
    $(".top100_table tr").hover(
	function(){
	        $(this).addClass("odd")
	},
	function () {
    		 $(this).removeClass("odd");  	 
    });
});



var Container = {
	bgprefix: "/media/images/lightbox/bg_w",
	left: 0,
	top: 0,
	width: 500,
	height: 300,
	padding: 25,
	opacity: 75,
	speed: 500,
	step: 5
};

$(document).ready(function() {
	$("li.lv3").hide();
	$('#content a[rel*=lightbox]').lightBox({
		txtImage: 'Изображение',
		txtOf: 'из'
	});
	$('#screenshot1, #screenshot2, #screenshot3, #screenshot4').lightBox({
		txtImage: 'Изображение',
		txtOf: 'из'
	});
	$('#classes a').not('[id]').css('cursor', 'default').click(function() { return false; });
	$('a.classlink[id]').click(function () {
		containerInit();
		$("#winlayercontainerbody").html($('#class-' + this.id).html());
		$("#winlayercontainerbody").append('<a href="#" id="winlayercontainerclose">Close</a>');
		$("#winlayercontainerclose").css({
			display: "block",
			width: "107px",
			height: "28px",
			overflow: "hidden",
			'text-indent': "107px",
			float: "right",
			background: "transparent url('" + Container.bgprefix + "_c.gif')"
		}).click(function () {
			containerHide();
			return false;
		});
		$("#winlayer > #winlayercontainer").css({
			top: Container.top + "px",
			left: Container.left + "px",
			width: Container.width + "px",
			height: Container.height + "px"
		});
		$('#winlayer').show();
		return false;
	});

	$('a[rel*=classlink][id]').click(function () {
		containerInit();
		containerShow(this.id);

		return false;
	});
});

var visiWidth, visiHeight, docuWidth, docuHeight, scroLeft, scroTop;

function containerInit() {
	visiWidth = (document.documentElement.clientWidth) ? document.documentElement.clientWidth : window.innerWidth;
	visiHeight = (document.documentElement.clientHeight) ? document.documentElement.clientHeight : window.innerHeight;
	docuWidth = $(document).width();
	docuHeight = $(document).height();
	scroLeft = (window.pageXOffset) ? window.pageXOffset : document.documentElement.scrollLeft;
	scroTop = (window.pageYOffset) ? window.pageYOffset : document.documentElement.scrollTop;
	if (!$("#winlayer").length) {
		$('body').append('<div id="winlayer"></div>');
		$("#winlayer").css({
			position: "absolute",
			left: "0px",
			top: "0px",
			zIndex: 1000,
			fontSize: '13px',
			width: ((visiWidth > docuWidth) ? visiWidth : docuWidth) + "px",
			height: ((visiHeight > docuHeight) ? visiHeight : docuHeight) + "px"
		}).hide().click(function () {
			containerHide();
		});
	}
	if (!$("#winlayer #winlayeroverlay").length) { $('#winlayer').append('<div id="winlayeroverlay"></div>'); }
	$("#winlayer #winlayeroverlay").css({
		position: "absolute",
		left: "0px",
		top: "0px",
		width: docuWidth + "px",
		height: docuHeight + "px",
		background: "black"
	});
	$("#winlayer #winlayeroverlay").css(opacityCSSTag(Container.opacity));
	if (!$("#winlayercontainer").length) {
		$("#winlayer").append('<div id="winlayercontainer"><table border="0" cellpadding="0" cellspacing="0"><tr><td class="tl"></td><td class="t"></td><td class="tr"></td></tr><tr><td class="l"></td><td class="c"><div id="winlayercontainerbody"></div></td><td class="r"></td></tr><tr><td class="bl"></td><td class="b"></td><td class="br"></td></tr><table></div>');
		Container.left = Math.floor((visiWidth - Container.width) / 2);
		Container.top = Math.floor((visiHeight - Container.height) / 2 + scroTop);
		$("#winlayer > #winlayercontainer").css({
			position: "absolute",
			left: Container.left + "px",
			top: Container.top + "px",
			width: Container.width + "px",
			height: Container.height + "px"
		});
		$("#winlayer > #winlayercontainer TD.tl").css({
			width: "20px",
			height: "21px",
			background: "transparent url('" + Container.bgprefix + "_tl.gif') no-repeat top left"
		});
		$("#winlayer > #winlayercontainer TD.t").css({
			height: "21px",
			background: "transparent url('" + Container.bgprefix + "_t.gif') repeat-x top left"
		});
		$("#winlayer > #winlayercontainer TD.tr").css({
			width: "20px",
			height: "21px",
			background: "transparent url('" + Container.bgprefix + "_tr.gif') no-repeat top right"
		});
		$("#winlayer > #winlayercontainer TD.l").css({
			width: "20px",
			background: "transparent url('" + Container.bgprefix + "_l.gif') repeat-y top left"
		});
		$("#winlayer > #winlayercontainer TD.c").css({
			background: "transparent url('" + Container.bgprefix + ".gif')"
		});
		$("#winlayer > #winlayercontainer TD.r").css({
			width: "20px",
			background: "transparent url('" + Container.bgprefix + "_r.gif') repeat-y top right"
		});
		$("#winlayer > #winlayercontainer TD.bl").css({
			width: "20px",
			height: "21px",
			background: "transparent url('" + Container.bgprefix + "_bl.gif') no-repeat bottom left"
		});
		$("#winlayer > #winlayercontainer TD.b").css({
			height: "21px",
			background: "transparent url('" + Container.bgprefix + "_b.gif') repeat-x bottom left"
		});
		$("#winlayer > #winlayercontainer TD.br").css({
			width: "20px",
			height: "21px",
			background: "transparent url('" + Container.bgprefix + "_br.gif') no-repeat bottom right"
		});
		$("#winlayercontainerbody P").css({
			'text-align': "left"
		});
	}
}

function containerShow(id) {
	if ($("#winlayer").length) {
		$("#winlayercontainerbody").css(opacityCSSTag(0)).html($('#class-' + id).html());
		$("#winlayercontainerbody").append('<a href="#" id="winlayercontainerclose">Close</a>');
		$("#winlayercontainerclose").css({
			display: "block",
			width: "107px",
			height: "28px",
			overflow: "hidden",
			'text-indent': "107px",
			float: "right",
			background: "transparent url('" + Container.bgprefix + "_c.gif')"
		}).click(function () {
			containerHide();
			return false;
		});
		$('#winlayer').show();
		containerFitHeight();
		setTimeout("containerFitWidth()", Container.speed + 50);
		if (!$.browser.msie) { setTimeout("containerFadeIn()", Container.speed * 2 + 50); }
	}
}

function containerFadeIn() {
	$("#winlayercontainerbody").fadeTo(Container.speed, 1);
}

function containerFitWidth() {
	$("#winlayer > #winlayercontainer").animate({
		left: Container.left + "px",
		width: Container.width + "px"
	}, Container.speed);
}

function containerFitHeight() {
	var min = 0;
	var max = 0;
	var width = 0;
	$("#winlayercontainerbody img").map(function () {
		if ($(this).height() > max) { max = $(this).height(); }
		if ($(this).width() > width) { width = $(this).width(); }
		if ((min == 0) || ($(this).height() < min)) { min = $(this).height(); }
	});
	if (min == 0 || max == 0) {
	}
	else {
		Container.height = max + 21 * 2 + 10;
		Container.top = Math.floor((visiHeight - Container.height) / 2 + scroTop);
		Container.width = Math.floor($("#winlayercontainerbody IMG").width() * 2.25)  + 20 * 2 + 20;
		Container.left = Math.floor((visiWidth - Container.width) / 2);
	}

	$("#winlayer > #winlayercontainer").animate({
		top: Container.top + "px",
		height: Container.height + "px"
	}, Container.speed)
}

function containerHide() {
	if ($("#winlayer").attr('id')) {
		$('#winlayer').hide();
	}
}

function opacityCSSTag(value) {
	if ($.browser.msie) { return {filter: "alpha(Opacity=" + value + ")"}; }
	else { return {opacity: value / 100}; }
}

/*function list_props(obj, objname)
{
	nw = window.open('','nw','toolbar=no, scrollbars=yes');
	for (prop in obj)
	{
		nw.document.write(objname + "." + prop + " = " + obj[prop] + "<br>");
	}
}*/



/* Add switcher for faq, league, imperia*/
$(document).ready(function() {
	$('.article span.ajax').click(function(e) {
		$(this).parent().parent().find('div.none').slideToggle('normal');

		return false;
	});

	$('#faq span.ajax').click(function(e) {
		$(this).parent().parent().find('div.none').slideToggle('normal');

		return false;
	});
	$('.mycab .ajax').click(function(e) {
		$(this).parent().parent().find('div.none').slideToggle('normal');

		return false;
	});
});







// show flash video
$(document).ready(function() {
	$('#video-game a.play_video, #video-animation a.play_video, #video-animation span.ajax, #right-part a.animation').each(function () {
		$(this).click(function () {
			if (this.tagName.toLowerCase() == 'span') {
				pasteFlash($(this).parents('td').find('a:has(img)')[0], 720, 448);
			}
			else {
				pasteFlash(this, 720, 448);
			}
			return false;
		});
	});

$(document).ready(function() {
	//settings
	var opacity = 0.6, toOpacity = 1, duration = 250;
	//set opacity ASAP and events
	$('.play_video').css('opacity',opacity).hover(function() {
			$(this).fadeTo(duration,toOpacity);
		}, function() {
			$(this).fadeTo(duration,opacity);
		}
	);
});

	$('#video-game a:has(img), #video-game span.ajax, a.game').each(function () {
		$(this).click(function () {
			if (this.tagName.toLowerCase() == 'span') {
				pasteFlash($(this).parents('td').find('a:has(img)')[0], 720, 540);
			}
			else {
				pasteFlash(this, 720, 540);
			}
			return false;
		});
	});

	$('#close-flash').click(function () {
		$('#shadow').click();
	});

	$('#shadow').click(function () {
		$('#shadow').fadeOut('normal');
		$('#flash-video-container').empty();
		$('#flash-video').hide();
		$('object, embed').css('visibility', 'visible');
	});

	function pasteFlash(a, width, height) {
		showShadow();
		$('#flash-video-container').html('<div></div>').find('div').flash('/media/flash/player.swf', {width: width, height: height, paremeters: {bgcolor:'#000000', flashvars:'flv=' + a.href.replace(/\.((avi)|(wmv))/, '.flv') + '&width=' + width + '&height=' + height + '&startimage=&autoplay=1&autoload=0&buffer=5&playercolor=000000&loadingcolor=838383&buttoncolor=ffffff&slidercolor=ffffff&phpstream=0'}});
		$('#flash-video').css('visibility', 'hidden').show().css({top: getYImage(height) + 'px', visibility: 'visible'});
	}

	function showShadow() {
		$('object, embed').css('visibility', 'hidden');
		$('#shadow').css('opacity', 0).height($('body').height()).show().animate({opacity:0.9}, 'normal');
	}

	function getYImage(height) {
		height = parseInt(height);
		var doc = document.documentElement, body = document.body;
		var scrollTop = (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc.clientTop || 0);

		var ret = Math.floor(scrollTop + (windowHeight() - height) / 2);
		if (ret < 0)	ret = 0;

		var maxY = $(document.body).height() - height;
		if (ret > maxY) ret = maxY;

		return ret;
	}

	function windowHeight() {
		var height;
		if (window.innerHeight) {
			height = window.innerHeight;
		} else if (document.documentElement && document.documentElement.clientHeight) {
			height = document.documentElement.clientHeight;
		} else if (document.body) {
			height = document.body.clientHeight;
		}

		return height;
	}
});

// open video info
$(document).ready(function() {
	if ($('#video-game').length) {
		$('#video-animation td, #video-game td').mouseover(function () {
			$('#video-animation .hint, #video-game .hint').hide();
			$('.hint', $(this)).show();
		});

		$('#video-animation a, #video-game a, #video-animation .hint, #video-game .hint').click(function(e) {
			e.stopPropagation();
		});

		$(document).click(function() {
			$('#video-animation .hint, #video-game .hint').hide();
		});
	}
});
$(document).ready(function() {
	if ($('#video-game').length) {
		$('#video-animation td, #video-game td').mouseout(function () {
			$('#video-animation .hint, #video-game .hint').hide();
		} );

	}
});
$(document).ready(function() {
	if ($('#video-game').length) {
		$('#video-animation td, #video-game td').mousemove(function () {
			$('.hint', $(this)).show();
		} );

	}
});
// play mp3
$(document).ready(function() {
	$('#video-audio span.ajax').each(function() {
		$(this).click(function() {
			var hint = $('.hint', $(this).parent());

			$('.flash-container', hint.parent().parent()).html('<div></div>');

			$(this).parent().parent().find('.hint').not(hint).hide();
			hint.toggle();
			if ($('.info:visible', hint).length) {
			}
			else {
				var href = $('a', hint)[0].href;
				var bitsPath = href.split('/');
				var title = bitsPath[bitsPath.length - 1];
				$('.flash-container div', hint.parent()).flash("/media/flash/xspf_player_slim.swf?autoplay=true&autoload=true&song_url=" + href +"&song_title=" + title, {width: 300, height: 15, paremeters: {bgcolor:'#000000'}});
			}

		});
	});
});



/* auto opens 
	--------------------------------------------*/

$(document).ready(function() {
	switch(location.hash) 
	{
	    case '#h_gibberlings': 
	    $('#article div.h_gibberlings').slideToggle('slow'); 
	    break;
		
	    case '#h_orcs': 
	    $('#article div.h_orcs').slideToggle('slow'); 
	    break;

	    case '#h_kania': 
	    $('#article div.h_kania').slideToggle('slow'); 
	    break;
	
	    case '#h_mon': 
	    $('#article div.h_mon').slideToggle('slow'); 
	    break;

	    case '#first': 
	    $('.article div.quick_start1').slideToggle('slow'); 
	    break;
		
	    case '#two': 
	    $('.article div.quick_start2').slideToggle('slow'); 
	    break;
case '#three': 
	    $('.article div.quick_start3').slideToggle('slow'); 
	    break;
case '#four': 
	    $('.article div.quick_start4').slideToggle('slow'); 
	    break;
case '#five': 
	    $('.article div.quick_start5').slideToggle('slow'); 
	    break;
case '#six': 
	    $('.article div.quick_start6').slideToggle('slow'); 
	    break;
case '#seven': 
	    $('.article div.quick_start7').slideToggle('slow'); 
	    break;
case '#eight': 
	    $('.article div.quick_start8').slideToggle('slow'); 
	    break;
case '#nine': 
	    $('.article div.quick_start9').slideToggle('slow'); 
	    break;
case '#ten': 
	    $('.article div.quick_start10').slideToggle('slow'); 
	    break;
case '#eleven': 
	    $('.article div.quick_start11').slideToggle('slow'); 
	    break;
case '#twelve': 
	    $('.article div.quick_start12').slideToggle('slow'); 
	    break;
case '#thirteen': 
	    $('.article div.quick_start13').slideToggle('slow'); 
	    break;

 	    case '#new_audio': 
	    $('#video-audio span.new_audio').each(function() {
			var hint = $('.hint', $(this).parent());
			$('.flash-container', hint.parent().parent()).html('<div></div>');
			$(this).parent().parent().find('.hint').not(hint).hide();
			hint.toggle();
			if ($('.info:visible', hint).length) {
			}
			else {
				var href = $('a', hint)[0].href;
				var bitsPath = href.split('/');
				var title = bitsPath[bitsPath.length - 1];
				$('.flash-container div', hint.parent()).flash("/media/flash/xspf_player_slim.swf?autoplay=true&autoload=true&song_url=" + href +"&song_title=" + title, {width: 300, height: 15, paremeters: {bgcolor:'#000000'}});
			}
	});
 
	    break;

	    case '#new_audio2': 
	    $('#video-audio span.new_audio2').each(function() {
			var hint = $('.hint', $(this).parent());
			$('.flash-container', hint.parent().parent()).html('<div></div>');
			$(this).parent().parent().find('.hint').not(hint).hide();
			hint.toggle();
			if ($('.info:visible', hint).length) {
			}
			else {
				var href = $('a', hint)[0].href;
				var bitsPath = href.split('/');
				var title = bitsPath[bitsPath.length - 1];
				$('.flash-container div', hint.parent()).flash("/media/flash/xspf_player_slim.swf?autoplay=true&autoload=true&song_url=" + href +"&song_title=" + title, {width: 300, height: 15, paremeters: {bgcolor:'#000000'}});
			}
	});
 
	    break;
	}
	 
	});












