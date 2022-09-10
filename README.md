# p3-002-addingSprites
> __Disclaimer:__ This is not an in-depth guide but serves to give a general pass-through of settings and code that can be used to achieve the following. The phaser 3 is a lot deeper than the examples given and going through the docs can possibly reveal new and interesting features you might find useful

Adding sprites ( & images ) in Phaser 3.55.2.

> Images are static visuals that will not change once added to the game. sprites refers to visuals such as an animation that is meant to change from frame to frame within  the game.

Adding visuals is done in the preload function of a scene. This is where all external resources are added to the game.

To add a resource a call to the __loader plugin__ of the scene is made, in this case the call is to the *image()* and *spritesheet()* methods.

## Adding images
To add an image resource, the following method is used:

> this.load.image( *key*, *url* );
- key: Unique string identifier for this resource
- url: String containing url to the resource

If successfully loaded the following methods can be used to add an image to the scene, usually done in the create function of a scene or at runtime.
> this.add.image( x, y, texture, frame )
- x: x position on the game canvas
- y: y position on the game canvas
- texture: the texture key belonging to the resource
- frame: frame number if resource is a spritesheet, a frame from a spritesheet as the base for an image.

To add a physics enabled image use:
> this.physics.add.image( x, y, texture, frame )

## Adding Sprites
To add sprite resources we use
> this.add.sprite( x, y, texture, frame )
- x: x position on the game canvas
- y: y position on the game canvas
- texture: the texture key belonging to the resource
- frame: frame number if resource is a spritesheet, a frame from a spritesheet as the base for an image.

To add a physics enabled sprite use:
> this.physics.add.sprite( x, y, texture, frame )

## Simple animations
Animations in a scene are handled by the animation manager found in the __this.anims__ property of the scene. To create an animation we use the *create()* method of the animation manager.
> this.anims.create( *config* )

The config is of type *Phaser.Types.Animations.Animation*, it contains the properties:
- key: *the texture key referencing the spritesheet resource.*
- frames: *all frames from a texture with the matching key, or an array of Animation Frame configuration objects.*
- frameRate: *The framerate of the animation.*
- repeat: *How many times to repeat once it is started. -1 is the value for infinity.*

Once you create an animation, you can request the animation manager to playback the animation on a given game object using the *play()* method

> this.anims.play( *key*, *gameObject(s)* )
- key: *the key to the animation you created | the whole Phaser.Animations.Animations object (less pretty and harder to read).*
- gameObject: *A single gameObject or an array of gameObjects. ( The game must have an animation component, e.g sprites [ not image ] ).*
