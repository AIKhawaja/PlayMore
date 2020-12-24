import { FETCH_PLAYLIST } from "../actions/types"
import featuredPlaylist from "./featuredPlaylist"

export default (state = featuredPlaylist, action) => {
    switch (action.type) {
        case FETCH_PLAYLIST:
            return action.payload
        default:
            return state
    }
}