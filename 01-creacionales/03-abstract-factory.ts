/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 *  El propósito del Abstract Factory es crear familias de objetos relacionados
 *  (en este caso, hamburguesas y bebidas) sin especificar las clases concretas
 *  de cada uno de esos objetos en el código principal.
 */

interface Hamburger {
  prepare(): void;
}

interface Drink {
  serve(): void;
}

class ChikenHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando hamburguesa de pollo.");
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("Preparando una hamburguesa de res.");
  }
}

class Water implements Drink {
  serve(): void {
    console.log("Sirviendo agua.");
  }
}

class Beer implements Drink {
  serve(): void {
    console.log("Sirviendo cervecita.");
  }
}

interface RestaurantFactory {
  createHamburger(): Hamburger;
  serveDrink(): Drink;
}

class FastFoodRestaurant implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
  serveDrink(): Drink {
    return new Beer();
  }
}

class HealthyRestaurant implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new ChikenHamburger();
  }
  serveDrink(): Drink {
    return new Water();
  }
}

function main(factory: RestaurantFactory) {
  const hamburger = factory.createHamburger();
  const drink = factory.serveDrink();

  hamburger.prepare();
  drink.serve();
}

main(new HealthyRestaurant());
main(new FastFoodRestaurant());