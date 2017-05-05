(function(){
	var MusicBox = function(){
		var lista = [];
		var add_album = function(album){
			lista.push(album);
		};
		var favoritoAlbum = function(){
			var mas_reproducido = lista[0].contar,
				indice = 0;
			for(var i=1,len = lista.length;i<len;i++){
				if (lista[i].contar > mas_reproducido){
					mas_reproducido = lista[i].contar;
					indice = i;
				}
			}
			return `${lista[indice].cancion} - ${lista[indice].cantante}`;
			
		};
		return {
			addAlbum : add_album,
			favoriteAlbum : favoritoAlbum
		}
	}
	var Album = function(cancion,cantante){
		var contar = 0;
		var play = function(){
			contar +=1;
			console.log(`Tocando ${cancion} - ${cantante}`);
		};
		return{
			play : play,
			contar : contar,
			cancion : cancion,
			cantante : cantante
		}
	}

	var box = MusicBox(),
		a1 = Album("The Who", "Tommy"),
		a2 = Album("Tom Waits", "Closing"),
		a3 = Album("Jhon Cale", "Paris"),
		favorito;

	box.addAlbum(a1);
	box.addAlbum(a2);
	box.addAlbum(a3);

	a1.play();
	a2.play(); // imprime Tocando Tom Waits - Closing
	a3.play();

	favorito = box.favoriteAlbum();
	//"tu album favorito es The Who - Tommy"
	console.log("Tu album favorito es " + favorito);
}());