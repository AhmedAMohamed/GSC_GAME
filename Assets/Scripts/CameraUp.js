#pragma strict

public static var upplatform:boolean = false;
public static var upstop:boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    upplatform = true;
    if(SmallPlatformUp.y_pos >= 27.14)
    {
      upstop = true;
      upplatform = false;
      PlayerFollower.cam_y = 27.14 + 5;
    }
  }
}