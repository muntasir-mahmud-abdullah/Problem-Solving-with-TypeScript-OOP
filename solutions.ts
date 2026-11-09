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

