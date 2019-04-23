var game = new Phaser.Game(800,600,Phaser.AUTO);

var GameState = {
    preload : function() {
        this.load.image('background','/BikeGame/lesson1/assets/images/background-grass.png');
        this.load.image('bike','/BikeGame/lesson1/assets/images/bike.png');
        this.load.image('arrow','/BikeGame/lesson1/assets/images/arrow.svg');
    },
    create : function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.background = this.game.add.sprite(0, 0, 'background');
        this.bike = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'bike');
        this.bike.anchor.setTo(0.5,-0.05);
        this.bike.scale.setTo(0.65);

        this.bike.inputEnabled = true;
        this.bike.input.pixelPerfectClick = true;
        this.bike.events.onInputDown.add(this.animateBike, this);

        this.rightArrow = this.game.add.sprite(600,this.game.world.centerY, 'arrow');
        this.rightArrow.scale.setTo(0.65);
        this.rightArrow.anchor.setTo(-0.5);
        this.rightArrow.customParams = { direction: 1};

        // right arrow user input
        this.rightArrow.inputEnabled = true;
        // this.rightArrow.input.pixelPerfectClick = true;
        this.rightArrow.events.onInputDown.add(this.switchBike, this);

        this.leftArrow = this.game.add.sprite(200,this.game.world.centerY, 'arrow');
        this.leftArrow.scale.setTo(-0.65,0.65);
        this.leftArrow.anchor.setTo(-0.5);
        // this.leftArrow.scale.x = -1;
        this.leftArrow.customParams = { direction: -1};

        // left arrow user input
        this.leftArrow.inputEnabled = true;
        // this.leftArrow.input.pixelPerfectClick = true;
        this.leftArrow.events.onInputDown.add(this.switchBike, this);
    },
    update : function() {
        // this.bike.angle += 0.5
    },
    switchBike: function(sprite,event){
        console.log('sprite clicked')
    },
    animateBike: function(sprite,event){
        console.log('move bike');
    }

};

game.state.add('GameState', GameState);
game.state.start('GameState');