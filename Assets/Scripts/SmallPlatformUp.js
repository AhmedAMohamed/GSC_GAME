#pragma strict

private var pos1:Vector2;
private var pos2:Vector2;
public static var y_pos:float;
public static var upplatform:boolean = false;
public var speed:float;
public static var adjustcam:boolean = false;

function Start () {
  pos1 = transform.position;
  pos2 = Vector2(this.transform.position.x, 27.14);
}

function Update () {
  y_pos = transform.position.y;
  /*if(this.transform.position.y < 27.14)
  {
    transform.position = Vector2.Lerp(pos1, pos2, Mathf.PingPong(Time.time * 0.5, 1));
  }*/
  
  if(this.transform.position.y >= 27.14)
    {
      upplatform = false;
      //transform.position = pos2;
      rigidbody2D.velocity = Vector2.zero;
    }
}

function OnCollisionStay2D(other : Collision2D){
  if(other.gameObject.tag == "Player")
  {
    if(this.transform.position.y < 27.14)
    {
      rigidbody2D.velocity = Vector2.up * speed;
    }
    upplatform = true;
    adjustcam = true;
    }
}


