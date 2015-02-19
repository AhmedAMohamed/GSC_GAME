#pragma strict

public var speed:float;
public static var y_speed:float;
public static var y_pos:float;

function Start () {
    
}

function Update () {
  y_speed = rigidbody2D.velocity.y;
  y_pos = transform.position.y;
  if(PlayerController.elevatormove == true)
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

