var GameState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function(){
        this.load.image('candy', '/VIRTUALPET/Lesson1/assets/images/candy.png');
        this.load.image('apple', '/VIRTUALPET/Lesson1/assets/images/apple.png');
        this.load.image('arrow', '/VIRTUALPET/Lesson1/assets/images/arrow.png');
        this.load.image('background', '/VIRTUALPET/Lesson1/assets/images/bg.png');
        this.load.spritesheet('boy', '/VIRTUALPET/Lesson1/assets/images/boyTileset.png', 400,400,4,2,2);
    },
    create: function(){
        this.background = this.game.add.sprite(0,0,'background');

        this.boy = this.game.add.sprite(100,400,'boy');
        this.boy.anchor.setTo(0.5);
        
        this.boy.customParams = { health: 100 , fun : 100 };
    }
}

var game = new Phaser.Game(360, 640, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');