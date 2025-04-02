/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

interface Hamburger {
  prepare(): void;
}

class ChikenHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de pollo.');
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de carne.');
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log('Preparando una hamburguesa de frijol.');
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChikenRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new ChikenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class VeganRestaurant extends Restaurant {
  override createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt('¿Qué tipo de hamburguesa querés? (chicken/beef/bean)');

  switch(burgerType) {
    case 'chicken':
      restaurant = new ChikenRestaurant();
      break;
    case 'beef':
      restaurant = new BeefRestaurant();
      break;
    case 'bean':
      restaurant = new VeganRestaurant();
      break;
    default:
      throw new Error('Opción no válida');
  }

  restaurant.orderHamburger();
}

main();