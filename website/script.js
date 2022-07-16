const socketProtocol = (window.location.protocol === 'https:' ? 'wss:' : 'ws:')
const echoSocketUrl = socketProtocol + '//' + window.location.hostname + ':3000/echo/'
const socket = new WebSocket(echoSocketUrl);

socket.onopen = () => {
    socket.send('Here\'s some text that the server is urgently awaiting!');
}

socket.onmessage = e => {
    console.log('Message from server:', e.data)
}

/*
const robots = document.getElementById('robots');

for(let i = 0; i < 11; i++) {
    let robot = document.createElement("div")
    robot.setAttribute("id", (i++))
    robot.setAttribute("class", "robot")
    robots.appendChild(robot);
}

const selected_robot = document.getElementById('1');

let x = 0;
let y = 0;
const SPEED = 10;

class Robot {
    constructor(id, speed) {
        this.id = id;
        this.x = 0;
        this.y = 0;
        this.speed = speed;
        this.cible_detected = 0;
        this.cible_attacked = 0;
        this.cible_x = NaN;
        this.cible_y = NaN;
    }

    move(vx, vy) {
        this.x += vx;
        this.y += vy;
        selected_robot.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}

const robot = new Robot(1, SPEED);
robot.move(100,0)
robot.move(0,200)
*/
