const { createSlice, nanoid } = require("@reduxjs/toolkit");
const initialState ={
    user:[]
}

const user = createSlice({
    name:'user',
    initialState,
    reducers:{
         addUser: (state, action)=>{
            const data = {
                id: nanoid(), 
                name:action.payload
            }
            state.user.push(data)
         },
         removeUser:(state,action)=>{
            state.user= state.user.filter((item)=> item.id!==action.payload)
         }

        
    }
});

export const {addUser,removeUser}= user.actions;
export default user.reducer;