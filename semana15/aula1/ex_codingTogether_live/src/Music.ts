export class Music {

 private name: string;
 private artist: string;
 private album: string;
 private year: number;

 constructor(name: string, artist: string, album: string, year: number) {
   this.name = name;
   this.artist = artist;
   this.album = album;
   this.year = year
 }

 playMusic(): void {
   console.log(` A música ${this.name} de ${this.artist} está tocando`)
 }

 setName(name: string){
   if(name.length < 5) {
     console.log('O nome da música deve ter mais de 5 caracteres')
   } else {
     this.name = name
   }
 }
}

