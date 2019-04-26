var game = new Phaser.Game(800,600,Phaser.AUTO);

var GameState = {
    preload : function() {
        this.load.image('background','/BIKE/lesson2/assets/images/background-grass.png');
        this.load.image('bike','/BIKE/lesson2/assets/images/bike.png');
        this.load.image('arrow','/BIKE/lesson2/assets/images/arrow.svg');
        this.load.image('bike2','/BIKE/lesson2/assets/images/bike2.png');
        this.load.image('bike3','/BIKE/lesson2/assets/images/bike3.png');
        this.load.image('cycle','/BIKE/lesson2/assets/images/cycle.png');
    },
    create : function() {
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        this.background = this.game.add.sprite(0, 0, 'background');
        
        //group for vehicles
        var bikeData = [
            {key:'bike',text:'BIKE1'},
            {key:'bike2',text:'BIKE2'},
            {key:'bike3',text:'BIKE3'},
            {key:'cycle',text:'CYCLE'},
        ];

        this.bikes = this.game.add.group();

        bikeData.forEach(function(el){
            bike = this.bikes.create(1000, this.game.world.centerY, el.key);
            bike.customParams = {text:el.text}
            bike.inputEnabled = true;
            bike.input.pixelPerfectClick = true;
            bike.events.onInputDown.add(this.animateBike,this);

        },this);

        this.currentBike = this.bikes.next();
        this.currentBike.position.set(100,200)
        // this.currentBike.anchor.setTo(0.3);

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
    },
    switchBike: function(sprite,event){
        var newBike,endX;

        if (this.isMoving) {
            return false;
        }

        this.isMoving = true;

        if(sprite.customParams.direction > 0){
            newBike = this.bikes.next();
            newBike.x = -newBike.width/2;
            endX =  800 + this.currentBike.width/2;
        }else {
            newBike = this.bikes.next();
            newBike.x = 800 + newBike.width/2;
            endX = - this.currentBike.width;
        }

        var newBikeMovement = this.game.add.tween(newBike);
        newBikeMovement.to({x: 100},1000);
        newBikeMovement.onComplete.add(function(){ this.isMoving = false },this)
        newBikeMovement.start() ;

        var currentBikeMovement = this.game.add.tween(this.currentBike);
        currentBikeMovement.to({x: endX},1000);
        currentBikeMovement.start() ;

        this.currentBike = newBike;
    },
    animateBike: function(sprite,event){
        console.log('move bike');
    }

};

game.state.add('GameState', GameState);
game.state.start('GameState');