

$(document).ready(function(){
	jQuery(window).load(function() {
		jQuery("#status").fadeOut();
		jQuery("#preloader").delay(1000).fadeOut(500);
	});

	(function($) {
		"use strict";
		function count($this){
		var current = parseInt($this.html(), 10);
		current = current + 1; /* Where 50 is increment */	
		$this.html(++current);
			if(current > $this.data('count')){
				$this.html($this.data('count'));
			} else {    
				setTimeout(function(){count($this)}, 300);
			}
		}        	
		$(".stat-count").each(function() {
		  $(this).data('count', parseInt($(this).html(), 10));
		  $(this).html('0');
		  count($(this));
		});
   })(jQuery);
   $(".live-tile").liveTile();
   $(".sectionContact input").focusin(function(){
   	$(this).css("border-width", "0px 3px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.9)");
   });
   $(".sectionContact input").focusout(function(){
   	$(this).css("border-width", "0px 0px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.8)");
   });
   $(".sectionContact textarea").focusin(function(){
   	$(this).css("border-width", "0px 3px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.9)");
   });
   $(".sectionContact textarea").focusout(function(){
   	$(this).css("border-width", "0px 0px 0px 6px");
   	$(this).css("background-color", "rgba(255,255,255,.8)");
   });


   $(".machine1").mouseenter(function(){
   	$(this).css("width","58%");
      $(".machine2, .machine3, .machine4, .machine5").css("width","10%");
      $(".desDetail2, .desDetail3, .desDetail4, .desDetail5").hide(250);
   });
   $(".machine1").mouseleave(function(){
   	$(this).css("width","19.6%");
      $(".machine2, .machine3, .machine4, .machine5").css("width","19.6%");
      $(".desDetail2, .desDetail3, .desDetail4, .desDetail5").show(250);
   });

    $(".machine2").mouseenter(function(){
   	$(this).css("width","58%");
   	$(".machine1, .machine3, .machine4, .machine5").css("width","10%");
      $(".desDetail1, .desDetail3, .desDetail4, .desDetail5").hide(250);
   });
   $(".machine2").mouseleave(function(){
   	$(this).css("width","19.6%");
   	 $(".machine1, .machine3, .machine4, .machine5").css("width","19.6%");
      $(".desDetail1, .desDetail3, .desDetail4, .desDetail5").show(250);
   });

    $(".machine3").mouseenter(function(){
   	$(this).css("width","58%");
   	$(".machine2, .machine1, .machine4, .machine5").css("width","10%");
      $(".desDetail2, .desDetail1, .desDetail4, .desDetail5").hide(250);
   });
   $(".machine3").mouseleave(function(){
   	$(this).css("width","19.6%");
   	 $(".machine2, .machine1, .machine4, .machine5").css("width","19.6%");
      $(".desDetail2, .desDetail1, .desDetail4, .desDetail5").show(250);
   });

    $(".machine4").mouseenter(function(){
   	$(this).css("width","58%");
   	$(".machine2, .machine3, .machine1, .machine5").css("width","10%");
      $(".desDetail2, .desDetail3, .desDetail1, .desDetail5").hide(250);
   });
   $(".machine4").mouseleave(function(){
   	$(this).css("width","19.6%");
   	 $(".machine2, .machine3, .machine1, .machine5").css("width","19.6%");
      $(".desDetail2, .desDetail3, .desDetail1, .desDetail5").show(250);
   });

    $(".machine5").mouseenter(function(){
   	$(this).css("width","58%");
   	$(".machine2, .machine3, .machine4, .machine1").css("width","10%");
      $(".desDetail2, .desDetail3, .desDetail4, .desDetail1").hide(250);
   });
   $(".machine5").mouseleave(function(){
   	$(this).css("width","19.6%");
   	 $(".machine2, .machine3, .machine4, .machine1").css("width","19.6%");
      $(".desDetail2, .desDetail3, .desDetail4, .desDetail1").show(250);
   });


});

//Usage w/options:
$().framerate({framerate: 24, logframes: true})