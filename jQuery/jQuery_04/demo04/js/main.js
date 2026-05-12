//例題1
$(function(){
  $('input[type=text]').on('click', function(e){
    console.log(e);
  })
})

//練習1
$(function(){
  $('textarea').on('blur',function(e){
    console.log(e);
  })
})

//例題2
$(function(){
  $('input').on('keydown', function(e){
    if(e.code === 'Enter'){
      alert('enterが押されました');
    }
  })
})

//練習2
$(function(){
  $('input').on('keydown', function(e){
    if(e.code === 'KeyA'){
      alert('aが押されました');
    }
  })
})

//例題3
$(function(){
  let col_1 = 255;
  let col_2 = 255;
  let col_3 = 0;

  $('.header-site-menu').find('li').each(
    function(){
      $(this).css({
        backgroundColor: 'rgba(' + col_1 + ',' + col_2 + ',' + col_3 + ', 0.5'
      });

      col_1 = col_1 - 50;
      col_2 = col_2 - 50;
      col_3 = col_3 + 50;
    });
});

//練習3
$(function(){
  let col_1 = 255;
  let col_2 = 255;
  let col_3 = 0;

  $('.footer').find('li').each(
    function(){
      $(this).css({
        backgroundColor: 'rgba(' + col_1 + ',' + col_2 + ',' + col_3 + ', 0.5'
      });

      col_1 = col_1 - 50;
      col_2 = col_2 - 50;
      col_3 = col_3 + 50;
    });
});

//例題4-(1)
$(function(){
  $('header').prop('id', 'test');
});

//例題4-(2)
$(function(){
  $('input').on('blur', function(){
    console.log($(this).val());
  });
});

//例題5-(1)
$(function(){
  $('h2').on('click',function(){
    $(this).addClass('click');
  });
});

//例題5-(2)
$(function(){
  $('h2').on('click',function(){
    if($(this).hasClass('click')){
      $(this).removeClass('click');
    }else{
      $(this).addClass('click');
    }
  });
});




// 以下のコードはいじらないでください
// access.htmlのheaderのデザインを修正
$(function() {
    function applyStyle() {
        if ($(window).width() >= 800) {
            // 800px以上の時に適用するスタイル
            $('.site-menu ul li').css({
                'height': '110px',
                'margin': '0', 
                'padding': '0 20px',
                'display': 'flex',
                'alignItems': 'center'
            });
        } else {
            // 800px未満になったら元に戻す
            $('.site-menu ul li').css({
                'height': '',
                'margin': '',
                'padding': '',
                'display': '',
                'alignItems': ''
            });
        }
    }

    applyStyle(); // 初回ロード時に実行
    $(window).on('resize', applyStyle); // 画面サイズ変更でも実行
});