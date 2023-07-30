(() => {

    class Apocalipsis {

        static intance:Apocalipsis;

        private constructor( public name:string ){
            
        }

        static callApocalipsis():Apocalipsis{
            if( !Apocalipsis.intance ){
                Apocalipsis.intance = new Apocalipsis('Soy apocalipsis el único');
            }

            return Apocalipsis.intance;
        }

        changeName( newName:string ):void {
            this.name = newName;
        }

    }

    const apocalipsis1 = Apocalipsis.callApocalipsis()
    const apocalipsis2 = Apocalipsis.callApocalipsis()
    const apocalipsis3 = Apocalipsis.callApocalipsis()

    apocalipsis1.changeName('Sergio');

    // const apocalipsis = new Apocalipsis('Soy apocalisi... el unico');
    // const apocalipsis2 = new Apocalipsis('Soy apocalisi... el unico');
    // const apocalipsis3 = new Apocalipsis('Soy apocalisi... el unico');


    console.log(apocalipsis1, apocalipsis2, apocalipsis3);

})()