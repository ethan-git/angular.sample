
export class HelloService {
    public greet: string = 'Hi~ ';

    constructor() {
        console.log('Hello Service 생성');
     }

    public getName(name: string): string {
        return this.greet + name;
    }
}