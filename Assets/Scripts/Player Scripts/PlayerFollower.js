#pragma strict

public static var inreverse:boolean = false;
public static var isdirect:boolean = false;
public static var cam_pos:float;

function Start () {

}

function Update () {
  cam_pos = transform.position.x;
  //Debug.Log(isdirect);
  if(PlayerController.reversedir == false && isdirect == false)
  {
    transform.position.x = PlayerController.x_pos +6;
   	inreverse = false;
  }
  
  if(inreverse == true && PlayerController.reversedir == true)
  {
    transform.position.x = PlayerController.x_pos -6;
  }
  
  if(ElevatorMovement.y_speed > 0)
  {
    transform.position.y = ElevatorMovement.y_pos;
  }
}

function OnTriggerExit2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    transform.position.x = PlayerController.x_pos -6;
    inreverse = true;
    isdirect = true;
  }
}
