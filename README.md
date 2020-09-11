# Cuddle-Dungeon-The-Game - [Play it Here](https://cuddle-dungeon.herokuapp.com/)

### Screen Shots
[Dungeon View](https://i.imgur.com/FDdo62s.png)
[Battle View](https://i.imgur.com/Nn6NYeH.jpg)

##Technologies Used

<li> JavaScript </li>
<li> jQuery </li>
<li> HTML </li>
<li> CSS </li>
<li> Bootstrap </li>
<li> Handlebars </li>


## Code I'm Proud Of

This function is great!  It creates the gameboard and allows me to place obstacles and goals on the board.  Also, it was written in a way where I could create new levels easily.

```javascript
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
```

##What's Next for Cuddle Dungeon?

<li> Add a "How to Play" Section </li>
<li> Let player choose class, with differing special abilities.  Enable XP, and leveling up. </li>
<li> Generate enemies with higher levels </li>
<li> Adjust the way the board renders to allow bigger (essentially infinite) gameboards </li>
<li> Add sound </li>
<li> Release Cuddle Dungeon 2: Ninja Kitty's Revenge </li>
