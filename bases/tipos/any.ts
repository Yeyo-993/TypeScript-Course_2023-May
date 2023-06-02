(() => {

    let avenger: any;
    let exists;
    let power;

    avenger = 'Dr. Strnge';
    console.log((avenger as string).charAt(0));

    avenger= 150.654654;
    console.log( (<number>avenger).toFixed(2));

    console.log(exists);
    console.log(power);

})()