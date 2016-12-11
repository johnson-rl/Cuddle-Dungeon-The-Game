var hero = {
  position: [0,0],
  HP: 10,
  pow: 10,
  icon: 'src="cat_walk_new.gif"',
  placeHero: function (){
      placementClass = '.'+this.position.join('')
      // console.log(placementClass)
      $('#hero').remove()
      $(placementClass).append('<img id="hero" '+hero.icon+'></img>')
    }
}

function doNothing(){}

function rowPlacer(row, nothing, side){
  var rowPlacer = ('<div class="row '+row+'"></div>');
  side.append(rowPlacer);
}

function columnPlacer(col, nothing, side){
  var columnPlacer = ('<div class = "col-xs-1 '+col+'"></div>');
  side.append(columnPlacer)
}

function placeObjects (colRow, board, nothing){
  console.log(colRow);
  $('.'+colRow).addClass(board[Number(colRow)]);
  // debugger
}

function boardIterator(data, functionOne, functionTwo){
  var coordinate = [0,0]
  for (;coordinate[1]<10; coordinate[1]++){
    var row = coordinate[1]
    functionOne(row, data, $('.left-half'));
    coordinate[0] = 0;
    for (;coordinate[0]<12; coordinate[0]++){
      var colRow = coordinate.join('');
      functionTwo(colRow, data, $('.left-half'))
    }
  }
  coordinate = [12,0];
  for (;coordinate[1]<10; coordinate[1]++){
    var row = coordinate[1]
    functionOne(row, data, $('.right-half'));
    coordinate[0] = 0;
    for (coordinate[0]=12;coordinate[0]<24; coordinate[0]++){
      var colRow = coordinate.join('');
      functionTwo(colRow, data, $('.right-half'))
    }
  }
}

//coordinates are [column, row]
// function boardMaker(){
//   var coordinate = [0,0]
//   // console.log('boardMaker is running')
//   for (;coordinate[1]<10; coordinate[1]++){
//     var classPlacer = ('<div class="row '+coordinate[1]+'"></div>');
//     // console.log(classPlacer)
//     $('.left-half').append(classPlacer);
//     coordinate[0] = 0;
//     // debugger;
//     for (;coordinate[0]<12; coordinate[0]++){
//       var columnPlacer = ('<div class = "col-xs-1 '+coordinate.join('')+'"></div>');
//       // console.log(coordinate,coordinateString)
//       $('.left-half').append(columnPlacer)
//     }
//   }
//   coordinate = [12,0];
//   for (;coordinate[1]<10; coordinate[1]++){
//     var classPlacer = ('<div class="row '+coordinate[1]+'"></div>');
//     console.log(classPlacer)
//     $('.right-half').append(classPlacer);
//     coordinate[0] = 0;
//     // debugger;
//     for (coordinate[0]=12;coordinate[0]<24; coordinate[0]++){
//       var columnPlacer = ('<div class = "col-xs-1 '+coordinate.join('')+'"></div>');
//       // console.log(coordinate,coordinateString)
//       $('.right-half').append(columnPlacer)
//     }
//   }
// }

$(document).on('ready', function(){
  // boardMaker()
  boardIterator(null, rowPlacer, columnPlacer)
  hero.placeHero()
  levelOne = new Level()
  levelOne.buildLevel(levelOneData,levelOne)
  boardIterator(levelOne, doNothing, placeObjects)
  $(window).keydown(function(e){
    // console.log("working",e.keycode)
    if (e.keyCode===37){
      hero.position[0]-=1;
      if(!$('.'+hero.position.join('')).hasClass('move'))
      hero.position[0]+=1;
    } else if(e.keyCode===38) {
      hero.position[1]-=1;
      if(!$('.'+hero.position.join('')).hasClass('move'))
      hero.position[1]+=1;
    } else if(e.keyCode===39) {
      hero.position[0]+=1;
      if(!$('.'+hero.position.join('')).hasClass('move'))
      hero.position[0]-=1;
    } else if(e.keyCode===40) {
      hero.position[1]+=1;
      if(!$('.'+hero.position.join('')).hasClass('move')||hero.position[1]>=10)
      hero.position[1]-=1;
    }
    // console.log(hero.position)
    hero.placeHero();
  })
})
