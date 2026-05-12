/* ----- 例題1 ----- */
/* 
 * (1) nav > ul > li 要素にマウスカーソルを乗せたとき，
 *     背景色を #e0e0e0e に変更するコードを記述しなさい 
 */
$(function(){
  $('nav ul li').on('mouseover', function(){
    // thisは選択している要素のこと
    // .site-menu ul li をセレクタとして入れると,選択していない箇所も色が変わってしまう
    $(this).css('background-color', '#e0e0e0');
  });
});




/* 
 * (2) nav > ul > li 要素からマウスカーソルを離したとき，
 *     元のデザインに戻すコードを記述しなさい            
 */
$(function(){
  $('nav ul li').on('mouseout', function(){
    // thisは選択している要素のこと
    // .site-menu ul li をセレクタとして入れると,選択していない箇所も色が変わってしまう
    $(this).css('background-color', '');
  });
});




/**
  * (3) 氏名を記述するinputタグについて以下のデザインを適用するコードを記述しなさい
  *   ・フォーカス（選択状態）したときに背景色が緑に切り替わる
  *   ・フォーカスを解除したとき（blur）に背景色を元に戻す                      
  */
$(function(){
  //type=textのように属性を指定することで、選択箇所を指定できる
  $('input[type=text]')
    .on('focus', function(){
      $('.main').css({
        backgroundColor: 'green'
      });
    })
    .on('blur', function(){
      $('.main').css({
        backgroundColor: ''
      })
    });
});






/* ----- 練習問題1 ----- */
/**
 * (1) textareaに対して以下のデザインを適用するコードを記述しなさい
 *   ・フォーカスしている間はtextareaに打ち込んだ文字の色を黒のまま維持
 *   ・フォーカスを解除したとき，textareaに打ち込んだ文字の色を赤に変更
 */
$(function(){
  //type=textのように属性を指定することで、選択箇所を指定できる
  $('textarea')
    .on('focus', function(){
      $(this).css({
        color: ''
      });
    })
    .on('blur', function(){
      $(this).css({
        color: 'red'
      })
    });
});




// (2) name属性がuser-typeの個所をクリックしたときに，pdfに記載したコードを実行する
$(function(){
  $('input[name=user-type]').on('click',function(){
    alert($(this).val() + 'をクリックしました')
  });
});





/* ***** 発展 ***** */
/* ----- 例題2 ----- */
/* (1) class: titleの子要素h1をクリックすると，h1要素が3秒かけて以下のデザインに切り替わるコードを記述
 *   ・文字色を aqua に変更
 *　 ・文字サイズを 3rem に変更
 */
$(function(){
  $('.title h1').on('click', function(){
    $('.title h1').animate({
      color: 'aqua',
      fontSize: '3rem'
    },
    3000);
  });
});




/* ----- 練習問題2 ----- */
/* (1) header をクリックしたとき，1.5秒かけて header の margin-top を 0 に変化させるコードを記述                           */
$(function(){
  //cssの初期値を変更
  $('.header').css('margin-top', '150px');
  $('.header').on('click', function(){
    $('.header').animate({
      marginTop: '0px'
    },1500);
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