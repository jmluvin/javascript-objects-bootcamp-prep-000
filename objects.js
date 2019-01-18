var playlist = { 'red hot chili peppers': 'goodbye angels'}
function updatePlaylist(playlist, artistName, songTitle) {
  Object.assign({}, playlist, { [artistName]: songTitle })
}