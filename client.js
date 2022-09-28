net = require('net');

// establishes a connections with the game server
const connect = function() {

  const conn = net.createConnection({

    host: "165.227.47.243",
    port: "50541"

  });

  
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Successfully connected to the game server.");

    conn.write("Name: WRG");

    
    let timeoutDelay = 50;
    
    const intLeft = setInterval(() => conn.write("Move: left"), 50);
    setTimeout(() => setInterval(() => {
      clearInterval(intLeft);
      conn.write("Move: up")
    }, 50), 1000);

    setTimeout(() => conn.write("Move: stop"), 1200);
  });
  
  conn.on("data", (data) => {

    console.log(data);
  });
  

  return conn;
  
};

module.exports = { connect };