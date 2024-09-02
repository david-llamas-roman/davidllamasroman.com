<!--
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License.
 *
 * davidllamasroman.com is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with davidllamasroman.com. If not, see <https://www.gnu.org/licenses/gpl-3.0.en.html>.
 *
 * Copyright (C) 2024 David Llamas Román
-->

# Aprende HTML desde 0

## Introducción
**HTML** son las siglas de **Hypertext Markup Language**, en español, lenguaje de marcado de hipertexto. Es ampliamente utilizado, ya que, directamente, sin esta tecnología no se concibe la web. **HTML** surgió prácticamente con la web (1993), de hecho, la **Web 1.0** (1995) no era nada más que código **HTML** (en algunos casos también nos podíamos encontrar la utilización de **Flash**, tecnología de **Adobe** que permitía crear webs dinámicas, o **JavaScript**), actualmente tenemos la **Web3** como la más novedosa (con 3D, basada en blockchain, quizás con una criptomoneda propia...) y en internet puedes encontrar artículos donde hacen mención a un nuevo 'tipo' o 'generación' de la web, la **4.0**.
### ¿Para qué sirve?
**HTML** sirve para definir la estructura de una web, con esta tecnología no vas a definir los estilos de la web, no la vas a poner 'bonita'. Si que es cierto que hay algunos atributos (ya definiremos este término más adelante) que permiten cambiar ciertas cosas como que en una lista, en vez de tener puntos a la izquierda, tengamos cuadrados. Para hacer que la web sea 'bonita' como hemos dicho antes, hay que utilizar **CSS**, una tecnología que está pensada para ello.
### ¿HTML es un lenguaje de programación?
Si concebimos un lenguaje de programación como aquel conjunto de palabras clave, instrucciones y reglas que podemos combinar acompañado de la utilización lógica para lograr distintos fines, **HTML** no es un lenguaje de programación. La clave aquí está en la palabra, lógica, ya que tú en **HTML** tienes una serie de reglas que hay que seguir para que todo funciones y palabras clave, pero tu no tienes la posibilidad de utilizar la lógica. No puedes mostrar una cosa u otra o generar una serie de elementos según se cumpla una característica o no. Tampoco tenemos variables, operadores... Para hacer lo que acabamos de nombrar, hay que utilizar un lenguaje de programación como **JavaScript**. Actualmente también se puede hacer navegaciones internas simples, al puro estilo de una SPA (Single Page Application), 'only css', pero es cierto que nos encontramos con alguna que otra dificultad.

## Primeros Pasos
### Crea tu primer archivo HTML
**HTML** al igual que todo se puede escribir en un archivo cualquiera como un **.txt**, pero no va a servir para nada. A la hora de utilizar un editor de código, este no va a reconocer lo que escribamos y, además, de cara a abrirlo con un navegador no vamos a poder tampoco. Hay 2 extensiones de archivos reconocidas para **HTML**, la principal es **.html** y la otra es **.htm**. Esta última prácticamente no se utiliza, de hecho, no se hasta que punto te va a reconocer cualquier sistema ese tipo de archivo como uno que contiene dicho lenguaje.

Ojo! No solo tenemos que tener en cuenta la extensión del archivo, también el nombre. El archivo principal de una web siempre tiene que ser **index.hml**, ya que este es el que va a buscar por todos lados el navegador y empaquetadores como **Vite**, **Webpack**, **esbuild** y ya no menciono más que con todos los que hay a día de hoy no acabamos. Normalmente, por no decir que no he visto una situación diferente, el **index.html** es el archivo donde tenemos el **HTML** de la página principal o home page. En el caso de ser una SPA tendremos ese archivo seguramente como el único archivo **HTML** y con otros lenguajes generaremos la lógica y los elementos que se muestran, se crean o se borran según esta.
### Define la estructura de un archivo HTML
Ya sabemos cómo se crea un archivo **HTML**, pero ahora no se puede empezar a definir párrafos y otros elementos sin antes definir la estructura del archivo. Eso de que no se puede es relativo, ya que **HTML** no suele dar muchos problemas y suele 'perdonar' muchos errores. De todas formas, nosotros vamos a hacer todo de la manera más correcta posible, que luego aprendes algo regular o mal y si funciona y te acostumbras... mal, valga la redundancia.

La estructura va a ser siempre la misma y tenemos unos atajos en la mayoría de editores la mar de bonitos, yo te nombro los 2 principales de **Visual Studio Code**:
```
!
```
```
html:5
```
Escribiendo cualquiera de estas 2 cosas, se te va a generar lo siguiente:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```
Vamos a ir definiendo todo parte por parte:
- El **DOCTYPE** es el elemento que le dice al navegador que estamos utilizando **HTML** y su versión, en este caso, es la 5.
- El elemento **html** es el que agrupa la parte que vamos a ver y la parte que también contiene datos, pero que no se ve en la web.
  - Su atributo **lang** sirve para decir el lenguaje en el que está la página web.
- El elemento **head** es el que contiene datos importantes de la web, pero que directamente no se van a reflejar de una manera visual en esta.
  - Los elementos **meta** son los que contienen metadatos (datos que dan más información sobre otros datos, en este caso se va a dar una serie de información sobre la página web).
    - El elemento que tiene el atributo **charset** es el que dice la codificación de caracteres, en este caso y lo más común es tener **UTF-8**, ya que acepta símbolos como las tildes o, en el caso de nuestro alfabeto, letras como la 'ñ'.
    - EL elemento que tiene los atributos **name** y **content** siendo el valor del primero 'viewport' sirve para la visualización de la página en dispositivos móviles, sin ningún tipo de zoom y cambiando el ancho de la ventana gráfica que es en sí lo que es el término 'viewport' según el ancho del dispositivo.
  - El elemento **title** es el que permite tener un título en la ventana del navegador, como por ejemplo **David Llamas Román**.
  - Aunque en este ejemplo, que es default, no tenemos más elementos dentro del head, podemos tener más que hagan otras cosas.
- El elemento **body** es el que contiene directamente los elementos que van a constituir la página web en sí, la parte visual, un párrafo, un enlace, un título...
### ¿Qué es una etiqueta?
Ya hemos visto la estructura de un archivo y antes de ver todo lo que podemos poner en el body, tenemos que saber bien qué es una etiqueta. Una etiqueta de **HTML** es una palabra clave que ponemos entre estos 2 símbolos **< >** y que tiene como funcionalidad definir un elemento **HTML**.
```html
<etiqueta>
```
Hay 2 tipos de etiquetas, la que conocemos como etiqueta de apertura y que da paso a la creación o constitución de un elemento y la etiqueta de cierre que es la que cierra el elemento, esta última se posiciona después del contenido que queramos poner.
```html
<etiqueta-de-apertura>
```
```html
</etiqueta-de-cierre>
```
### ¿Qué es un elemento HTML?
Los elementos son la suma de 2 etiquetas, la de apertura y la de cierre, con el contenido que esté entre ellas.
```html
<etiqueta-de-apertura>Contenido</etiqueta-de-cierre>
```
Una peculiaridad que tenemos que tener en cuenta, por supuesto, es el nombre de las etiquetas. Tanto la etiqueta de apertura como la de cierre tienen que tener el mismo nombre y, dependiendo del nombre que le pongamos, va a formarse un elemento u otro y se verán unas cosas reflejadas u otras.

Hay una peculiaridad en algunos casos y es que hay elementos que sólo tienen una etiqueta y te lo puedes encontrar de dos formas, la antigua:
```html
<etiqueta/>
```
Y la moderna, que elimina el **/**:
```html
<etiqueta>
```
Un ejemplo claro de esto es el elemento de imagen **img** (lo veremos más adelante).

### Tipos de elementos HTML
Hay diría yo 2 tipos de elementos **HTML** estás los semánticos y los no semánticos.

Los elementos semánticos son los que aportan, bajo los ojos del navegador, más información que el contenido y el estilo en sí. Los elementos no semánticos no son así, simplemente se encargan de cambiar algo visualmente o de delimitar zonas, pero no aportan contexto ni información más allá del efecto visual o el contenido.

Tú puedes poner una palabra en estilo 'Bold' con un elemento como el **b** que te va a poner la palabra remarcada en un color negro, aquí no tendríamos más contexto que el propio contenido (la palabra en este caso) y que está de color negro. En cambio, tu puedes tener un elemento como el **strong** que tiene visualmente el mismo efecto que **b**, pero para el navegador y los motores de búsqueda esa palabra o ese contenido que está en dicho elemento es más importante que el resto que está en un párrafo normal.

## Elementos semánticos
### Títulos
Los títulos son de los elementos más comunes, sobre todo, si tenemos mucha información en texto. Para pintar un título tenemos que definir los elementos **h**, hablo en plural, ya que tenemos varios para poder crear una jerarquía y tener los títulos de las secciones, los títulos de los artículos, el título principal de la web...
```html
<h1>Título 1</h1>
<h2>Título 2</h2>
<h3>Título 3</h3>
<h4>Título 4</h4>
<h5>Título 5</h5>
<h6>Título 6</h6>
```
Van de más grande (**h1**) a más pequeño (**h6**) y los más utilizados diría yo que son **h1**,**h2** y **h3**. Algo a tener en cuenta es que es recomendable no utilizar más de 1 **h1** en una página web, esto se debe que los motores de búsqueda y los usuarios con este nivel de título pueden saber el tema de la web y el contenido que se puede encontrar en ella. Si ponemos 'David Llamas Román' directamente es mi nombre y es una página personal, pero puedes poner 'Animales de Compañía', 'Gimnasio', 'Frutas Pepa'... quizás el nombre de una marca... Esto último no quiere decir que sea algo inamovible y que no se pueda dar el caso en el que tenemos 2 **h1**, pero pienso que es difícil encontrar un caso donde sea útil de verdad. Cuando decimos 2 **h1** estamos hablando de lo siguiente:
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1>Primer h1</h1>
  <h1>Segundo h1</h1>
</body>
</html>
```
Como podemos observar son 2 seguidos, porque obviamente si no es una SPA y tenemos un sitio web grande con distintas páginas (home 'index.html', productos 'productos.html' y así 5, 10, 20 páginas) cada una tendrá su **h1**, siempre y cuando las páginas no tengan una estructura extremadamente distinta. Poniendo de ejemplo esta web, no vamos a tener 2 porque estamos buscando una navegación sin recargar la página con 1 única página (1 sólo archivo **HTML**) y quitando la 'home' no tiene mucho sentido tener mi nombre también al principio de 'projects' o de otra sección.
### Párrafos
Ahora que ya sabemos como funcionan los títulos, tendremos que saber cómo pintar un párrafo. Los párrafos se definen con el elemento **p** y no hay realmente mucho más que comentar, si tienes un texto de 4 párrafos, defines 4 **p** y le pones contenido y ya estaría.
```html
<p>Hola, soy un párrafo</p>
```
#### Palabras 'Bold'
Es muy común que se de el caso en el que queremos o necesitamos remarcar palabras o frases y nos gustaría que se remarcase con un estilo 'Bold'. Estando en la parte en la que estamos de elementos semánticos, definiremos el elemento **strong**, suponiendo que el color de texto es el default, el texto que esté entre las etiquetas de apertura y cierre del elemento anteriormente mencionado se pondrá un poco más fuerte (con una línea visualmente más gruesa) y en negro (el color default). Básicamente lo que conocemos vulgarmente como ponerlo en 'negrita'.
```html
<p>Hola, soy <strong>David Llamas Román</strong></p>
```
Como se puede ver en el ejemplo anterior, el elemento **strong** está dentro de un párrafo y la verdad es que no creo que te lo encuentres de otra manera, quizás dentro de un enlace u otro elemento de texto que no tenga por defecto ya unos estilos así de remarcar el texto. Por ejemplo, no es común que te lo encuentres en un título.
#### Palabras 'Italic'
Si nos encontramos en una situación parecida a la de antes, pero queremos que el texto se ponga en cursiva o 'Italic' definiremos el elemento **em**.
```html
<p>Texto en <em>cursiva / 'Italic'</em></p>
```
### Enlaces
Ahora vamos a empezar con una pregunta, ¿qué es una web sin enlaces? Es un elemento que vas a encontrar en todos los sitios, se conocen como anchors y es **a**.
```html
<a>Enlace</a>
```
Aquí no acaba todo, ya que para poner el link de la web o la ruta de la página que queremos enlazar tenemos que poner un atributo, **href**.
```html
<a href="davidllamasroman.com">Mi Web Personal</a>
```
Y si pensabas que ya acababa todo aquí, va a ser que no. Ahora toca hablar de un atributo, **target**, este entra en juego en situaciones donde, por ejemplo, no queremos que el entrar en este enlace no rompa la navegación de la página. Tiene varios valores:
- **self** es el comportamiento por defecto (cargar en el contexto de navegación actual).
- **_blank** hace que el enlace se cargue en una nueva pestaña (un nuevo contexto de navegación).
- **_parent**.
- **_top**.
### Listas
Por fín pasamos a otro elemento distinto, esta vez toca, para variar, algo bastante común también. Las listas se utilizan cuando queremos enumerar una serie de frases, palabras o cuando queremos hace una barra de navegación que ya veremos más adelante, pero no deja de ser un contenedor con una lista de enlaces dentro. Nos encontramos con 2 tipos de lista, la ordenada y desordenada.
#### Listas ordenadas
Este tipo de lista se caracteriza de añadirle un número o una letra a cada elemento que la compone. Este elemento es **ol**.
```html
<ol></ol>
```
Esta lista no tiene contenido y si escribimos directamente palabras, por mucho que tabulemos, no va a verse mágicamente la información en forma de lista. Para ello tenemos que definir cada fila / elemento de la lista, esto se hace con **li**.
```html
<ol>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ol>
```
#### Listas desordenadas
Este otro tipo de lista se caracteriza por no enumerar ordenadamente los elementos que la componen, es decir, es la típica de círculos, rayas o cuadrados. En este caso no se pone **ol**, se pone **ul**. Y utilizamos también **li** tal cual hemos hecho antes.
```html
<ul>
  <li>Elemento 1</li>
  <li>Elemento 2</li>
  <li>Elemento 3</li>
</ul>
```
### Tablas
Parece que hemos hecho un gran punto y aparte, porque hemos pasado de cosas muy comunes a algo que se ha utilizado mucho y que actualmente tampoco se ve tanto. Eso sí, no se ve tanto según que webs, ya que en **MDN** tienes tablas y en el mundo corporativo, en empresas se hacen también muchas tablas. El elemento que tenemos que definir para pintar una tabla es **table**.
```html
<table></table>
```
Y ahora vamos a ir nombrando cada parte y poniendo sus correspondientes ejemplos.
- En primer lugar es ideal definir la parte donde van a estar los títulos o encabezados de la tabla, para ello definiremos el elemento **thead**.
  ```html
  <table>
    <thead></thead>
  </table>
  ```
- Ahora, para poner los títulos tenemos que definir una fila y acto seguido las distintas columnas que van a contener los encabezados. Para las filas tenemos que definir **tr** y para las columnas **th**, ya que es el elemento que define las columnas de este tipo.
  ```html
  <table>
    <thead>
      <tr>
        <th>Título 1</th>
        <th>Título 2</th>
        <th>Título 3</th>
      </tr>
    </thead>
  </table>
  ```
- Una vez hemos definido la sección que sería equivalente al encabezado de una web (que veremos más adelante), tenemos que definir la parte del body, el cuerpo, donde vamos a tener el contenido principal de la tabla, los datos. Para ello definiremos el elemento **tbody**. Al igual que antes, tenemos que crear las filas que queramos (en este caso 3) y las columnas que queramos (en este caso, tenemos 3 títulos, por lo que haremos 3). Para las filas tenemos el elemento **tr**, pero para las columnas no podemos utilizar **th** (al utilizar este tendríamos los estilos por defecto que le aplican a los títulos / encabezados), tenemos que utilizar **td** que es el elemento de columna genérica.
  ```html
  <table>
    <thead>
      <tr>
        <th>Título 1</th>
        <th>Título 2</th>
        <th>Título 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dato 1</td>
        <td>Dato 1</td>
        <td>Dato 1</td>
      </tr>
      <tr>
        <td>Dato 2</td>
        <td>Dato 2</td>
        <td>Dato 2</td>
      </tr>
      <tr>
        <td>Dato 3</td>
        <td>Dato 3</td>
        <td>Dato 3</td>
      </tr>
    </tbody>
  </table>
  ```
- Si en una web tenemos el encabezado y el contenido principal, ¿qué nos falta? Sí, nos falta el pie de página, en este caso, el equivalente que es el elemento **tfoot**. Aquí también tenemos que definir filas y columnas, normalmente, nos encontramos con un total, una media, en general, un dato final. Para las filas (si estamos en una situación como la que acabamos de describir, va a ser 1) tenemos como siempre, **tr**. En cambio, para las columnas podemos hacer varias cosas y es definir una **th** que indique, por ejemplo, 'total' (lo vamos a representar como 'Título Final') y las demás **td**.
  ```html
  <table>
    <thead>
      <tr>
        <th>Título 1</th>
        <th>Título 2</th>
        <th>Título 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dato 1</td>
        <td>Dato 1</td>
        <td>Dato 1</td>
      </tr>
      <tr>
        <td>Dato 2</td>
        <td>Dato 2</td>
        <td>Dato 2</td>
      </tr>
      <tr>
        <td>Dato 3</td>
        <td>Dato 3</td>
        <td>Dato 3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th>Título Final</th>
        <td>Dato Final 1</td>
        <td>Dato Final 2</td>
      </tr>
    </tfoot>
  </table>
  ```
- Si piensas que hace falta algo, que algo no cuadra, es totalmente normal. Como se puede observar, tenemos 2 'Datos Finales' y tendría, en este hipotético caso que es bastante común de tener un 'Total', que ser 1. Lo natural es pensar: 'Pues venga, directamente vamos a vaciar los datos de 1', pero va a ser que no, la solución es utilizar el atributo **colspan** y eliminar un **td**.
  ```html
  <table>
    <thead>
      <tr>
        <th>Título 1</th>
        <th>Título 2</th>
        <th>Título 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dato 1</td>
        <td>Dato 1</td>
        <td>Dato 1</td>
      </tr>
      <tr>
        <td>Dato 2</td>
        <td>Dato 2</td>
        <td>Dato 2</td>
      </tr>
      <tr>
        <td>Dato 3</td>
        <td>Dato 3</td>
        <td>Dato 3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="2">Título Final</th>
        <td>Dato Final</td>
      </tr>
    </tfoot>
  </table>
  ```
- Ya está la tabla terminada. Por cierto, si te preguntas cómo puedes ver si la tabla no está descuadrada, ya que sin bordes puede ser algo confuso, puedes añadir el atributo **border** al elemento **table**. Esto le pondrá unos bordes preciosos que te quitará esa pequeña duda.
  ```html
  <table border="">
    <thead>
      <tr>
        <th>Título 1</th>
        <th>Título 2</th>
        <th>Título 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Dato 1</td>
        <td>Dato 1</td>
        <td>Dato 1</td>
      </tr>
      <tr>
        <td>Dato 2</td>
        <td>Dato 2</td>
        <td>Dato 2</td>
      </tr>
      <tr>
        <td>Dato 3</td>
        <td>Dato 3</td>
        <td>Dato 3</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th colspan="2">Título Final</th>
        <td>Dato Final</td>
      </tr>
    </tfoot>
  </table>
  ```
  Tiene **" "** porque se ponen automáticamente con el autocomplete de **Visual Studio Code**, puedes quitarlos tipo **border** así a secas y funcionará también.
### Multimedia
Ya pasamos de las tablas y nos volvemos a hacer una pregunta, ¿qué es una web sin multimedia? ¿una web sin imágenes? ¿una web sin vídeos? Una web sin audios es más común, pero... ¿una web sin audios?
#### Imágenes
Para poner una imagen en nuestra página tenemos que definir el elemento **img** y con el atributo **src** añadimos la ruta del archivo. Importante, utilizar siempre rutas relativas y no absolutas.
```html
<img src="./imagen.png">
```
#### Vídeos
#### Audios
### Estructura de una web
#### Encabezado
#### Contenido principal
#### Secciones laterales
#### Pie de página
### Encabezado
#### Barra de navegación
### Contenido principal
#### Secciones
#### Artículos
### Formularios

