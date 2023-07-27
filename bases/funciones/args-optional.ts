(() => {

    const fullName = ( firstName:string, lastName?:string ):string => {

        if( !firstName ){
            throw new Error('Nombre requerido');
        }
        return `${ firstName } ${ lastName || 'No last name' }`;

    }

    let noName: any;

    const name = fullName('Tony');

    console.log({ name });

})()