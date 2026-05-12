$(function(){
  function setMyForm(target){
    //エラーメッセージのclass名
    const ERROR_MESSAGE_CLASS = 'errorMsg';
    //エラー時にinput要素を修飾するためのclass名
    const ERROR_INPUT_CLASS = 'errorInput';

    //配列の中身を指定
    items = [
      target.find('input[type=text]'),
      target.find('input[type=email]'),
      target.find('input[type=tel]'),
      target.find('textarea')
    ];

    //項目のチェック
    function checkAll(){

      let errorCount = 0; //エラー発生数の集計

      //input, textarea要素のチェック
      for(let i = 0; i < items.length; i++){
        //items[i]にはinput, textarea要素が入っている
        //items[i]に isSuccess というプロパティがなければ
        if(items[i].prop('isSuccess') == false){
          //エラーが発生しているのでカウント＋１
          errorCount++;
        };//if
      };//for

      //エラーが発生していなければ、その旨をalertで表示
      if(errorCount == 0){
        alert('送信内容にエラーはありません');
        return true;
      } else {
        return false;
      };//if

    };//checkAll

    //エラーメッセージの追加
    function addErrorMessage(selector, message){

      //エラーメッセージが重複する可能性があるので一度リセット
      removeErrorMessage(selector);

      //selectorの直前に要素を追加
      selector.before('<span class="' + ERROR_MESSAGE_CLASS + '">' + message + '</span>');
      //selectorにクラスを追加
      selector.addClass(ERROR_INPUT_CLASS);

    };//addErrorMessage

    //エラーメッセージの削除
    function removeErrorMessage(selector){

      //selectorで指定した要素の親要素の内部にある、ERROR_MESSAGE_CLASSを持つ要素を検索
      let messageSelector = selector.parent().find('.' + ERROR_MESSAGE_CLASS);

      if(messageSelector.length != 0){
        //messageSelectorの要素を削除
        messageSelector.remove();
        //selectorのERROR_INPUT_CLASSを削除
        selector.removeClass(ERROR_INPUT_CLASS);
      };//if

    };//removeErrorMessage

    //input, textareaの未入力チェック
    function checkEmptyText(selector, message){

      //selectorの入力欄の値が空欄の場合
      if(selector.val() == ''){
        //エラーメッセージを追加
        addErrorMessage(selector, message);
        //エラーカウントを動かすためのプロパティを設定
        selector.prop('isSuccess', false);
      } else { //入力欄が埋まっている場合
        //エラーメッセージを解除
        removeErrorMessage(selector);
        //問題ないことを報告するプロパティを設定
        selector.prop('isSuccess', true);
      };//if

    };//checkEmptyText

    //初期設定
    function init(){

      //サブミットボタンが押されたとき
      target.on('submit', function(){

        // 1.submit 時に全項目を必ず検証(blurしなくても検証される)
        checkEmptyText(items[0], '名前を入力してください');
        checkEmptyText(items[1], 'メールアドレスを入力してください');
        checkEmptyText(items[2], '電話番号を入力してください');
        checkEmptyText(items[3], 'お問い合わせ内容を入力してください');

        // 2.問題がなければcheckAllを実行
        if(checkAll()){
          return true
        } else {
          //falseを返す。target.on('submit', false); の形に変化するので、送信できなくなる
          return false;
        };//if

      })//target

    };//init

    //enterキーで誤ってsubmitボタンが押されるのを防止
    target.find('input, textarea').on('keydown', function(e){

      if(e.code === 'Enter'){
        return false;
      };//if

    });//find

    items[0].on('blur', function(){
      checkEmptyText($(this), '名前を入力してください');
    });//items[0]

    items[1].on('blur', function(){
      checkEmptyText($(this), 'メールアドレスを入力してください');
    });//items[1]

    items[2].on('blur', function(){
      checkEmptyText($(this), '電話番号を入力してください');
    });//items[2]

    items[3].on('blur', function(){
      checkEmptyText($(this), 'お問い合わせ内容を入力してください');
    });//items[3]

    init();

  };//setMyForm

  setMyForm($('.contact'));

});//function()




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