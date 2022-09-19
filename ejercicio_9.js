// VARIABLES
// Una variable es un contenedor de de informacion

var pais = "España";
var continente = "Europa";
var antiguedad = "2022";
var pais_y_continente = pais + " " + continente;

pais = "Argentina";
continente = "Qatar";

console.log(pais, continente, antiguedad); // podemos ver el mensaje en consola
                                            // vemos "Mexico", "Latinoamerica" y "2021"
                                            //las variables pais y continente se cambiaron a lo ultimo
                                            // por eso  vemos Mexico y Latinoameria
                                            // en ves de España y Europa


alert(pais_y_continente); // Muestra el mensaje al usuario de la pagina
                          //la variable pais_y_continente esta conformada por otras dos variables
                          // pais y contiente ("España" y "Europa")
                          //al momento de la declaracion de pais_y_continente
                          //tomo los datos "España" "Europa"
                          // la modificacion de las variables pais y continente se declararon despues