#pragma strict

public var speed:float;
private var pos1:Vector2;
private var y_pos:float;

function Start () {
  pos1 = transform.position;
  y_pos = transform.position.y + 2;
}

function Update (){
  transform.position = Vector2.Lerp(pos1, Vector2(pos1.x, y_pos), Mathf.PingPong(Time.time*speed, 1f));
}