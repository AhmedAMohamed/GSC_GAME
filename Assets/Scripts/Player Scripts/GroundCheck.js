#pragma strict

public static var grounded:boolean;

function Start () {

}

function Update () {

}

function OnTriggerEnter2D(other : Collider2D){
  if(other.gameObject.tag == "Platform")
  {
    grounded = true;
  }
}

function OnTriggerExit2D(other : Collider2D){
  if(other.gameObject.tag == "Platform")
  {
    grounded = false;
  }
}