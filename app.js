// alert('테스트입니다');

// 사용할 태그요소 객체를 변수에 저장한다.
//document. << 이부분 다시공부해야할듯
//객체의 값은 항상 문자열로 적는다
var body = document.getElementById('gradient'); //바디태그
var color1 = document.querySelector('.color1'); //인풋컬러1
var color2 = document.querySelector('.color2'); //인풋컬러2
var h3 = document.querySelector('h3');          //h3 빈태그

//이벤트를 연결한다
//input:  값 변경 이벤트
color1.addEventListener('input',grad);
color2.addEventListener('input',grad);


//코드 simple화
//익명함수가 중복되기때문에 밖으로 빼서 따로 grad 함수를 만들어준다. 
function grad(){
    body.style.background = "linear-gradient(to right," +color1.value+ "," +color2.value+")";
    h3.textContent = body.style.background;
}
