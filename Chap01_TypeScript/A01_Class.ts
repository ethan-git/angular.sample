class Jumsu {
    private name: string;
    private kor: number;
    private eng: number;

    constructor(name: string, kor: number, eng: number) {
        this.name = name;
        this.kor = kor;
        this.eng = eng;
    }

    public getTotal(): number{
        return this.kor + this.eng;
    }

    public getAvg(su: number) : number {
        return this.getTotal() / su;
    }

    public display(): void {
        console.log(`${this.name}의 총점은 ${this.getTotal()} - ${this.getAvg(2)}`);
    }
}

let hong = new Jumsu('Hong', 100, 90);
hong.display();

let im = new Jumsu('IM', 80, 80);
im.display();

// - Compile
// tsc filename.ts

// - console.log의 결과 출력
// node filename.js

// - compile 시 Javascript 버전 지정
// tsc filename.ts --target version(es3,es5,es2015)
// tsc filename.ts --target es2015

// - js파일을 다른 폴더에 저장
// tsc filename.ts --target es2015 --outDir 폴더명
// tsc filename.ts --target es2015 --outDir ./build

// - 환경설정 파일 작성
// tsc --init
// - 위의 환경 설정 파일 후 컴파일
// tsc -p ./

// - 자동 빌드 작업 구성
// ctrl + shift + p 
// tasks : 기본 작업 빌드 구성 선택
// tsconfig watch 선택
// 이후 실행은 ctrl + shift +b
