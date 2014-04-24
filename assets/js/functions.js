(function($) {
    $.fn.drags = function(opt) {

        opt = $.extend({handle:"",cursor:"move"}, opt);

        if(opt.handle === "") {
            var $el = this;
        } else {
            var $el = this.find(opt.handle);
        }

        return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
            if(opt.handle === "") {
                var $drag = $(this).addClass('draggable');
            } else {
                var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
            }
            var z_idx = $drag.css('z-index'),
                drg_h = $drag.outerHeight(),
                drg_w = $drag.outerWidth(),
                pos_y = $drag.offset().top + drg_h - e.pageY,
                pos_x = $drag.offset().left + drg_w - e.pageX;
            $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
                $('.draggable').offset({
                    top:e.pageY + pos_y - drg_h,
                    left:e.pageX + pos_x - drg_w
                }).on("mouseup", function() {
                    $(this).removeClass('draggable').css('z-index', z_idx);
                });
            });
            e.preventDefault(); // disable selection
        }).on("mouseup", function() {
            if(opt.handle === "") {
                $(this).removeClass('draggable');
            } else {
                $(this).removeClass('active-handle').parent().removeClass('draggable');
            }
        });

    }
})(jQuery);
	
	function setActive(nav){
		//remove the active one
		$('.navbar-nav').find('.active').removeClass('active');
		$('.navbar-nav').find('[href=#'+nav+']').parent().effect("highlight", {color: nav}, 500);
		//add the new one
		$('.navbar-nav').find('[href=#'+nav+']').parent().addClass('active');
	}
	function showSpinner(obj,msg){
		var spinner = "<div class='overlay' align='center'><div class='spinner'><img src='./assets/img/spin.gif'> "+msg+"...</div></div>";
			
		$(obj).closest('#body').prepend(spinner);
		//$(obj).closest('#body').find('.overlay').width($(obj).closest('body').width());
		//$(obj).closest('#body').find('.overlay').height ( $(obj).closest('body').height());
		
	}
	function removeSpinner(){
		$('.overlay').remove();
	}
	function loadPagelet(page, panel, msg){
		//define spinner
		var spinner = "<div class='spinner'><img src='./assets/img/spin.gif'> "+msg+"...</div>";
		var container = $(panel);
		container.html(spinner);
		setTimeout(
		function(){
			container.load(page);
		},2000);
		
	}
	function loadPage(page){
		$('#loader').slideDown('fast');
		var loading = "<div id='loading' class='' align='center'><img src='./assets/img/loading.png'><div class='ani'>loading...</div></div>";
		var container = $('body > .container');
		container.html (loading);
		$('#loading').fadeToggle('slow');
		 
		animate();
		setTimeout(
		function(){
			container.load(page);
			$('#loader').slideUp('fast');
		
		},2000);
	}
	function showDialog(title, msg){
		$('#myModalLabel').html(title);
		$('#myModal').find('.modal-body').html(msg);
		$('#myModal').modal('toggle');
	}
	
	function showModalBlotter(title, msg){
		$('#blotterModalLabel').html(title);
		$('#blotterModal').find('.modal-body').html(msg);
		$('#blotterModal').modal('toggle');
	}
	function animate(){
		//get the value first
		$txt = $('.ani').text();

		//create a container variable;
		$cont = "";
		for (var i = 0, len = $txt.length; i < len; i++) {
			if ($txt[i] == ' ') {
				$cont += "<span class='space'>&nbsp;</span>";
			} else {
				$cont += "<span class='" + $txt[i] + "'>" + $txt[i] + "</span>";
			}

		}
		//append the created to the class
		$(".ani").html($cont);
		var children = [];
		$(".ani").children().each(function () {
			children.push(this);
		});
		animateThem(children);


	}



    function animateThem(children) {

        if (children.length > 0) {
            var currentChild = children.shift();
            children.push(currentChild);
            $(currentChild).fadeToggle('medium', function () {
                $(currentChild).fadeToggle('medium', function () {
                    animateThem(children);
                });
            });

        }
    }
