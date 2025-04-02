/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */

class Computer {
  public cpu: string = 'Undefined';
  public ram: string = 'Undefined';
  public storage: string = 'Undefined';
  public gpu: string = 'Does not have gpu';

  displayComputerConfiguration() {
    console.log('Computer configuration: ', {
      cpu: this.cpu,
      ram: this.ram,
      storage: this.storage,
      gpu: this.gpu,
    })
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCpu(cpu: string): ComputerBuilder {
    this.computer.cpu = cpu;
    return this;
  }

  setRam(ram: string): ComputerBuilder {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string): ComputerBuilder {
    this.computer.storage = storage;
    return this;
  }

  setGpu(gpu: string): ComputerBuilder {
    this.computer.gpu = gpu;
    return this;
  }

  build(): Computer {
    return this.computer;
  }
}

function main() {
  const oldComputer = new ComputerBuilder()
    .setCpu('Intel Pentium 2')
    .setRam('2GB')
    .setStorage('256GB HDD')
    .build();

  oldComputer.displayComputerConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCpu('AMD Ryzen 7')
    .setRam('32GB')
    .setStorage('1TB SSD')
    .setGpu('RTX 3070')
    .build();

  gamingComputer.displayComputerConfiguration();
}

main();