#pragma strict

public var speed:float;
public var reverse:boolean;

function Awake () {
  transform.Rotate(Vector3(0,0, Random.Range(0,360)));
}

function Update () {
  if(reverse == true)
  {
    rigidbody2D.velocity = Vector2.right * -speed;
  }else{
    rigidbody2D.velocity = Vector2.right * speed;
  }
}

function OnTriggerEnter2D(other : Collider2D){
  if(other.gameObject.tag == "Box")
  {
    Destroy(gameObject);
    other.gameObject.rigidbody2D.AddForce(Vector2.right * 800, ForceMode2D.Impulse);
  }
}