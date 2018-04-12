import { ThreeVO } from "./A03.three.vo.service";

export interface iJumsu {
    getTotal(vo: ThreeVO): number;
    getAvg(vo: ThreeVO): number;
    display(vo: ThreeVO): string;
}