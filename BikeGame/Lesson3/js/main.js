var game = new Phaser.Game(800,600,Phaser.AUTO);

var GameState = {
    preload : function() {
        this.load.image('background','/BIKE/lesson3/assets/images/background-grass.png');

        this.load.spritesheet('boy','/BIKE/lesson3/assets/images/boy.png',131,131,7);
    },
    create : function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.background = this.game.add.sprite(0, 0, 'background');

        this.boy = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'boy',0);
        this.boy.anchor.setTo(0.5,-0.05);
        // this.boy.scale.setTo(0.65);

        this.boy.animations.add('animate',[0,1,2,3,4,5,6],3,false);

        this.boy.inputEnabled = true;
        this.boy.input.pixelPerfectClick = true;
        this.boy.events.onInputDown.add(this.animateBike, this);
    },
    update : function() {
    },
    switchBike: function(){
    },
    animateBike: function(sprite,event){
        sprite.play('animate');
    }

};

game.state.add('GameState', GameState);
game.state.start('GameState');