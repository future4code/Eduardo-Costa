import {Music} from "./Music";
import {Playlist} from "./Playlist";
import {JSONFileManager} from "./JSONFileManager";

// const music1: Music = new Music('I want it that way', 'Backstreet Boys', 'Millennium', 1999 );
// const music2: Music = new Music('Meu disfarce', 'Chitãozinho e Xororó', 'Meu disfarce', 1987);
//
// const playlist: Playlist = new Playlist('Eclética');
// playlist.addMusic(music1);
// playlist.addMusic(music2);
//
// const fileManager: JSONFileManager = new JSONFileManager('playlist.json');
// fileManager.writeInJSON(playlist);

const fileManager: JSONFileManager = new JSONFileManager('playlist.json');
const jsonPlaylist = fileManager.getObjectFromJSON();
// jsonPlaylist.playPlaylist();
// console.log(jsonPlaylist);
console.log(jsonPlaylist);

