var content = document.querySelector("pre").textContent.trim().split('\n');
var res = [];

function seatDecoder(content) {
    var topBound = 127;
    var bottomBound = 0;
    var half = 0;

    var topSeat = 7;
    var botSeat = 0;
    var halfOfSeats = 0;

    var step = 0;
    var seat = 0;
    for (i = 0; i < content.length; i++) {
        for (j = 0; j < content[i].length; j++) {
            if (i <= 6) {
                if (content[i][j] == 'F') {
                    half = Math.floor((topBound + bottomBound) / 2);
                    topBound = half;
                } else if (content[i][j] == 'B') {
                    half = Math.ceil((topBound + bottomBound) / 2);
                    bottomBound = half;
                }
            } else {
                if (step < 2) {
                    if (content[i][j] == 'L') {
                        halfOfSeats = Math.floor((topSeat + botSeat) / 2);
                        topSeat = halfOfSeats;
                    } else if (content[i][j] == 'R') {
                        halfOfSeats = Math.ceil((topSeat + botSeat) / 2);
                        botSeat = halfOfSeats;
                    }
                    step++;
                } else {
                    if (content[i][j] == 'L') {
                        seat = botSeat;
                        return half * 8 + seat;

                    } else {
                        seat = topSeat;
                        return half * 8 + seat;
                    }
                }
            }
        }
    }
}
var result = content.map(row => seatDecoder(row)).sort((a, b) => a - b);
console.log(result.pop());

function findSeat(seatsList) {
    var prevSeat = seatsList[0];
    seatsList.forEach(element => {
        if (element - prevSeat > 1) {
            console.log(element - 1);
        }
        prevSeat = element;
    });
}

findSeat(result);