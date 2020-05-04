import {readFileSync, writeFileSync} from "fs";
import {Playlist} from "./Playlist";
import {Music} from "./Music";

export class JSONFileManager {

  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName
  }

  writeInJSON(playlist: Playlist): void {
    writeFileSync(this.fileName, JSON.stringify(playlist, null, 2));
  }

  getObjectFromJSON(): Playlist {
    const playlistJSON = JSON.parse(readFileSync(this.fileName).toString());
    const playlistInstance = new Playlist(playlistJSON.name);
    playlistJSON.musics.forEach((music: any) => {
      const musicInstance = new Music(music.name, music.artist, music.album, music.year);
      playlistInstance.addMusic(musicInstance)
    });
    return playlistInstance
  }
}