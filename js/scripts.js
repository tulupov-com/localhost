var userLang = navigator.language || navigator.userLanguage;
var userLang_detected = userLang.toLowerCase();
if (userLang_detected != 'ru-ru' && userLang_detected != 'ru') {
    document.title = 'Welcome!';
    document.getElementById('t1').innerHTML = 'Welcome!';
    document.getElementById('t2').innerHTML = 'Open Server Panel is running ;-)';
    document.getElementById('t3').innerHTML = 'User\'s manual <i class="right"></i>';
}