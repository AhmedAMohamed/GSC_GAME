#pragma strict

private var rot1:Quaternion;
private var rot2:Quaternion;
public var speed:float;

function Start () {
  rot1 = transform.rotation;
  rot2 = Quaternion.Euler(0,0,-90);
}

function Update () {
  if(transform.parent.position.y >= 21.48f)
  {
    transform.rotation = Quaternion.Slerp(rot1, rot2, Time.time * speed);
  }
}