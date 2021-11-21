import React from 'react';
import './App.css';

function App() {
    // types
    // Boolean
    const isLoading: boolean = false;

    //Number
    const decimal: number = 9;
    const binary: number = 0b110;

    //String
    const line: string = "my first name isLoading";

    //Array
    let firstFiveDigits: number[] = [0, 1, 2, 3, 4]
    let lastFiveDigits: Array<number> = [5, 6, 7, 8, 9]

    // Tuple
    let tuple: [string, number[]] = [line, firstFiveDigits]

    //Any
    let variable: any = 5;
    variable = false;

    //Void
    function f(name: string): void {
        console.log(name)
    }

    //Never
    function error(name: string): never {
        throw new Error(name);
    }

    // Null and Undefined
    type someProp = string | null | undefined;

    // type alias
    type Login = string;
    let l: Login = "4";

    // Union type
    type Password = string | number;
    let pass: Password = 5;

    //Intersection Type
    interface Person {
        name: string;
        age: number;
    }

    interface Worker {
        companyId: string;
    }

    type Employee = Person | Worker;

    const bestOfMonth: Employee = {
        name: "Name",
        age: 33,
        companyId: "Company"
    }


    return (
        <div className="App">
            <p>Typescript</p>
        </div>
    );
}

// Interfaces
interface ICircle {
    readonly id: string;
    center: {
        x: number;
        y: number;
    };
    radius: number;
    color?: string
}

const circle1: ICircle = {
    id: "1",
    center: {x: 0, y: 5},
    radius: 3
}

// Extending interfaces
interface ICircleWithArea extends ICircle {
    getArea: () => number;
}

const circle2: ICircleWithArea = {
    id: "2",
    center: {x: 0, y: 5},
    radius: 3,
    getArea: function () {
        return (this.radius * 2) * Math.PI;
    }
}

// Implemeting an Interface
interface IClock {
    currentTime: Date;

    setTime(d: Date): void;
}

class Clock implements IClock {
    currentTime: Date = new Date();

    constructor(h: number, m: number) {
    }

    setTime(d: Date): void {
        this.currentTime = d;
    }
}

// Enums

enum CardSuite {
    Clubs,
    Diamonds,
    Hearts,
    Spades
}

let card = CardSuite.Clubs;
const clubNumber: number = CardSuite.Hearts;
const clubString: string = CardSuite[0];

// Functions

function add(ex: number, wy: number): number;
function add(x: number, y: number, z: number): number {
    return x + y + z;
}

// Classes

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet(name: string) {
        return `hi ${name}`
    }
}

// type assertion
interface Person {
    name: string;
}

let p = {} as Person;

// generic types
function reverse<T>(items: T[]): T[] {
    return items.reverse()
}

//keyof
type PersonKeys = keyof Person; //'name' | 'age'


//Exclude

type User = {
    _id: number;
    name: string;
    email: string;
    created: number;
};

type UserNoMeta = Exclude<keyof User, '_id' | 'created'>

// Pick
type UserNoMeta2 = Pick<User, 'name' | 'email'>


export default App;

