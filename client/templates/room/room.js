function handleAR(roomId) {
    var comm = new Icecomm('oJd1WuKvDgqew1wLNru5qA2yqt4QZg5uH3b1RujPtwvR8yji2');
    comm.connect(roomId, {audio: false});

    comm.on('connected', function(peer) {
        video2.src=peer.stream;
    });

    comm.on('local', function(peer) {
        video.src = peer.stream;
    });

    var v = document.getElementById("video");
    var v2 = document.getElementById("video2");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i;
    var i2;

    v.addEventListener("loadeddata", function() {i = window.setInterval(function() {},20);}, false);
    v2.addEventListener("loadeddata", function() {i2 = window.setInterval(function() {
    ctx.drawImage(v,5,5,500,500);
    ctx.globalAlpha = 0.5;
    ctx.drawImage(v2,5,5,500,500);},20);}, false);
};

Template.room.onRendered(function() {
    handleAR(Router.current().params._id);
});