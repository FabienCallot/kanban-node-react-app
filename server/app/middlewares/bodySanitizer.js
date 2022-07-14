const sanitizer = require('sanitizer');

const bodySanitizer = (req, res, next) => {
    if (req.body) {
        for (let propName in req.body) {
            console.log(req.body[propName]);
            req.body[propName] = sanitizer.escape(req.body[propName]);
            console.log(req.body[propName]);
        }
    }
    next();
};

module.exports = bodySanitizer;