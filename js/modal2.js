$(document).ready(function(){

  //각 목록을 클릭했을때.....
  $(".item_list>li").click(function(){
    g_pop=$(this).index();

    $(".g_page span:nth-child(1)").text(g_pop+1);  //오른쪽 상단 페이지번호
    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".modal-contents>li").eq(g_pop).fadeIn();  //각 목록의 내용
    $(".popup-box").stop().fadeIn(); //검정배경
  });

  //이전다음버튼....
  $(".pre").click(function(){
    if(g_pop>0){
      $(".modal-contents>li").eq(g_pop).hide();
      g_pop--;
      $(".g_page span:nth-child(1)").text(g_pop+1);
			$(".modal-contents>li").eq(g_pop).stop().show();
    };
  });
  $(".next").click(function(){
    if(g_pop<7){
      $(".modal-contents>li").eq(g_pop).hide();
      g_pop++;
      $(".g_page span:nth-child(1)").text(g_pop+1);
			$(".modal-contents>li").eq(g_pop).stop().show();
    };
  });

  //닫기버튼.....
  $(".close-button").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".popup-box").stop().fadeOut();
		$(".modal-contents>li").stop().fadeOut();
  });
  
});

$(document).ready(function(){

  //각 목록을 클릭했을때.....
  $(".item_list2>li").click(function(){
    g_pop=$(this).index();

    $(".g_page2 span:nth-child(1)").text(g_pop+1);  //오른쪽 상단 페이지번호
    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".modal-contents2>li").eq(g_pop).fadeIn();  //각 목록의 내용
    $(".popup-box2").stop().fadeIn(); //검정배경
  });

  //이전다음버튼....
  $(".pre2").click(function(){
    if(g_pop>0){
      $(".modal-contents2>li").eq(g_pop).hide();
      g_pop--;
      $(".g_page2 span:nth-child(1)").text(g_pop+1);
			$(".modal-contents2>li").eq(g_pop).stop().show();
    };
  });
  $(".next2").click(function(){
    if(g_pop<7){
      $(".modal-contents2>li").eq(g_pop).hide();
      g_pop++;
      $(".g_page2 span:nth-child(1)").text(g_pop+1);
			$(".modal-contents2>li").eq(g_pop).stop().show();
    };
  });

  //닫기버튼.....
  $(".close-button2").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".popup-box2").stop().fadeOut();
		$(".modal-contents2>li").stop().fadeOut();
  });
  
});

// 페이지 진입 시 기본 값
window.addEventListener('DOMContentLoaded', function() {
  showContent('A');
});

function showContent(content) {
  var contentA = document.getElementById("contentA");
  var contentB = document.getElementById("contentB");

  // 내용 숨김
  contentA.style.display = "none";
  contentB.style.display = "none";

  // 선택한 내용 보이기
  if (content === "A") {
    contentA.style.display = "block";
  } else if (content === "B") {
    contentB.style.display = "block";
  }
}
