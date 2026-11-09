function multiplyValue(value: number, multiplier?:number):number {
    let result = 1;
    if(multiplier !== undefined) {
        result = value * multiplier;
    }
    if(multiplier === undefined) {
        result = value * 2;
    }
    return result;
}

function processInput(value: string | number | boolean) : string | number | null {
    let result = null;
    if(typeof value === "string"){
        result = value.trim().toLowerCase();
    }
    if(typeof value === "number") {
        result = value * 10;
    }
    if(typeof value === "boolean") {
        result = value ? "Acitve" : "Inactive";
    }
    return result;
}

function formatCoordinate(coordinate:readonly [number, number, string]): string {
    return `Location: ${coordinate[2]} (${coordinate[0]}, ${coordinate[1]})`;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    let array:T[] = []
    const combined = array.concat(...arrays)
    return combined;
}

