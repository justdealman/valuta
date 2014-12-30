$(document).ready(function() {
	$('.introduction .form > div > div > div ul li span, .fixednav > div > div ul li span').bind('click', function() {
		$('.introduction .form > div > div > div ul li.'+$(this).parent().attr('class')+', .fixednav > div > div ul li.'+$(this).parent().attr('class')).addClass('active').siblings().removeClass('active');
		return false;
	});
	$('.introduction .form > div > div > div input, .fixednav > div > div input').keyup(function() {
		$('.introduction .form > div > div > div input, .fixednav > div > div input').val($(this).val());
	});
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > $('.introduction .form').offset().top+$('.introduction .form').outerHeight() ) {
			$('.fixednav').stop(true,true).fadeIn(0);
		}
		else {
			$('.fixednav').stop(true,true).fadeOut(0);
		}
	});
	if ( $('.content .line').length > 0 ) {
		$('.content .line .banner').each(function() {
			$(this).height($(this).find('img').attr('height'));
			$(this).find('img').css({
				'left': ($(this).width()-$(this).find('img').attr('width'))/2+'px'
			});
		});
		var max = 0;
		$('.content .line > div').each(function() {
			var h = $(this).outerHeight(); 
			max = h > max ? h : max;
		});
		$('.content .line').height(max);
	}
	if ( $('.exchangerate').length > 0 ) {
		$('.exchangerate > div .nav li a').bind('click', function() {
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		});
		$('.bubble').append('<span class="close"></span>');
		$('.bubble .close').bind('click', function() {
			$(this).parent().stop(true,true).fadeOut(500);
			return false;
		});
		$('.exchangerate tbody td span.icon[data-bubble]').bind('click', function() {
			$('.bubble').stop(true,true).fadeOut(500);
			$('.bubble.type'+$(this).attr('data-bubble')).css({
				'margin-left': -($('.exchangerate table').width()/2-46)+'px',
				'top': $(this).offset().top+'px'
			}).stop(true,true).fadeIn(500);
			return false;
		});
		$('.exchangerate .banner').each(function() {
			$(this).height($(this).find('img').attr('height'));
			$(this).find('img').css({
				'left': ($(this).width()-$(this).find('img').attr('width'))/2+'px'
			});
		});
		$('.wrapper > .exchangerate table, .main > .exchangerate table').tablesorter(); 
		$('.exchangerate table.filter tbody td:nth-child(2)').attr({
			'data-currency': 'usd',
			'data-direction': 'buy'
		});
		$('.exchangerate table.filter tbody td:nth-child(3)').attr({
			'data-currency': 'usd',
			'data-direction': 'sell'
		});
		$('.exchangerate table.filter tbody td:nth-child(4)').attr({
			'data-currency': 'eur',
			'data-direction': 'buy'
		});
		$('.exchangerate table.filter tbody td:nth-child(5)').attr({
			'data-currency': 'eur',
			'data-direction': 'sell'
		});
		$('.exchangerate tbody td span.down, .exchangerate tbody td span.up').bind('click', function() {
			$('.calculator > div').children('div[data-direction="'+$(this).parent().attr('data-direction')+'"]').find('p:first-child input').val($(this).text());
			$('.calculator > div').children('div[data-direction="'+$(this).parent().attr('data-direction')+'"]').find('p:first-child span em[data-currency="'+$(this).parent().attr('data-currency')+'"]').addClass('active').siblings().removeClass('active');
			$('.calculator h3').find('span[data-direction="'+$(this).parent().attr('data-direction')+'"]').find('em[data-currency="'+$(this).parent().attr('data-currency')+'"]').addClass('active').siblings().removeClass('active');
			if ( $('.calculator').is(':hidden') ) {
				$('.calculator').css({
					'margin-right': -($('.content').width()/2)+164+'px',
					'top': $('.rb .calc').offset().top-41+'px'
				}).stop(true,true).fadeIn(500);
			}
			if ( $(document).scrollTop() > $('.calculator').offset().top ) {
				$('html, body').animate({ scrollTop: $('.calculator').offset().top }, 500);
			}
			return false;
		});
	}
	$('body').append('<span class="scrolltop"></span>');
	$(window).bind('scroll', function() {
		if ( $(document).scrollTop() > $(window).height()*0.5 ) {
			$('.scrolltop').stop(true,true).fadeIn(500);
		}
		else {
			$('.scrolltop').stop(true,true).fadeOut(500);
		}
	});
	$('.scrolltop').bind('click', function() {
		$('html, body').animate({ scrollTop: 0 }, 500);
		return false;
	});
	$('.introduction .form > div > div > div button, .fixednav > div > div button').bind('click', function() {
		$('.introduction .form > div > div > div button.'+$(this).attr('class')+', .fixednav > div > div button.'+$(this).attr('class')).addClass('active').siblings().removeClass('active');
		return false;
	}).filter('.buy').click();
	$('.content .rb .calc').bind('click', function() {
		if ( $('.calculator').is(':hidden') ) {
			$('.calculator').css({
				'margin-right': -($('.content').width()/2)+164+'px',
				'top': $('.rb .calc').offset().top-41+'px'
			}).stop(true,true).fadeIn(500);
			if ( $(document).scrollTop() > $('.calculator').offset().top ) {
				$('html, body').animate({ scrollTop: $('.calculator').offset().top }, 500);
			}
		}
		else {
			$('.calculator').stop(true,true).fadeOut(500);
		}
		return false;
	});
	$('.calculator').append('<span class="close"></span>');
	$('.calculator .close').bind('click', function() {
		$(this).parent().stop(true,true).fadeOut(500);
		return false;
	});
	$('.calculator input.data').datepicker({
		dateFormat: 'Дата: dd.mm.yy',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
	}).datepicker('setDate', new Date());;
	$('.calculator > div > div p span').bind('click', function() {
		if ( $(this).find('em.active').index()+1 < $(this).find('em').size() ) {
			var next = $(this).find('em.active').index()+2;
		}
		else {
			var next = 1;
		}
		$(this).find('em:nth-child('+next+')').addClass('active').siblings().removeClass('active');
		$(this).parents('.calculator').find('h3 span[data-direction="'+$(this).parent().parent().attr('data-direction')+'"]').find('em[data-currency="'+$(this).find('em.active').attr('data-currency')+'"]').addClass('active').siblings().removeClass('active');
		return false;
	});
	$('body').bind('click', function() {
		$('.calculator, .bubble, .citysel').stop(true,true).fadeOut(500);
	});
	$('.calculator, .bubble, .exchangerate table, .citysel').click(function(e) {
		e.stopPropagation();
	});
	if ( $('.main').length > 0 ) {
		$('.main .banner > div').each(function() {
			$(this).height($(this).find('img').attr('height'));
			$(this).find('img').css({
				'left': ($(this).width()-$(this).find('img').attr('width'))/2+'px'
			});
		});
	}
	if ( $('.main .map .list').length > 0 ) {
		$('.main .map .list table').tablesorter();
		$('.main .map .list table tbody tr').bind('click', function() {
			$(this).addClass('active').siblings().removeClass('active');
			return false;
		});
		$('.main .map .list table tbody td span.icon[data-bubble]').bind('click', function() {
			$('.bubble').stop(true,true).fadeOut(500);
			$('.bubble.type'+$(this).attr('data-bubble')).css({
				'margin-left': 'auto',
				'margin-right': -$('.header').width()/2+368+'px',
				'top': $(this).offset().top+'px'
			}).stop(true,true).fadeIn(500);
			return false;
		});
		$('.main .map .list').css({
			'margin-right': -$('.header').width()/2+15+'px',
			'max-height': $(document).height()-$('.main .map .list').offset().top-20+'px'
		});
		$('.main .map .list').bind('scroll', function() {
			$('.bubble').stop(true,true).fadeOut(500);
		});
	}
	$('.citysel').append('<span class="close"></span>');
	$('div.header > h3 span').bind('click', function() {
		$('.citysel').css({
			'left': $(this).offset().left+'px',
			'top': $(this).offset().top+'px'
		}).stop(true,true).fadeIn(500);
		return false;
	});
	$('.citysel .close').bind('click', function() {
		$('.citysel').stop(true,true).fadeOut(500);
		return false;
	});
	if ( $('.rate').length > 0 ) {
		$('.rate > div table, .rate > div > div').width(eval($('.rate').width()/2-20));
	}
	if ( $('.feedback').length > 0 ) {
		$('.feedback select').selectbox();
	}
	if ( $('.bank').length > 0 ) {
		$('.bank').css({
			'min-height': $('.bank .logo').height()+10+'px'
		});
	}
	if ( $('.widget').length > 0 ) {
		$('.widget ul li').width($('.widget').width()/2-10);
		var max = 0;
		$('.widget ul li > div').each(function() {
			var h = $(this).height(); 
			max = h > max ? h : max;
		});
		$('.widget ul li > div').height(max);
	}
	$('.messages > div').append('<span class="close"></span>');
	$('[data-message="open"]').bind('click', function() {
		$('.messages .type'+$(this).attr('href')).stop(true,true).fadeIn(500).delay(5000).fadeOut(500);
		return false;
	});
	$('.messages .close').bind('click', function() {
		$(this).parent().stop(true,true).fadeOut(500);
		return false;
	});
});
$(window).load(function() {
	if ( $('.exchangerate').length > 0 ) {
		$('.exchangerate tbody tr.hidden').each(function() {
			$('body').append('<div data-hb="'+eval($(this).index()+1)+'" class="hidebank" style="left:'+$(this).offset().left+'px; top:'+$(this).offset().top+'px; width:'+$(this).width()+'px; height:'+$(this).height()+'px"><p><span>Скрыто, курс видимо неверный</span></p></div>');
		});
		$('.hidebank p span').bind('click', function() {
			$(this).parents('.hidebank').stop(true,true).fadeOut(500);
			return false;
		});
	}
});
$(window).resize(function() {
	if ( $('.exchangerate').length > 0 ) {
		$('.hidebank').each(function() {
			$(this).css({
				'left': $('.exchangerate tbody tr:nth-child('+$(this).attr('data-hb')+')').offset().left+'px',
				'top': $('.exchangerate tbody tr:nth-child('+$(this).attr('data-hb')+')').offset().top+'px',
				'width': $('.exchangerate tbody tr:nth-child('+$(this).attr('data-hb')+')').width()+'px',
				'height': $('.exchangerate tbody tr:nth-child('+$(this).attr('data-hb')+')').height()+'px'
			});
		});
	}
	$('.calculator').css({
		'margin-right': -($('.content').width()/2)+164+'px'
	});
	if ( $('.main .map .list').length > 0 ) {
		$('.main .map .list').css({
			'margin-right': -$('.header').width()/2+15+'px'
		});
		$('.bubble.right').css({
			'margin-right': -$('.header').width()/2+368+'px'
		});
	}
	if ( $('.rate').length > 0 ) {
		$('.rate > div table, .rate > div > div').width(eval($('.rate').width()/2-20));
	}
	if ( $('.widget').length > 0 ) {
		$('.widget ul li').width($('.widget').width()/2-10);
	}
});