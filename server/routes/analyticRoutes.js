const SocialBlade = require("socialblade");
require("isomorphic-unfetch");
const { SOCIALBLADE_CLIENTID, SOCIALBLADE_TOKEN } = require("../config/keys");

module.exports = (app) => {
  app.get("/api/analytic/:username", async (req, res) => {
    const client = new SocialBlade(SOCIALBLADE_CLIENTID, SOCIALBLADE_TOKEN);
    try {
      const twitchUserInfo = await client.twitch.user(req.params.username);
      const { id, general, daily } = twitchUserInfo;
      const dailyAverageViewers = Math.floor(
        (daily[0]["views"] - daily[daily.length - 1]["views"]) / daily.length
      );
      const dailyAverageAdditionalFollowers = Math.floor(
        (daily[0]["followers"] - daily[daily.length - 1]["followers"]) /
          daily.length
      );
      const displayName = id["display_name"];
      const avatar = general["branding"]["avatar"];

      const totalFollowers = daily[0]["followers"];

      res.json({
        dailyAverageViewers,
        dailyAverageAdditionalFollowers,
        displayName,
        avatar,
        totalFollowers,
      });
    } catch (error) {
      res.send(error).status(500);
    }
  });
};

