/*! Bootstrap-off-canvas-push - v1.0.2
* Copyright (c) 2015 Steffen Ermel; Licensed MIT *
*/

$(function () {
    $(".dropdown").mouseover(function () {
        $(this).addClass("open");
    });
    $(".dropdown").mouseleave(function(){
        $(this).removeClass("open");
    });
})


$(function() {
			var Accordion = function(el, multiple) {
				this.el = el || {};
				this.multiple = multiple || false;
		
				// Variables privadas
				var links = this.el.find('.volume_6');
				// Evento
				links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
			}
		
			Accordion.prototype.dropdown = function(e) {
				var $el = e.data.el;
					$this = $(this),
					$next = $this.next();					
//					if ($this.children("i")[0].className=='fa fa-chevron-down pull-right') {
//						$this.children("i")[0].setAttribute("class","fa fa-chevron-up pull-right");
//					} else{
//						$this.children("i")[0].setAttribute("class","fa fa-chevron-down pull-right");
//					}
		
				$next.slideToggle();
				$this.parent().toggleClass('open');
		
				if (!e.data.multiple) {
					$el.find('.volume_7').not($next).slideUp().parent().removeClass('open');
				};
			}	
		
			var accordion = new Accordion($('#accordion'), false);
		});
		
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

//jQuery(document).ready(function($) {
//
//  function whichTransitionEvent() {
//      var el = document.createElement('event'),
//          transitionEvents = {
//              'WebkitTransition' : 'webkitTransitionEnd',// Saf 6, Android Browser
//              'MozTransition'    : 'transitionend',      // only for FF < 15
//              'transition'       : 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
//          };
//      for(var t in transitionEvents){
//          if( el.style[t] !== undefined ){
//              return transitionEvents[t];
//          }
//      }
//  }
//  var transitionEvent = whichTransitionEvent();
//
//  $('[data-toggle="offcanvas"], .overlay').click(function () {
//      $('.overlay').toggleClass('active');
//      $('body').toggleClass('active');
//      $('.row-offcanvas').toggleClass('active');
//      $('.sidebar-offcanvas').toggleClass('active');
//      $('.navbar-toggle').toggleClass('collapsed');
//      $('.navbar-collapse').addClass('transition');
//      $('.transition').one(transitionEvent,
//           function(e) {
//             $('.navbar-collapse').removeClass('transition');
//      });
//  });

//  $('.navbar .nav a').click(function () {
//      $('.overlay').removeClass('active');
//      $('body').removeClass('active');
//      $('#navbar').removeClass('in');
//      $('.row-offcanvas').removeClass('active');
//      $('.sidebar-offcanvas').removeClass('active');	//点击菜单收起
//      $('.navbar-toggle').addClass('collapsed');
//      $('.transition').one(transitionEvent,
//           function(e) {
//             $('.navbar-collapse').removeClass('transition');
//      });
//  });

//  $('.overlay').swiperight(function () {
//      $('.overlay').addClass('active');
//      $('body').addClass('active');
//      $('#navbar').addClass('in');
//      $('.row-offcanvas').addClass('active');
//      $('.sidebar-offcanvas').addClass('active');
//      $('.navbar-toggle').removeClass('collapsed');
//      $('.navbar-collapse').addClass('transition');
//  });

//  $('.overlay').swipeleft(function () {
//      $('.overlay').removeClass('active');
//      $('body').removeClass('active');
//      $('#navbar').removeClass('in');
//      $('.row-offcanvas').removeClass('active');
//      $('.sidebar-offcanvas').removeClass('active');
//      $('.navbar-toggle').addClass('collapsed');
//      $('.transition').one(transitionEvent,
//           function(e) {
//             $('.navbar-collapse').removeClass('transition');
//      });
//  });

//});

$(function() {
    $(".navbar-toggle").click(function () {
        $('.overlay').toggleClass('active');
        $('body').toggleClass('active');
        $('.row-offcanvas').toggleClass('active');
        $('.sidebar-offcanvas').toggleClass('active');
        $('.navbar-toggle').toggleClass('collapsed');
        $('.navbar-collapse').addClass('transition');
        $('.transition').one(transitionEvent,
             function(e) {
               $('.navbar-collapse').removeClass('transition');
        });
    });
    $(".overlay").click(function () {
        $('.overlay').toggleClass('active');
        $('body').toggleClass('active');
        $('.row-offcanvas').toggleClass('active');
        $('.sidebar-offcanvas').toggleClass('active');
        $('.navbar-toggle').toggleClass('collapsed');
        $('.navbar-collapse').addClass('transition');
        $('.transition').one(transitionEvent,
             function(e) {
               $('.navbar-collapse').removeClass('transition');
        });
    });
});

$(function(){
	showScroll();
	function showScroll(){
		$(window).scroll( function() { 
			var scrollValue=$(window).scrollTop();
			scrollValue > 100 ? $('div[class=scroll_s]').fadeIn():$('div[class=scroll_s]').fadeOut();
		} );	
		$('.scroll_s').click(function(){
			$("html,body").animate({scrollTop:0},200);	
		});	
	}
})