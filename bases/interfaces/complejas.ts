(() => {


    interface Client {
        name: string;
        age?: number;
        address: Adrress;
        getFullAddress( id:string ):string;
    }

    interface Adrress {
        id: number;
        zip: string;
        city: string;
    }

    const client:Client = {
        name: 'Fernando',
        age: 25,
        address: {
            id: 125,
            zip:'afkjas',
            city: 'Otawa'
        },
        getFullAddress( id:string ) {
            return this.address.city;
        }
    }

    const client2:Client = {
        name: 'Melissa',
        age: 30,
        address: {
            id: 120,
            city: 'Toronto',
            zip: 'K2S SUN'
        },
        getFullAddress( id:string ) {
            return this.address.city;
        }
    }

})()