var game = new Phaser.Game(800,600,Phaser.AUTO);

var GameState = {
    preload : function() {
        this.load.image('background','/BIKE/lesson3/assets/images/background-grass.png');
        // this.load.spritesheet('boy','/BIKE/lesson3/assets/images/boyc.png',131,131,7);
        this.load.spritesheet('girl','/BIKE/lesson3/assets/images/girl.webp',211,251,6);
        this.load.audio('scream','/BIKE/lesson3/assets/audio/boyScream.mp3')
    },
    create : function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.background = this.game.add.sprite(0, 0, 'background');

        this.girl = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'girl',0);
        this.girl.anchor.setTo(0.5,-0.05);
        fx = game.add.audio('scream');
        // this.girl.scale.setTo(0.65);

        this.girl.animations.add('animate',[0,1,2,3,4,5,6],3,false);

        this.girl.inputEnabled = true;
        this.girl.input.pixelPerfectClick = true;
        this.girl.events.onInputDown.add(this.animateBike, this);

        var style = { font: "65px Arial", fill: "#ff0044", align: "center" };
        var text = game.add.text(game.world.centerX, game.world.centerY, "GIRL RUNNING", style);
        text.anchor.set(1.5);
    },
    update : function() {
    },
    switchBike: function(){
    },
    animateBike: function(sprite,event){
        sprite.play('animate');
        fx.play();
    }

};

game.state.add('GameState', GameState);
game.state.start('GameState');