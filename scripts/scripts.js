
$( document ).ready(function(){

  // init side nav triggered by hamburger menu
  $(".button-collapse").sideNav();

  /**
   * SIDE NAV HACK
   * to bring interactivity back to page
   * when link to section within page
   */
  $('.smoothScroll').on('click tap', () => {
    $('.drag-target').click();
  });

});
