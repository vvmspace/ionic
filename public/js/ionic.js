class Ionic{

    constructor(host = null){
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
        let boom = this.booms[data.event];
        if(boom){
            boom(data.data);
        }else{
            console.log('Undefined event', data.event);
        }
    }

    boom(event, callback){
        this.booms[event] = callback;
    }

    impulse(event, data){
        this.socket.emit('data', {
            event: event,
            data: data
        });
    }

}