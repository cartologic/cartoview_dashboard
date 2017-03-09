class DataManager{
  constructor(dashboard){
    this.dashboard = dashboard;
    this.subscribers = {};
  }
  subscribe = (event, callback) =>{
    this.subscribers[event] = this.subscribers[event] || [];
    this.subscribers[event].push(callback);
  }
  populate = (event, ...args) => {

    if(this.subscribers[event]){
      this.subscribers[event].map((callback) => {callback(...args)})
    }
  }

}

export default DataManager;
