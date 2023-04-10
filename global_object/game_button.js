/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    オリジナルのボタン

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Game_button",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "RectangleShape",
    init: function (文字, x, y, w, h)
    {
      /*-----=-----=-----=-----=-----=-----
          色設定
        -----=-----=-----=-----=-----=-----*/
      this.文字色 = Black;
      this.通常色 = White;
      this.インタラクト色 = lightGray;
      this.押下色 = Gray;
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          枠設定
        -----=-----=-----=-----=-----=-----*/
      this.superInit(
        {
          width: w, height: h,
          fill: this.通常色,
          stroke: darkGray,
          strokeWidth: 10,
          cornerRadius: h / 4
        }
      );
      this.setInteractive(true);
      this.setPosition(x, y);
      /*-----=-----=-----=-----=-----=-----*/

      /*-----=-----=-----=-----=-----=-----
          テキスト設定
        -----=-----=-----=-----=-----=-----*/
      this.テキスト = Label(
        {
          text: 文字,
          fontSize: 64,
          fill: this.文字色
        }
      ).addChildTo(this);
      this.テキスト.setPosition(0, 0);
      /*-----=-----=-----=-----=-----=-----*/

      //thisが別のものを指す時に使えるように
      var self = this;



      /*-----=-----=-----=-----=-----=-----
          押したときの処理設定関数
        -----=-----=-----=-----=-----=-----*/
      this.押下 = function (func)
      {
        this.on("pointstart", func);
      };
      /*-----=-----=-----=-----=-----=-----*/



      /*-----=-----=-----=-----=-----=-----
          カーソル合わせてる間暗く
        -----=-----=-----=-----=-----=-----*/
      this.on("pointover", function ()
      {
        this.fill = this.インタラクト色;
      });

      this.on("pointout", function ()
      {
        this.fill = this.通常色;
      });
      /*-----=-----=-----=-----=-----=-----*/

      /*-----=-----=-----=-----=-----=-----
          押下中暗く
        -----=-----=-----=-----=-----=-----*/
      this.on("pointstart", function ()
      {
        this.fill = this.押下色;
      });
      this.on("pointend", function ()
      {
        this.fill = this.通常色;
      });
      /*-----=-----=-----=-----=-----=-----*/
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

