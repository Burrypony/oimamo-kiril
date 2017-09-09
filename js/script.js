(function() {
  $(document).ready(function () {

    // if($(window).width > 480){
    //   //HOVER add dots to menu navigation list
    //
    //   $(".hover_add_dots").hover(
    //
    //     function () {
    //       $(".ui-state-active").addClass("clear_before");
    //     },
    //     function () {
    //       $(".ui-state-active").removeClass("clear_before");
    //     }
    //
    //   );
    //
    //   $(".hover_add_dots").click(function () {
    //     $(".clear_before").removeClass("clear_before");
    //   });
    // }



    //menu tabs
    var tabs_counter = 1;

    $(".next_arrow").click(function () {
      var string = $("a", ".ui-state-active").attr("href");
      tab = string.substring(1, string.length);
      tablength = $("#" + tab).find(".length_div").length;

      if(tabs_counter != tablength){
        $("#tabs_wrapper_" + tabs_counter).addClass("hide");
        $("#stars_nav_block_" + tabs_counter).removeClass("active_logo");
        $("#stars_nav_block_" + tabs_counter).attr("src", "img/oval.svg");
        $("#stars_nav_block_" + tabs_counter).addClass("oval");
        ++tabs_counter;
        $("#stars_nav_block_" + tabs_counter).attr("src", "img/logo.svg");
        $("#stars_nav_block_" + tabs_counter).addClass("active_logo");
        $("#stars_nav_block_" + tabs_counter).removeClass("oval");
        $("#tabs_wrapper_" + tabs_counter).removeClass("hide");
        if(tabs_counter == tablength){
          $("img", ".next_arrow").attr("src", "img/prefArrow.svg");
          $("img", ".next_arrow").addClass("block_row_reverse")
        }
        if(tabs_counter >= 2 && tabs_counter != tablength){
          $("img", ".prev_arrow").attr("src", "img/nextArrow.svg");
          $("img", ".prev_arrow").addClass("block_row_reverse")
        }
        if(tabs_counter < tablength){
          $("img", ".next_arrow").attr("src", "img/nextArrow.svg");
        }
      };
    });

    $(".prev_arrow").click(function () {
      var string = $("a", ".ui-state-active").attr("href");
      tab = string.substring(1, string.length);
      tablength = $("#" + tab).find(".length_div").length;

      if(tabs_counter >= 2){
        $("#tabs_wrapper_" + tabs_counter).addClass("hide");
        $("#stars_nav_block_" + tabs_counter).removeClass("active_logo");
        $("#stars_nav_block_" + tabs_counter).attr("src", "img/oval.svg");
        $("#stars_nav_block_" + tabs_counter).addClass("oval");
        --tabs_counter;
        $("#stars_nav_block_" + tabs_counter).attr("src", "img/logo.svg");
        $("#stars_nav_block_" + tabs_counter).addClass("active_logo");
        $("#stars_nav_block_" + tabs_counter).removeClass("oval");
        $("#tabs_wrapper_" + tabs_counter).removeClass("hide");

        if(tabs_counter == 1){
          $("img", ".prev_arrow").attr("src", "img/prefArrow.svg");
          $("img", ".prev_arrow").removeClass("block_row_reverse")
        }

        if(tabs_counter < tablength){
          $("img", ".next_arrow").attr("src", "img/nextArrow.svg");
          $("img", ".next_arrow").removeClass("block_row_reverse")
        }
      }
    });
  //MOBILE_MENU
  :
  $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
      })
      $(document).delegate('.oppenned', 'click', function(event) {
        $('.oppenned').removeClass('oppenned');
      })
      $(document).delegate('.cls', 'click', function(event){
        $('.open').removeClass('oppenned');
        event.stopPropagation();
      });



  });
})();
