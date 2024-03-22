
const $box = document.querySelector('.box');
const $input = document.querySelector('.todo');
const $addbtn = document.querySelector('.addbtn');
const $list = document.querySelector('.list');

let text = ''; // input의 내용을 ul 속 li에 추가하는것

$input.addEventListener('keyup',e =>{
    if(e.key ==='Enter'){
        let text = $input.value.trim();
        if(text !== ''){
            let $li = document.createElement('li');
            let $check = document.createElement('input');
            let $delbtn = document.createElement('button');
            $check.setAttribute('type','checkbox');

            $delbtn.textContent='X';
            text=$input.value;
        
            $li.append($check,text,$delbtn);
            $list.appendChild($li);
        
            $input.focus();
            $input.value='';    
        
            $delbtn.addEventListener('click',e=>{
                e.target.parentElement.remove(); // btn을 누르면 부모속성 즉 li가 지워진다
            });

            $check.addEventListener('click',e=>{
                if(e.target.checked){
                    e.target.parentElement.classList.add('on')
                }else
                e.target.parentElement.classList.remove('on')
            })
        }
    }
})

// time
function Clock() {
    let date = new Date();
    let hours = Time(date.getHours());
    let minutes = Time(date.getMinutes());
    let seconds = Time(date.getSeconds());

    Write( hours , minutes , seconds)

    function Time(num){
        return(num < 10 ? 'O'+num: ''+ num);
    }
    function Write(hours , minutes , seconds){
        let Clock = document.getElementById("Clock");
        Clock.innerText = hours + ':' + minutes;
    }
}
setInterval(Clock,1000); // 1초마다 클락함수