#pragma strict

public var speed:float;

function Start () {

}

function Update (){
  transform.Rotate(Vector2(0, 1) * speed, Space.Self);
}

function OnTriggerEnter2D(other: Collider2D){
  if (other.gameObject.name=="Player")
  {
    gameObject.SetActive(false);
  }
}