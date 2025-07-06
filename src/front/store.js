export const initialStore=()=>{
  return{
    user: localStorage.getItem('user')? JSON.parse(localStorage.getItem('user')) : null,
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'logout':

      //remove the client token and info from local
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      return {
        ...store,
        user: null
      };

    case 'get_user':
      return {
        ...store,
        user: action.payload
      };

    case 'add_user':
      return {
        ...store,
        user: action.payload
      };

    case 'set_hello':
      return {
        ...store,
        message: action.payload
      };
    default:
      throw Error('Unknown action.');
  }    
}