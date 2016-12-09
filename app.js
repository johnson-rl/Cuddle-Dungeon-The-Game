var hero = {
  position: [0,0],
  HP: 10,
  pow: 10,
  icon: "O"
}
//coordinates are [column, row]
function boardMaker(){
  var coordinate = [0,0]
  for (;coordinate[1]<10; coordinate[1]++){
    var class = coordinate[1];
    $('.left-half').append("<div class='row "+class+"></div>");
    coordinate[0] = 0;
    // debugger;
    for (;coordinate[0]<12; coordinate[0]++){
      var coordinateString = coordinate.join('');
      // console.log(coordinate,coordinateString)
      $('.left-half').append("<div class='row "+cooridnate[1]+"></div>")
    }
  }
}



$(document).on('ready', function(){
  $(".rowone .colone").append('<p>'+hero.icon+'</p>')
  boardMaker()
})
