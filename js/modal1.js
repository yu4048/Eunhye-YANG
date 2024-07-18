$(document).ready(function(){

  //각 목록을 클릭했을때.....
  $(".modal-notice1").click(function(){
    g_pop=$(".md1").index();

    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".modal-content").eq(g_pop).fadeIn();  //각 목록의 내용
    $(".md1").stop().fadeIn(); //검정배경
  });

  //닫기버튼.....
  $(".close").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".modal").stop().fadeOut();
		$(".modal-content>li").stop().fadeOut();
  });


  // ___________________

  $(".modal-notice2").click(function(){
    g_pop=$(".md2").index();

    $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
    $(".modal-content").eq(g_pop).fadeIn();  //각 목록의 내용
    $(".md2").stop().fadeIn(); //검정배경
  });

  //닫기버튼.....
  $(".close").click(function(){
    $("html").css({"overflow-y":"scroll"}); 
    $(".modal").stop().fadeOut();
		$(".modal-content>li").stop().fadeOut();
  });
  

    // ___________________

    $(".modal-notice3").click(function(){
      g_pop=$(".md3").index();
  
      $("html").css({"overflow-y":"hidden"}); //기존 html 스크롤 숨기기
      $(".modal-content").eq(g_pop).fadeIn();  //각 목록의 내용
      $(".md3").stop().fadeIn(); //검정배경
    });
  
    //닫기버튼.....
    $(".close").click(function(){
      $("html").css({"overflow-y":"scroll"}); 
      $(".modal").stop().fadeOut();
      $(".modal-content>li").stop().fadeOut();
    });


});

