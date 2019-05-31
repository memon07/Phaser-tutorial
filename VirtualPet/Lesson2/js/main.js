var GameState = {
    init: function(){
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
    },
    preload: function(){
        this.load.image('candy', '/VIRTUALPET/Lesson1/assets/images/candy.png');
        this.load.image('apple', '/VIRTUALPET/Lesson1/assets/images/apple.png');
        this.load.image('bunny', '/VIRTUALPET/Lesson1/assets/images/bunny.png');
        this.load.image('rotate', '/VIRTUALPET/Lesson1/assets/images/rotate.png');
        this.load.image('background', '/VIRTUALPET/Lesson1/assets/images/bg.png');
        this.load.spritesheet('boy', '/VIRTUALPET/Lesson1/assets/images/boyTileset.png', 350,400,4,1,1);
    },
    create: function(){
        this.background = this.game.add.sprite(0,0,'background');
        this.background.inputEnabled = true;
        this.background.events.onInputDown.add(this.placeItem, this);

        this.boy = this.game.add.sprite(100,400,'boy');
        this.boy.anchor.setTo(0.5);

        this.boy.inputEnabled = true;
        this.boy.input.enableDrag();
        
        this.boy.customParams = { health: 100 , fun : 100 };

        this.apple = this.game.add.sprite(22,500,'apple');
        this.apple.inputEnabled = true;
        this.apple.customParams = { health : 20 }
        this.apple.events.onInputDown.add(this.pickItem, this);
        
        this.candy = this.game.add.sprite(78,500,'candy');
        this.candy.inputEnabled = true;
        this.candy.events.onInputDown.add(this.pickItem, this);

        this.bunny = this.game.add.sprite(144,500,'bunny');
        this.bunny.inputEnabled = true;
        this.bunny.events.onInputDown.add(this.pickItem, this);

        this.rotate = this.game.add.sprite(216,500,'rotate');
        this.rotate.inputEnabled = true;
        this.rotate.events.onInputDown.add(this.rotatePet, this);
        
        this.buttons = [this.apple, this.candy, this.bunny, this.rotate]

        this.selectedItem = null;
        this.uiBlocked = false;
    },
    pickItem: function(sprite,event){
        if(!this.uiBlocked) {
            console.log('pick')

            this.clearSelection()
            sprite.alpha = 0.4;
            this.selectedItem = sprite;
        }
    },
    rotatePet: function(sprite,event){
        if(!this.uiBlocked) {
            console.log('rot')
            this.clearSelection()

            sprite.alpha = 0.4
            this.uiBlocked = true;

            var petRotation = this.game.add.tween(this.boy)
            petRotation.to({angle: '+720'},1000)
            petRotation.start()

            petRotation.onComplete.add(()=> {
                this.uiBlocked = false;
                sprite.alpha = 1;
                this.boy.customParams.fun += 10;
                console.log(this.boy.customParams.fun)
            })
        }
    },
    clearSelection: function() {
        this.buttons.forEach(e => {
            e.alpha = 1;
        });
        this.selectedItem = null;
    },
    placeItem: (sprite,event) => {
        var x = event.position.x;
        var y = event.position.y;
        console.log('h')

        var newItem = this.game.add.sprite(x,y,this.selectedItem.key)
        console.log(newItem,x,y,sprite,this.selectedItem)
        newItem.anchor.setTo(0.5)
        newItem.customParams = this.selectedItem.customParams;
    }
}

var game = new Phaser.Game(360, 640, Phaser.AUTO);
game.state.add('GameState', GameState);
game.state.start('GameState');