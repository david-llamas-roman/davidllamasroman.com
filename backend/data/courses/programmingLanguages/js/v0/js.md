<!--
 * This file is part of davidllamasroman.com.
 *
 * davidllamasroman.com is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, version 3 of the License only.
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

# Aprende JavaScript desde 0

> [!IMPORTANT]
> Para realizar este curso sería necesario tener los conocimientos básicos de programación. En este no nos vamos a centrar en explicar, por ejemplo, qué es una variable. Aquí vamos a ver cómo se define una variable y todo lo relacionado con las variables en JavaScript, pero no vamos a meternos en definir el concepto en sí.

> [!WARNING]
> Dejando un poco aparte lo que hemos mencionado antes, en este curso vamos a ver JavaScript desde 0.

> [!NOTE]
> 🔴 El curso está en [**vídeo en YouTube**]()
>
> 💻 También lo tenemos en [**davidllamasroman.com**]()

- [Aprende JavaScript desde 0](#aprende-javascript-desde-0)
  - [Requisitos](#requisitos)
    - [Recomendaciones](#recomendaciones)
  - [Introducción](#introducción)
    - [¿Qué es JavaScript?](#qué-es-javascript)
    - [¿Qué es Vanilla JS?](#qué-es-vanilla-js)
    - [¿Qué es ECMAScript?](#qué-es-ecmascript)
    - [¿Qué es el TC39?](#qué-es-el-tc39)
    - [ES6](#es6)
  - [Primeros Pasos](#primeros-pasos)
    - [Crea tu primer archivo de JavaScript](#crea-tu-primer-archivo-de-javascript)
    - [¿Cómo ejecutamos código JavaScript?](#cómo-ejecutamos-código-javascript)
    - [Alcance (Scope)](#alcance-scope)
  - [Variables](#variables)
    - [¿Cómo declaramos o definimos una variable?](#cómo-declaramos-o-definimos-una-variable)
      - [Let](#let)
      - [Const](#const)
      - [Var](#var)
    - [Tipos de datos](#tipos-de-datos)
      - [Primitivos](#primitivos)
        - [number](#number)
        - [bigint](#bigint)
        - [boolean](#boolean)
        - [null](#null)
        - [undefined](#undefined)
        - [symbol](#symbol)
        - [string](#string)
      - [Complejos](#complejos)
        - [object](#object)
        - [array](#array)
        - [function](#function)
  - [Operaciones con Strings](#operaciones-con-strings)
    - [Sacar la longitud de un string](#sacar-la-longitud-de-un-string)
    - [Convertir todas las letras a minúsculas](#convertir-todas-las-letras-a-minúsculas)
    - [Convertir todas las letras a mayúsculas](#convertir-todas-las-letras-a-mayúsculas)
    - [Coger una parte de un string](#coger-una-parte-de-un-string)
  - [Operaciones con Numbers](#operaciones-con-numbers)
    - [Operaciones básicas](#operaciones-básicas)
    - [Problemas de precisión](#problemas-de-precisión)
      - [toFixed](#tofixed)
      - [Redondear](#redondear)
      - [Truncar](#truncar)
    - [Operaciones avanzadas](#operaciones-avanzadas)
      - [Raíz cuadrada](#raíz-cuadrada)
      - [Valor absoluto](#valor-absoluto)
      - [Sacar un número aleatorio](#sacar-un-número-aleatorio)
  - [Conversión de tipos de datos](#conversión-de-tipos-de-datos)
    - [Explícita](#explícita)
      - [De X a String](#de-x-a-string)
      - [De X a Boolean](#de-x-a-boolean)
      - [De X a Number](#de-x-a-number)
      - [De X a Array](#de-x-a-array)
      - [De X a Object](#de-x-a-object)
    - [Implícita](#implícita)
  - [Otros tipos de de operadores](#otros-tipos-de-de-operadores)
    - [Operadores de comparación](#operadores-de-comparación)
    - [Operadores lógicos](#operadores-lógicos)
  - [Estructuras de control](#estructuras-de-control)
    - [If, else y else if](#if-else-y-else-if)
    - [Switch](#switch)
    - [For](#for)
    - [For of](#for-of)
    - [For in](#for-in)
    - [While](#while)
    - [Do while](#do-while)

## Requisitos
### Recomendaciones

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Introducción
### ¿Qué es JavaScript?
JavaScript es un lenguaje de scripting que nació en 1995 bajo el nombre de Mocha. Con el paso del tiempo ha ido evolucionando y junto a esa evolución también ha ido cambiando el nombre. Antes de tener el nombre "JavaScript" se llamó LiveScript, pero, por cuestiones de marketing, se decidió cambiar el nombre al que tenemos a día de hoy. Estas cuestiones se resumen en que Java en esa época era el lenguaje más popular y, hombre, tener esa palabra mágica en el nombre podía significar un impulso bastante considerable en cuanto a que la gente lo conozca.

A todo esto, seguro que te estás preguntando... ¿Para qué sirve JavaScript?

Actualmente, este lenguaje nos lo encontramos tanto en el lado del backend como en el lado del frontend. En cuanto al frontend, es el único lenguaje que nos permite manejar el DOM. Vamos con un caso práctico, por ejemplo, con JavaScript (Vanilla JS) podemos consumir una API (realizar una petición HTTP) para obtener un listado de cursos (repito, es un ejemplo) y luego, mediante el manejo del DOM, crearemos una lista cuyos elementos serán cada uno de los cursos.
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ejemplo</title>
</head>
<body>
  <script>
    /*
    - con 'fetch' consumiríamos la API (haríamos una petición GET)
    - no lo muestro aquí, ya que veo que sería ya demasiado código y, además, más avanzado de la cuenta para estar empezando de 0
    - teniendo en cuenta que los datos que te llegan los tienes que convertir a JSON para tratarlos posteriormente
    */

    const courses = document.createElement('ul')

    const course = document.createElement('i')
    course.innerText = 'Primer curso'
    courses.appendChild(course)

    document.body.appendChild(courses)
  </script>
</body>
</html>
```
Lo que en este ejemplo se muestra es una lista desordenada con un único elemento con el texto "Primer curso". Si no entiendes nada, no te preocupes, vamos a ver todo poquito a poco conforme vayamos avanzando en este curso. Es, simplemente, ponerte una situación más o menos real delante y, si te sirve de consuelo, no es algo básico (para esto se tiene que haber pasado por un proceso de entendimiento e interiorización de bastantes conceptos).

En cuanto al backend, si utilizamos Node.js con un framework como Express.js, podemos escribirlo en JavaScript.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### ¿Qué es Vanilla JS?
Vanilla JS es el nombre que se le da al JavaScript puro. Esto se entiende mejor con un ejemplo, mira, imagina que tienes que hacer el frontend de una aplicación. Para llevar a cabo esta tarea puedes utilizar un framework como Angular o React y también puedes hacerlo sin ningún framework, simplemente, con JavaScript puro y las funcionalidades propias del lenguaje. En este último caso, se diría que has hecho el frontend de la aplicación con Vanilla JS.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### ¿Qué es ECMAScript?
Vamos a ver, como ya sabemos JavaScript surge en 1995 y ha ido evolucionando poco a poco hasta convertirse en lo que es a día de hoy. Bien, pero... ¿quién gestiona los cambios que se hacen o se dejan de hacer? Además, no siempre ha estado JavaScript solo, en aquella época, habían opciones como ActionScript o JScript. Por ende, ya empezaba a surgir la necesidad de tener un estándar.

Aquí precisamente es donde aparece el nombre de ECMAScript, el estándar ECMAScript. Su nombre viene de ECMA, que es el comité que se dedica a gestionar las versiones y funcionalidades de JavaScript. ECMA, a su vez, viene de las siglas de European Computer Manufacturer Association. Puede parecer que este estándar ha sido creado por y para JavaScript y que no ha habido ninguna otra tecnología que lo implementase, pero, como ya te lo puedes estar imaginando, si la hay. JScript era la implementación de este estándar por parte de Microsoft y estuvo conviviendo un tiempo con JavaScript, aunque, con el tiempo se ha ido apalancando hasta quedar prácticamente en el olvido (su última versión estable salió en 2009).

La versión de ECMAScript que va a cambiar la historia de JavaScript y que lo va a poner en el principio del camino que había que recorrer para convertirse en lo que es a día de hoy es ECMA-262 (1997). Ahora, vamos a mencionar el nombre de cada una de las versiones de ECMAScript y así vemos su evolución:

| Año    | 1997 | 1998 | 1999 | 2000 | 2005 | 2015 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 |
| ------ | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Nombre | ES   | ES2  | ES3  | ES4  | ES6  | ES7  | ES8  | ES9  | ES10 | ES11 | ES12 | ES13 | ES14 | ES15 |

> [!NOTE]
> ES4 acabó siendo abandonada y, no fue hasta 5 años después, que salió la siguiente versión, ES6. Esta fue la que marcó, de verdad, un antes y un después, ya que vinieron con ella muchas cosas nuevas.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### ¿Qué es el TC39?
El TC39 es un grupo de personas que, junto a la comunidad, se encargan de que las nuevas funcionalidades que se proponen para JavaScript cumplan con el estándar. Aquí, sale a relucir un concepto cuyo nombre es ESNEXT. Este es el nombre que recibe la versión de ECMAScript que está actualmente en desarrollo, ya que hace referencia a "lo que viene". Decir que el TC39 está a manos de ECMA Internacional.

Y... ¿Cómo va todo el tema de presentar una nueva funcionalidad? ¿hago una pull request en un repositorio de github y se acabó?

Pues es más complejo de lo que parece, hay una serie de fases por las que todas las propuestas tienen que pasar hasta llegar a una versión del lenguaje. Estas son:
- **Stage 0: Strawperson**
  En esta fase estamos cuando, simplemente, tenemos la idea. "Pues mira, yo quiero que JavaScript tenga...".
- **Stage 1: Proposal**
  En esta fase, esa idea que hemos tenido en un momento dado, ya es una propuesta más formal.
- **Stage 2: Draft**
  Aquí, ya tendríamos un borrador de la propuesta.
- **Stage 3: Candidate**
  En esta penúltima fase, tendríamos ya la propuesta completa de la funcionalidad que hemos pensado que va a mejorar el lenguaje.
- **Stage 4: Finished**
  Aquí, ya se despliega la propuesta en una versión. Esto puede ocurrir, normalmente, en Junio y, excepcionalmente, en Enero.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### ES6
Como ya hemos dicho antes, junto a esta versión del estándar llegaron muchas funcionalidades a JavaScript. Las principales son:
- let / const
- arrow functions
- template literals
- default params
- desestructuración
- spread operator
- object literals
- promesas

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Primeros Pasos
### Crea tu primer archivo de JavaScript
Para escribir JavaScript y que el código que escribamos sea interpretado como tal, tenemos que crear un archivo con una extensión **.js**. También nos podemos encontrar otras extensiones como las **.cjs** y **.mjs**, su uso puede depender de diversos factores. Por ejemplo, podemos tener un proyecto de Node.js donde en el **package.json** tenemos definido que vamos a utilizar ECMAScript Modules y no CommonJS, pero el código generado por alguna librería como Sequelize es de CommonJS y no de ECMAScript Modules. En esta situación tendríamos 2 opciones, migrar todo el código generado a un código donde utilicemos ECMAScript Modules en vez de CommonJS (esto hay que hacerlo a mano y abría que tener en cuenta cosas como la necesidad de utilizar AJAX (async, await...)) o podemos cambiar la extensión de los archivos donde se utilice CommonJS a **.cjs**. Quizás sea más viable la segunda opción, de hecho, en un caso como el que hemos mencionado de Sequelize, la propia librería te lo recomienda por consola a la hora de realizar algunas acciones como realizar una migración.

Si no estás entendiendo prácticamente nada, cosa que es totalmente normal, no te preocupes. Únicamente quédate en la cabeza con que para escribir código JavaScript tienes que crear un archivo **.js**, lo demás, serán problemas de tu "yo" futuro.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### ¿Cómo ejecutamos código JavaScript?
Aquí se nos vuelven a presentar 3 opciones, pero, a mi parecer, la primera que os voy a explicar es la más sencilla de cara a que estamos empezando desde 0.
1. Creamos un archivo HTML al que le asociamos un archivo JavaScript con el elemento:
   ```html
    <script src="ruta del archivo .js">
   ```
   También podemos escribir código JavaScript en el mismo HTML entre las etiquetas de apertura y de cierre del elemento **script**, en este caso sin el atributo **src**:
   ```html
   <script>
     // Código JavaScript (esto es un comentario de una línea)
   </script>
   ```
   Yo, personalmente, soy más partidario de tener desde un principio el código JavaScript en un archivo aparte, ya que, en la realidad, vamos a preferir tener el HTML por un lado y, tanto el CSS como el JavaScript, por otro.
   
   Estos elementos pueden estar tanto en el **head** como en el **body**. Si el JavaScript que vamos a escribir va a estar dirigido principalmente al manejo del DOM (concepto que explicaremos más adelante), lo suyo es poner el elemento **script** al final del **body**. En este caso, si lo ponemos en el **head**, vamos a tener algunos errores ocasionados porque no se encuentran los elementos del DOM. Esto es porque se ejecuta el JavaScript antes de que se caguen los elementos, sí, esto se puede solucionar con un par de líneas adicionales en nuestro código, pero... ¿Realmente tenemos esa necesidad? Si podemos evitar meter X líneas demás para solucionar un problema que nosotros mismos estamos ocasionando, ¿por qué no lo evitamos? El JavaScript que se suele encontrar en el **head** suele ser el código que necesitamos para utilizar, por ejemplo, una librería de iconos como FontAwesome. Código que no tiene como objetivo principal manejar el DOM.
   ```html
   <body>
     <!--
       HTML [...]
     -->

     <!-- scripts -->
     <script src="archivo"></script>
   </body>
   ```

   Vale, entonces, este archivo de HTML lo vamos a abrir con un navegador y... ¿Dónde se vén las cosas que hace el JS? Pues tenemos que abrir las herramientas para desarrolladores del navegador, el shortcut es F12. Nos vamos a 'Console' y ahí vamos a ver todo lo que tengamos en un **console.log** (es la forma principal que tenemos en JavaScript para pintar cosas por consola, la veremos más adelante). Por ejemplo, si hemos escrito en nuestro **.js**:
   ```js
   console.log('Hola mundo');
   ```
   En la consola, tiene que aparecer ***Hola mundo***.

   Desde la consola también podemos escribir código JavaScript directamente, para verlo vamos a abrir una nueva pestaña en el navegador y vamos a introducir en la url "about:blank". A continuación abrimos la consola y escribimos lo siguiente:
   ```js
   console.log('Estamos escribiendo código JavaScript directamente en la consola')
   ```
   Como puedes ver con tus propios ojos, aparece el texto que hemos escrito entre los paréntesis del **console.log()**.

2. La segunda forma que tenemos de ejecutar el código que hemos escrito anteriormente en un **.js** es utilizando Node.js. Para hacerlo de esta manera, tenemos que instalar dicho entorno de ejecución que se basa en JavaScript. En este curso no nos vamos a meter nada en esto, si tienes mucha curiosidad, puedes hacerte más adelante el de [Node.js](../../../frameworks/backend/nodejs/nodejs.md).

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Alcance (Scope)
El alcance (scope) es un concepto que tenemos que tener bastante claro antes de meternos de lleno en este lenguaje de programación, ya que entra en juego en el primer punto que vamos a ver, las variables. En JavaScript, este hace referencia a los lugares dentro del código donde vamos a poder acceder tanto a nuestras variable como a nuestras funciones. Aunque la traducción directa de **scope** es "alcance", también podemos encontrar en muchos sitios la palabra "ámbito" para referirse a dicho concepto. Hay varios tipos de **scope** que son:
- **Global scope**
  Hace que las variables o funciones que definamos en dicho ámbito sean accesibles desde cualquier parte de nuestro código.
  ```js
  const preparar = true
  let fruta = 'manzana'
  var utensilio = 'cuchillo'

  console.log('¿Preparar?: ' + preparar)

  if (preparar) {
    console.log('Fruta: ' + fruta + '\nUtensilio : ' + utensilio)
  }

  function estaPreparada() {
    if (preparar) {
      console.log('Sí, está preparada')
    }
  }

  estaPreparada()
  ```
- **Function scope**
  Es el alcance propio de una función, hace que las variables que declaremos o definamos dentro de esta no sean accesibles desde fuera.
  ```js
  function decirHola() {
    var holaWithVar = 'Hola with var'
    let holaWithLet = 'Hola with let'
    const holaWithConst = 'Hola with const'
  }

  console.log(holaWithVar + '\n' + holaWithLet + '\n' + holaWithConst)
  ```
- **Block scope**
  Es el alcance propio de un bloque, hace que las variables que declaremos o definamos dentro de este no sean accesibles desde fuera.
  ```js
  const enterToBlock = true

  if (enterToBlock) {
    var holaWithVar = 'Hola with var' // no le afecta este tipo de scope
    let holaWithLet = 'Hola with let'
    const holaWithConst = 'Hola with const'
  }

  console.log(holaWithVar) // si funciona
  console.log(holaWithLet)
  console.log(holaWithConst)
  ```
- **Lexical scope**
  Es el alcance que encontramos tanto en una función como en un bloque y hace referencia a que, si, por ejemplo, tenemos una función o un bloque con una variable dentro y, dentro, definimos otra función o invocamos otro bloque, la segunda función o el segundo bloque tiene acceso a las variables que declaramos o definimos en el primero. 
  ```js
  function decirHola() {
    const hola = 'hola'

    function saludar() {
      console.log('Desde la función "saludar": ' + hola)
    }

    saludar()
  }

  decirHola()
  ```
  ```js
  const enterToBlock = true

  if (enterToBlock) {
    const hola = 'hola'

    const saludar = true
    if (saludar) {
      console.log('Desde el segundo "if": ' + hola)
    }
  }
  ```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Variables
### ¿Cómo declaramos o definimos una variable?
Para declarar o definir una variable tenemos 3 palabras reservadas que son **let**, **const** y **var**. La primera que apareció fue **var**, eso sí, actualmente no es la manera más correcta de declarar o definir una variable. Seguro que os estáis preguntando, ¿en qué casos se utiliza una palabra u otra?

Bien, esto puede depender de 2 cosas, del alcance y de si queremos poder reasignar el valor de la variable o no.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Let
La palabra reservada **let** actúa como una variable normal y corriente, es decir, se puede reasignar su valor sin problemas. Eso sí, el alcance no es global ([Global Scope](#alcance-scope)). Si definimos una variable con esta palabra reservada dentro de un **if**, únicamente se puede llamar dentro de ese bloque, si sales de ahí y quieres llamarla, vas a tener un error. En cambio, si, por ejemplo, declaras una variable con **let** al principio del documento, la vas a poder llamar y le vas a poder asignar un valor en cualquier parte del documento (dentro de cualquier **if**). Esto que acabamos de decir es la definición que dimos antes del [Block Scope](#alcance-scope).

Vamos a probar esto. En primer lugar, abrimos **about:blank** en una pestaña del navegador. Acto seguido, abriremos las herramientas para desarrolladores y nos iremos a "Console". Una vez estemos situados ahí, vamos a escribir el siguiente código:
```js
let hola; const decirHola = true; if (decirHola) { hola = 'Hola'; console.log('Hola dentro: ' + hola) } console.log('Hola fuera: ' + hola); const decirAdios = true; if (decirAdios) { let adios = 'Adiós'; console.log('Adiós dentro: ' + adios) } console.log('Adiós fuera: ' + adios);
```
Seguramente, no vas a poder copiarlo y pegarlo, ya que tiene una medida de seguridad que no te lo permite. Como cuando le das a "Enter" o a "Entrar" en tu teclado, directamente, el código se ejecuta y no se hace un salto de línea, lo hemos tenido que escribir todo en una única línea y con ";" para delimitar bien cada cosa que hacemos.

A continuación, vamos a ver que se hace con este código parte por parte (a partir de ahora, vamos a poder omitir los ";" y vamos a ir viendo el código bien indentado y con todos los saltos de líneas que necesitemos para facilitar su lectura y comprensión). Antes de nada, recalcar que, cada cosa que vamos a ver ahora, la vamos a ver a fondo más adelante aquí en este curso.

1. Declaramos la variable "hola" con **let**:
   ```js
   let hola
   ```

2. Definimos una constante "decirHola" con un valor "true" para que siempre se entre en el **if** que viene después:
   ```js
   const decirHola = true
   ```

3. Invocamos un **if** y, dentro, asignamos un valor a la variable "hola" y hacemos un **console.log** para imprimirlo por consola:
   ```js
   if (decirHola) {
     hola = 'Hola'

     console.log('Hola dentro: ' + hola)
   }
   ```

4. Hacemos un **console.log** para imprimir por consola la variable "hola" fuera del bloque:
   ```js
   console.log('Hola fuera: ' + hola)
   ```

5. Definimos una constante "decirAdios" con un valor "true" para que siempre sen entre en el **if** que viene después:
   ```js
   const decirAdios = true
   ```

6. Invocamos otro **if** y, dentro, definimos una variable "adios" y hacemos un **console.log** para imprimir su valor por consola:
   ```js
   if (decirAdios) {
     let adios = 'Adiós'

     console.log('Adiós dentro: ' + adios)
   }
   ```

7. Hacemos un **console.log** para imprimir por consola la variable "adios" fuera de la función:
   ```js
   console.log(adios)
   ```

Como podemos observar, todo se hace correctamente menos lo último de todo (el **console.log** de "adios" fuera del bloque donde esta variable se define). Esto se debe a que, como dijimos antes, si se declara o se define una variable con la palabra reservada **let** dentro de un bloque como un **if**, esta no se puede llamar fuera de este [Block Scope](#alcance-scope). En el primer caso, con "hola", no ocurre lo mismo, ya que estamos declarando la variable en un ámbito global [Global Scope](#alcance-scope).

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Const
La palabra reservada **const** se utiliza siempre que queramos definir una constante. Eso sí, decir que en según que casos su comportamiento difiere un poco de la definición de dicho concepto, ya que hay ocasiones donde podemos reasignar valores. Esto en otros lenguajes no es así y, aquí, en la mayoría de situaciones, tampoco. Mira, te voy a poner un ejemplo de esto, lo vamos a encontrar en los arrays. Un array lo podemos definir con **const** y con **let**, si lo definimos con **const**, estamos "fijando" que sea un array y no los valores que este va a tomar. Por lo cual, a pesar de haber definido el array con **const**, vamos a poder reasignar valores, añadir valores, eliminar valores...
```js
const frutas = ['manzana']

console.log(frutas)

frutas[0] = 'pera'

console.log(frutas)

frutas.push('manzana', 'plátano')

console.log(frutas)

frutas = 'hola'
frutas = []
```
Como podemos ver con este ejemplo, los valores del array son indiferentes. Cuando reasignamos el valor de la primera posición del array (la posición 0), este no da problemas y, cuando añadimos 2 valores adicionales que hacen que la longitud del array aumente, tampoco tenemos ningún problema. Los problemas vienen cuando intentamos reasignar lo que es la constante en sí, es decir, intentamos poner que "frutas" tenga el valor "hola" o que "frutas" sea un array vacío y falla. Actúa, al fin y al cabo, tal y como se espera por la definición del concepto constante.

En este caso, el alcance es igual que **let**. No tenemos un alcance global, si definimos una constante con **const** dentro de un bloque como **if**, no podemos llamarla fuera de este.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Var
Con la palabra reservada **var** vamos a declarar o definir una variable, la diferencia con **let** es que, en este caso, el alcance de la variable es global en la mayoría de casos. No importa si la declaramos o la definimos dentro o fuera de un bloque, la vamos a poder llamar y vamos a poder reasignar su valor desde cualquier parte del código [Global Scope](#alcance-scope). El único caso donde no tenemos ese alcance global es en el que estamos definiendo la variable dentro de una función y llamándola fuera de esta.
```js
function decirHola() {
  var hola = 'hola'
}

console.log(hola)
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Tipos de datos
#### Primitivos
##### number
En JavaScript, los datos numéricos (**number**) sirven para escribir todo tipo de números como pueden ser los enteros y los decimales.
```js
const entero = 1
const decimal = 0.5
```

| Tipos   | Entero | Decimal | Notación científica                   | Infinito | Not a Number (no es un número) |
| ------- | ------ | ------- | ------------------------------------- | -------- | ------------------------------ |
| Valores | 1      | 0.5     | 3e8 (velocidad de la luz en el vacío) | Infinity | NaN                            |

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### bigint
En JavaScript, tenemos un tipo de dato que sirve para representar un número gigante y hacer cálculos con este de una manera mucho más precisa que cuando estamos trabajando con **number**. Eso sí, hay que tener en cuenta que este tipo de dato puede tener únicamente como valor números enteros.
```js
const bigint = 1n
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### boolean
En Javascript, los **boolean** nos pueden indicar los 2 valores típicos de este tipo de datos, "true" y "false".
```js
const boolean = true
const boolean2 = false
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### null
En JavaScript, el tipo de dato **null** tomará su valor típico "null" y nos servirá para indicar que no hay nada.
```js
const nulo = null
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### undefined
En JavaScript, tenemos este tipo de datos que puede ser algo peculiar. **undefined** nos sirve para decir que no hay valor, pero con un punto de afirmación más fuerte. Por ejemplo, cuando tenemos una variable cuyo valor es **null**, dentro de esa variable el valor es "nulo". En este lenguaje, se interpreta que hay algo, algo que te indica "nada", que te indica "vacío", pero algo. Normalmente, **undefined** no lo vamos a poner nosotros como programadores, lo va a utilizar JavaScript por detrás. Nosotros, el valor que utilizaríamos normalmente para decir que en una variable no hay nada va a ser **null**.
```js
const sinDefinir = undefined
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### symbol
En JavaScript, tenemos este tipo de dato que también puede ser algo peculiar. **symbol** nos sirve para decir que un valor es único. Podríamos pensar que este tipo de dato es algo parecido a **UNIQUE** en SQL, pero no es tan así. Si, por ejemplo, tenemos lo siguiente:
```js
const hola = Symbol('hola')
const hola2 = Symbol('hola')
```
Y los comparamos:
```js
console.log(hola === hola2)
```
Cuando vemos el resultado "false", nos damos cuenta de que no son iguales, porque cada uno es único (bajo los ojos de JavaScript, son distintos entre sí) a pesar de ser el mismo tipo de dato, el mismo texto y, en definitiva, el mismo valor.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### string
En JavaScript, los **string** se pueden definir con comillas simples ('') y comillas dobles ("").
```js
const string = 'string'
const string2 = "string"
```

También hay otra forma con la que podemos llevar esto de definir un **string** todavía más allá, ya que esta nos permite utilizar variables para concatenar distintos **string**. Esto se conoce como "Template literals", sí, es una de las cosas que mencionamos que traía ES6. Antes de mostrar un ejemplo, decir que también se pueden poner variables con valores **number**, **boolean**, **null**, **undefined** y **bigint**. ¿Y **symbol**? Valores cuyo tipo de dato sea **symbol** no se permiten, ya que esto por debajo está convirtiendo todos los valores a **string** y **symbol** no se puede convertir a dicho tipo de dato.
```js
const nombre = 'David'

console.log(`Nombre: ${nombre}`)
```

Ahora, vamos a ver un ejemplo de todo lo que se puede utilizar con un "Template literal".
```js
// Number
const entero = 1
const decimal = 0.5

console.log(`Entero: ${entero}\nDecimal: ${decimal}`)

// Bigint
const bigint = 1n

console.log(`Bigint: ${bigint}`)

// Boolean
const verdadero = true
const falso = false

console.log(`Verdadero: ${verdadero}\nFalso: ${falso}`)

// Null
const nulo = null

console.log(`Nulo: ${null}`)

// Undefined
const sinDefinir = undefined

console.log(`Sin definir: ${sinDefinir}`)

// Array
const array = ['a', 'b', 'c']

console.log(`Array: ${array}`)

// Object
const object = {
  a: 'a',
  b: 'b',
  c: 'c'
}

console.log(`Objeto: ${object}`) // Aquí te pinta "[Object object]", esto se debe a que, cuando llamas a un objeto, te va a pintar lo que haga el toString() que está por defecto. Por defecto, dicho método te suelta eso: [Object object].
console.log(`A: ${object.a}\nB: ${object.b}\nC: ${object.c}`)

// Function
const funcion = function decirHola() {
  console.log('Hola')
}

console.log(`Función: ${funcion}`) // Te va a pintar la función tal cual: "function decirHola() {[...]}" con sus indentaciones, tal cual la hayas escrito
```

Otra forma de concatenar distintos **string** es con el operador **+**.
```js
const saludo = 'Hola'
const nombre = 'David'

console.log(saludo + ' ' + nombre)
```

Ahora, vamos a imaginarnos que tenemos un **string** y dentro de este queremos poner algo entre comillas, ¿cómo lo hacemos? Bien, pues depende:
1. Si el **string** está definido con comillas simples (''), tenemos que utilizar comillas dobles ("") dentro.
   ```js
   console.log('Hola "David"')
   ```

2. Si el **string** está definido con comillas dobles (""), tenemos que utilizar comillas simples ('') dentro.
   ```js
   console.log("Hola 'David'")
   ```

3. Si estamos utilizando "Template Literals", no importa qué tipo de comillas utilicemos dentro siempre u cuando no sean las comillas invertidas (``).
   ```js
   console.log(`Hola 'David' "Llamas"`)
   ```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Complejos
##### object
En JavaScript, el tipo de dato **object** es un objeto.
```js
const persona = {
  nombre: 'David',
  apellidos: 'Llamas Román'
}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### array
En JavaScript, el tipo de dato **array** es un array.
```js
const frutas = ['manzana', 'melón', 'piña']
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

##### function
En JavaScript, el tipo de dato **function** se utiliza para definir una función.
```js
function decirHola() {
  console.log('Hola')
}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Operaciones con Strings
### Sacar la longitud de un string
Para sacar la longitud de un **string** en Javascript, tenemos el método **length**.
```js
const frase = 'Soy David Llamas Román, desarrollador web, creador de contenido y emprendedor'

console.log(frase.length)
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Convertir todas las letras a minúsculas
Para hacer que todas las letras pasen a ser minúsculas independientemente de si estaban en mayúsculas o no, tenemos el método **toLowerCase()**.
```js
const frase = 'Soy David Llamas Román, desarrollador web, creador de contenido y emprendedor'

console.log(frase.toLowerCase())
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Convertir todas las letras a mayúsculas
Para hacer que todas las letras pasen a ser mayúsculas independientemente de si estaban en minúsculas o no, tenemos el método **toUpperCase()**.
```js
const frase = 'Soy David Llamas Román, desarrollador web, creador de contenido y emprendedor'

console.log(frase.toUpperCase())
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Coger una parte de un string
Para coger y, por ejemplo, imprimir por consola una parte de un **string** y no el **string** completo, tenemos que utilizar el método **substring**. Este método va a tener 2 parámetros, el primero será el índice que nos indicará desde dónde queremos empezar el **string** y el segundo. Este último será el índice que nos indicará dónde queremos terminar el **string**. Si te estás preguntando que cómo sabemos qué estamos seleccionando con un índice u otro, decirte que va a haber una combinación de índices por cada letra. Por ejemplo, la primera letra la vamos a sacar con **substring(0, 1)**, la segunda letra con **substring(1, 2)**. En el caso de que tengamos una frase y queramos sacar un fragmento empezando por el principio de esta, vamos a poner como primer parámetro el 0 y como último el número de letras que va a tener el fragmento que queremos sacar.
```js
const frase = 'Soy David Llamas Román, desarrollador web, creador de contenido y emprendedor'

console.log(frase.substring(0, 22))
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Operaciones con Numbers
### Operaciones básicas
| Operación | Suma | Resta | Multiplicación | División | Módulo (Resto división) | Elevar a |
| --------- | ---- | ----- | -------------- | -------- | ----------------------- | -------- |
| Operador  | +    | -     | *              | /        | %                       | **       |

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Problemas de precisión
A la hora de hacer cálculos, por ejemplo, con decimales, en JavaScript, podríamos enfrentar algún problema de precisión como el que se muestra a continuación:
```js
console.log(0.1 + 0.2) // te devuelve 0.30000000000000004
```
Este problema de precisión ocurre debido al estándar que usa el lenguaje para representar los números de punto flotante (decimales), en este caso, el IEEE 754 de 64 bits. Algunos decimales, como los que hemos visto en el ejemplo anterior, no se representan de forma exacta en binario, ya que estos son periódicos y tienen que ser trucados. Por tanto, el resultado de la operación no va a ser exacto.

Y... ¿Esto ocurre con más números?

Sí, hay más casos donde la representación binaria del número no es exacta. El problema es que, en muchos casos, esta diferencia es tan pequeña que, a la hora de aproximar, se la "come" (entre comillas) y es inapreciable en cálculos tan simples como una suma.

Bueno, estos problemas de precisión tendrán alguna solución, ¿no?

Pues sí, tenemos mecanismos dentro del lenguaje para poder solucionar esto. Los veremos a continuación.

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### toFixed
**toFixed()** es un método que tenemos en JavaScript que nos sirve para "redondear" un número. Lo pongo entre comillas el concepto "redondear", ya que nos encontramos al utilizar este método con algunas peculiaridades. Como nos podemos imaginar leyendo el nombre del método, este lo que hace en sí es permitirnos fijar el número de decimales de un número. Si le pasas como parámetro un 2, este va a tener 2 decimales como máximos, si le pasas 1, tendrá 1... Bien, pues, para hacer eso, no se tienen en cuenta las reglas del redondeo al pie de la letra. Se redondea el número al valor más cercano siempre y cuando este tenga más decimales de los que se han especificado.
```js
(0.55).toFixed(1) // en vez de pasar a ser 1, pasa a ser 0.6
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Redondear
También encontramos otras formas de redondeo en JavaScript:
- **Math.round()**
  Con este objeto **Math** y su método **round()**, podemos redondear al entero más cercano siguiendo las reglas de redondeo tradicionales.
  ```js
  Math.round(0.55) // devuelve 1
  ```

- **Math.floor()**
  Con el método **floor()** del objeto **Math**, podemos redondear al entero más bajo.
  ```js
  Math.floor(0.55) // devuelve 0
  ```

- **Math.ceil()**
  Con el método **ceil()** del objeto **Math**, podemos redondear al entero más alto.
  ```js
  Math.ceil(0.55) // devuelve 1
  ```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Truncar
Otra forma que tenemos de solucionar este error de precisión es truncando. Con el método **trunc()** del objeto **Math** podemos realizar dicha operación.
```js
Math.trunc(0.55) // devuelve 0
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Operaciones avanzadas
Con el objeto **Math**, también podemos realizar operaciones más avanzadas que no podemos hacer, a veces, simplemente utilizando los operadores aritméticos comunes que utilizamos para las operaciones más básicas.

#### Raíz cuadrada
Para realizar una raíz cuadrada, tenemos que hacer uso del método **sqrt()** del objeto que ya conocemos (**Math**).
```js
Math.sqrt(4) // devuelve 2
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Valor absoluto
Para sacar el valor absoluto de un número, también tenemos un método en el objeto **Math**. Este es **abs()**.
```js
Math.abs(-1) // devuelve 1
``` 

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### Sacar un número aleatorio
Por último, si queremos sacar un número aleatorio, podemos hacerlo con el método **random()** del objeto **Math**.
```js
Math.random() // te devuelve un número random
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Conversión de tipos de datos
### Explícita
#### De X a String
Para convertir un **number** y que pase a ser un **string**, tenemos que utilizar la función global **String()**. Esta también es capaz de convertir **boolean** (true y false), **null**, **undefined** y **array**.
```js
String(1) // devuelve '1' (string)

String(1.5) // devuelve '1.5' (string)

String(true) // devuelve 'true' (string)

String(false) // devuelve 'false' (string)

String(null) // devuelve 'null' (string)

String(undefined) // devuelve 'undefined' (string)

String([1, 2, 3]) // devuelve '1, 2, 3' (string)
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### De X a Boolean
Para convertir un **string** o un **number** a **boolean**, tenemos que utilizar la función global **Boolean()**. Podemos pensar que, simplemente, tenemos que poner un **string** 'true' o 'false', pero no va así. De hecho, si pones un **string** 'false', lo que te va a devolver es **true**.
```js
Boolean('') // devuelve false (boolean)

Boolean('...') // devuelve true (boolean)

Boolean(1) // devuelve true (boolean)

Boolean(0) // devuelve false (boolean)

Boolean(null) // devuelve false (boolean)

Boolean(undefined) // devuelve false (boolean)
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### De X a Number
Para convertir un **string** y que pase a ser un número, tenemos que utilizar la función global de JavaScript correspondiente y hago énfasis en esta última palabra, ya que hay 3 funciones globales para hacer esto, **parseInt()**, **parseFloat()** y **Number**. El usar uno u otro, como ya te lo puedes estar imaginando, va a depender de si queremos convertir el **string** a decimal o a entero y de si queremos convertir otros tipos de datos a número.
- **parseInt()**
  Es el que nos hace la conversión a entero.
  ```js
  parseInt('1') // devuelve 1 (number)
  ```

- **parseFloat**
  Es el que nos hace la conversión a decimal.
  ```js
  parseFloat('1.5') // devuelve 1.5 (number)
  ```

- **Number()**
  Nos permite convertir a número **string**, **boolean** (true y false), **null** y **undefined**.
```js
Number('1') // devuelve 1 (number)

Number('1.5') // devuelve 1.5 (number)

Number(true) // devuelve 1 (number)

Number(false) // devuelve 0 (number)

Number(null) // devuelve 0 (number)

Number(undefined) // devuelve NaN (Not a Number)

Number('hola') // devuelve NaN (Not a Number)
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### De X a Array
Para convertir una sucesión de datos a **array**, tenemos que utilizar la función global **Array()**.
```js
Array('hola', 1, 1.5, true, false, null, undefined) // devuelve ['hola', 1, 1.5, true, false, null, undefined]
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

#### De X a Object
Para convertir cualquier dato a un **objeto**, tenemos que utilizar la función global **Object()**.
```js
Object(1) // Number {1}

Object(1.5) // Number {1.5}

Object('hola') // String {'hola'}

Object(true) // Boolean {true}

Object(false) // Boolean {false}

Object(null) // {}

Object(undefined) // {}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Implícita
Este tipo de conversión es la que el lenguaje hace por sí mismo cuando se encuentra en ciertas situaciones que requieren de esta gestión de los datos. Por ejemplo, cuando se topa con un **number** y un **string**, el lenguaje decide convertir el **number** en un **string** y concatenar ambos **string**.
```js
console.log('1' + 0) // devuelve 10

console.log('1' + false) // devuelve 1false

console.log(1 + false) // devuelve 1 | (1 + 0)
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Otros tipos de de operadores
### Operadores de comparación

| Operador | Función                                                                                                  |
| -------- | -------------------------------------------------------------------------------------------------------- |
| ==       | Se utiliza para comparar 2 valores y ver si son iguales o no                                             |
| ===      | Se utiliza para comparar 2 valores y ver si son iguales o no, también tiene en cuenta los tipos de datos |
| !=       | Se utiliza para ver si 2 valores son distintos o no                                                      |
| !==      | Se utiliza para ver si 2 valores son distintos o no, también tiene en cuenta los tipos de datos          |
| >        | Se utiliza para ver si 1 valor es mayor que otro                                                         |
| <        | Se utiliza para ver si 1 valor es menor que otro                                                         |
| >=       | Se utiliza para ver si 1 valor es mayor o igual que otro                                                 |
| <=       | Se utiliza para ver si 1 valor es menor o igual que otro                                                 |

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Operadores lógicos

| Operador | Significado | Función                                                                                                                                         |
| -------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| &&       | AND         | Se utiliza para unir comparaciones realizadas con operadores de comparación, en este caso, las 2 comparaciones que unimos se tienen que cumplir |
| \|\|     | OR          | Se utiliza para unir comparaciones con operadores de comparación, en este caso, únicamente se tiene que cumplir 1 comparación                   |
| !        | NOT         | Se utiliza para invertir el resultado de una comparación realizada con operadores de comparación                                                |

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

## Estructuras de control
### If, else y else if

- **if**
  ```js
  if (condición) {
    // código
  }
  ```

- **else**
  ```js
  if (condición) {
    // código
  } else {
    // código
  }
  ```

- **else if**
  ```js
  if (condición) {
    // código
  } else if (condición) {
    // código
  } else (condición) {
    // código
  }
  ```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Switch
```js
let number = Number(prompt("MENU\n    1. Hola mundo\n    2. Adiós"))

switch (number) {
  case 1:
    console.log("Hola mundo")
    break
  case 2:
    console.log("Adiós")
    break
  default:
    console.log("Introduce un valor correcto la próxima vez")
    break
}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### For
```js
for (let i = 0; i < 11; i++) {
  console.log(i)
}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### For of
```js
const frutas = ['Fresa', 'Coco', 'Piña']

for (let fruta of frutas) {
  console.log(fruta + "\n")
}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### For in
```js
const persona = { nombre: 'David', apellidos: 'Llamas Román', edad: 19 }

for (let dato in persona) {
  console.log(dato)
}

for (let dato in persona) {
  console.log(persona[dato])
}
```

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### While
```js
let i = 0;

while (i < 10) {
  console.log(i)
  i++
}
```
<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>

### Do while

<p align=right><a href="#aprende-javascript-desde-0"><strong>Go up ⬆</strong></a></p>
