
var hero = {
  position: [0,0],
  hp: 10,
  pow: 5,
  cuddle: 2,
  level: 1,
  icon: 'src="images/cat_walk_new.gif"',
  placeHero: function (){
      placementClass = '.'+this.position.join('')
      // console.log(placementClass)
      if($(placementClass).hasClass('win')){
        endGame()
      } else {
        $('#hero').remove()
        $(placementClass).append('<img id="hero" '+hero.icon+'></img>')
      }
    }
}

var badGuy
var heroBars
var enemyBars

function doNothing(){}
//The following functions create the gameboard and place the pieces
function rowPlacer(row, nothing, side){
  var rowPlacer = ('<div class="row '+row+'"></div>');
  side.append(rowPlacer);
}

function columnPlacer(col, nothing, side){
  var columnPlacer = ('<div class = "col-xs-1 '+col+'"></div>');
  side.append(columnPlacer)
}

function placeObjects (colRow, board, nothing){
  $('.'+colRow).addClass(board[Number(colRow)]);
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
//The following functions alter what the viewer can see on the screen
function returnBoard(text){
  alert(battleText[text])
  $('#battle').addClass('hidden');
  $('#board').removeClass('hidden');
}

function startGame(){
  $('.prologue').addClass('hidden');
  $('#board').removeClass('hidden');
}

function endGame(){
  $('#board').addClass('hidden');
  $('.you-won').removeClass('hidden');
    $('#first1').fadeIn(3000, function(){
      $('#second1').fadeIn(3000, function(){
        $('#third1').fadeIn(3000, function(){
          $('#fourth1').fadeIn(3000, function(){
            $('#fifth1').fadeIn(3000, function(){
              $('#sixth1').fadeIn(3000, function(){
                $('#seventh1').fadeIn(3000, function(){
                  $('#eigth1').fadeIn(3000, function(){
                    $('#ninth1').fadeIn(6000, function(){
                      $('#tenth1').fadeIn(1000)
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
}
//The following function affect battle mechanics
function attack(event){
  $('.action-text').html('');
  var damage = Math.round(Math.random()*hero.pow)
  badGuy.hp -= damage
  console.log(badGuy.hp)
  printBattleText(battleText[0], damage)
  battleEnemy()
}

function run(event){
  $('.action-text').html('');
  if(Math.random()>.5){
    returnBoard(1)
  } else {
    printBattleText(battleText[2], null)
    battleEnemy()
  }
}

function cuddle(event){
  $('.action-text').html('');
  if(Math.random()>.8){
    hero.cuddle += badGuy.cuddle
    badGuy.cuddle = 0
    printBattleText(battleText[3], null)
  } else {
    printBattleText(battleText[4], null)
  }
  battleEnemy()
}

function special(event){
  $('.action-text').html('');
  if (hero.cuddle < 1){
    printBattleText(battleText[5], null);
  } else {
    var damage = Math.round(Math.random()*hero.pow*2);
    badGuy.hp -= damage;
    printBattleText(battleText[6], damage);
    hero.cuddle-=1;
  }
  battleEnemy()
}

function heroWin(){
  returnBoard(7)
}

function enemyWin(){
  $('#battle').addClass('hidden');
  $('.you-died').removeClass('hidden');
}

function enemyAttack(){
  var damage = Math.round(Math.random()*badGuy.pow)
  hero.hp -= damage
  printBattleText(badGuy.text, damage)
  if(hero.hp<=0){
    enemyWin()
  }
}

function battleEnemy(){
  if (badGuy.hp <=0){
    heroWin()
  } else {
    enemyAttack()
  }
  printBattleStats()
}

function enemyGenerate(){
  var enemy = Math.random();
  if (enemy>=.95){
    var type = Math.floor(Math.random()*enemyArray.length);
    var enemyType = enemyArray[type];
    var enemyCreate = enemies[enemyType]
    console.log(enemyCreate)
    alert("Holy sh@&*! You've encountered a cuddly but evil "+enemyArray[type]+"!");
    $('#board').addClass('hidden');
    $('#battle').removeClass('hidden');
    badGuy = new Enemy(enemyCreate);
    printBattleStats()
    $('.action-text').html('');
  }
}

function printBattleText(text, number){
  $('.action-text').append('<h5>'+text+'</h5>');
  if(number!=null){
    $('.action-text').append('<h5>'+number+' damage was dealt.</h5>');
  }
  console.log(number);
}

function printBattleStats(){
  var heroAppend = heroBars({hp: ''+hero.hp, level: ''+hero.level, pow: ''+hero.pow, cuddle: ''+hero.cuddle})
  console.log(heroAppend)
  $('#hero-stats-placer').html(heroAppend)
  var enemyAppend = enemyBars({hp: badGuy.hp, level:badGuy.level, pow: badGuy.pow, cuddle:badGuy.cuddle, Enemy_Name:badGuy.name, enemy_gif:badGuy.icon})
  console.log(enemyAppend)
  $('#enemy-stats-placer').html(enemyAppend)
}
//The following begins the game and sets up the click events.
$(document).ready(function(){
  // boardMaker()
  console.log("sanity")
  $('#start').click(function(){
    $('#first').fadeIn(3000, function(){
      $('#second').fadeIn(3000, function(){
        $('#third').fadeIn(3000, function(){
          $('#fourth').fadeIn(3000, function(){
            $('#fifth').fadeIn(3000, function(){
              $('#sixth').fadeIn(3000, function(){
                $('#seventh').fadeIn(3000, function(){
                  $('#eigth').fadeIn(3000, function(){
                    $('#ninth').fadeIn(3000, function(){
                      $('#tenth').fadeIn(3000)
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
  $('#begin').on('click', startGame)
  boardIterator(null, rowPlacer, columnPlacer)
  hero.placeHero()
  levelOne = new Level()
  levelOne.buildLevel(levelOneData,levelOne)
  boardIterator(levelOne, doNothing, placeObjects)
  var heroSource = $('#hero-stats').html()
  // console.log(heroSource)
  heroBars = Handlebars.compile(heroSource)
  var enemySource = $('#enemy-stats').html()
  // console.log(enemySource)
  enemyBars = Handlebars.compile(enemySource)
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
    enemyGenerate()
    hero.placeHero();
  })

  $('#attack').on('click', attack)
  $('#run').on('click', run)
  $('#cuddle').on('click', cuddle)
  $('#special').on('click', special)
})
