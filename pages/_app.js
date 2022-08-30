/* import "../styles/globals.css"; */

import "bootstrap/dist/css/bootstrap.min.css";

import "../styles/bootstrap.config.scss";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

/* En este archivo colocamos todos los estilos globales, y en general los componentes que mantendran en toda la aplicacion sin cambiar de vista.  

1. Agregando el Head para este archivo hara que todas las paginas tengan tanto ese title, meta informtation y el favicon por defecto.

2. Cualquier componente que venga de pages/ tomará la ruta de /login para pages/login.js, o /about para pages/about.js 
  2.1 Podemos crear rutas anidads con la estructura de carpetas: pages/contact/contact.js creará la ruta /contact/contact

  2.2 Para crear rutas dinamicas utilizamos la sintaxis posts/[id].js esto renderizará las paginas cuya rutas cumplan con la condicion, por ejemplo "/posts/12"

3. Next trae configurado para usar .css y .module.css. Pero ademas dentro de los componentes podemos utilzar la sintaxis: 
  <style jsx>
    Esto genera estilos con scope local
  </style>

4. Para crear la navegacion no debemos utilizar <a>, ya que esto hará que el usuario se descargue todos los recursos de la pagina nuevamente. Para evitar hay que utilizar el componente Link de Next. De esta forma estaremos desarrollando una SPA

5. Evitar utilizar botones para la navegacion, si queremos navegar de pagina a pagina utilizar Link, pero para un respuesta de acuerdo a una accion del usuario ahi si usar un boton, junto a la programacion con useRouter de Next

6. Vite no tiene pre renderizado, por ende no ayudara al SEO, en cambio create-next-app sin configuraciones si pre renderiza

7.Intentar no tocar mucho el _app.js, ya que este archivo es avanzado de next. Si necesitamos colocar navs, headers, o titulos por default es mejor componener el codigo.

8. Cuando hacemos fetching de datos del lado del cliente al cargar la pagina no estan los datos inmediatamente, es decir esto no aparece en el html inicial. Para ello podemos hacer el fetching desde el servidor, de esta forma es mas rapido y estará al inicio en el html. La funcion de next que permite hacer esto es getServerSideProps. 

*/
