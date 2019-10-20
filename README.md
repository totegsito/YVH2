# YVH

Solución para: **Seedtag Codetest 2: Backend Engineer**

## Instalación

```bash
npm install
```

## Ejecución

```bash
npm run build && npm start
```

## Desarrollo

```bash
npm run dev
```

## Defensa de la prueba

Dado que ya realicé satisfactoriamente la prueba en otra ocasión, esta vez he querido optar por centrarme en 
la parte de Programación Orientada a Objetos. Es por ello que he escogido Typescript para la prueba. Es la *primera vez* que lo 
utilizo, por lo que si bien he resuelto la prueba, *no espero que sea la forma más eficiente ni mejor*, sólo se trata del acercamiento
que he sabido implementar dada mi experiencia con este superconjunto. 

Además, al igual que en la otra ocasión, he preferido desvincularme de express.js para el desarrollo y optar por 
un framework más ligero. En este caso he escogido Restify. 

En cuanto al cómo, he optado por crear una clase abstracta Protocol con un método abstracto ``apply`` que todos los protocolos
implementan, cada uno de forma distinta.   


```typescript
import assistAllies from "./assistAllies";
import avoidCrossfire from "./avoidCrossfire";
import avoidMech from "./avoidMech";
import closestEnemies from "./closestEnemies";
import furthestEnemies from "./furthestEnemies";
import prioritizeMech from "./prioritizeMech";

export default {
  'assist-allies': assistAllies,
  'avoid-crossfire': avoidCrossfire,
  'avoid-mech': avoidMech,
  'closest-enemies': closestEnemies,
  'furthest-enemies': furthestEnemies,
  'prioritize-mech': prioritizeMech,
};
```

Para añadir nuevos protocolos bastaría con crear una nueva clase que herede de Protocol, implementar el método ``apply`` y 
enlazarlo en el archivo ``src/models/protocols/index.ts``. El algoritmo siempre devolverá el primer elemento del listado una 
vez se apliquen todos estos protocolos.


## Testing

````bash
npm run test
````

**Importante:** Levantar la api en local antes de lanzarlos. Uno de los tests hace peticiones directamente a la misma. 

En cuanto al testing, he optado por jest como framework de test. Si bien he mantenido el binario para la ejecución de los test, 
he usado el fichero con los casos de pruebas para montar una batería de tests de integración de todo el sistema ``test/index.integration.test.ts``.
Los resultados de este test no se muestran en el informe de cobertura que se genera ya que no se invoca el código desde el test, sino que se 
hace una petición a la api, por lo que parece que la cobertura de este fichero es 0.

## Propuestas de mejora

- El montaje con Typescript: No he trabajado nunca con ello y he preferido optar por el 80-20, una solución que 
  funcione pese a que pueda ser mejorable.
- Docker: Distribuir la solución de la prueba como un Docker.
- Me hubiera gustado montar una solución basada en el sistema de middlewares de sinatra del que vienen casi todos los frameworks de node. 
  Que todos los protocolos fueran middlewares que en caso de aparecer en la entrada modificasen una propiedad de la request. No obstante, 
  la solución que he montado también me parece bastante correcta.
