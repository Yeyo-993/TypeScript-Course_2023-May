(() => {

    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }

    const avengers = {
        nick: 'Samuel L.Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Betany',
        activo: true,
        poder: 1500.5464
    }

    // const {poder, vision} = avengers
    // console.log(poder.toFixed(2), vision.toUpperCase())
    const printAvenger = ( { ironman, ...resto }:Avengers ) => {
        console.log(ironman, resto );
    }
    // printAvenger(avengers);

    const avengersArr: [string, boolean, boolean] = ['Cap. América', true, false];

    const [capitan, ironman, numero] = avengersArr;
    // console.log({ironman, capitan, numero});


})()