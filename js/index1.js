$(document).ready(function(){

  //브라우저 높이 
  let wh = $(window).height();

  /*브라우저 창 사이즈 변경___________ */
  $(window).resize(function(){
    location.reload(); 
    let wh = $(window).height();
    $("html,body").stop().animate({ scrollTop:wh*a },500);
  });

  /* 탑메뉴 클릭______________________ */
  $("#gnb li,#dot span").click(function(){
    let num=$(this).index();
    $("#tt").text(num); 
    $("#dot span").eq(num).addClass("active");
		$("#dot span").eq(num).siblings().removeClass("active");
    $("html,body").stop().animate({ scrollTop:wh*num },500); 
  });

  /* 마우스휠__________________________ */
  let a = 0; 
	let area_n = $(".area").length;  
	let wheel = true;

  $(".area").on("mousewheel DOMMouseScroll",function(e,delta) {
    e.preventDefault(); 
    if ( wheel ) {
      let n = $(this).index();

      if(delta < 0) { 
        a = n+1;
      }else{ 
        a = n-1;
      }

      if ( a <= 0 ) { a = 0; }
      if ( a >= area_n-1 ) { a = area_n-1; }

      $("#tt").text(a); 
      $("#dot span").eq(a).addClass("active");
			$("#dot span").eq(a).siblings().removeClass("active");
      $("html,body").stop().animate({ scrollTop:wh*a },500); 

    }
  });

  /*스크롤이벤트______________________ */
  $(window).scroll(function(){ 
    let sc = $(document).scrollTop();

    if((sc>=0) && (sc<wh)){  
      a=0; 
      $("#tt").text(a);
    };

    if((sc>=wh) && (sc< wh*2)){  
      a=1; 
      $("#tt").text(a);
    };

    if((sc>=wh*2) && (sc<wh*3)){  
      a=2; 
      $("#tt").text(a);
    };

    if(sc>=wh*3){  
      a=3; 
      $("#tt").text(a);
    };
  });

});

$(document).ready(function(){

  $(".trigger ").click(function(){
    $(".gnb_list").stop(true,true).animate({left:0});
  });

  $(".gnb_list .close").click(function(){  
    $(".gnb_list").stop(true,true).animate({left:"-60%"});
  });	
  
});

/* 시계 */
function updateClock() {
  const now = new Date();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  
  let ampm = 'AM';
  let displayHours = hours;
  
  if (hours >= 12) {
      ampm = 'PM';
      displayHours = hours % 12;
      if (displayHours === 0) {
      displayHours = 12;
      }
  }
  
  const timeString = `${year}-${month}-${day} (${dayOfWeek}) ${displayHours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').textContent = timeString;
}

setInterval(updateClock, 1000);

updateClock();
