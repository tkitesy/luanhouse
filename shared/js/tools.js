function acitveHeaderItem(pageName) {
    $(function() {
      $(".cnnbfdc-header__top__center li").each(function(_, li) {
        $(li).removeClass("active");
        if (
          pageName &&
          $(li)
            .find("a")
            .attr("href")
            .indexOf(pageName) > -1
        ) {
          $(li).addClass("active");
        }
      });
    });
  }