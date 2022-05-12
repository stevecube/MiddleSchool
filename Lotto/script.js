var lotto = [];

for(var i=0; i<6; i++) {
    var num = Math.floor(Math.random() * 44) + 1;

    for (var j in lotto) {
        if (num == lotto[j]) {
            num = Math.floor(Math.random() * 44) + 1;
        }
    }

    lotto.push(num);
}

lotto.sort(function (a, b) {
    return a - b;
})

alert(lotto);