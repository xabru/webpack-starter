import '../css/componentes.css';



export const saludar = ( nombre ) => {

    console.log( 'Creando etiqueta');

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }`;

    document.body.append( h1 );

}
