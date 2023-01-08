(() => {

    // función para obtener información de una película por Id
    function getMovieById( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieActorsById( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( actorId: string ) {
        console.log({ actorId });
    }
    
    interface Movie
    {
        cast : string[];   
        description : string;
        rating : number;
        title : string; 
    }

    // Crear una película
    function createMovie({cast,description,rating,title}:Movie ) {
        console.log({ title, description, rating, cast });
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        console.log({ birthdate });
        // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;

        console.log('Crear actor');
        return true;        

    }

    
    //Continuar
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) : number=> {
        /*let result;
        if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }
        
        return result;*/
        if (isDead) return  1500;
        if (isSeparated) return 2500;
        return (isRetired) ? 3000 : 4000;
    }

})();




