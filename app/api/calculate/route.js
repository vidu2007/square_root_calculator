import { NextResponse } from "next/server";

export async function POST(request) {
    const data = await request.json();
    const number = data.input_number;
    const sqRoot = SquareRoot(number);
    return NextResponse.json(sqRoot);
};

const SquareRoot = (data) => {
    const number = Number(data);
    // let msg;
    // let des;

    if(isNaN(number) || number =='' || number <= 0) {
        // msg = 'Please enter a number greater than 0';
        // des = '';

        return ({
            message: 'Please enter a number greater than 0',
            description: ''
        });

    };
    
    const newNumber = number * 100000000000000000000000000;
    const numRoot = Math.sqrt(newNumber);
    const closestPerfectRoot = (Math.trunc(numRoot));

    const sqRoot = closestPerfectRoot + ((newNumber - Math.pow(closestPerfectRoot, 2)) / (2 * closestPerfectRoot));
    const smooth_sqRoot = sqRoot / 10000000000000;

    const sqRoot_error = Math.abs(Math.pow(smooth_sqRoot, 2) - number);

    // if(number == 0) {
    //     smooth_sqRoot = 0;
    //     sqRoot_error = 0;
    // }
    const res = {
        message: `√${number} = ${smooth_sqRoot}`,
        description: `Error (difference) = ${sqRoot_error}`
    }
    
    return res;
};