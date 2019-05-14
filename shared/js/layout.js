$(function() {
  $("[name=ul_esf] li").each(function() {
    if (
      location.pathname
        .replace("/", "")
        .toLowerCase()
        .endsWith($(this).attr("name") + '.html')
    ) {
      $(this).addClass("active");
    } else {
      $(this).removeClass("active");
    }
  });

  if ($("[name=ul_esf] li.active").length === 0) {
    $("[name=ul_esf] li[name=index]").addClass("active");
  }
});
