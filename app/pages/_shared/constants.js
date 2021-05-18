export const constants = {
    socketUrl: 'http://127.0.0.1:3000',
    socketNamespaces:{
        room:'room',
        lobby:'lobby'
    },
    events:{
        USER_CONNECTED: 'userConnection',
        USER_DISCONNECTED: 'userDisconnection',

        JOIN_ROOM: 'joinRoom',
        LOBBY_UPDATED: 'LobbyUpdated'
    }
}