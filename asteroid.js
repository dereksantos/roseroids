//asteroid.js ...........................................................
const rob = new Image(40, 40);
rob.src = 'assets/rob.png';

const robAngry = new Image(20, 20);
robAngry.src = 'assets/robangry.png';

var Asteroid = (function() {
    //exposed methods:

    var create = function() {
        const radius = 40;

        var obj = Object.create(def);
        obj.radius = radius;
        obj.color = '#FF5900';
        obj.pos = Vec2D.create(0, 0);
        obj.vel = Vec2D.create(0, 0);
        obj.blacklisted = false;
        obj.type = 'b';
        obj.sides = (Math.random() * 2 + 7) >> 0;
        obj.angle = 0;
        obj.angleVel = (1 - Math.random() * 2) * 0.01;
        obj.set = (x, y, radius, type) => {
            obj.radius = radius;
            obj.type = type;
            obj.pos.setXY(x, y);
        };
        obj.render = ctx => {
            ctx.save();
            ctx.beginPath();
            ctx.ellipse(
                obj.pos.getX(),
                obj.pos.getY(),
                obj.radius,
                obj.radius,
                Math.PI,
                0,
                2 * Math.PI
            );
            const x = obj.pos.getX() - obj.radius;
            const y = obj.pos.getY() - obj.radius;
            const size = obj.radius * 2;
            if (obj.type === 's') {
                ctx.drawImage(robAngry, x, y, size, size);
            } else {
                ctx.drawImage(rob, x, y, size, size);
            }
            ctx.closePath();
        };
        return obj;
    };

    //Ship definition:

    var def = {
        radius: null,
        color: null,
        pos: null,
        vel: null,
        blacklisted: null,
        type: null,
        sides: null,
        angle: null,
        angleVel: null,

        update: function() {
            this.pos.add(this.vel);
            this.angle += this.angleVel;
        },

        reset: function() {
            this.blacklisted = false;
        },
    };

    return { create: create };
})();
