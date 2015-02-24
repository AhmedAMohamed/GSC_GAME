#pragma strict

public static var inreverse:boolean = false;
public static var isdirect:boolean = false;
public static var cam_pos:float;
public static var cam_y:float;
public var CamPos:Transform;
public var CamPosR:Transform;

function Start () {
  
}

function Update () {
  //smoothly moving the camera between two points
  if(PlayerController.reversedir == true && this.transform.position.x >= CamPosR.position.x)
  {
    //transform.position = Vector2.Lerp(CamPos.position, CamPosR.position,Time.time);
    transform.Translate(Vector2.right * -0.12);
  }else if(PlayerController.reversedir == false && this.transform.position.x <= CamPos.position.x)
  {
    //transform.position = Vector2.Lerp(CamPosR.position, CamPos.position,Time.time);
    transform.Translate(Vector2.right * 0.12);
  }
  
  //smoothening the player movement with the camera
  if(this.transform.position.x >= CamPos.position.x)
  {
    transform.position.x = PlayerController.x_pos +6;
  }
  
  if(this.transform.position.x <= CamPosR.position.x)
  {
    transform.position.x = PlayerController.x_pos -6;
  }
  
  /*cam_y = transform.position.y;
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
  }*/
  
  if(ElevatorMovement.y_speed > 0)
  {
    transform.position.y = ElevatorMovement.y_pos;
  }
  
  if(SmallPlatformUp.upplatform == true)
  {
    transform.position.y = SmallPlatformUp.y_pos - 1.76;
  }
  
  if(SmallPlatformUp.adjustcam == true && this.transform.position.y <= 31)
  {
    //transform.position = Vector2.Lerp(Vector2(this.transform.position.x, 25.38), Vector2(this.transform.position.x, 30), Mathf.PingPong(Time.time, 1));
    transform.Translate(Vector2(0, 0.1));
    Delay();
  }
  
  if(LargeTunnelCam.camdown == true  && this.transform.position.y >= 21.5)
  {
    transform.Translate(Vector2(0, -0.1));
  }
}

function Delay(){
  yield WaitForSeconds(5);
  SmallPlatformUp.adjustcam = false;
}

/*
function OnTriggerExit2D(other : Collider2D){
  if(other.gameObject.tag == "Player")
  {
    transform.position.x = PlayerController.x_pos -6;
    inreverse = true;
    isdirect = true;
  }
}*/
