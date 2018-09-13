function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.altura = altura;
    this.largura = largura;
    
    this.desenha = function(xTela, yTela){
        ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xTela, yTela, this.largura, this.altura);
    }
}

var cobra_cabeca = new Sprite(0, 0, 32, 32),
cobra_corpo = new Sprite(0, 32, 32, 32),
fruta_map = new Sprite(0, 65, 26, 26),
obstaculo = new Sprite(0, 92, 45, 45);