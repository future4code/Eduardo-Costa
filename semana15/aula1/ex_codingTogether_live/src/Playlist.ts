import {Music} from "./Music";

export class Playlist {
  private name: string;
  private musics: Music[];

  constructor(name: string) {
    this.name = name;
    this.musics=[];
  }

  public addMusic(music: Music) {
    this.musics.push(music)
  }

  public playPlaylist() {
    console.log('Tocando a playlist:', this.name);
    this.musics.forEach(music => {
      music.playMusic()
    })
  }

  getName(){
    return this.name
  }


}