//ship.js ...........................................................

var Ship = (function() {
    //exposed methods:

    var create = function(x, y, ref) {
        var obj = Object.create(def);
        obj.ref = ref;
        obj.angle = 0;
        obj.pos = Vec2D.create(x, y);
        obj.vel = Vec2D.create(0, 0);
        obj.thrust = Vec2D.create(0, 0);
        obj.idle = false;
        obj.radius = 8;
        obj.idleDelay = 0;

        return obj;
    };

    //Ship definition:

    var def = {
        angle: null,
        pos: null,
        vel: null,
        thrust: null,
        ref: null,
        bulletDelay: null,
        idle: null,
        radius: null,

        update: function() {
            this.vel.add(this.thrust);
            this.pos.add(this.vel);

            if (this.vel.getLength() > 5) this.vel.setLength(5);

            ++this.bulletDelay;

            if (this.idle) {
                if (++this.idleDelay > 120) {
                    this.idleDelay = 0;
                    this.idle = false;

                    this.ref.resetGame();
                }
            }
        },
        render: ctx => {
            ctx.save();
            ctx.translate(ship.pos.getX() >> 0, ship.pos.getY() >> 0);
            ctx.rotate(ship.angle);

            ctx.strokeStyle = '#FFF';
            ctx.lineWidth = Math.random() > 0.9 ? 2 : 1;
            ctx.beginPath();
            ctx.moveTo(10, 0);
            ctx.lineTo(-10, -10);
            ctx.lineTo(-10, 10);
            ctx.lineTo(10, 0);
            ctx.stroke();
            ctx.closePath();

            ctx.restore();
        },

        shoot: function() {
            if (this.bulletDelay > 8) {
                this.ref.generateShot();
                this.bulletDelay = 0;
            }
        },
    };

    return { create: create };
})();
