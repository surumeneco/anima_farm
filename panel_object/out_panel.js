/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    外出メニューパネル

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Out_panel",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "RectangleShape",
    init: function ()
    {
      /*-----=-----=-----=-----=-----=-----
          ボタンオプション設定
        -----=-----=-----=-----=-----=-----*/
      let 余白 = 30;
      let ウィンドウ幅 = SCREEN_W / 2 - SCREEN_W / 16;
      let ボタン幅 = ウィンドウ幅 - 余白 * 2;
      let ボタン高 = ボタン幅 / 3;
      let ウィンドウ高 = 余白 + (ボタン高 + 余白) * 2;
      let ボタン位置 = -ウィンドウ高 / 2 + 余白 + ボタン高 / 2;
      let 文字サイズ = 48;
      /*-----=-----=-----=-----=-----=-----*/



      this.superInit(
        {
          width: ウィンドウ幅, height: ウィンドウ高,
          fill: lightGray,
          stroke: darkGray,
          strokeWidth: 15,
          cornerRadius: 0
        }
      );

      //thisが別のものを指す時に使えるように
      var self = this;



      /*-----=-----=-----=-----=-----=-----
          ボタン設定
        -----=-----=-----=-----=-----=-----*/
      this.ソロボタン = Game_button(
        "ソロ", 文字サイズ, 0, ボタン位置, ボタン幅, ボタン高
      ).addChildTo(this);
      ボタン位置 += ボタン高 + 余白;

      this.マルチボタン = Game_button(
        "マルチ", 文字サイズ, 0, ボタン位置, ボタン幅, ボタン高
      ).addChildTo(this);
      ボタン位置 += ボタン高 + 余白;
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          ボタン処理
        -----=-----=-----=-----=-----=-----*/
      this.ソロボタン.押下(function ()
      {
        // self.parent.parent.exit("育成");
      });

      this.マルチボタン.押下(function ()
      {
        // self.parent.parent.exit("ショップ");
      });
      /*-----=-----=-----=-----=-----=-----*/
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

