// A08_interface.ts

interface iJumsu {
    // 접근제한자를 기술하지 않는다.
    getTotal(): number;
    getAvg(): number;
    display(): void;
}

// 인터페이스의 모든 메서드를 정의하지 않은 클래스는 추상클래스로 선언해야 한다.
// 자바와 다른점은 인터페이스의 모든 메서드는 일단 기술해야 함(기술하고 추상 메서드로 선언)
abstract class AJumsu implements iJumsu {
    public total: number = 0;
    public avg: number = 0;

    // 생성자에 접근제한자가 붙은 매개변수를 선언하면
    // 매개변수 역할과 멤버변수 역할을 동시에 수행한다
    // 즉 매개변수와 동일한 멤버변수를 자동으로 작성해 준다(멤버변수 선언)
    // public kor: number;      // 생성자에 의해 만들어 짐
    constructor(public name: string, public kor: number, public eng: number){
        // this.name = name;    // 이것까지 알아서 자동으로 해 줌
    }

    // 접근제한자가 생략되면 기본 접근제한자인 public이 생략된 형태
    getTotal(): number {
        this.total = this.kor + this.eng;
        return this.total;
    }
    getAvg(): number {
        this.avg = this.getTotal() / 2;
        return this.avg;
    }

    // 추상 메서드를 꼭 선언해야 함
    abstract display(): void;
}

class JumsuTwo extends AJumsu {

    constructor(name: string, kor: number, eng: number){
        super(name, kor, eng);
    }

    public display():void {
        console.log(`${this.name}님의 총점은 ${this.total}이고 평균은 ${this.avg}입니다.`);
    }
}

//추상클래스는 객체생성 안됨
// let hong = new AJumsu('홍길동', 100, 90);

let nulBu8 = new JumsuTwo('NulBu', 100, 90);
let hungBu8 = new JumsuTwo('HungBu', 90, 90);
let jimea = new JumsuTwo('jimea', 80, 90);

let jumsuAry: Array<JumsuTwo> = [nulBu8, hungBu8, jimea];

for (let i of jumsuAry) {
    i.getTotal();
    i.getAvg();
    i.display();
}