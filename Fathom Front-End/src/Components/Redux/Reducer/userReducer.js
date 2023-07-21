const initialState = {
    user : {},
};

    const getUser = ( state = initialState, {type, payload}) =>{
        console.log("action.user:" + payload);
        switch ( type){

            case "addUser" : return payload;

            default : return state ;
        }

    }

    export default getUser;

