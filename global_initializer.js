/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    グローバル変数

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

//phinaのグローバライズ
phina.globalize();

//ウィンドウアスペクトを取得
// var WINDOW_W = window.innerWidth;
// var WINDOW_H = window.innerHeight;
// var aspect = WINDOW_H / WINDOW_W;

//ウィンドウサイズを計算
var SCREEN_W = 1080;
var SCREEN_H = 1920;
// var SCREEN_H = SCREEN_W * aspect;
var CENTER_X = SCREEN_W / 2;
var CENTER_Y = SCREEN_H / 2;

//時間
var time = 0;

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    関数定義

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

//常駐関数
const always = function (app)
{
  time = app.currentTime;
};

//BGMチェック
const bgm_check = function ()
{
};

/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

