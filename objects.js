var playlist = { "My Bloody Valentine": 'goodbye angels', 'Phil Ochs':, 'Slowdive': }
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
}