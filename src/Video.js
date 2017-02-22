const Util = require("./util/Util");
const StreamUtil = require("./util/Stream");

class Video {
    constructor(url, data) {
        this.url = url;

        this.channel = Util.parseChannel(data);

    }

    fetchStream(options = {}) {
        let stream = StreamUtil.create();

    }
}

module.exports = Video;
