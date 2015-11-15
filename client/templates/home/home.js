function getRandAlphanumStr(len) {
    var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    alphabet += 'abcdefghijklmnopqrstuvwxyz0123456789';
    var str = '';
    for (var ai = 0; ai < len; ai++) {
        str += alphabet.charAt(Math.floor(alphabet.length*Math.random()));
    }
    return str;
}

Template.home.onRendered(function() {
    document.getElementById('make-room-btn').addEventListener(
        'click', function() {
            Router.go('room', {_id: getRandAlphanumStr(6)});
        }
    );
});