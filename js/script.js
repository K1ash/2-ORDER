jQuery(document).ready(function($){
redrawDotNav();
$(window).bind('scroll',function(e){redrawDotNav();});
$('.n_1').click(function(){$('html, body').animate({scrollTop:0}, 1000);return false;});
$('.n_2').click(function(){$('html, body').animate({scrollTop:$('#b_2').offset().top}, 1000);return false;});
$('.n_3').click(function(){$('html, body').animate({scrollTop:$('#b_3').offset().top}, 1000);return false;});
$('.n_4').click(function(){$('html, body').animate({scrollTop:$('#b_4').offset().top}, 1000);return false;});
$('.n_5').click(function(){$('html, body').animate({scrollTop:$('#b_5').offset().top}, 1000);return false;});
$('.n_6').click(function(){$('html, body').animate({scrollTop:$('#b_6').offset().top}, 1000);return false;});

$('#fix_nv a').hover(
function(){$(this).prev('span').show();},
function(){$(this).prev('span').hide();});
});
function redrawDotNav(){
var section1Top =  0;
var section2Top =  $('#b_2').offset().top - (($('#b_3').offset().top - $('#b_2').offset().top) / 2);
var section3Top =  $('#b_3').offset().top - (($('#b_4').offset().top - $('#b_3').offset().top) / 2);
var section4Top =  $('#b_4').offset().top - (($('#b_5').offset().top - $('#b_4').offset().top) / 2);
var section5Top =  $('#b_5').offset().top - (($('#b_6').offset().top - $('#b_5').offset().top) / 2);
var section6Top =  $('#b_6').offset().top - (($(document).height() - $('#b_6').offset().top) / 2);
$('#fix_nv a').removeClass('actv_b');
if($(document).scrollTop() >= section1Top && $(document).scrollTop() < section2Top){
$('#fix_nv a.n_1').addClass('actv_b');
} else if ($(document).scrollTop() >= section2Top && $(document).scrollTop() < section3Top){
$('#fix_nv .n_2').addClass('actv_b');
} else if ($(document).scrollTop() >= section3Top && $(document).scrollTop() < section4Top){
$('#fix_nv .n_3').addClass('actv_b');
} else if ($(document).scrollTop() >= section4Top && $(document).scrollTop() < section5Top){
$('#fix_nv .n_4').addClass('actv_b');
} else if ($(document).scrollTop() >= section5Top && $(document).scrollTop() < section6Top){
$('#fix_nv .n_5').addClass('actv_b');
} else if ($(document).scrollTop() >= section6Top){
$('#fix_nv .n_6').addClass('actv_b');}	
}


