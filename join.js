import WebSocket from "ws"
import config from "./config.js"

let friend_id   = process.argv[2] || config.default_friend_id
if(friend_id) {
  console.log("joining", friend_id)
} else {
  console.error("No friend id provided")
  process.exit()
}

try {
  console.log("connecting")
  let client = new WebSocket("ws://127.0.0.1:27060/clientsocket/", [], {
    origin: "https://steamcommunity.com",
    protocolVersion: 13,
    headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
      "Origin": "https://steamcommunity.com",
      "Accept-Encoding": "gzip, deflate, br",
      "Accept-Language": "en,de-DE;q=0.9,de;q=0.8,en-US;q=0.7",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache"
    },
  })
  
  client.on("open", () => {
    console.log("connected!")
    //client.send(JSON.stringify({ message: "GetClientInfo", universe: config.my_universe, accountid: config.my_steam_id3, sequenceid: 1} ))
    client.send(JSON.stringify({
      message: "ShowJoinGameDialog",
      friend_id: friend_id,
      universe: config.my_universe,
      accountid: config.my_steam_id3,
      sequenceid: 1,
    }))
  })

  client.on("message", (data, isBinary) => {
    console.log("message", JSON.parse(data.toString("utf8")))
    client.close()
  })

  client.on("close", (req, resp) => {
    console.log("close", req)
    process.exit()
  })
  
  client.on("upgrade", (resp) => {
    console.debug("upgrade", resp)
  })

  client.on("error", (req, resp) => {
    console.error("error", req, resp)
  })
  
  client.on("unexpected-response", (req, resp) => {
    console.error("unexpected-response", resp)
  })
} catch (err) {
  console.error(err)
}

console.log("done")
