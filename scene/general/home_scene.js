/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    ホームシーン

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Home_scene",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "DisplayScene",
    init: function (option)
    {
      this.superInit(option);

      //thisが別のものを指す時に使えるように
      var self = this;

      //背景色
      this.backgroundColor = White;



      /*-----=-----=-----=-----=-----=-----
          描画グループ設定
        -----=-----=-----=-----=-----=-----*/
      this.メイン画像 = DisplayElement().addChildTo(this);
      this.ボタン = DisplayElement().addChildTo(this);
      this.パネルグループ = DisplayElement().addChildTo(this);
      this.ヘッドバー = DisplayElement().addChildTo(this);
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          ボタンオプション
        -----=-----=-----=-----=-----=-----*/
      let ボタン余白 = SCREEN_W / 8;
      let ボタン幅 = SCREEN_W / 2 - ボタン余白;
      let ボタン高 = ボタン幅 / 2;
      let 農場ボタン位置x = SCREEN_W / 4 + ボタン余白 / 8;
      let 外出ボタン位置x = SCREEN_W * 3 / 4 - ボタン余白 / 8;
      let ボタン位置y = 800 + ボタン高 / 2;
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          パネルオプション
        -----=-----=-----=-----=-----=-----*/
      this.パネル展開状況 = 0;
      this.農場パネル = Farm_panel();
      this.外出パネル = Out_panel();
      this.農場パネル.setPosition(農場ボタン位置x, ボタン位置y + ボタン高 / 2);
      this.外出パネル.setPosition(外出ボタン位置x, ボタン位置y + ボタン高 / 2);
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          ヘッドバー
        -----=-----=-----=-----=-----=-----*/
      this.ヘッドバー背景 = RectangleShape(
        {
          width: SCREEN_W, height: 150,
          fill: lightCyan,
          stroke: darkCyan,
          strokeWidth: 20
        }
      ).addChildTo(this.ヘッドバー);
      this.ヘッドバー背景.setPosition(CENTER_X, 75);
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          パネル展開ボタン
        -----=-----=-----=-----=-----=-----*/
      this.農場 = Game_button(
        "農場", 農場ボタン位置x, ボタン位置y, ボタン幅, ボタン高
      ).addChildTo(self.ボタン);

      this.外出 = Game_button(
        "外出", 外出ボタン位置x, ボタン位置y, ボタン幅, ボタン高
      ).addChildTo(self.ボタン);
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          パネル展開処理
        -----=-----=-----=-----=-----=-----*/
      this.農場.押下(function ()
      {
        switch (self.パネル展開状況)
        {
          default:
            break;
          case 0:
            self.パネル展開状況 = 1;
            self.農場パネル.addChildTo(self.パネルグループ);
            break;
          case 1:
            self.パネル展開状況 = 0;
            self.パネルグループ.children.last.remove();
            break;
          case 2:
            self.パネル展開状況 = 1;
            self.パネルグループ.children.last.remove();
            self.農場パネル.addChildTo(self.パネルグループ);
            break;
        }
      });

      this.外出.押下(function ()
      {
        switch (self.パネル展開状況)
        {
          default:
            break;
          case 0:
            self.パネル展開状況 = 2;
            self.外出パネル.addChildTo(self.パネルグループ);
            break;
          case 1:
            self.パネル展開状況 = 2;
            self.パネルグループ.children.last.remove();
            self.外出パネル.addChildTo(self.パネルグループ);
            break;
          case 2:
            self.パネル展開状況 = 0;
            self.パネルグループ.children.last.remove();
            break;
        }
      });
      /*-----=-----=-----=-----=-----=-----*/
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/



    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        毎フレーム処理

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    update: function (app)
    {
      always(app);
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
