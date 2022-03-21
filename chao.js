class Chao{

constructor(x, y, w, h){
    var opcoes1 ={
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, opcoes1)
    this.w = w
    this.h = h
    World.add(world, this.body)

}

display(){
    var p = this.body.position
    push()

    fill("green")
    rect(p.x, p.y, this.w, this.h)
    pop()
}

}
