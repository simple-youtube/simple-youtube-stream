const Util = require("./Util");
const StreamUtil = require("./StreamUtil");

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
