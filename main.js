/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-

    中央処理

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.main(function ()
{
  var app = GameApp({
    //画面サイズ設定
    width: SCREEN_W,
    height: SCREEN_H,

    //アセット読み込み
    // assets: ASSETS,

    //fps設定
    fps: 60,

    // startLabel: "タイトル",
    startLabel: "ホーム",
    scenes:
      [
        {
          label: "タイトル",
          className: "Title_scene",
        },
        {
          label: "ホーム",
          className: "Home_scene",
        },
        {
          label: "育成",
          className: "Rear_scene",
        },
        {
          label: "ショップ",
          className: "Shop_scene",
        },
        {
          label: "合成",
          className: "Marge_scene",
        },
        {
          label: "繁殖",
          className: "Breed_scene",
        }
      ]
  });
  app.run();
});
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

