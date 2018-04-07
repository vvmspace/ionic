class Ionic{

    constructor(host = null){
        console.log(Ionic.getHost());
        this.socket = io(Ionic.getHost(host));
        this.booms = [];
        this.socket.on('data', this.receiver);
    }

    static getHost(host){

        if(host)
            return host;

        let loc = new URL(window.location);
        if(loc.port)
            return 'http://' + loc.host;
        else
            return 'http://' + loc.host + ':7070';
    }

    receiver(data){
        console.log(this.booms);
        this.booms[data.event](data.data);
    }

    boom(event, callback){
        console.log(event);
        this.booms[event] = callback;
        console.log(this.booms);
    }

    impulse(event, data){
        this.socket.emit('data', {
            event: event,
            data: data
        });
    }

}