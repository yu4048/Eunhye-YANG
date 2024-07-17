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

  $(".gnb_list .close-side").click(function(){  
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

// 프로필 섹션의 위치
const profileSection = document.getElementById('profile');
let profileOffsetTop = profileSection.offsetTop;

// 각 게이지 바와 퍼센트 애니메이션 실행 함수
function animateProgressBar(progressBar, progressPercentage, percentage) {
  let start = 0;
  let animationId; // requestAnimationFrame의 ID 저장 변수

  function animationLoop() {
    if (start >= percentage) {
      cancelAnimationFrame(animationId);
      return;
    }

    start++;
    progressBar.style.width = `${start}%`;
    progressPercentage.textContent = `${start}%`;

    animationId = requestAnimationFrame(animationLoop);
  }

  // 초기 애니메이션 시작
  animationId = requestAnimationFrame(animationLoop);
}

// 각 게이지 바 초기화 함수
function resetProgressBars() {
  const progressBar1 = document.getElementById('progress-bar-1');
  const progressPercentage1 = document.getElementById('progress-percentage-1');
  const progressBar2 = document.getElementById('progress-bar-2');
  const progressPercentage2 = document.getElementById('progress-percentage-2');
  const progressBar3 = document.getElementById('progress-bar-3');
  const progressPercentage3 = document.getElementById('progress-percentage-3');

  progressBar1.style.width = '0%';
  progressPercentage1.textContent = '0%';
  progressBar2.style.width = '0%';
  progressPercentage2.textContent = '0%';
  progressBar3.style.width = '0%';
  progressPercentage3.textContent = '0%';
}

let animationStarted = false;

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  profileOffsetTop = profileSection.offsetTop;

  if (scrollPosition >= profileOffsetTop - window.innerHeight / 2) {
    if (!animationStarted) {
      const progressBar1 = document.getElementById('progress-bar-1');
      const progressPercentage1 = document.getElementById('progress-percentage-1');
      const progressBar2 = document.getElementById('progress-bar-2');
      const progressPercentage2 = document.getElementById('progress-percentage-2');
      const progressBar3 = document.getElementById('progress-bar-3');
      const progressPercentage3 = document.getElementById('progress-percentage-3');

      animateProgressBar(progressBar1, progressPercentage1, 90);
      animateProgressBar(progressBar2, progressPercentage2, 85);
      animateProgressBar(progressBar3, progressPercentage3, 70);

      animationStarted = true; 
    }
  } else {
    resetProgressBars();
    animationStarted = false; 
  }
});

resetProgressBars();

$(document).ready(function(){

  //각 목록을 클릭했을때.....
  $(".menu").click(function(){ 
    $(this).next().fadeIn();
    $("html").css({"overflow-y":"hidden"}); //모달창의 띄우는 동안은 기본브라우저의 스크롤바를 안나오게 함
  });

  //close버튼과 검정배경영역을 클릭할때.....
  $(".close, .modal").click(function(){
    $(".modal").fadeOut(); 
    $("html").css({"overflow-y":"scroll"}); 
  });

});

