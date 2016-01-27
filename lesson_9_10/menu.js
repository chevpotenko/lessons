$(function () {
  $('.menu li').on('mouseover', function () { $(this).children('ul').addClass('activeMenu') });
  $('.menu li ul li').on('mouseover', function () { $(this).children('ul').addClass('activeMenu') });
  $('.menu li').on('mouseout', function () { $(this).children('ul').removeClass('activeMenu') });
  $('.menu li ul li').on('mouseout', function () { $(this).children('ul').removeClass('activeMenu') });
})