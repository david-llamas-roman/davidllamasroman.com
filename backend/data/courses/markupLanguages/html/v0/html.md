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

> [!IMPORTANT]
> Para este curso no es necesario tener ningún conocimiento previo. No obstante, te pueden venir bien tener conocimientos de [**XML**](../../xml/v0/xml.md)

> [!NOTE]
> 🔴 El curso está en [**vídeo en YouTube**]()
>
> 💻 También lo tenemos en [**davidllamasroman.com**]()

- [Aprende HTML desde 0](#aprende-html-desde-0)
  - [Requisitos](#requisitos)
    - [Recomendaciones](#recomendaciones)
  - [Introducción](#introducción)
    - [¿Para qué sirve?](#para-qué-sirve)
    - [¿HTML es un lenguaje de programación?](#html-es-un-lenguaje-de-programación)
  - [Primeros Pasos](#primeros-pasos)
    - [Crea tu primer archivo HTML](#crea-tu-primer-archivo-html)
    - [Define la estructura de un archivo HTML](#define-la-estructura-de-un-archivo-html)
    - [¿Qué es una etiqueta?](#qué-es-una-etiqueta)
    - [¿Qué es un elemento HTML?](#qué-es-un-elemento-html)
    - [Tipos de elementos HTML](#tipos-de-elementos-html)
  - [Elementos semánticos](#elementos-semánticos)
    - [Títulos](#títulos)
    - [Párrafos](#párrafos)
      - [Palabras 'Bold'](#palabras-bold)
      - [Palabras 'Italic'](#palabras-italic)
    - [Enlaces](#enlaces)
    - [Listas](#listas)
      - [Listas ordenadas](#listas-ordenadas)
      - [Listas desordenadas](#listas-desordenadas)
    - [Tablas](#tablas)
    - [Multimedia](#multimedia)
      - [Imágenes](#imágenes)
      - [Vídeos](#vídeos)
      - [Audios](#audios)
    - [Estructura de una web](#estructura-de-una-web)
      - [Encabezado](#encabezado)
      - [Contenido principal](#contenido-principal)
      - [Secciones laterales](#secciones-laterales)
      - [Pie de página](#pie-de-página)
    - [Encabezado](#encabezado-1)
      - [Barra de navegación](#barra-de-navegación)
    - [Contenido principal](#contenido-principal-1)
      - [Artículos](#artículos)
      - [Secciones](#secciones)
    - [Formularios](#formularios)
      - [Fieldset](#fieldset)
      - [Labels](#labels)
      - [Inputs](#inputs)
      - [Button](#button)

## Requisitos
- Ordenador con un navegador y un editor de código instalado
### Recomendaciones
- **Navegador**: [Brave](https://brave.com/) o [Chrome](https://www.google.com/intl/es_es/chrome/)
- **Editor de código**: [Visual Studio Code](https://code.visualstudio.com/)

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
Hay otro atributo que tiene bastante importancia y es que, si la imagen no puede cargar, podemos mostrar un texto 'alternativo' que únicamente se muestra en ese caso. Este es **alt** y su contenido tiene que ser algo que describa a la imagen y que te ayude a intuir cómo sería.
```html
<img src="./imagen.png" alt="persona saltando a la comba">
```
#### Vídeos
Para poner un vídeo en nuestra página tenemos que definir el elemento **video**. En este elemento tenemos un atributo **src** donde tenemos que poner la ruta del vídeo y, si este está en varios formatos, podemos definir dentro de **video** el elemento **source** que cuenta con un atributo **src** y lo podemos repetir tantas veces como formatos de archivo haya. Entonces, si hay alguna incompatibilidad con el formato de archivo default, se va a reproducir el primer source, si tampoco vale, el otro. También podemos no poner **src** en **video** y poner el video default en un **source**. Aquí ya a preferencia de cada uno. Hay más atributos que nos pueden resultar interesantes (se ponen en el elemento **video**):
- Con **controls** activamos los controles del vídeo.
- Con **autoplay** hacemos que el vídeo se reproduzca automáticamente, eso sí, tiene que estar silenciado para que no haya ningún problema. Para ello podemos utilizar **muted**.
- Con **loop** hacemos que se reproduzca en bucle.
- Con **poster** podemos hacer que el vídeo tenga una 'miniatura', para así evitar que no se vea nada mientras este carga.
Ahora vamos a mostrar un ejemplo completo:
```html
<video src="./video.mp4" controls muted autoplay loop>
  <source src="./video.mov">
</video>
```
#### Audios
Para poner un audio en nuestra página vamos a tener que definir el elemento **audio**. Aquí pasa como con el elemento **video**, tenemos su atributo **src** y luego podemos definir un elemento **source** dentro de **audio** o hacerlo directamente. También nos encontramos con los atributos **controls**, **autoplay**, **muted** y **loop**.
```html
<audio src="./audio.mp3" controls muted autoplay loop>
  <source src="./audio.aac">
</audio>
```
### Estructura de una web
Hemos hablado de los elementos con los que podemos pintar contenido como tal, pero... ¿y los que nos ayudan a definir la estructura de la web donde los dejamos? A continuación vamos a hablar de aquellos elementos con los que decimos: 'aquí hay un encabezado', 'aquí hay una barra de navegación', 'un pie de página', 'una sección'...
#### Encabezado
Aquí, como en todas las partes donde hablemos de este tipo de elementos, nos tenemos que agarrar a la adopción de los términos 'contenedores' o 'cajas' para tener claro el funcionamiento de estas.

En este caso, para poner en nuestra web un encabezado, tenemos que definir el elemento **header** y su función es simplemente agrupar una serie de elementos (título o logo, barra de navegación...). Cuando utilizamos este tipo de contenedor, el navegador sabe que lo que hemos definido es una sección de encabezado que va a contener las cosas que puedan ser relevantes en este caso. Si hubiésemos utilizado un contenedor genérico como se hacía antes de que existiesen estos elementos semánticos (lo veremos más adelante), este encabezado sería lo mismo que una sección normal y, a su vez, que un pie de página.
```html
<header>Encabezado</header>
```
#### Contenido principal
Toda página web tiene un tema principal y el contenido que tiene relación directa con este, es el contenido principal de la web. Bien, pues para decirle eso al navegador, para decir que aquí se encuentra el contenido principal de la página, tenemos que definir el elemento **main**. Este es un contenedor, tiene la misma funcionalidad que **header**, pero bajo los ojos del navegador no va a ser lo mismo. En este estaría percibiendo que lo que hay dentro es el contenido principal, mientras que en el **header** vería que es el encabezado de la página.
```html
<header>Encabezado</header>

<main>Contenido Principal</main>
```
#### Secciones laterales
En una página podemos tener una sección lateral con contenido extra, quizás las últimas noticias del día, los artículos más relevantes de tu blog... Para poner dicha sección, ya sea a la izquierda o la derecha, en nuestra web, hay que definir el elemento **aside**.
```html
<header>Encabezado</header>

<main>Contenido Principal</main>

<aside>Sección Lateral</aside>
```
Aunque en este pequeño y simple ejemplo el **aside** está fuera de **main**, se puede dar el caso en el que esté dentro, ya ahí entramos en interpretaciones, ideas diferentes...
#### Pie de página
¿Qué es una web sin un pie de página? Para definir un pie de página, hay que definir el elemento **footer**.
```html
<header>Encabezado</header>

<main>Contenido Principal</main>

<aside>Sección Lateral</aside>

<footer>Pie de página</footer>
```
### Encabezado
#### Barra de navegación
Este es un elemento que normalmente se encuentra dentro del **header**. Su significado semántico enmarca que lo que hay dentro del contenedor es una barra de navegación. Este se pone el nuestra web definiendo el elemento **nav** (Normalmente dentro de este elemento tenemos una lista desordenada a la que le quitamos los estilos compuesta por enlaces internos o externos).
```html
<header>
  <nav>Barra de navegación</nav>
</header>

<main>Contenido Principal</main>

<aside>Sección Lateral</aside>

<footer>Pie de página</footer>
```
### Contenido principal
#### Artículos
Los artículos son contenedores en el que se espera un contenido independiente (ya sea texto e imagen, texto, links, listas, quizás tablas...) y no es obligatoria la existencia de un título en este tipo de contenedor que, por cierto, normalmente se encuentra dentro del contenido principal (eso no quita que pueda estar fuera, dentro de un **aside** o en cualquier otro sitio). Para crear un 'artículo' (aunque el nombre es el que es, no es obligatorio que sea un artículo de un blog, por ejemplo, al pie de la letra. De hecho, por eso menciono que el contenido esperado dentro es independiente y no confirmo un tipo exacto) tenemos que definir el elemento **article**.
```html
<header>
  <nav>Barra de navegación</nav>
</header>

<main>
  <article>Artículo</article>
</main>

<aside>Sección Lateral</aside>

<footer>Pie de página</footer>
```
#### Secciones
Las secciones son contenedores que agrupan, normalmente al tipo de contenedor que hemos definido antes, artículos. También pueden tener contenido 'suelto' por así decirlo, eso sí, todo el contenido que haya tiene que estar relacionado. Imaginémonos que en la sección 'Asignaturas' de un documento, se habla de una asignatura y luego de como ganó el Madrid ayer, no procede. En este caso, la existencia de un título es obligatoria / recomendada, se podría considerar una mala práctica utilizar una sección sin título en vez de un article, por ejemplo. Para crear una sección vamos a tener que definir el elemento **section**.
```html
<header>
  <nav>Barra de navegación</nav>
</header>

<main>
  <article>Artículo</article>
  <section>
    <h2>Título</h2>
    <article>Artículo 1</article>
    <article>Artículo 2</article>
    <article>Artículo 3</article>
  </section>
  <section>
    <h2>Título</h2>
    <p>Párrafo 1</p>
    <p>Párrafo 2</p>
    <img src="./imagen.png" alt="imagen">
  </section>
</main>

<aside>Sección Lateral</aside>

<footer>Pie de página</footer>
```
### Formularios
Ahora pasamos de todos los 'contenedores' que hemos visto antes y vamos con una parte, un componente, que encontramos mucho, un formulario. Sea cual sea el fin de este (contacto, registro, inicio de sesión...) siempre suelen tener las mismas partes, un 'contenedor' que sirve para hacer agrupaciones de elementos como es **fieldset**, una serie de **inputs**, una serie de **labels** y un **button** o algún que otro **input** un tanto especial. Para definir un formulario se utiliza **form** y este puede tener los atributos **action** y **method** (el primero recibirá una url a la que se deben enviar u obtener los datos y, el último, dice exactamente lo que va a hacer. Enviar con **post** y obtener con **get**).
```html
<form></form>

<form action="url o #" method="get o post">
```
> [!WARNING]
> El # en este caso indica que no haga nada, al igual que si se lo pasas a un anchor

#### Fieldset
Este elemento lo que nos permite es agrupar una serie de elementos, es prácticamente como un **div** (contenedor genérico), pero en una versión más semántica. Nosotros también podemos añadirle a un **fieldset** un "título" (un texto a modo de título o etiqueta) que nos de más contexto acerca el contenido del elemento, para ello está el elemento **legend**.
```html
<form action="url o #" method="get o post">
  <fieldset>
    <legend>Título</legend>
  </fieldset>
</form>
```

#### Labels
Este elemento lo utilizamos cuando queremos poner un texto no muy extenso, normalmente, una palabra que nos dé contexto acerca de la información que hay que introducir en el input. Por ejemplo, imaginemos que estamos haciendo un formulario de registro y tenemos los campos nombre, email y contraseña. Si tu pones un **input** type **text**, un type **email** y un type **password** tal cual, sin ninguna **label**, ¿cómo sabes qué es lo que tienes que poner? Para eso está este elemento HTML del que estamos hablando, para que te de contexto acerca el contenido que tienes que introducir. Siguiendo con el ejemplo, lo que tocaría ahora es poner 3 **labels**, una antes del nombre que ponga "Nombre", otra que ponga "Email" y que vaya después del nombre y antes del email y, por último, una que vaya después del email y antes de la contraseña.
```html
<label>Nombre:</label>
<input type="text"> <!-- para introducir el nombre, lo veremos más adelante -->

<br> <!-- para hacer un espacio, lo veremos más adelante -->

<label>Email:</label>
<input type="email"> <!-- para introducir el email, lo veremos más adelante -->

<br> <!-- espacio x2 -->

<label>Contraseña:</label>
<input type="password"> <!-- para introducir la contraseña, lo veremos más adelante >
```

Ahora puede parecer que está todo a la perfección, pero... ¡Falta algo! ¿Qué pasa si tenemos un **input** type **checkbox** o type **radio** con una etiqueta?
```html
<label>Checkbox</label>
<input type="checkbox">

<br>

<label>Radio</label>
<input type="radio">
```

Como puedes comprobar tú mismo es que si pulsas en "Checkbox" o en "Radio" no se selecciona el **input**. Esto se debe a que no tenemos puesto un atributo en el elemento **label** que hace que este apunte hacia el **input**. ¿Hacia cuál de los 2? Pues hacia el que tenga el **id** que ponga lo mismo que el **label**. Un id es un atributo que le podemos poner a todos los elementos HTML para identificarlo. Es único, es decir, 1 **id** lo tiene que tener únicamente 1 elemento. Por ejemplo, no puedes tener 2 elementos que tengan el **id** "hola". Esto del **id** no lo hemos explicado antes, ya que junto a class es algo que se utiliza mucho a la hora de editar o cambiar los estilos de un elemento con CSS y a la hora de llamar a los elementos para manejar el DOM con JavaScript. Esto es algo que, así de primeras, puede ser difícil, pero no te preocupes. Ahora mismo únicamente tienes que saber lo que se muestra en el siguiente ejemplo:
```html
<label for="checkbox">Checkbox</label>
<input type="checkbox" id="checkbox">

<br>

<label for="radio">Radio</label>
<input type="radio" id="radio">
```

Como puedes ver, ahora si pulsamos "Checkbox" o "Radio" se activa o se desactiva el **input** correspondiente.

> [!WARNING]
> Puedes poner el **id** que tú quieras, eso sí, tiene que ser lo mismo que el **label**

#### Inputs
Este elemento nos permite la entrada de datos por parte del usuario y hay distintos tipos:
- **text**

  Este tipo de **input** permite al usuario introducir texto (nombres, apellidos...).
  ```html
  <input type="text">
  ```

- **email**

  Este tipo de **input** permite al usuario introducir un email, es más, si lo que introduces no tiene esta estructura: "email@email.com", directamente se queja y te dice que lo que estás introduciendo no es válido.
  ```html
  <input type="email">
  ```

- **password**

  Este tipo de **input** permite al usuario introducir una contraseña y la diferencia frente a uno que te permite introducir texto es que oculta lo que introduces con los típicos puntos negros.
  ```html
  <input type="password">
  ```

- **number**

  Este tipo de **input** permite al usuario introducir únicamente números y, a la derecha, te aparecen 2 flechas para incrementar o disminuir en 1 el valor introducido. En este caso, si intentas escribir una letra, directamente no te deja (no va a pintarse en el input).
  ```html
  <input type="number">
  ```

- **range**

  Este tipo de **input** permite al usuario elegir un valor entre un "rango" de valores. Esto se hace cambiando el valor que tiene una barra deslizante.
  ```html
  <input type="range">
  ```

- **tel**

  Este tipo de **input** está pensado para introducir un número de teléfono, es igual a uno que únicamente te permite introducir texto, pero con la diferencia que en el móvil te aparece un teclado numérico.
  ```html
  <input type="tel">
  ```

- **url**

  Este tipo de **input** está pensado para introducir una url, aunque aparentemente es igual que el que únicamente te permite introducir texto, valida que el texto introducido sea una url. Si no lo es, se queja como en el tipo **email**.
  ```html
  <input type="url">
  ```

- **date**

  Este tipo de **input** está pensado para introducir fechas, por defecto, en el siguiente formato: "dd/mm/yyyy". A la derecha aparece un icono de calendario, al pulsarlo, te aparece un calendario con el que introducir la fecha.
  ```html
  <input type="date">
  ```

- **month**

- **week**

- **time**

  Este tipo de **input** está pensado para introducir horas y minutos, a la derecha, aparece el icono de un reloj. Al pulsarlo, aparece un dropdown con 2 columnas, una para la hora y otra para los minutos.
  ```html
  <input type="time">
  ```

- **datetime**

- **datetime-local**

  Este tipo de **input** está pensado para introducir la fecha, la hora y los minutos (es una mezcla entre **date** y **time**). Además podemos ver que la hora que te aparece preseleccionada coincide con la hora que es en ese momento en tu región.
  ```html
  <input type="datetime-local">
  ```

- **search**

  Este tipo de **input** está pensado para introducir los valores por los que queremos buscar algo. Parece que es un type **text**, pero si no fijamos bien, hay diferencias. Por defecto, este **input** tiene un autocompletado que se basa en las búsquedas que hayamos hecho en otros **input** del mismo tipo, así como te sugiere búsquedas anteriores realizadas anteriormente en el mismo **input**. Otra diferencia que podemos ver es que, por defecto, cuando escribimos algo y estamos seleccionando para escribir el **input**, nos aparece a la derecha una "x" para eliminar lo que hemos escrito.
  ```html
  <input type="search">
  ```

- **color**

  Este tipo de **input** está pensado para seleccionar un color. Por tanto, lo que te aparece cuando lo defines es un botón con un cuadrado negro y, si lo pulsas, te aparece un color picker. Otra cosa a recalcar es abajo del color picker se te muestra el código de color en RGB o en lo que selecciones, ya que hay un botón con el que puedes donde puedes cambiar de RGB a HSL o a HEX.
  ```html
  <input type="color">
  ```

- **file**

  Este tipo de **input** está pensado para permitir al usuario elegir y subir un archivo. Este se compone de un botón "Choose File" y a la derecha de ese botón está un texto que dice "No file chosen". Cuando presionamos el botón se nos abre el explorador de archivo, como ocurre cuando queremos descargar un archivo, y, una vez lo escogemos, se nos cambia el texto por su nombre ("ejemplo.txt").
  ```html
  <input type="file">
  ```

- **radio**

  Este tipo de **input** es un botón de selección redondo. Esto se va a entender mejor con un ejemplo. Imaginemos que tenemos una pregunta de un test donde únicamente se puede seleccionar una opción, bien, pues todas las opciones disponibles para elegir, tienen al lado un "círculo" que tienes que presionar para que la opción quede "elegida" / "seleccionada". Ese "círculo" es este tipo de **input**.
  ```html
  <input type="radio">
  ```

- **checkbox**

  Este tipo de **input** es un cuadro de selección múltiple. Como en el type **radio**, esto se va a entender mejor con un ejemplo. Imaginemos que tenemos una pregunta de un test, pero, en este caso, donde se puede seleccionar más de una opción. Como puedes intuir, cada opción tendrá al lado un **checkbox**, un cuadrado que te permite marcar la opción.
  ```html
  <input type="checkbox">
  ```

- **submit**

  Este tipo de **input** es un botón que sirve para enviar la información que hemos introducido en los campos de un formulario.
  ```html
  <input type="submit">
  ```

- **image**

  Este tipo de **input** está pensado para tener una imagen como botón. Visualmente es una imagen y, por debajo, funciona como un type **submit**.
  ```html
  <input type="image>
  ```

- **reset**

  Este tipo de **input** sirve para "reiniciar" los campos del formulario, básicamente, borra el contenido que tengan.
  ```html
  <input type="reset">
  ```

- **button**

  Este tipo de **input** es un botón que puede servir para enviar la información que hemos introducido en los campos de un formulario, pero no es su función principal. Este está más pensado para realizar acciones personalizadas al presionarlo, tanto es así, que por defecto no hace nada. Este necesita que se le asigne un script para realizar X acción.
  ```html
  <input type="button">
  ```

Puede parecer que ya hemos acabado este apartado de **inputs**, pero todavía tenemos que ver qué atributos nos encontramos en los distintos tipos de este elemento HTML. A continuación vamos a ir viendo los **inputs** y los atributos más comunes que nos podemos encontrar. Por ejemplo, X, Y y Z **inputs** suelen tener tal o tales atributos. Antes de empezar, quería mencionar que también tenemos atributos que nos podemos encontrar en todos los elementos.

| **Inputs**                                                             | **Atributos**                                                                                                    |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Todos                                                                  | **type**, **name**, **id**, **value**, **readonly**, **required**, **autofocus**, **autocomplete**, **disabled** |
| Todos menos **checkbox**, **radio**, **submit**, **button**, **reset** | **placeholder**                                                                                                  |
| text, password, email, search, tel, url                                | **maxlength**, **pattern**, **size**, **autocapitalize**, **spellcheck**                                         |
| number, range, date, time, datetime-local, month, week                 | **min**, **max**, **step**                                                                                       |
| file                                                                   | **multiple**, **accept**                                                                                         |
| checkbox, radio                                                        | **checked**                                                                                                      |
| submit, button, reset                                                  | **formaction**, **formmethod**, **formenctype**, **formtarget**                                                  |
| button                                                                 | **formaction**                                                                                                   |

Una vez hemos visto cuáles son los atributos que nos podemos encontrar dependiendo del **input**, vamos a explicar qué se puede hacer con cada uno.
- **type**

  Este atributo lo utilizamos, como hemos podido ver ya para decir el tipo de un **input** a la hora de su definición.

- **name**

- **id**

- **value**

- **readonly**

- **required**

- **autofocus**

- **autocomplete**

- **disabled**

- **placeholder**

- **maxlength**

- **pattern**

- **size**

- **autocapitalize**

- **spellcheck**

- **min**

- **max**

- **step**

- **multiple**

- **accept**

- **checked**

- **formaction**

- **formmethod**

- **formenctype**

- **formtarget**

#### Button

Este es un elemento que también se puede ver bastante en los formularios, ya que es un botón. Por defecto, **button** tiene la misma acción que un **input** type **submit**, es decir, se encarga de enviar la información de los campos del formulario. Al igual que los **inputs** que son "botones" (**submit**, **button**, **reset**, **image**), hay varios tipos de **button**. Estos se definen con el atributo **type**.
- **submit**

  Hace que, como ya hemos dicho, el botón se encargue de enviar la información del formulario (lo mismo que el **input** type **submit**).
  ```html
  <button type="submit">Submit</button>
  ```

- **reset**

  Hace que la información de los campos del formulario se "reinicie", es decir, se borran los datos (lo mismo que el **input** type **reset**).
  ```html
  <button type="reset">Reset</button>
  ```

- **button**

  Hace que el botón no haga nada si no se le asigna un script (lo mismo que el **input** type **button**).
  ```html
  <button type="button">Button</button>
  ```

> [!WARNING]
> Entre la etiqueta de apertura y de cierre tiene que haber texto, por ejemplo, "Enviar" / "Guardar" / "Buscar"... En el caso de no tener texto, no tendría mensaje, el botón estaría vacío.

En este elemento, el atributo **value** no funciona como en los **inputs**. En un **input** type **submit** tú tienes por defecto de texto "Submit" y, si le pones el **value** "Hola", el texto pasa a ser "Hola". Aquí, este atributo no va a cambiar para nada el texto del **button**. El texto de **value** tendrá efecto en el servidor, ya que pasa a este en forma de parámetro, pero, en sí, lo que hace es definir el valor asociado con el **name** del botón. Esto puede ser un poco abstract, vamos a ver un ejemplo:
```html
<input type="submit" name="hola" value="Hola1">
<input type="submit" name="hola" value="Hola2">
```

Aquí lo que se enviaría por defecto en el caso de tener únicamente 1 **input** sería el **name** "hola", pero, al tener un **value**, si pulsamos el primer **submit**, vamos a ver reflejado en el servidor "Hola1" y, en el caso contrario, veremos "Hola2".