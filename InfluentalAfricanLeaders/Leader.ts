
import { Groupning } from "./groupning";
export interface Leader {
    id : number;
    name : string;
    description : string;
    age: number;
    isActive: false;
    birthDate: Date;
    imageUrl: "https://example.com/images/nelson-mandela.jpg";
    rarity: string;
    abilities: string[];
    element: string;
    groupning: Groupning;
}