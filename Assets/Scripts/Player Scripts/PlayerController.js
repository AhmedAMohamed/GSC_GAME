#pragma strict

public var speed:float;
public var Player:Animator;
public static var reversedir:boolean;
public var speedjump:float;
public static var isgrounded:boolean = true;
public static var x_pos:float;
public var Elevator:GameObject;
public var spawnpos:Transform;
public static var elevatormove:boolean = false;
public static var elevatordoor:boolean = false;
public var firerate:float;
private var nextfire:float;
private var Bullet:GameObject[];
public var Red:GameObject;
public var Yellow:GameObject;
public var Blue:GameObject;
public var Green:GameObject;
private var BulletR:GameObject[];
public var RedR:GameObject;
public var YellowR:GameObject;
public var BlueR:GameObject;
public var GreenR:GameObject;
public var firepos:Transform;
public var FireEffect:GameObject;
private var i:float;

function Start () {
  Bullet = new GameObject[4];
  Bullet[0] = Red;
  Bullet[1] = Yellow;
  Bullet[2] = Blue;
  Bullet[3] = Green;
  
  BulletR = new GameObject[4];
  BulletR[0] = RedR;
  BulletR[1] = YellowR;
  BulletR[2] = BlueR;
  BulletR[3] = GreenR;
}

function Update () {
  i = Random.Range(0,4);
  x_pos = transform.position.x;
  //Debug.Log(isgrounded);
  //moving the player
  rigidbody2D.velocity = Vector2(Input.GetAxis("Horizontal"),0) * speed;
  
  //moving the player in normal direction
  if(Input.GetKey(KeyCode.RightArrow))
  {
    transform.localScale.x = 0.1587133;
    reversedir = false;
  }
  
  //moving the player in reverse direction
  if(Input.GetKey(KeyCode.LeftArrow))
  {
    transform.localScale.x = -0.1587133;
    reversedir = true;
  }
  
  //triggering movement animation
  Player.SetFloat("Speed", Mathf.Abs(rigidbody2D.velocity.x));
  
  //making player jump
  if(Input.GetKey(KeyCode.Space) && isgrounded == true)
  {
    Jump();
  }
  
  if(Input.GetKey(KeyCode.LeftShift) && Time.time > nextfire)
  {
    Fire();
  }
  
  if(Input.GetKeyUp(KeyCode.LeftShift))
  {
    Player.SetBool("Fire", false);
  }
}

//checking the ground to avoid repetitive jumps
function OnTriggerStay2D(other : Collider2D){
  if(other.gameObject.tag == "Ground")
  {
    isgrounded = true;
  }
}

function OnCollisionEnter2D(other : Collision2D){
  if(other.gameObject.tag == "Elevator")
  {
    isgrounded = true;
  }
}

//Elevator Power Up
function OnTriggerEnter2D(other : Collider2D){
  if(other.gameObject.tag == "ElevatorPower")
  {
    Destroy(other.gameObject);
    Instantiate(Elevator, spawnpos.position, Quaternion.identity);
  }
  
  if(other.gameObject.tag == "ElevatorCheck")
  {
    elevatormove = true;
    elevatordoor = true;
    Destroy(other.gameObject.collider2D);
  }
  
  if(other.gameObject.tag == "MovingPlatform")
  {
    transform.position.x = SmallPlatformMove.x_comp;
  }
}

function Jump(){
  //transform.position = Vector2.Lerp(this.transform.position, Vector2(this.transform.position.x, this.transform.position.y + 2), Time.time);
  //rigidbody2D.velocity = Vector2(rigidbody2D.velocity.x, 1 * speedjump);
  transform.Translate(Vector2(0, 1 * speedjump * Time.deltaTime));
  yield WaitForSeconds(0.2);
  isgrounded = false;
}

function Fire(){
  nextfire = Time.time + firerate;
  if(reversedir == false)
  {
    Instantiate(Bullet[i], firepos.position, Quaternion.identity);
  }else{
    Instantiate(BulletR[i], firepos.position, Quaternion.identity);
  }
  //Instantiate(FireEffect, firepos.position, Quaternion.identity);
  Player.SetBool("Fire", true);
}
