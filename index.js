(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory()
    } else if (typeof define === 'function' && define.amd) {
        define(factory)
    } else {
        root.safeMatch = factory()
    }
})(this, function() {
    var match = String.prototype.match
    return {
        match: function (str, regExp) {
            return str.match(regExp) || []
        },
        init: function (options) {
            if (Object.prototype.toString.call(options) === '[object Object]') {
                var name = options.name
                var noConflict = options.noConflict
                String.prototype[name || 'safeMatch'] = function (regExp, noConflict) {
                    return noConflict ? (match.call(this, regExp) || []) : match.call(this, regExp)
                }
            } else {
                String.prototype.safeMatch = function (regExp) {
                    return match.call(this, regExp) || []
                }
            }
        },
        reset: function () {
            String.prototype.match = match
        }
    }
})
