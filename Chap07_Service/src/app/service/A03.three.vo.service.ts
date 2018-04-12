// A02.two.vo.service.ts

export class ThreeVO {
    public name: string;
    public kor: number;
    public eng: number;
    public math: number;
    public total: number;
    private _avg: number;

    constructor(name: string, kor: number, eng: number, math: number) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
        this.math = math;
    }

    public get avg(): number {
        return this._avg;
    }

    public set avg(avg: number) {
        this._avg = avg;
    }

    public toString(): string {
        return `[ThreeVO] name=${this.name}, kor=${this.kor}, eng=${this.eng}, math=${this.math}, total=${this.total}, avg=${this._avg}`;
    }
}