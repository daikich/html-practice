//例題１
//変数にオブジェクトを格納
const reverse = {
  color: 'black',
  filter: 'invert(1)' //色を反転
}
// class: title, contact に上記のコードを適用
$(function(){
  $('.title').css(reverse);
  $('.contact').css(reverse);
});

//練習１(1)
const color_change = {
  backgroundColor: '#f1ffff',
  boxShadow: '1px 1px 10px #808080'
}

$(function(){
  $('input').css(color_change);
  $('select').css(color_change);
  $('textarea').css(color_change);
});

//例題２
$(function () {
  $('nav ul li').on('mouseover', function () {
    $(this).css('background-color', 'red');
  });
});

$(function(){
  $('header, main, footer').on('click',function(){
    $(this).css('background-color', 'red');
  })
});

//練習２(1)
$(function () {
  $('input').on('focus', function () {
    $(this).css('font-size', '3rem');
  })
});
//練習２(2)
$(function(){
  $('.title, .map, .contact').on('mouseover',function(){
    $(this).css('background-color', '#204675')
  })
})

//例題３
function applyStyle(selector, event){
  $(selector).on(event, function(){
    $(this).css({
      backgroundColor: 'pink'
    });
  });
};

$(function(){
  applyStyle('header', 'mouseover');
  applyStyle('main', 'click');
});

//練習３
function changeText(selector, setText){
  $(selector).on('mouseover',function(){
    $(this).text(setText);
  });
};

$(function(){
  changeText('h1','h1は変更されました');
  changeText('h2','h2は変更されました');
})


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