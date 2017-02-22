const PassThrough = require("stream").PassThrough;

class StreamUtil {
    create() {
        let stream = new PassThrough();
        stream.destroy = () => stream._isDestroyed = true;
        return stream;
    }
}

module.exports = StreamUtil;
