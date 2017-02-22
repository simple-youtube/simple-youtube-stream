const request = require("superagent");
const url = require("url");

const Util = require("./Util");
const Constants = require("./Constants");


class YTData {
    parseVideoID(input) {
        return new Promise((resolve, reject) => {
            let expr = /^[a-zA-Z0-9-_]{11}$/;
            if (expr.test(input)) return resolve(input);

            let parsedUrl = url.parse(input);
            let id = parsedUrl.query.v;
            if (!Constants.includes(parsedUrl.hostname) && !id) {
                let split = parsedUrl.pathname.split("/");
                id = split[split.length - 1];
            }

            if (!id || !expr.test(id)) return reject(`An invalid ID was supplied.`);

            return resolve(id);
        });
    }

    fetchInfo(url, options = {}) {
        return new Promise((resolve, reject) => {
            let videoID = this.parseVideoID(url);
            let videoUrl = `${Constants.BASES.video}${videoID}`;

            request.get(url).end((err, res) => {
                if (err) return reject(err);

                let body = res.body;

                let unavailableAlert = Util.fetchIn(body, `<div id="player-unavailable"`, `>`);
                if (!/\bhid\b/.test(Util.fetchIn(unavailableAlert, `class="`, `"`))) {
                    unavailableAlert = Util.fetchIn(body, `<h1 id="unavailable-message" class="message">`, `</h1>`).trim();
                    if (unavailableAlert !== "Content Warning") return reject(unavailableAlert);
                }

                
            });
        });
    }
}
