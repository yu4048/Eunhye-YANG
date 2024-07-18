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
