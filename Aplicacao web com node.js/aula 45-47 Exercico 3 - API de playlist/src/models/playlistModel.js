const { v4: uuidv4 } = require("uuid");
let storage = [
  {
    idPlaylist: uuidv4(),
    nome: "Da boa",
    tags: ["Rock", "Metal"],
    musicas: [
      {
        idMuisica: uuidv4(),
        titulo: "Numb",
        ano: 2000,
        artista: "Link Park",
        album: "Hybrid Theory",
      },
    ],
  },
];

const playlistModel = {
  getAllPlaylists() {
    if (storage.length === 0) {
      throw Error("No data in");
    }
    return storage;
  },
  getPlaylistById(id) {
    const target = storage.find((playlist) => playlist.idPlaylist === id);

    if (!target) {
      throw Error("Not found");
    }
    return target;
  },
  //POST /playlists
  createPlaylist(data) {
    if (!data || Object.keys(data).length === 0) {
      throw Error("Invalid Body");
    }
    const newPlaylist = {
      idPlaylist: uuidv4(),
      nome: data.nome || "Playlist",
      tags: data.tags || [],
      musicas: data.musicas || [],
    };
    storage.push(newPlaylist);
    return newPlaylist;
  },

  //PUT /playlists/:id
  updatePlaylist(id, data) {
    if (!data || Object.keys(data).length === 0) {
      throw Error("Invalid Body");
    }
    const target = this.getPlaylistById(id);
    Object.assign(target, data);
    return target;
  },
  deletePlaylist(idPlaylist) {
    if (!idPlaylist) {
      throw Error("Not found");
    }
    const target = this.getPlaylistById(idPlaylist);
    storage = storage.filter(
      (playlist) => playlist.idPlaylist !== target.idPlaylist
    );
  },
  addMusic(id, data) {
    if (!id || !data || Object.keys(data).length === 0) {
      throw Error("Not found");
    }
    let target = this.getPlaylistById(id);
    target.musicas.push({
      idMuisica: uuidv4(),
      titulo: data.titulo,
      ano: data.ano,
      artista: data.artista,
      album: data.album,
    });
    return target;
  },
  deleteMusic(playlistId, musicId) {
    let target = this.getPlaylistById(playlistId);
    target.musicas = target.musicas.filter((musica) => {
      musica.idMuisica !== musicId;
    });
    /*Se a condição for verdadeira (playlist.playlistId === playlistId), a expressão retorna target (a playlist atualizada). Se a condição for falsa, ela retorna playlist (a playlist não foi modificada).*/
    storage = storage.map((playlist) =>
      playlist.playlistId === playlistId ? target : playlist
    );
  },
};

module.exports = playlistModel;
