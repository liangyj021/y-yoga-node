const socketIds = [];

const Common = {
  uuid() {
    const s4 = ()=>{
      return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
    };
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  getSocketId(id) {
    if (id && socketIds.indexOf(id)==-1) {
      socketIds.push(id)
      return id
    } else {
      let uuid = this.uuid();
      while (socketIds.indexOf(uuid) > -1) {
        uuid = this.uuid()
      }
      socketIds.push(uuid)
      return uuid
    }
  }
}

module.exports = Common
