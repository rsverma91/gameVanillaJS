var row = 10,
    col = 10,
    players = {
        Player1: 1,
        Player2: 1,
    };
var currenPlayer = 'Player1';
var blockWidth = 80,
    blockHeight = 80;
var snake = [{
        start: 50,
        end: 10
    },
    {
        start: 70,
        end: 30
    },
    {
        start: 45,
        end: 15
    },
    {
        start: 77,
        end: 34
    },
    {
        start: 99,
        end: 22
    }
];
var ladder = [{
        start: 5,
        end: 46
    },
    {
        start: 23,
        end: 66
    },
    {
        start: 49,
        end: 67
    },
    {
        start: 71,
        end: 98
    },
    {
        start: 12,
        end: 83
    }
]

var board = document.getElementById('board');
board.style.width = blockWidth * row + 'px';
board.style.height = blockWidth * col + 'px';
for (var i = 0; i < row * col; i++) {
    var elem = document.createElement('div');
    elem.setAttribute('data-index', i);
    elem.style.width = blockWidth + 'px';
    elem.style.height = blockHeight + 'px';
    var text = i + 1;
    for (var sn = 0; sn < snake.length; sn++) {
        if (snake[sn].start === i + 1) {
            text += ' (S-s)';
            elem.style.backgroundColor = 'red';
        } else if (snake[sn].end === i + 1) {
            text += ' (S-e)';
            elem.style.backgroundColor = 'orange';
        }
    }
    for (var ld = 0; ld < ladder.length; ld++) {
        if (ladder[ld].start === i + 1) {
            text += ' (L-s)';
            elem.style.backgroundColor = 'green';
        } else if (ladder[ld].end === i + 1) {
            elem.style.backgroundColor = 'blue';
            text += ' (L-e)';
        }
    }
    elem.innerHTML = text;
    board.appendChild(elem);
}

function showPlayrePos() {
    var plrHtml = document.getElementById('player');
    var inrHtml = '';
    for (var plr in players) {
        inrHtml += plr + ' at: ' + players[plr] + '<br>';
    }
    plrHtml.innerHTML = inrHtml;
}

function movePlayer(move, currenPlayer) {
    var newMove = players[currenPlayer] + move;
    players[currenPlayer] = newMove;
    showPlayrePos();
    for (var sn = 0; sn < snake.length; sn++) {
        if (newMove === snake[sn].start) {
            newMove = snake[sn].end;
            setTimeout(function () {
                players[currenPlayer] = newMove;
                showPlayrePos();
            }, 3000);
        }
    }
    for (var ld = 0; ld < ladder.length; ld++) {
        if (newMove === ladder[ld].start) {
            newMove = ladder[ld].end;
            setTimeout(function () {
                players[currenPlayer] = newMove;
                showPlayrePos();
            }, 3000);
        }
    }
}
document.getElementById('dice').addEventListener('click', function (e) {
    var move = Math.ceil(Math.random() * 6);
    movePlayer(move, currenPlayer);
    if(currenPlayer  === "Player1"){
        currenPlayer  = "Player2"
    }else{
        currenPlayer = "Player1"
    }

})
showPlayrePos();