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


  function renderPagenation(container, options){
    var total = options.total;
    var pageSize = options.pageSize || 20;
    var onChange = options.onChange || function(){};
    var current = options.current || 1;
    var pageNum = Math.ceil(total / pageSize);

  }