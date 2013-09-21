/* global jQuery*/
/*!
 * Smooth Vertical or Horizontal Page Scrolling with jQuery
 * author: miyukizhang
 * date:2012-1-28
 * @modified robyi
 * @version 0.2 2013-09-21
 **/
(function($){
	'use strict';
	$.fn.roll = function(options){
		var settings = {
			'animSpeed': 200,
			'effect': 'linear',
			'direction': 'top'
		};
		return this.each(function(){
			$(this).on('click', function(e){

				var destination = $(this).attr('href');
				var destinationScroll = 0;
				if(destination && destination !== '#'){

					var $destination;

					// 如果href属性是锚点
					if(/^#/.test(destination)){
						$destination = $('[name='+destination.replace(/^#/,'')+']');
					}else{
						$destination = $(destination);
					}

					if($destination.length){
						if(settings.direction === 'left'){
							destinationScroll = $destination.offset().left;
						}else if(settings.direction === 'top'){
							destinationScroll = $destination.offset().top;
						}
					}
					
				}

				$.extend(settings, options);

				if(settings.direction === 'left'){
					$('html, body').animate({scrollLeft: destinationScroll}, parseInt(settings.animSpeed,10), settings.effect);
				}else if(settings.direction === 'top'){
					$('html, body').animate({scrollTop: destinationScroll}, parseInt(settings.animSpeed,10), settings.effect);
				}

				e.preventDefault();
			});
		});
	};
})(jQuery);