function detectmob(o){return o=o?o:!1,navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||!o&&navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/Windows Phone/i)?!0:!1}function loadSVG(){var o=["img/svg2/tablet_desktop_novo.svg","img/svg2/mobile.svg"],t;t=detectmob(!0)?o[1]:o[0],$.ajax({url:t,method:"GET",dataType:"text",success:function(o){$("#Infografico").html(o)}})}function showFeedback(){$("span.feedback").css("visibility","visible")}function hideFeedback(){$("span.feedback").css("visibility","hidden")}function enviarContato(){var o=document.forms.fContato,t=o.nome.value&&o.email.value&&o.franquia.value&&o.telefone.value&&o.comoPrefere.value&&o.digaOi.value;return t?(showFeedback(),!0):(hideFeedback(),!1);return!1}function documentHeight(){return Math.max(body.scrollHeight,body.offsetHeight,html.clientHeight,html.scrollHeight,html.offsetHeight)}function initScroll(){var o=$(".scroll-nav a"),t=$("article"),e=null;$(window).scroll(function(){var n=$(this).scrollTop(),i=t.map(function(){return 0==n&&"Inicio"===this.id?this:$(this).offset().top<n?this:"Contato"===this.id&&$(this).offset().top<n+200?this:void 0});i=i[i.length-1];var a=i?i.id:"";e!==a&&("Conteudo"===a&&(a="Inicio"),e=a,o.removeClass("active"),$("[href=#"+a+"]").addClass("active"))})}function getRandomInt(o,t){return Math.floor(Math.random()*(t-o+1))+o}function showLogin(){$("#Login").fadeIn(),$("#Moods").addClass("login-open"),bodyHeight=$("body").height(),$("body").height("0"),$(".scroll-nav a").removeClass("active"),$(".scroll-nav a[href='#Login']").addClass("active"),closeMenu()}function closeLogin(){$("#Login").fadeOut(),$("body").height(bodyHeight),$("#Moods").removeClass("login-open"),$(".scroll-nav a").removeClass("active"),isFaq?$(".scroll-nav a[href='#']").addClass("active"):$(".scroll-nav a:first").addClass("active")}function sendLogin(){return $(".feedback2").css("visibility","visible"),!1}function initMenu(){var o=new Headroom(document.getElementById("Top"),{offset:160,classes:{top:"menu-top",notTop:"menu-not-top"},onUnpin:function(){}});o.init(),$("body").addClass("js");var t=$("#menu"),e=$(".menu-link");e.click(function(){return e.toggleClass("active"),t.toggleClass("active"),!1});var n=!1;toggleMenu=function(){return n?closeMenu():openMenu(),n=!n,!1},openMenu=function(){closeLogin(),$("nav.links").addClass("show_top2"),$(".bar3").stop().transition({rotate:"45","margin-top":"10px"}),$(".bar2").stop().transition({opacity:"0"},"fast"),$(".bar1").stop().transition({rotate:"-45","margin-top":"10px"})},closeMenu=function(){$("nav.links").removeClass("show_top2"),$(".bar3").stop().transition({rotate:"-180","margin-top":"3px"}),$(".bar2").transition({opacity:"1"},"fast"),$(".bar1").stop().transition({rotate:"-180","margin-top":"15px"})},$(".menu-link").click(toggleMenu)}var bodyHeight,toggleMenu,closeMenu,isFAQ=!1;+function($){var o=function(){document.getElementById("h2icon")&&(document.getElementById("h2icon").style.backgroundImage="url('img/logo/logo_0"+getRandomInt(1,5)+".png')"),loadSVG(),initScroll(),initMenu(),detectmob()||skrollr.init({smoothScrolling:!1}),$("#LinkCloseLogin").on("touchstart",function(){closeLogin()}),$.fn.mask&&$(".telefone").mask("(99) 99999999?9"),isFaq=$("#Moods").hasClass("faq"),$(document).on("click",'a[href*="#"]',function(){if(closeMenu(),"#Login"!==this.hash&&closeLogin(),!isFaq){var o="#/"+this.hash.slice(1);return this.hash?(o===location.hash?$.smoothScroll({scrollTarget:this.hash,speed:"LinkToTopo"===this.id?1e3:800}):$.bbq.pushState(o),!1):void 0}}),$(window).bind("hashchange",function(o){var t=location.hash.replace(/^#\/?/,"");document.getElementById(t)&&$.smoothScroll({scrollTarget:"#"+t,speed:800})}),$(window).trigger("hashchange"),$("input").on("blur",function(){this.value&&"submit"!=this.type?$(this).addClass("preenchido"):$(this).removeClass("preenchido")})};$(o)}(jQuery);