

// 選單固定 卷軸高度偵測
$(document).ready(function () {
  onResizeFunction();
  $(window).on('resize', onResizeFunction);
  $(window).on('scroll', onScrollFunction);
});

function onResizeFunction(e) {
  adjustHeaderHeight();
}

function onScrollFunction(e) {
  adjustHeaderHeight();
}


$(document).ready(function(){
	$(window).scroll(function(){
		if ($(this).scrollTop() > 500) {
			$('.btnFixed').fadeIn();
		} else {
			$('.btnFixed').fadeOut();
		}
	});

});

//   連結滑動
//   $(function () {
//     $('a[href*="#"]').click(function () {
//         var href = $(this).attr("href");
// 		var href2 = href.split("#");

//         var currentURL = window.location.href;
// 		var fileName = currentURL.split('/').pop();
// 		var fileName2 = fileName.split("#");

//         if (fileName2[0] === href2[0]) {
//             var target = $(this.hash);
//             var offsetH = $('header').innerHeight();
//             $('html, body').animate({
//                 scrollTop: target.offset().top - offsetH - 25
//             }, 0);
//             return false;
//         } else {
//             window.location.href = href;
//         }
//         console.log('Y')
//     });
// });

// 手機版選單
function menuToggle() {
  $('.menuToggle').toggleClass('menuToggle--open');
  $('.menu').toggleClass('menu--open');
  $("body").toggleClass("body_fixed");
}

if($(window).width() < 992)
{
    $('.menu').find('a').on('click',function(){
      $('.menuToggle').removeClass('menuToggle--open');
      $('.menu').removeClass('menu--open');
      $("body").removeClass("body_fixed");
    })
}

$(function (){
  $('.menu').find('a').on('click',function(){
    $('.menuToggle').removeClass('menuToggle--open');
    $('.menu').removeClass('menu--open');
    $("body").removeClass("body_fixed");
  })
})
// 按鈕
let container = document.querySelector('.btnStyle');

// 然後，使用一個迴圈來生成並插入元素
for (let i = 1; i <= 5; i++) {
    let line = document.createElement('i');
    line.className = `line line${i}`;
    container.appendChild(line);
}