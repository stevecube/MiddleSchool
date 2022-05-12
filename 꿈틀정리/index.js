// getElementById
const label1 = document.getElementById('output-1');
const label2 = document.getElementById('output-2');
const input1 = document.getElementById('input-1');
const outputt = document.getElementById('outputt');
const label_1 = document.getElementById('label-1');
const label_container_1 = document.getElementById('label-container-1');
const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const forth = document.getElementById('forth');
// 변수 선언
start_1 = '';
start_2 = ': ';
score = 0;
a = ['마음속에 떠오르는 생각이나 운율이 있는 언어로 압축하여 표현하는 문학', '정해진 형식에 맞추어 쓴 시', '정해진 형식 없이 자유롭게 쓴 시', '행을 구분하지 않고 줄글로 쓴 시'];
correct = '맞히셨습니다.';
incorrect = '맞히지 못하셨습니다. 다시 시도하세요';
correctorincorrect = false;
random1 = a[Math.floor(Math.random() * a.length)];
random2 = a[Math.floor(Math.random() * a.length)];
random3 = a[Math.floor(Math.random() * a.length)];
random4 = a[Math.floor(Math.random() * a.length)];
// 배열 선언
label_output = ['시의 개념과 특성', '시적 화자'];
label1_output = ['시', '정형시', '자유시', '산문시', '시'];
label1.innerHTML = label_output[0] + start_1;
label2.innerHTML = label1_output[0] + start_2;
outputt.innerHTML = '제출';
first.innerHTML = random1;
second.innerHTML = random2;
third.innerHTML = random3;
forth.innerHTML = random4;
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
    label2.innerHTML = label1_output[4] + start_2;
    score += 1;
}
// 중복 체크 함수
function duplicate_check() {
    while (random1 == random2 || random1 == random3 || random1 == random4 || random2 == random3 || random2 == random4 || random3 == random4) {
        random1 = a[Math.floor(Math.random() * a.length)];
        random2 = a[Math.floor(Math.random() * a.length)];
        random3 = a[Math.floor(Math.random() * a.length)];
        random4 = a[Math.floor(Math.random() * a.length)];
    }
}
outputt.addEventListener('click', function() {
    const inputt = input1.value;
    if (score == 0) {
        if (inputt == a[0]) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_1();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 1) {
        if (inputt == a[1]) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_2();
        }
        else {
            label_1.innerHTML= incorrect;
        }
    }
    else if (score == 2) {
        if (inputt == a[2]) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_3();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
    else if (score == 3) {
        if (inputt == a[3]) {
            label_1.innerHTML = correct;
            correctorincorrect = true;
            change_4();
        }
        else {
            label_1.innerHTML = incorrect;
        }
    }
});