#pragma strict

function Start () {

}

function Update () {
  //Debug.Log(PlayerFollower.cam_pos);
}

function OnTriggerExit2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    PlayerFollower.isdirect = false;
  }
}