// forked from salary's "forked: D3 Bubble Particles" http://jsdo.it/salary/gIKr
// forked from RintIanTta's "D3 Bubble Particles" http://jsdo.it/RintIanTta/rO7x
// 클래스 선언
var Particle = (function () {
    function Particle() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.alpha = 1;
        this.generate(false);
    }

    Particle.prototype.generate = function (fadeBack) {
        this.radius = (Math.random() * 30) + 5;
        this.xSpeed = (Math.random() * 10) - 5;
        this.ySpeed = (Math.random() * 10) - 5;
        this.alphaDecay = Math.random() / 10;

        return this.fadeBack = fadeBack;
    };

    Particle.prototype.update = function () {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        this.alpha -= this.alphaDecay;
        if (this.alpha <= 0) {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.generate(true);
        }
        if (this.fadeBack === true) {
            this.alpha += 0.15;
            if (this.alpha >= 1) return this.fadeBack = false;
        }
    };

    return Particle;
})();

// 초기 변수 선언
var color = d3.scale.category20();
var width;
var height;

// 이벤트 연결
window.addEventListener("load", function () {
    // 기본 변수 생성
    width = window.innerWidth;
    height = window.innerHeight;

    // 캔버스를 생성합니다.
    canvas = d3.select("svg");

    // 파티클 데이터를 생성합니다.
    particles = [];
    for (var i = 0; i < 150; i++) {
        particles.push(new Particle());
    }

    // 파티클을 생성합니다.
    var enter = canvas.selectAll().data(particles).enter();
    enter.append("svg:circle").attr("fill", function (data, index) {
        return color(index % 20);
    }).attr("r", function (data, index) {
        return data.radius;
    }).attr("cx", function (data, index) {
        return data.x;
    }).attr("cy", function (data, index) {
        return data.y;
    }).attr("stroke", function (data, index) {
        return d3.rgb(color(index % 20)).brighter(0.5);
    }).attr("stroke-width", function (data, index) {
        return data.radius / 2;
    });

    // 타이머를 생성합니다.
    var particleTags = d3.selectAll("circle");
    setInterval(function () {
        // 화면에 반영합니다.
        particleTags.attr("cx", function (data, index) {
            return data.x;
        }).attr("cy", function (data, index) {
            return data.y;
        }).attr("fill-opacity", function (data, index) {
            return data.alpha;
        }).attr("stroke-opacity", function (data, index) {
            return data.alpha;
        });

        // 업데이트합니다.
        for (var i in particles) {
            particles[i].update();
        }
    }, 1000 / 30);
});