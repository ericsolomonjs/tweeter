function createHoverListeners() {
  console.log("in createHoverListeners")
  $("section.tweet").hover(function () {
    //handlerIn event
    this.style["box-shadow"] = "5px 5px #9d9d9d";
  }, function () {
    //handlerOut event
    this.style["box-shadow"] = "";
  })
  
  $("i.fa-flag").hover(function () {
    //handlerIn event
    this.style["color"] = "#0878af";
  }, function () {
    //handlerOut event
    this.style["color"] = "";
  })

  $("i.fa-share").hover(function () {
    //handlerIn event
    this.style["color"] = "#0878af";
  }, function () {
    //handlerOut event
    this.style["color"] = "";
  })

  $("i.fa-heart").hover(function () {
    //handlerIn event
    this.style["color"] = "#0878af";
  }, function () {
    //handlerOut event
    this.style["color"] = "";
  })
}