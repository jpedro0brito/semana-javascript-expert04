import { constants } from '../../_shared/constants.js'
import RoomSockerBuilder from '../src/util/roomSocket.js'

const socketBuilder = new RoomSockerBuilder({
    socketUrl: constants.socketUrl,
    namespace: constants.socketNamespaces.room
})

const socket = socketBuilder
    .setOnUserConnected((user) => console.log('user connected!', user))
    .setOnUserDisconnected((user) => console.log('user disconnected!', user))
    .setOnRoomUpdated((room) => console.log('room list!', room))
    .build()

    
const room = {
    id: '0001',
    topic: 'Js Expert'
}

const user = {
    img: 'https://cdn1.iconfinder.com/data/icons/user-pictures/100/male3-128.png',
    username: 'Joao Pedro ' + Date.now()
}

socket.emit(constants.events.JOIN_ROOM, { user, room })

