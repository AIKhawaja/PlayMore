import axios from "axios";
import { FETCH_USER, FETCH_PLAYLIST } from "./types";

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPlaylist = (playlistURL) => async (dispatch) => {
  const res = await axios.post("/api/get_playlist_data", {
    playlistURL
  })
  dispatch({ type: FETCH_PLAYLIST, payload: res.data })
}