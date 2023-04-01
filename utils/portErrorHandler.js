module.exports = {
    onError: (error) =>{
        if(error.syscall !== "listen"){
            throw error;
        }
        let bind = typeof server_port === "string" ? "Pipe " + server_port : "Port " + server_port;
        if(error.code === "EACCES"){
            console.error(bind + " requires elevated privileges");
            process.exit(1);
        }
        else if(error.code === "EADDRINUSE"){
            console.error(bind + " is already in use");
            process.exit(1);
        }
        else{
            throw error;
        }
    },
}