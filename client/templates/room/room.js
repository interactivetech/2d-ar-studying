function handleAR(roomId) {
    console.log('in handleAR ' + new Date());

    var comm = new Icecomm('rjYJq8BiG4iPxIXtZ9edozKmY3qJPgtPafhwgaaEWRSnv5K2S');
    comm.connect(roomId, {audio: false});

    comm.on('connected', function(peer) {
        v2.src = peer.stream;
    });

    comm.on('local', function(peer) {
        v.src = peer.stream;
    });

    var v = document.getElementById("video");
    var v2 = document.getElementById("video2");
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var i, i2;

    v.addEventListener("loadeddata", function() {
        i = window.setInterval(function(){}, 20);
    }, false);
    v2.addEventListener("loadeddata", function() {
        i2 = window.setInterval(function() {
            ctx.drawImage(v,0,0,640,480);
            ctx.globalAlpha = 0.5;
            ctx.drawImage(v2,0,0,640,480);
        }, 20);
    }, false);
};

Template.room.onRendered(function() {
    //handleAR(Router.current().params._id);
    handleAR('custom room');
});