// jQueryで「マウスオーバー」イベントを設定 
// 赤色の正方形にマウスオーバーしたときに、青色の正方形に変わるように設定
$(function(){
  $('.box1').mouseover(function(){
    $('.box1').css({'background-color': '#0000FF'});
  });
  $('.box1').mouseout(function(){
    $('.box1').css({'background-color': '#FF0000'});
  });
});

// 「マウスアウト」イベントを追加
// box1からマウスアウトされたときに、背景色を赤色に変化させる処理を追加
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// 「マウスクリック」イベントを設定
// .box1がクリックされたときは、box1-extのclassを追加
// マウスアウトされたときは、box1-extのclassを削除
// box1をクリックすると太い黒枠が表示され、マウスアウトすると赤色のみになる動作を確認
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});