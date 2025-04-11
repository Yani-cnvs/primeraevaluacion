export abstract class Figura {
    Perimetro:number

    constructor(Perimetro:number) {
        this.Perimetro = Perimetro;
    }

    abstract calcularPerimetroTriangulo(): number;
}

export class Circulo extends Figura {
    constructor(Perimetro:number) {
        super(Perimetro);
    }
    override calcularPerimetroTriangulo(): number {
        return this.Perimetro * 2 * Math.PI;
    }

}

export class Triangulo extends Figura {
    ladoA: number;
    ladoB: number;
    ladoC: number;
    
    constructor(ladoA: number, ladoB: number, ladoC: number) {
        super(ladoA + ladoB + ladoC);
        this.ladoA = ladoA;
        this.ladoB = ladoB;
        this.ladoC = ladoC;
    }

    override calcularPerimetroTriangulo(): number {
        return this.ladoA + this.ladoB + this.ladoC;
      }
    }