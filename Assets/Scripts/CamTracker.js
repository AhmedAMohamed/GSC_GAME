#pragma strict

public var CamPos:Transform;
public var CamPosR:Transform;

function Start () {
  transform.position = CamPos.position;
}

function Update () {
  if(PlayerController.reversedir == true && this.transform.position.x > CamPosR.position.x)
  {
    //transform.position = Vector2.Lerp(CamPos.position, CamPosR.position,Time.time);
    transform.Translate(Vector2.right * -0.1);
  }else if(PlayerController.reversedir == false && this.transform.position.x < CamPos.position.x)
  {
    //transform.position = Vector2.Lerp(CamPosR.position, CamPos.position,Time.time);
    transform.Translate(Vector2.right * 0.1);
  }
}