const { createSlice, nanoid, current } = require("@reduxjs/toolkit");
const initialState ={
    user:JSON.parse(localStorage.getItem('user')) || []
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
            const userdata = JSON.stringify(current(state.user));
            localStorage.setItem("user", userdata);
         },
         removeUser: (state, action) => {
            state.user = state.user.filter((item) => item.id !== action.payload);
            const userdata = JSON.stringify(state.user);
            localStorage.setItem("user", userdata);
        }

        
    }
});

export const {addUser,removeUser}= user.actions;
export default user.reducer;