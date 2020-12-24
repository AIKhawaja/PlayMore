const { SPOTIFY_CLIENT_ID, SPOTIFY_CLIENT_SECRET } = require("../config/keys")
const SpotifyWebApi = require("spotify-web-api-node")

const convertTime = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return `${minutes}:${(seconds < 10 ? "0" : "")}${seconds}`;
}

const getPlaylistIdFromLink = (str) => {
    return str.split('/').pop().split('?')[0]

}

module.exports = async (app) => {


    app.post("/api/get_playlist_data", async (req, res) => {
        /// I moved this inside here cause the server timesout after an hours , maybe there's away to use refresh tokens
        const spotifyApi = new SpotifyWebApi({
            clientId: SPOTIFY_CLIENT_ID,
            clientSecret: SPOTIFY_CLIENT_SECRET
        })

        try {
            const credentials = await spotifyApi.clientCredentialsGrant()
            spotifyApi.setAccessToken(credentials.body.access_token);
            const { playlistURL } = req.body
            const playlistId = getPlaylistIdFromLink(playlistURL)
            const playlist = await spotifyApi.getPlaylist(playlistId)
            const songs = playlist.body.tracks.items
            const response = await songs.map((song) => {
                return {
                    Title: song.track.name,
                    Artist: song.track.artists[0].name,
                    Song_Art: song.track.album.images[0].url,
                    Duration: convertTime(song.track.duration_ms),
                    Album: song.track.album.name,
                    Cost: Math.random().toFixed(2),
                    SpotifyId: song.track.id
                }
            });
            res.json(response).status(200)
        } catch (err) {
            res.send({ "Error": err.data }).status(400)
        }
    })
}
