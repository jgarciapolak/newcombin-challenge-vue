# NewCombin Challenge Vue

## Instrucciones de uso

A continuación, se presentan las instrucciones de uso para realizar pruebas a nivel local y desplegar el proyecto:

&nbsp;

### Dependencias

Para poder realizar pruebas a nivel local y desplegar el proyecto, el usuario debe disponer en su sistema las siguientes dependencias:

&nbsp;

- [NodeJS v10+](https://nodejs.org/es/)

```shell
npm install
```

&nbsp;

### Directorios

A continuación, se presenta la estructura de directorios del proyecto:

```shell
/   # Directorio raíz.
|- src/assets                       # Componentes estáticos (estilos, imágenes)
|- src/components                   # Componentes utilizados dentro de las vistas
|- src/router                       # Router que permite la navegación
|- src/views                        # Vistas/Pantallas
|- src/App.vue                      # Componente inicial
|- .env                             # Archivo de configuración
```

&nbsp;

Crear y configurar el archivo .env la url del backend (se provee un ejemplo)

## Prueba Local

Para realizar pruebas locales debe ejecutar el siguiente script

```shell
npm run serve
```

## Despliegue Manual

Para realizar despliegues manuales debe ejecutar el siguiente script

```shell
npm run build
```
