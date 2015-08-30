/**
 * Verifica se o navegado e mobile
 * @returns {Boolean}
 */
function detectmob(ignoreIpad) {
    ignoreIpad = ignoreIpad ? ignoreIpad : false;
    if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || (!ignoreIpad && navigator.userAgent.match(/iPad/i))
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)
            ) {
        return true;
    }
    else {
        return false;
    }
}

/**
* Carrega SVG
*/
function loadSVG(){

   var file = [
       'img/svg2/tablet_desktop_novo.svg',
       'img/svg2/mobile.svg'
   ], url;

   if(detectmob(true)) {
       url = file[1];
   } else {
       url = file[0];
   }

   // Get SVG
   $.ajax({
       url: url, 
       method: "GET",
       dataType: "text",
       success: function( data ) {
           $('#Infografico').html(data);
       } 
   });
}

/**
 * Mostra feedback
 */
function showFeedback() {
    $('span.feedback').css('visibility', 'visible');
}

/**
 * Esconde feedback
 */
function hideFeedback() {
    $('span.feedback').css('visibility', 'hidden');
}

/**
 * Verifica e enviar formulario de contato
 */
function enviarContato() {
    var f = document.forms['fContato'],
            error = f.nome.value
                && f.email.value
                && f.franquia.value
                && f.telefone.value
                && f.comoPrefere.value
                && f.digaOi.value;
        
    if (error) {
        showFeedback();
        return true;
    } else {
        hideFeedback();
        
        return false;
        /*
        $.ajax({
            url: "http://formspree.io/email@gmail.com",
            method: "POST",
            data: {
                'Nome': f.nome.value,
                'Franquia': f.franquia.value,
                'Telefone': f.telefone.value,
                'ComoPrefere': f.comoPrefere.value,
                'Mensagem': f.digaOi.value
            },
            // Tell jQuery we're expecting JSONP
            dataType: "text",
            // Work with the response
            success: function (response) {
                $('textarea').addClass('feedback').val('Sua mensagem foi enviada com sucesso!');
                console.log(response); // server response
            },
            // Work with the response
            error: function (response) {
                console.log(response); // server response
            }
        });
        */
    }

    return false;
}

// OverlayFixScroll
function documentHeight() {
    return Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
}

function initScroll() {
    // All list items
    var menuItems = $('.scroll-nav a'),
            scrollItems = $('article'),
            lastId = null;

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop();

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if (fromTop == 0 && this.id === 'Inicio') {
                return this;
            }

            if ($(this).offset().top < fromTop) {
                return this;
            }

            if (this.id === 'Contato' && $(this).offset().top < fromTop + 200) {
                return this;
            }
        });

        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur ? cur.id : "";

        if (lastId !== id) {

            // Set/remove active class

            if (id === 'Conteudo') {
                id = 'Inicio';
            }
            lastId = id;

            menuItems.removeClass("active");
            $("[href=#" + id + "]").addClass("active");
        }
    });
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var bodyHeight;
function showLogin() {
    $('#Login').fadeIn();

    $('#Moods').addClass('login-open');
    bodyHeight = $('body').height();
    $('body').height('0');
    $('.scroll-nav a').removeClass('active');
    $(".scroll-nav a[href='#Login']").addClass('active');
    closeMenu();
}

function closeLogin() {
    $('#Login').fadeOut();
    $('body').height(bodyHeight);
    $('#Moods').removeClass('login-open');
    $('.scroll-nav a').removeClass('active');
    if(!isFaq || !isConfirmacao) {
        $('.scroll-nav a:first').addClass('active');
    } else {
        $(".scroll-nav a[href='#']").addClass('active');
    }
}

function sendLogin(){
    
    $('.feedback2').css('visibility', 'visible');
    
    return false;
}

var toggleMenu, closeMenu;
function initMenu() {
    // HEADER
    var headroom = new Headroom(document.getElementById("Top"), 
        {
        offset: 160,
        classes: {
            // when above offset
            top : "menu-top",
            // when below offset
            notTop : "menu-not-top"
        },
        onUnpin: function () {
            //menuToggled ? toggleMenu() : null
        }
    });
    headroom.init();

    $('body').addClass('js');
    var $menu = $('#menu'),
            $menulink = $('.menu-link');

    $menulink.click(function () {
        $menulink.toggleClass('active');
        $menu.toggleClass('active');
        return false;
    });

    var menuToggled = false;
    toggleMenu = function () {

        if (!menuToggled) {
            openMenu();
        } else {
            closeMenu();
        }

        menuToggled = !menuToggled;

        return false;
    }

    openMenu = function () {
        closeLogin();
        $('nav.links').addClass('show_top2');
        $('.bar3').stop().transition({rotate: "45", "margin-top": "10px"});
        $('.bar2').stop().transition({opacity: "0"}, "fast");
        $('.bar1').stop().transition({rotate: "-45", "margin-top": "10px"});
    }

    closeMenu = function () {
        $('nav.links').removeClass('show_top2');
        $('.bar3').stop().transition({rotate: "-180", "margin-top": "3px"});
        $('.bar2').transition({opacity: "1"}, "fast");
        $('.bar1').stop().transition({rotate: "-180", "margin-top": "15px"});
    }

    $('.menu-link').click(toggleMenu);
}

var isFAQ = false,
    isConfirmacao = false;

/**
 * MAIN
 */
+function ($) {
    

    var init = function () {
        if (document.getElementById('h2icon')) {
            document.getElementById('h2icon').style.backgroundImage = "url('img/logo/logo_0" + (getRandomInt(1, 5)) + ".png')";
        }

        loadSVG();
        initScroll();
        initMenu();
        
        //var Banners = ["img/banner/banner_01.jpg", "img/banner/banner_02.jpg", "img/banner/banner_03.jpg"];

        if (!detectmob()) {
            skrollr.init({smoothScrolling: false});
        }
        
        /*
        if (!detectmob() && $.fn.bgswitcher) {
            $('#Banner').bgswitcher({images: Banners});
        } else {
            $('#Banner').css('background-image', "url('" + Banners[getRandomInt(0, 2)] + "')");
        }*/

        $('#LinkCloseLogin').on('touchstart', function () {
            closeLogin();
        });

        // Check if inputmask is loaded (FAQ dont have form)
        if($.fn.mask) {
            $(".telefone").mask('(99) 99999999?9');
        }
        
        isFaq = $('#Moods').hasClass('faq');
        isConfirmacao = $('#Moods').hasClass('confirmacao');

        // SMOOT SCROLL
        $(document).on('click', 'a[href*="#"]', function () {
            closeMenu();
            if (this.hash !== '#Login') {
                closeLogin();
            }
            
            if(isFaq || isConfirmacao) {
                return;
            }

            var slashedHash = '#/' + this.hash.slice(1);
            if (this.hash) {
                if (slashedHash === location.hash) {
                    $.smoothScroll({scrollTarget: this.hash, speed: this.id === 'LinkToTopo' ? 1000 : 800});

                } else {
                    $.bbq.pushState(slashedHash);
                }
                return false;
            }
        });
        $(window).bind('hashchange', function (event) {
            var tgt = location.hash.replace(/^#\/?/, '');
            if (document.getElementById(tgt)) {
                $.smoothScroll({scrollTarget: '#' + tgt, speed: 800});
            }
        });
        $(window).trigger('hashchange');
        
        //FORM UTIL
        $('input').on('blur', function () {
            if (this.value && this.type != 'submit') {
                $(this).addClass('preenchido');
            } else {
                $(this).removeClass('preenchido');
            }
        });
        
        //[].slice.call(document.querySelectorAll('select.cs-select')).forEach(function (el) {new SelectFx(el);});
    };
    
    // VideoJS
        videojs.options.flash.swf = "http://www.moods.com.br/video-js.swf";

    $(init);

}(jQuery);