#pragma strict

public var speed:float;
public var Player:Animator;
public static var reversedir:boolean;
public var speedjump:float;
public var isgrounded:boolean = true;
public static var x_pos:float;
public var Elevator:GameObject;
public var spawnpos:Transform;
public static var elevatormove:boolean = false;
public static var elevatordoor:boolean = false;

function Start () {

}

function Update () {
  x_pos = transform.position.x;
  //Debug.Log(isgrounded);
  //moving the player
  rigidbody2D.velocity = Vector2(Input.GetAxis("Horizontal"),0) * speed;
  
  //moving the player in normal direction
  if(Input.GetKey(KeyCode.RightArrow))
  {
    transform.localScale.x = 0.6132143;
    reversedir = false;
  }
  
  //moving the player in reverse direction
  if(Input.GetKey(KeyCode.LeftArrow))
  {
    transform.localScale.x = -0.6132143;
    reversedir = true;
  }
  
  //triggering movement animation
  Player.SetFloat("Speed", Mathf.Abs(rigidbody2D.velocity.x));
  
  //making player jump
  if(Input.GetKey(KeyCode.Space) && isgrounded == true)
  {
    //rigidbody2D.velocity = Vector2(rigidbody2D.velocity.x, 1 * speedjump);
    //transform.Translate(Vector2(0, 1 * speedjump * Time.deltaTime));
    Jump();
    isgrounded = false;
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
  transform.position = Vector2.Lerp(this.transform.position, Vector2(this.transform.position.x, this.transform.position.y + 2), Time.time);
}
