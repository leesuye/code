$(document).ready(function(){

    /* 좌우이동 팝업 */
    let idx = 1;
    let obj_left = 0

    setInterval(function(){ /* 일정시간을 두고 계속 반복 */
        if(idx < 3){
            idx++; /* 첫번쩨 팝업에 계속 1씩 더함 */
        }else{
            idx = 1; /* 3보다 커지면 다시 1로 돌아감 */
        }
        
        // console.log(idx); 첫번쩨 팝업일때 li사이즈는 0, 두번째팝업일떄-1200, 세번째팝업일때 -2400
        obj_left = -(idx-1)*1200
        $('.popup ul').animate({
            left : obj_left
        },500);
   
   
    }, 3000);




});