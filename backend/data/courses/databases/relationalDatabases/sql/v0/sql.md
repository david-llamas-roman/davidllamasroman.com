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

# Aprende SQL desde 0

> [!IMPORTANT]
> Para realizar este curso no es necesario tener ningún tipo de conocimientos previos.

> [!WARNING]
> En este curso, vamos a utilizar MariaDB (MySQL). Decirte que, cada sistema de gestión de bases de datos es diferente y, por tanto, el código SQL que vamos a escribir para este sistema en concreto, tiene diferencias respecto al código SQL para PostgreSQL o para Oracle Database.

> [!NOTE]
> 🔴 El curso está en [**vídeo en YouTube**]()
>
> 💻 También lo tenemos en [**davidllamasroman.com**]()

- [Aprende SQL desde 0](#aprende-sql-desde-0)
  - [Requisitos](#requisitos)
    - [Recomendaciones](#recomendaciones)
  - [Introducción](#introducción)
    - [¿Qué es una base de datos?](#qué-es-una-base-de-datos)
    - [¿Qué es una base de datos relacional?](#qué-es-una-base-de-datos-relacional)
    - [¿Qué es un sistema de gestión de bases de datos?](#qué-es-un-sistema-de-gestión-de-bases-de-datos)
    - [¿Qué es SQL?](#qué-es-sql)
      - [Dialectos SQL](#dialectos-sql)
      - [Extensiones de SQL](#extensiones-de-sql)
    - [Primeros pasos](#primeros-pasos)
      - [Crea tu primer archivo SQL](#crea-tu-primer-archivo-sql)
  - [Consultas](#consultas)
    - [¿Qué es una consulta?](#qué-es-una-consulta)
    - [SELECT](#select)
    - [WHERE](#where)
    - [OPERATORS](#operators)
    - [AND](#and)
    - [OR](#or)
    - [NOT](#not)
    - [BETWEEN](#between)
    - [IN](#in)
    - [LIKE](#like)
    - [ORDER BY](#order-by)
    - [GROUP BY](#group-by)
    - [HAVING](#having)
    - [DISTINCT](#distinct)
    - [SUM](#sum)
    - [AVG](#avg)
    - [COUNT](#count)
    - [ARITHMETIC](#arithmetic)
    - [MATH FUNCTIONS](#math-functions)
    - [DIVISION](#division)
    - [DATE FUNCTIONS](#date-functions)
    - [STRING FUNCTIONS](#string-functions)
    - [NULL](#null)
    - [JOINS](#joins)
      - [SELF-JOINS](#self-joins)
    - [UNION](#union)
    - [CASE](#case)
    - [WINDOW](#window)
    - [RANKING](#ranking)
    - [LEAD](#lead)
    - [LAG](#lag)
  - [Subconsultas](#subconsultas)
    - [¿Qué es una subconsulta?](#qué-es-una-subconsulta)

## Requisitos
### Recomendaciones

## Introducción
### ¿Qué es una base de datos?
Una base de datos en un conjunto de datos organizados y almacenados y que pueden, o no, estar relacionados entre sí. Estas surgieron para solucionar un problema y es que, antes, cada persona podía organizar los datos que tuviese de, por ejemplo, su negocio de cualquier manera. Esto, a parte de dificultar a todo lo que es la gestión, la organización y la actualización de datos, hacía que el acceso a ellos fuese muy lento. Entonces, con el tiempo surgió ese pensamiento de crear una cosa que mitigase ciertos problemas en cuanto a infraestructura pero que, además, plantase un estándar en cuanto a todo lo que tiene que ver con los "datos".

### ¿Qué es una base de datos relacional?
Una vez hemos definido qué es una base de datos, vamos a ir un poquito más allá. La idea de base de datos como tal es la que hemos explicado anteriormente, pero... ¿Nadie se ha fijado en nada? Vamos a centrarnos en el concepto "relación" ("...y que pueden, o no, estar relacionados...) y es que, los datos de una base de datos pueden tener cosas en común. Esas cosas que tienen en común hacen que los datos tengan un punto por el que se unen, por el que se relacionan, por la que X organización cobra un sentido u otro.

Los datos en las bases de datos se organizan mediante tablas, tablas que tienen una serie de columnas. Estas columnas van a ser los atributos de una entidad, algo así como las características de un ser vivo o de un objeto (esto de todas formas lo veremos más a fondo en el trascurso del curso) y, nosotros, vamos a rellenar posteriormente las tablas con una serie de datos. Estos conjuntos de datos con los que vamos a rellenar cada tabla van a ser los que van a definir las filas de estas.

Ahora, vamos a presentar un pequeño ejemplo para enlazar con el final de la explicación. Tenemos una entidad (tabla) llamada "Persona" y, esta, tiene un atributo (columna) llamado "dni". Luego vamos a imaginarnos que estamos organizando una fiesta privada y tenemos que crear una lista de invitados, por tanto, vamos a tener una entidad (tabla) llamada "Lista" con un atributo llamado "dni_persona". ¿Lo ves?

Ahí sale a relucir el concepto "relación", ya que la entidad (tabla) "Persona" se relaciona con la que se llama "Lista" mediante los atributos (columnas) "dni" y "dni_persona". Si no te has dado cuenta, en "Lista" vamos a tener todos los "dni" de las personas, aplicándolo al ejemplo, estamos construyendo nuestra lista de invitados para la fiesta. Claro que, ahora puedes decir que faltaría poner el nombre, pues tendríamos en "Persona" un atributo (columna) llamado "nombre" y en "Lista" quizás uno llamado "nombre_persona". Esto lo podemos hacer tan grande como queramos, prácticamente no hay límites.

Bien, entonces, ¿ya sabes qué es una base de datos relacional?

Una base de datos relacional no es otra cosa que, una base de datos, que tiene los datos interrelacionados. Esta es una de las evoluciones que hubieron en su momento de las bases de datos originales y consigo también trae una mejora en la velocidad de acceso a datos.

### ¿Qué es un sistema de gestión de bases de datos?
Está muy bien todo esto, pero... ¿Cómo vamos a crear, a borrar o a interactuar con una base de datos? Pues para esto tenemos que acudir a los sistemas de gestión de bases de datos. Estos sistemas nos aportan una serie de reglas y una sintaxis determinada para poder interactuar con la base de datos y sus tablas. El concepto "interactuar" aquí es bastante amplio, ya que en este entra el acceso a los datos, la gestión de las tablas y sus datos y la gestión de la base de datos como tal.

Los sistemas de gestión de bases de datos también garantizan de cierta manera la seguridad de las bases de datos y sus datos, integrando funciones que tienen como eso como propósito. También suelen asegurar la integridad de los datos, así como, la recuperación de estos en caso de fallos. La integridad de datos es un principio fundamental en esto de las bases de datos, traduciéndolo a un lenguaje más cotidiano, esto quiere decir que los datos van a mantenerse organizados y actualizados a lo largo del tiempo. También garantiza que los datos sean correctos y estén completos, es decir, evita que puedan haber, por ejemplo, datos duplicados en determinadas situaciones en las que no interesa que esto ocurra.

La mayoría de los sistemas de gestión de bases de datos funcionan con el estándar SQL, este nos permite realizar operaciones CRUD (Create, Read, Update and Delete) con una sintaxis clara y, además, estandarizando estos procesos. Esto último que acabamos de mencionar, hace referencia a la gestión e interacción con los datos de una base de datos. Cabe recalcar que, con SQL, vamos a poder interactuar y realizar algunas acciones de la base de datos en sí, por ejemplo, su creación.

Por último, recalcar que los sistemas de bases de datos que utilizan SQL son los sistemas de bases de datos relacionales. Sí, adivina, son los que se utilizan en el ámbito de las bases de datos relacionales.

### ¿Qué es SQL?
SQL viene de las siglas en inglés de Structured Query Language, en español, Lenguaje de Consulta Estructurada. Este, como ya hemos mencionado anteriormente, es el lenguaje que vamos a utilizar para interactuar con los sistemas de gestión de bases de datos relacionales.

Por ejemplo, ¿con qué vamos a crear una base de datos? ¿Con qué vamos a decir qué base de datos vamos a utilizar? ¿Con qué vamos a seleccionar los datos que queremos mostrar de la base de datos? ¿Con qué vamos a actualizarlos? ¿Con qué vamos a crear tablas? ¿Con qué vamos a editar la estructura de estas tablas? ¿Con qué vamos a borrar las tablas? Y... Por último, ¿con qué eliminaremos la base de datos?

Sí, la respuesta a todas estas preguntas es la misma y, adivinen, se resume en una palabra de 3 letras, S-Q-L (SQL).

Ahora, te tengo que dar una noticia que va a hacer que bajes de las nubes. Por mucho que sepas SQL y que este se utilice para interactuar con los distintos sistemas de gestión de bases de datos relacionales, no vas a saber interactuar con todos. Esto se debe a que son, como hemos mencionado anteriormente, "distintos".

Los sistemas de bases de datos relacionales pueden tener cosas en común, pero también pueden tener sus diferencias y, no solo en cuanto a las características de estos. Que haya cambios y diferencias en las características de los sistemas de gestión de bases de datos relacionales, implica que también haya cambios en la forma de interactuar con ellos, en el SQL.

#### Dialectos SQL
Con esto último que hemos mencionado, se nos abre un mundo que vamos a explicar lo más rápido y breve que podamos para tampoco detenernos mucho en esta parte. Los dialectos SQL son las variantes de SQL que surgen de cara a la adaptación de este para la interacción con un sistema de gestión de bases de datos relacional.

Como ya hemos mencionado, las diferencias se encuentran en los sistemas de gestión en sí, ya que unos implementan unas características y otros no. Por ejemplo, MariaDB es un fork de MySQL, pero, claro, ya ha llegado un punto donde hay unas diferencias considerables con MySQL puro. Con el paso del tiempo se han ido implementando nuevas características / funcionalidades, lo que ha hecho que esa pequeña brecha que los distanciaban (ya que uno es hijo de otro) se haga más grande. Esto mismo que acabamos de explicar con este ejemplo pasa con los demás. MySQL y MariaDB no tienen las mismas funcionalidades que Oracle Database o que PostgreSQL, al igual, que hay diferencias entre estos 2 últimos en sí y entre todos los que hemos nombrado y Microsoft SQL Server.

Eso sí, esto no es: "yo soy tal sistema de gestión de bases de datos relacional y hago lo que me de la gana". Todos tienen que seguir unos estándares establecidos por ANSI (American National Standards Institute) e ISO (International Organization for Standardization). No nos vamos a meter mucho más a fondo, vamos a ver una serie de nombres como ejemplo de estándares:
- SQL-86
- SQL-92
- SQL:1999
- SQL:2003

Estos estándares son lo considerablemente extensos y complejos como para que haya sistemas de gestión de bases de datos que se centren en la implementación de ciertas partes y no en la implementación del estándar completo.

Para terminar con esto decir que aquí no es donde se ve una diferencia tan grande en el SQL de, por ejemplo, MariaDB y Oracle Database (aunque, confirmo, hay cosas que son lo suficientemente diferentes como para saber hacer X con uno y no con el otro). Las diferencias más grandes nos las encontramos en las funciones avanzadas que puedan implementar cada sistema de gestión de bases de datos relacional.

#### Extensiones de SQL
Por segunda vez, con esto último que hemos mencionado, se nos ha abierto un nuevo camino por donde tirar que vamos a intentar cruzar rápidamente y de una forma no tan extensa. Estas funciones avanzadas de las que hablamos pueden requerir de una extensión del lenguaje SQL como tal, porque este se les quede corto para poder hacer X cosa. Esto da lugar a estas diferencias ya más grandes.

Desde diferencias en la sintaxis hasta diferencias en las funcionalidades que nos ofrecen. Vamos a ver unos ejemplos de extensiones de SQL:
- PL/SQL (Oracle)
  Es una extensión procedural de SQL que nos abre la puerta de la utilización de programación estructurada dentro de la base de datos (condiciones, estructuras de control...).
- T-SQL (SQL Server)
  Algo parecido a lo que hace PL/SQL (obviamente con sus correspondientes diferencias).
- Procedural Language en PostgreSQL
  Algo parecido a las 2 extensiones de SQL anteriores (repito, es de esperar que existan bastantes diferencias entre una y otra).

> [!IMPORTANT]
> Las diferencias entre el SQL utilizado en cada sistema de gestión de bases de datos relacional únicamente no se quedan en los dialectos y en las extensiones, va todavía mucho más allá. Esto realmente es algo donde no nos queremos meter tampoco muy a fondo, era simplemente para que vieses que el SQL no es algo tan genérico como para que aprendiéndolo sepas utilizar todos los sistemas de gestión que existen. Vamos a mencionar otras diferencias y dejamos esto por aquí para pasar a lo siguiente:
>
> - Tipos de datos
> - Consultas
> - Optimización de consultas
> - Manejo de transacciones y bloqueos

### Primeros pasos
#### Crea tu primer archivo SQL

## Consultas
### ¿Qué es una consulta?

### SELECT

### WHERE

### OPERATORS

### AND

### OR

### NOT

### BETWEEN

### IN

### LIKE

### ORDER BY

### GROUP BY

### HAVING

### DISTINCT

### SUM

### AVG

### COUNT

### ARITHMETIC

### MATH FUNCTIONS

### DIVISION

### DATE FUNCTIONS

### STRING FUNCTIONS

### NULL

### JOINS
#### SELF-JOINS

### UNION

### CASE

### WINDOW

### RANKING

### LEAD

### LAG


## Subconsultas
### ¿Qué es una subconsulta?