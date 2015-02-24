#pragma strict

public var reverse:boolean;

function Start () {

}

function Update () {
  if(reverse == true)
  {
    transform.position.x = PlayerController.x_pos -6;
  }else{
    transform.position.x = PlayerController.x_pos +6;
  }
}