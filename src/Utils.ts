export class Utils {
    static getRandomItem<T>(obj: T[]|{[key: string]: T}): T {
        const values = Object.values(obj);

        const min = 0;
        const max = values.length - 1;
        const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;

        return values[randomInt];
    }

    static createMatrix(m, n): null[][] {
        return new Array(n).fill(null).map(_ => new Array(m).fill(null));
    }
}
