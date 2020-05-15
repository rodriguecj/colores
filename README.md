# Farben

Este proyecto fue creado mediante [Angular CLI](https://github.com/angular/angular-cli) version 9.0.5.

## Descripción del proyecto

La funcion de esta aplicaciones esta en mostrar colores estandarizados para utilizarlos en proyectos de páginas web, nuevos diseños, flyers, entre otros. El color puede ser seleccionado por un click en la tarjeta y este automaticamente se copiara en hexadecimal en el portapapeles del usuario para poder pegar en cualquier lugar. La data de los colores se obtiene haciendo peticion a una API y esta es manipulada en la aplicacion mediante los operadores de RxJS.

## Tecnología usadas

- Angular version 9 | Framework de javascript.
- Sass | Preprocesador de css.
- RxJS | Libreria para la programacion reactiva usando Observables.
- Angular material.

## Instalaciones necesarias

- [Node.js](https://nodejs.org/es/)

- [Angular CLI](https://github.com/angular/angular-cli)

`npm install -g @angular/cli`

- Reconstruir modulos de Node en el proyecto

`npm install`


## Servidor de desarrollo

Ejecutar `ng serve -o` para levantar el servidor de desarrollo. Automaticamente se abrirá una ventana de 
navegación `http://localhost:4200/`. La aplicación se volverá a cargar automáticamente si cambia alguno de los archivos de origen.


## Build

Ejecutar `ng build` para compilar el proyecto. Los artefactos de compilación se almacenarán en el directorio `dist /`. Use el indicador `--prod` para una compilación de producción.

## Ejecutar pruebas unitarias

Ejecutar `ng test` para ejecutar las pruebas unitarias a través de [Karma](https://karma-runner.github.io).

## Ejecutar pruebas end-to-end

Ejecutar `ng e2e` para ejecutar las pruebas end-to-end via [Protractor](http://www.protractortest.org/).

