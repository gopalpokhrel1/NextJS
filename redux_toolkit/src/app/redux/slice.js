const { createSlice, nanoid, current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState ={
    userApiData:[],
    user:JSON.parse(localStorage.getItem('user')) || []


}
export const fetchDataUser = createAsyncThunk('fetchDataUser', async()=>{
const result = await fetch('https://jsonplaceholder.typicode.com/users');
const data = await result.json();
return data;


})

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

        
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDataUser.fulfilled, (state, action)=>{
            state.isloading= false,
            state.userApiData = action.payload

        })
    }
});

export const {addUser,removeUser}= user.actions;
export default user.reducer;