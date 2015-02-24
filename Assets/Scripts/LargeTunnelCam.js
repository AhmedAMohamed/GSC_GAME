#pragma strict

public static var camdown:boolean = false;

function Start () {

}

function Update () {

}

function OnTriggerStay2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    camdown = true;
  }
}

function OnTriggerExit2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    camdown = false;
  }
}