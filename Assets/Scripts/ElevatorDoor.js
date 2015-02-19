#pragma strict

private var IsLocked:boolean;
private var rot1:Quaternion;
private var rot2:Quaternion;
public var speed:float;

function Start () {
  rot1 = transform.rotation;
  rot2 = Quaternion.Euler(0,0,54.18961);
}

function Update () {
  if(PlayerController.elevatordoor == true)
  {
    transform.rotation = Quaternion.Slerp(rot1, rot2, Time.time * speed);
    PlayerController.elevatordoor = false;
    IsLocked = true;
  }
  
  if(transform.parent.position.y >= 21.48f)
  {
    transform.rotation = Quaternion.Slerp(rot2, rot1, Time.time * speed);
  }
}