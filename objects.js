var playlist = { "My Bloody Valentine": 'goodbye angels'}
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
}