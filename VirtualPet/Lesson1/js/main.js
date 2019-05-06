var GameState = {
    init: function(){

    },
    preload: function(){

    },
    create: function(){

    }
}

var game = new Phaser.Game(360, 640, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');