<h1 align="center"> ¡Más y más tipos! </h1>

<p align="center"><img src="https://i.stack.imgur.com/ghaLg.png"></p>

<h3 align="center"> ¿Qué son las enumeraciones en TypeScript? </h3>

Las enumeraciones son una herramienta que nos permite crear un conjunto de constantes nombradas para **describir un grupo de casos especifícos**, tales como los días de la semana, los meses del año, los tipos de errores posibles al accionar sobre una base de datos, etc. Las creamos con la palabra reservada `enum`, veamos cómo funciona:

    const enum PuntosCardinales {
        North = "N"
        South = "S"
        East = "E"
        West = "W"
    }

Básicamente estamos agrupando constantes inicializadas con valores a los cuales podemos acceder a través de la notación de punto. Esto permite estructurar datos de una forma muy ordenada y fácil de entender. Analicen bien el ejemplo de este repo para ver esto en un caso concreto.

<h1 align="center"> LINKS </h1>

- [ENUMS](https://www.typescriptlang.org/docs/handbook/enums.html#handbook-content)

- [RICK & MORTY API](https://rickandmortyapi.com/documentation/#episode)
