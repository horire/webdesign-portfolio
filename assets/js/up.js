// 動きのきっかけとなるアニメーションの名前を定義
function fadeAnime() {

    //ふわっと動くきっかけのクラス名と動きのクラス名の設定
    $('.fadeUpTrigger').each(function () { //fadeInUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeUp');
            // 画面内に入ったらfadeInというクラス名を追記
        } else {
            $(this).removeClass('fadeUp');
            // 画面外に出たらfadeInというクラス名を外す
        }
    });

    //関数でまとめることでこの後に違う動きを追加することが出来ます
    $('.fadeDownTrigger').each(function () { //fadeInDownTriggerというクラス名が
        var elemPos = $(this).offset().top - 50; //要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('fadeDown');
            // 画面内に入ったらfadeDownというクラス名を追記
        } else {
            $(this).removeClass('fadeDown');
            // 画面外に出たらfadeDownというクラス名を外す
        }
    });


}//ここまでふわっと動くきっかけのクラス名と動きのクラス名の設定

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述


// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述





// スクロールズーム

$(window).scroll(function () {
    var scroll = $(window).scrollTop();//スクロール値を定義
    //header-imgの背景
    $('#top-page-images').css({
        transform: 'scale(' + (100 + scroll / 10) / 100 + ')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
        top: -(scroll / 50) + "%",//スクロール値を代入してtopの位置をマイナスにずらす
    });
});



// ローディングアニメーション

//テキストのカウントアップの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
    strokeWidth: 0,//進捗ゲージの太さ
    duration: 1000,//時間指定(1000＝1秒)
    trailWidth: 0,//線の太さ
    text: {//テキストの形状を直接指定	
        style: {//天地中央に配置
            position: 'absolute',
            left: '50%',
            top: '50%',
            padding: '0',
            margin: '0',
            transform: 'translate(-50%,-50%)',
            'font-size': '1.2rem',
            color: '#fff',
        },
        autoStyleContainer: false //自動付与のスタイルを切る
    },
    step: function (state, bar) {
        bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
    }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
    $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});


