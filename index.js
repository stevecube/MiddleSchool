// getElementById
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const outputt = document.getElementById('outputt');
const label_1 = document.getElementById('label-1');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
const fifth = document.getElementById('fifth');
const sixth = document.getElementById('sixth');
const seventh = document.getElementById('seventh');
// 변수 선언
const AA = '마음속에 떠오르는 생각이나 운율이 있는 언어로 압축하여 표현하는 문학';
const BB = '정해진 형식에 맞추어 쓴 시';
const CC = '정해진 형식 없이 자유롭게 쓴 시';
const DD = '행을 구분하지 않고 줄글로 쓴 시';
const EE = '개인의 감정과 생각을 주관적으로 표현한 시';
const FF = '역사적 사건이나 신화, 전설, 영웅의 이야기를 쓴 시';
const GG = '연극의 대본처럼 대사로 이루어진 시';
start_2 = ': ';
score = 0;
a = [AA, BB, CC, DD, EE, FF, GG];
correct = '맞히셨습니다.';
incorrect = '맞히지 못하셨습니다. 다시 시도하세요';
correctorincorrect = false;
// 배열 선언
label_output = ['시의 개념과 특성', '시적 화자'];
label1_output = ['시', '정형시', '자유시', '산문시', '서정시', '서사시', '극시'];
label2.innerHTML = label1_output[0] + start_2;
outputt.innerHTML = '제출';
// 공용 함수
function change_1() {
    label2.innerHTML = label1_output[1] + start_2;
    score += 1;
};
function change_2() {
    label2.innerHTML = label1_output[2] + start_2;
    score += 1;
};
function change_3() {
    label2.innerHTML = label1_output[3] + start_2;
    score += 1;
}
function change_4() {
    label2.innerHTML = 'Ls' + start_2;
    score += 1;
}
// 중복 체크 함수
function duplicate_check() {
    const random1 = a[Math.floor(Math.random() * a.length)];
    if (random1 == a[0]) {
        a = a.shift();
    }
    else if (random1 == a[1]) {
        a1 = a.slice(0, 1);
        a2 = a.splice(2, 4);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random1 == a[2]) {
        a1 = a.slice(0, 2);
        a2 = a.splice(3, 3);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random1 == a[3]) {
        a1 = a.slice(0, 3);
        a2 = a.splice(4, 2);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random1 == a[4]) {
        a1 = a.slice(0, 4);
        a2 = a.splice(5, 1);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random1 == a[5]) {
        a1 = a.slice(0, 4);
        a2 = a.splice(6, 1);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random1 == a[6]) {
        a.pop();
        
    }
    const random2 = a[Math.floor(Math.random() * a.length)];
    if (random2 == a[0]) {
        a = a.shift();
        
    }
    else if (random2 == a[1]) {
        a1 = a.slice(0, 1);
        a2 = a.splice(2, 4);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random2 == a[2]) {
        a1 = a.slice(0, 2);
        a2 = a.splice(3, 3);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random2 == a[3]) {
        a1 = a.slice(0, 3);
        a2 = a.splice(4, 2);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random2 == a[4]) {
        a1 = a.slice(0, 4);
        
        a2 = a.splice(5, 1);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random2 == a[5]) {
        a1 = a.slice(0, 4);
        a2 = a.splice(6, 1);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random2 == a[6]) {
        a.pop();
        
    }
    const random3 = a[Math.floor(Math.random() * a.length)];
    if (random3 == a[0]) {
        a = a.shift();
        
    }
    else if (random3 == a[1]) {
        a1 = a.slice(0, 1);
        a2 = a.splice(2, 4);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random3 == a[2]) {
        a1 = a.slice(0, 2);
        a2 = a.splice(3, 3);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random3 == a[3]) {
        a1 = a.slice(0, 3);
        a2 = a.splice(4, 2);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random3 == a[4]) {
        a1 = a.slice(0, 4);
        a2 = a.splice(5, 1);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random3 == a[5]) {
        a1 = a.slice(0, 4);
        a2 = a.splice(6, 1);
        a3 = a1.concat(a2);
        a = a3;
    }
    else if (random3 == a[6]) {
        a.pop();
    }
    const random4 = a[Math.floor(Math.random() * a.length)];
    first.innerHTML = random1;
    second.innerHTML = random2;
    third.innerHTML = random3;
    forth.innerHTML = random4;
};
duplicate_check();
outputt.addEventListener('click', function() {
    const inputt = input1.value;
    if (score == 0) {
        if (inputt == AA) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 1) {
        if (inputt == BB) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_2();
        }
        else {
            label_1.innerHTML= incorrect;
        }
    }
    else if (score == 2) {
        if (inputt == CC) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_3();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 3) {
        if (inputt == DD) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_4();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
});