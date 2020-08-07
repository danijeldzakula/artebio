
var rew = 1;
var outtt = 0;
$(document).ready(function() {
    $('.form-link').click(function() {
        $('html, body').animate({
            scrollTop: $('.block14 .form-block').offset().top
        }, 600);
        return false;
    });
    $('.openmodal').click(function() {
        $('#apply').arcticmodal();
        return false;
    });
    setTimeout(function() {}, 10000);
    if ($('select').length) {} else {
        $('.c-s').css({
            'display': 'none'
        });
    }
    $('.block12 .arrow').click(function() {
        var rewCount = $('.block12 .rew').length;
        rew++;
        if (rew > rewCount) rew = 1;
        $('.block12 .rew').hide();
        $('.block12 .rew' + rew).show();
        return false;
    });
    $('.block9 .faq-block .item .iquestion').click(function() {
        var tx = $(this).parent().find('.itext');
        if ($(tx).hasClass('open')) {
            $(tx).slideUp(function() {
                $(tx).removeClass('open');
            });
        } else {
            $(tx).slideDown(function() {
                $(tx).addClass('open');
            });
        }
        return false;
    });
});
var year = 2222;
var month = 4;
var day = 4;
var hour = 0;
var min = 0;
var sec = 0;
var timerSec = 30 * 60;
dateFuture = new Date(year, month - 1, day, hour, min, sec);
function GetCount() {}
var online = 537;
var count = 23;
var currentPopup = 0;
function startMiniPopup() {
    if (currentPopup <= $('.popup-mini .item').length - 1) {
        var item = $('.popup-mini .item').eq(currentPopup);
        currentPopup++;
        if ($(item).hasClass('type1')) {
            count--;
            $('.count').html(count);
            $(item).show();
        }
        if ($(item).hasClass('type2')) {
            count--;
            $('.count').html(count);
            $(item).show();
        }
        if ($(item).hasClass('type4')) {
            online += Math.floor((Math.random() * 5) + 1);
            $('.online').html(online);
            $(item).show();
        }
        setTimeout(function() {
            $(item).hide();
            setTimeout(function() {
                startMiniPopup();
            }, Math.floor((Math.random() * 10) + 5) * 1000);
        }, 3000);
    }
}
$(document).ready(function() {
    var mouse = false;
    var popUpBy = false;
    var checkCode = true;
    var todayBayVal = false;
    var bPhone = false;
    var mBrowser = false;
    var internetEx = true;
    var safariWin = false;
    var fireFox = true;
    function mouseMoved() {};
    function popUp() {};
    function codeCheck() {
        var $code = $(".check_popup_code_input"),
            $message = $(".js-message"),
            $button = $(".button-popup-first");
        $button.on("click", function(ev) {
            ev.preventDefault();
            var $codeLenght = $(".check_popup_code_input").val().length;
            var codeValue = $code.val();
            var reg1 = new RegExp("[^0-9]*", "g"),
                codeValue = codeValue.replace(reg1, '');
            if (codeValue.length == 15) {
                return $message.text("Заказанный Вами продукт является подлинным, пользуйтесь с удовольствием!");
            } else if ($code.val() !== '' && $code.val() !== ' ' && $code.val() !== '  ') {
                return $message.text("К сожалению, данный код не найден! Вероятнее всего, вы приобрели поддельный продукт.");
            } else {
                return $message.text("Введите, пожалуйста, код.");
            }
        });
    };
    function NowTime() {};
    function bluePhone() {}
    function mobileBrowser() {
        function safari_windows() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.indexOf('safari') != -1) {
                if (ua.indexOf('chrome') > -1) {
                    var a = 1;
                } else {
                    var tag_css = document.createElement('link');
                    var basePath = window.cdn_path || '';
                    tag_css.type = 'text/css';
                    tag_css.rel = 'stylesheet';
                    tag_css.href = basePath + "css/safari.css";
                    var tag_head = document.getElementsByTagName('head');
                    tag_head[0].appendChild(tag_css);
                };
            };
        };
        function firefox() {
            var browser = navigator.userAgent.toLowerCase();
            if (browser.indexOf('firefox') > -1) {
                var basePath = window.cdn_path || '';
                var tag_css = document.createElement('link');
                tag_css.type = 'text/css';
                tag_css.rel = 'stylesheet';
                tag_css.href = basePath + "css/firefox.css";
                var tag_head = document.getElementsByTagName('head');
                tag_head[0].appendChild(tag_css);
            } else {
                var b = 1;
            }
            return false;
        };
        function internet_explorer() {
            var basePath = window.cdn_path || '';
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
                var tag_css = document.createElement('link');
                tag_css.type = 'text/css';
                tag_css.rel = 'stylesheet';
                tag_css.href = basePath + "css/ie.css";
                var tag_head = document.getElementsByTagName('head');
                tag_head[0].appendChild(tag_css);
            } else {
                var b = 1;
            }
            return false;
        };
        function checkBrowser() {
            if (internetEx == true) {
                internet_explorer();
            }
            if (safariWin == true) {
                safari_windows();
            }
            if (fireFox == true) {
                firefox();
            }
        };
        checkBrowser();
    };
    function check() {
        if (mouse == true) {
            mouseMoved();
        }
        if (popUpBy == true) {
            popUp();
        }
        if (checkCode == true) {
            codeCheck();
        }
        if (todayBayVal == true) {
            NowTime();
            setInterval(NowTime, 1000);
        }
        if (bPhone == true) {
            bluePhone();
        }
        if (mBrowser == true) {
            mobileBrowser();
        }
    };
    check();
    $(".show-message>div").on("click", function() {
        $(".show-message>div").addClass("popup-off");
    });
});