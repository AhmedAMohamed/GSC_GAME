#pragma strict

public var speed:float;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    if(transform.position.y == 0.56f)
    {
      rigidbody2D.velocity = Vector2.up * speed;
    }
    if(transform.position.y >= 21.48f)
    {
      rigidbody2D.velocity = Vector2.zero;
      rigidbody2D.Sleep();
    }
  }
}