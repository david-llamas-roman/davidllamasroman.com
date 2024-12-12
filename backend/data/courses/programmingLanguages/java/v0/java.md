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

# Aprende Java desde 0

> [!IMPORTANT]
> Para realizar este curso no se requiere ningún tipo de conocimiento previo de programación. De hecho, este curso no está pensado como el de [JavaScript](../../js/v0/js.md) (que está diseñado para aprender lo que es el lenguaje, pero no para aprender a programar como tal), el objetivo de este curso es enseñar a programar, enseñar los conceptos. En lugar de utilizar pseudocódigo para ello, lo hacemos con un lenguaje de programación que tiene su utilidad y su mercado.

> [!WARNING]
> Si ya sabes programar y quieres aprender únicamente el lenguaje, también este curso es para tí. Lo único a mencionar es que, en ciertos momentos, te puede resultar algo aburrido teniendo en cuenta que nos vamos a parar en cosas como, por ejemplo, la definición de "variable", de "constante"...

> [!NOTE]
> 🔴 El curso está en [**vídeo en YouTube**]()
>
> 💻 También lo tenemos en [**davidllamasroman.com**]()

- [Aprende Java desde 0](#aprende-java-desde-0)
  - [Requisitos](#requisitos)
    - [Recomendaciones](#recomendaciones)
  - [Introducción](#introducción)
    - [¿Qué es Java?](#qué-es-java)
    - [¿Qué es la JVM?](#qué-es-la-jvm)
    - [¿Qué es la compilación JIT?](#qué-es-la-compilación-jit)
    - [¿Qué es un paradigma?](#qué-es-un-paradigma)
    - [¿Qué es la programación orientada a objetos?](#qué-es-la-programación-orientada-a-objetos)
  - [Primeros pasos](#primeros-pasos)
    - [Objetos](#objetos)
      - [¿Qué es un objeto?](#qué-es-un-objeto)
    - [Clases](#clases)
      - [¿Qué es una clase?](#qué-es-una-clase)
      - [¿Cómo crear una clase en Java?](#cómo-crear-una-clase-en-java)
    - [Métodos](#métodos)
      - [¿Qué es un método?](#qué-es-un-método)
      - [¿Qué es el método main?](#qué-es-el-método-main)
  - [Variables](#variables)
    - [¿Qué es una variable?](#qué-es-una-variable)
    - [Java con tipado dinámico](#java-con-tipado-dinámico)
    - [¿Qué es una constante?](#qué-es-una-constante)
    - [¿Definir o declarar? Diferencias](#definir-o-declarar-diferencias)
  - [Tipos de datos](#tipos-de-datos)
    - [Primitivos](#primitivos)
      - [byte](#byte)
      - [short](#short)
      - [int](#int)
      - [long](#long)
      - [float](#float)
      - [double](#double)
      - [char](#char)
      - [boolean](#boolean)
    - [De referencia](#de-referencia)
      - [String](#string)
      - [Clases Wrapper](#clases-wrapper)
      - [Clases](#clases-1)
      - [Arrays](#arrays)
      - [Matrices](#matrices)
  - [Operadores](#operadores)
    - [Aritméticos](#aritméticos)
    - [Asignación](#asignación)
    - [Unarios](#unarios)
    - [Incremento](#incremento)
    - [Decremento](#decremento)
    - [Relacionales](#relacionales)
    - [Lógicos](#lógicos)
    - [Ternario](#ternario)
    - [Instanceof](#instanceof)
  - [Paréntesis 1: Creación de un objeto](#paréntesis-1-creación-de-un-objeto)
  - [Estructuras de control](#estructuras-de-control)
    - [If](#if)
    - [Else](#else)
    - [Else if](#else-if)
    - [Switch case](#switch-case)
    - [For](#for)
    - [While](#while)
    - [Do while](#do-while)
  - [Programación orientada a objetos](#programación-orientada-a-objetos)
    - [Propiedades](#propiedades)
    - [Constructores](#constructores)
    - [Getters y Setters](#getters-y-setters)
    - [Encapsulamiento](#encapsulamiento)
    - [Sobrecarga](#sobrecarga)
    - [Herencia](#herencia)
    - [Clases Abstractas](#clases-abstractas)
    - [Interfaces](#interfaces)

## Requisitos
### Recomendaciones

## Introducción
### ¿Qué es Java?

### ¿Qué es la JVM?

### ¿Qué es la compilación JIT?

### ¿Qué es un paradigma?

### ¿Qué es la programación orientada a objetos?
La programación orientada a objetos es un paradigma que se basa en llevar los objetos de la vida real a un mundo virtual. Por ejemplo, podemos hacer una aplicación de contabilidad desde donde se puedan manejar "Facturas", podemos hacer una aplicación para una empresa desde donde el responsable indicado pueda gestionar los empleados...

## Primeros pasos
### Objetos
#### ¿Qué es un objeto?
Un objeto es una entidad, una cosa, donde se unen los conceptos "Estado" y "Comportamiento". El estado se resume en las características que tiene un objeto y el comportamiento se resume en la relación e interacción de un objeto con otro. Por ejemplo, un coche puede tener como características la marca, el modelo y el año de fabricación y su comportamiento puede ser contar la distancia que recorre dependiendo de la ruta de un viaje (Sevilla - Madrid, Sevilla - Castellón, Sevilla - Barcelona, Sevilla - Málaga...). También podemos tener en el comportamiento algo como: "girar a la derecha", "girar a la izquierda", "seguir recto", "frenar", "aparcar", "acelerar"...

### Clases
#### ¿Qué es una clase?
Una clase es el prototipo que vamos a utilizar para crear un objeto, quizás se entienda mejor si extrapolamos esto a la cocina. Imaginémonos que queremos hacer galletas y tenemos 3 moldes con distintas formas (árbol, estrella y círculo). Los ponemos en una bandeja y vertemos la masa, hemos hecho 3 masas distintas, cada una con unas pepitas de un chocolate distinto (negro, con leche y blanco). Las horneamos y, cuando las sacamos del horno y las desmoldamos, tenemos una galleta con forma de árbol y pepitas de chocolate negro, una galleta con forma de estrella y pepitas de chocolate con leche y, por último, una galleta redonda con pepitas de chocolate blanco. En este caso (para simplificarlo mucho), los objetos serían 3:
- Galleta con forma de árbol.
- Galleta con forma de estrella.
- Galleta con redonda.

La única característica que tienen estos son las pepitas y va a decirnos el tipo de chocolate que va a tener la galleta (en forma de pepitas). Aquí, no hemos definido ninguna acción.

Y, ¿dónde aparece por aquí el concepto "clase"?

Pues, en este ejemplo, los moldes son las clases. Tú creas una galleta con forma de árbol, porque tienes un molde con forma de árbol.

#### ¿Cómo crear una clase en Java?
Para crear una clase, tenemos que crear un archivo **.java** y, dentro, tenemos que poner las palabras reservadas **public class** y, al lado, el nombre que le queramos dar a la clase.
```java
public class GalletaArbol() {
  // características
  public String pepitas; // 'public' y 'String' lo veremos más adelante

  // comportamiento
  // En este caso, no tenemos
}
```

También podríamos encontrar lo siguiente:
```java
class GalletaEstrella() {
  // [...]
}
```
La diferencia, es que, antes, la clase estaba siendo creada como "pública" y, ahora, la clase se está creando como "default". Esto supone algunas diferencias bastante notorias en cuanto, por ejemplo, a la manera de nombrar las clases. Por ejemplo, cuando una clase es "pública, va a tener el mismo nombre que el archivo y no te permite que sea distinto. En cambio, si una clase es "default", esta puede tener sin problemas un nombre distinto al del archivo que la contiene. Esto se conoce como un "modificador" y este concepto lo veremos más adelante, por tanto, cerramos este pequeño paréntesis aquí.

> [!IMPORTANT]
> - Simplemente, decir que esto no suele ser tan común, lo más común es que una clase sea pública.
> - En cualquier caso, para nombrar una clase, tenemos que empezar a escribir su nombre siempre con mayúsculas.

> [!NOTE]
> Desde el IDE, normalmente, también vamos a tener una opción para crear una clase. Lo que suele hacer dicha opción es crearte un **.java** con una **public class** con el nombre que tu escribas.

### Métodos
#### ¿Qué es un método?
#### ¿Qué es el método main?

## Variables
### ¿Qué es una variable?
Una variable es un espacio en memoria que reservamos para guardar algo, ese algo puede ser un texto, un número, no lo sabemos, pero es que va a ser irrelevante. Como si de una reserva en un restaurante se tratase, tenemos que asignar un nombre a ese espacio que hemos reservado. Este va a ser el nombre de la variable y, cada vez que la llamemos, vamos a acceder a lo que hayamos guardado.

A una variable, y más en un lenguaje fuertemente tipado como este, tenemos que decirle qué tipo de valor vamos a guardar dentro ([tipos de datos](#tipos-de-datos), los veremos en breves). Otra cosa a tener en cuenta es que nosotros no vamos a poder nombrar a una variable con palabras reservadas del lenguaje y los nombres tienen que ser descriptivos, es decir, cuando leemos el nombre de una variable, tenemos que poder entender o suponer el valor que tiene dentro o, mejor dicho, el tipo de valor.

Ahora, voy a pedirte que analices el nombre que se le da a este concepto, "variable". Este hace referencia a la palabra "variar" y es que, nosotros, vamos a poder cambiar el valor de esta por otro que sea del mismo tipo. Por ejemplo, tenemos un texto que dice "Hola", pues podemos hacer que el texto pase a ser "Hola Mundo". Esta acción se conoce como reasignar el valor de una variable, ya que, el momento en el que le damos un valor a una variable, estamos asignándole un valor.

Aquí en Java, una variable va a lucir de esta manera:
```java
TipoDeDato nombreDeLaVariable = valor;
```
- **TipoDeDato**
  Se sustituirá por uno de los distintos [tipos de datos](#tipos-de-datos) que vamos a ver.

- **nombreDeLaVariable**
  Se sustituirá por el nombre que, como hemos dicho antes, queremos que tenga el espacio de memoria que estamos reservando en el momento de creación de una variable.

- **valor**
  Se sustituirá por el valor que vamos a asignar a la variable. Este tiene que ser del mismo tipo que el tipo de dato que estamos poniéndole a la variable, si estamos diciendo que esta va a contener un texto, no podemos luego poner como valor un número.

### Java con tipado dinámico
Respondiendo a la pregunta anterior, hemos hecho referencia a que Java es un lenguaje fuertemente tipado y, por ende, las variables se definen de la forma que explicamos. Bien, pues aquí me veo obligado a matizar un poco eso y, ojo, no porque lo que se haya dicho anteriormente esté mal o equivocado. En absoluto, esto se debe a que tenemos que comentar una forma relativamente nueva que tiene Java para definir las variable con un tipado dinámico, es decir, sin especificar el tipo de valor que va a contener. Si le pones, por ejemplo, un texto, tomará el texto. Por otro lado, si le pones un número, tomará el número. Se va a adaptar al tipo de valor sin nosotros tener que hacer nada. Para ello, tenemos que utilizar la palabra reservada **var**.
```java
var numero = 10;
var texto = "Hola";
var letra = 'D';
```

### ¿Qué es una constante?
Una constante es una variable cuya reasignación de valor no está permitida y nunca va a ser efectiva, de hecho, siempre que lo intentamos nos saltará un error. En Java, las constantes se definen igual que una variable, pero con la palabra reservada **final** a la izquierda y el nombre siempre en mayúsculas.
```java
final TipoDeDato CONSTANTE = valor;
```
Algo que hay que tener en cuenta de las constantes es que siempre se tienen que inicializar, no se pueden declarar en un sitio sin asignarle un valor y, posteriormente, en otro sitio asignárselo.

### ¿Definir o declarar? Diferencias
- **Definir**
  El término "definir" aplicado a las variables y constantes se refiere a que en la misma línea estamos declarando la variable (creando la variable, reservando un espacio en memoria) y, también, estamos asignándole un valor.

- **Declarar**
  El término "declarar" aplicado a las variables se refiere a que en un sitio estamos creando la variable (reservando un espacio en memoria), pero sin asignarle ningún valor y, en otro sitio, (normalmente, en otra línea de más abajo) le asignamos su valor correspondiente.

Como se puede intuir, las variables se pueden definir y/o declarar. En cambio, las constantes simplemente se pueden definir.

## Tipos de datos
Los tipos de datos, como ya hemos llegado a mencionar en algún punto de este curso anterior a este, es la forma que tenemos de decirle tanto a las variables como a las constantes qué es en sí el valor que se le puede asignar, el tipo de valor.

### Primitivos
Los primitivos son unos tipos de datos que únicamente contienen un valor, dicho valor se almacena en la RAM como cualquier tipo de dato. Eso sí, la región de la RAM en la que se almacena es una región concreta que está preparada para almacenar los datos así, en su estado más puro. Dicha región se denomina Stack. <!-- matizar -->

#### byte
#### short
#### int
#### long
#### float
#### double
#### char
#### boolean

### De referencia
#### String
#### Clases Wrapper
#### Clases
#### Arrays
#### Matrices

## Operadores
### Aritméticos
### Asignación
### Unarios
### Incremento
### Decremento
### Relacionales
### Lógicos
### Ternario
### Instanceof

## Paréntesis 1: Creación de un objeto
Como para crear un objeto no nos bastaba con conocer su definición, también necesitábamos saber como podíamos definir una variable, conocer los tipos de datos y que no nos suene a chino el concepto "método main". Una vez ya sabemos todo esto, podemos crear un objeto.

Para crear un objeto tenemos que definir una variable con un tipo de dato de clase y, a la derecha justo detrás del igual, tenemos que utilizar la palabra reservada **new** acompañada del nombre de la clase que hemos utilizado como tipo de dato para la definición de la variable. Lo que hace **new** es crear una instancia, inicializa el objeto y lo guarda en la memoria. En la variable, no se está guardando el objeto en sí, lo que se guarda es la referencia a la dirección de memoria donde se encuentra el objeto.

Y, ¿dónde aparece "método main"?

Bien, el método main es donde vamos a crear el objeto. Un objeto no se crea en la misma clase que actúa de "molde", este se crea en otra clase y, en esta, vamos a tener un "método main". Dentro de este es donde crearemos el objeto, esto se debe a que, para nosotros, va a ser nuestra pizarra en blanco. De esta manera, no nos centraremos en otra cosa que no sea la creación del objeto en sí.
```java
public class CreacionObjeto() {
  public static void main(String[] args) {

    // volviendo al ejemplo de las galletas
    GalletaArbol galletaArbol = new GalletaArbol(); // recuerda, en este contexto, estamos creando una galleta con forma de árbol

  }
}
```
Viendo este ejemplo te puede surgir una duda, ¿cómo le dices al objeto que las pepitas sean de chocolate negro? Esto se haría pasándole el valor que va a tener esa característica "pepitas" como parámetro (entre los paréntesis de **GalletaArbol()**), pero, para hacer esto, tenemos que entender primero otros conceptos como los "constructores" y estos los vamos a ver más adelante en el curso. Simplemente, quédate con lo que es en sí la creación de un objeto.

## Estructuras de control
### If
### Else
### Else if
### Switch case
### For
### While
### Do while

## Programación orientada a objetos
### Propiedades
### Constructores
### Getters y Setters
### Encapsulamiento
### Sobrecarga
### Herencia
### Clases Abstractas
### Interfaces