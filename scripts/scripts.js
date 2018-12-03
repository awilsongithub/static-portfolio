
$( document ).ready(function(){

  // init side nav triggered by hamburger menu
  $(".button-collapse").sideNav();

  /**
   * SIDE NAV HACKS:
   * when user clicks side a nav link that doesn't reload
   * the page the side nav and overlay remain, so we need to:
   * - manually hide side nav
   * - remove overlay
   * - re-enable scrolling on body
   *
   *
   *<div class="drag-target" style="touch-action: pan-y; -webkit-user-drag: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0); width: 50%; right: 0px;"></div>
   *
   *
   *
   * .drag-target width ,
   */
  $('.smoothScroll').on('click tap', () => {
    // $('.side-nav').hide(200);
    // $('#sidenav-overlay').remove();
    // $('body').css({
    //   overflow: '',
    //   width: ''
    // });
    $('.drag-target').click();
  });



  /**
   * ANOTHER SIDE NAV HACK
   * in case we hid side nav,
   * show it when it is opened
   */
  // $('.button-collapse').on('click tap', () => {
  //   $('.side-nav').show();
  // });

});
