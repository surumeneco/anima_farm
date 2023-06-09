/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    メニューボタン

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Menu_button",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "CircleShape",
    init: function ()
    {
      let rad = 50;
      this.superInit(
        {
          radius: rad,
          fill: Cyan,
          stroke: darkCyan,
          strokeWidth: 10
        }
      );
      this.setInteractive(true);
      this.setPosition(SCREEN_W - rad, rad);

      //thisが別のものを指す時に使えるように
      var self = this;

      //メニュー状況
      this.is_menu_opened = false;

      //メニューを開く
      this.on("pointend", function ()
      {
        this.is_menu_opened = !this.is_menu_opened;

        if (this.is_menu_opened)
        {
        }
        else
        {
        }
      });
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    メニューウィンドウ

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Menu_window",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "RectangleShape",
    init: function ()
    {
      this.superInit(
        {
          width: 50, height: 50,
          fill: Cyan,
          stroke: darkCyan,
          strokeWidth: 10
        }
      );
      this.setInteractive(true);
      this.setPosition(SCREEN_W - rad, rad);

      //thisが別のものを指す時に使えるように
      var self = this;
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

