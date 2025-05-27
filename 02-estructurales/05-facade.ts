/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */

import { COLORS } from "../helpers/colors.ts";
class Projector {
  turnOn() {
    console.log("Proyector encendido");
  }

  turnOff() {
    console.log("Proyector apagado");
  }
}

class SoundSystem {
  on() {
    console.log("Sound System encendido");
  }
  off() {
    console.log("Sound System apagado");
  }
}

class VideoPlayer {
  on() {
    console.log("Reproductor de video encendido");
  }

  play(movie: string) {
    console.log(`Reproduciendo película: ${movie}`);
  }

  stop() {
    console.log("Reproducción detenida");
  }

  off() {
    console.log("Reproductor de video apagado");
  }
}

class PopcornMaker {
  popingPopcorn() {
    console.log("Haciendo palomitas de maíz");
  }

  turnOffPoppingPopcorn() {
    console.log("Apagando la máquina de palomitas de maíz");
  }
}

interface HomeTheaterFacadeOptions {
  popcornMaker: PopcornMaker;
  projector: Projector;
  soundSystem: SoundSystem;
  videoPlayer: VideoPlayer;
}

class HomeTheaterFacade {
  private projector: Projector;
  private soundSystem: SoundSystem;
  private videoPlayer: VideoPlayer;
  private popcornMaker: PopcornMaker;

  constructor({
    popcornMaker,
    projector,
    soundSystem,
    videoPlayer,
  }: HomeTheaterFacadeOptions) {
    this.popcornMaker = popcornMaker;
    this.projector = projector;
    this.soundSystem = soundSystem;
    this.videoPlayer = videoPlayer;
  }

  watchMovie(movie: string) {
    console.log("Preparando el cine en casa...");
    this.popcornMaker.popingPopcorn();
    this.projector.turnOn();
    this.soundSystem.on();
    this.videoPlayer.on();
    this.videoPlayer.play(movie);

    console.log("Disfruta de la película!");
  }

  endMovie() {
    console.log("Terminando la película...");
    this.videoPlayer.stop();
    this.videoPlayer.off();
    this.soundSystem.off();
    this.projector.turnOff();
    this.popcornMaker.turnOffPoppingPopcorn();
  }
}

function main() {
  const projector = new Projector();
  const soundSystem = new SoundSystem();
  const videoPlayer = new VideoPlayer();
  const popcornMaker = new PopcornMaker();

  const homeTheater = new HomeTheaterFacade({
    projector,
    soundSystem,
    videoPlayer,
    popcornMaker,
  });

  homeTheater.watchMovie("Interstellar");
  homeTheater.endMovie();
}

main();