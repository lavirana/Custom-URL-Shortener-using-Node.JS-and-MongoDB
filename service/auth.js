const sessionIdToUserMap = new Map();


function setUser(id, user) {
    sessionIdToUserMap.set(id, user);
}

function getUserBySessionId(sessionId) {
    return sessionIdToUserMap.get(sessionId);
}

module.exports = {
    setUser,
    getUserBySessionId
}
