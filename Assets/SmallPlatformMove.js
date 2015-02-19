#pragma strict

private var pos1:Vector2;
private var pos2:Vector2;
private var speed:float;
public var IsFirst:boolean;
public var IsSecond:boolean;
public var IsThird:boolean;

function Start () {
  pos1 = transform.position;
  pos2 = Vector2(transform.position.x - 4, transform.position.y);
}

function Update () {
  if(IsFirst == true)
  {
    speed = 0.5;
  }
  if(IsSecond == true)
  {
    speed = 1;
  }
  
  if(IsThird == true)
  {
    speed = 0.75;
  }
  PingPong();
}

function PingPong(){
  transform.position = Vector2.Lerp(pos1, pos2, Mathf.PingPong(Time.time * speed, 1));
}