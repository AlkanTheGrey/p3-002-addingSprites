const COLORS = {
  rich_black_fogra_29: 0x0d1b2a,
  oxford_blue: 0x1b263b,
  bdazzled_blue: 0x415a77,
  shadow_blue: 0x778da9,
  platinum: 0xe0e1dd,
  orange_pantone: 0xff9662
  
}
const GAME_CONFIG = {
  type: Phaser.AUTO,
  width: 128,
  height: 64,
  backgroundColor: COLORS.rich_black_fogra_29,
  parent:  document.getElementById( "game-container" ),
  scale: {
    mode: Phaser.Scale.ScaleModes.FIT,
    autoCenter: Phaser.Scale.Center.CENTER_BOTH,
  },
  pixelArt: true,
  scene: {
    preload: preload,
    create: create,
    update: update
  }
}

let game = new Phaser.Game( GAME_CONFIG );

/**Handles code that is executed before the scene's Ready
 * state. Includes actions such as fetching resources to
 * be used in the scene.
 */
function preload(){

  // load our image, loading an image takes 2 parameter,
  // 1) the texture key to be used to reference it
  // 2) the url to the image resource.
  this.load.image( "grass_1", "./tile_0001.png" );
  this.load.image( "grass_2", "./tile_0002.png" );
  this.load.image( "grass_3", "./tile_0003.png" );

  // loading spritesheets takes 4 parameters
  // 1) the texture key to be used to reference it
  // 2) the url to the image resource.
  // 3) frameConfig - contains the frameWidth, frameHeight, startFrame,
  //    endFrame, margin, spacing properties.
  // 4) xhrSettings - used in place of the loader's defaults
  this.load.spritesheet( "character_1", "./character_0001.png", { frameWidth: 24, frameHeight: 24} );

  return;
}

/**Handles code executed once all external resources have
 * been acquired, it is run once at the start of the scene
 * once the scene is in the ready state.
 */
function create(){

  // Now the sprite can be added to the scene with the parameters
  // ( x_pos, y_pos, texture )
  this.platform_01 = this.add.image( 9, GAME_CONFIG.height - 9, "grass_1" );
  this.platform_02 = this.add.image( 27, GAME_CONFIG.height - 9, "grass_2" );
  this.platform_03 = this.add.image( 45, GAME_CONFIG.height - 9, "grass_2" );
  this.platform_04 = this.add.image( 63, GAME_CONFIG.height - 9, "grass_2" );
  this.platform_05 = this.add.image( 81, GAME_CONFIG.height - 9, "grass_3" );

  // spritesheets can also be added
  this.character = this.add.sprite( 12, GAME_CONFIG.height - ( 18 ), "character_1", 0 );
  this.character.setOrigin( 0.5, 1 );

  // simple animation for character_1 texture
  this.anims.create({
    key: "walk",
    frames: this.anims.generateFrameNumbers(
      "character_1",
      {
        start: 0,
        end: 1
      }
    ),
    frameRate: 8,
    repeat: -1
  })

  // play animation on the character
  this.anims.play( "walk", this.character );

  return;
}

/**This is the code executed on the main game loop, it is executed
 * once per update.
 */
function update(){

  // Add to the ships rotation every update cycle
  // this.ship.setAngle( this.ship.angle + 1 );

  return;
}