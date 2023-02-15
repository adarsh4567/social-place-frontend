import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    mode:'light',
    user:null,
    token:null,
    post:[],
}

export const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        setMode: (state)=>{
             state.mode = state.mode === "light" ? "dark" :"light"
        },
        setLogin: (state,action)=>{
            state.user = action.payload.user
            state.token = action.payload.token
        },
        setLogOut: (state)=>{
             state.user=null;
             state.token=null
        },
        setFriends: (state,action)=>{
            if(state.user){
                state.user.friends = action.payload.friends
            }else{
                console.error('User friends are empty');
            }
        },
        setPosts : (state,action)=>{
            state.post = action.payload.post
        },
        setPost:(state,action)=>{
            const updatedPosts = state.post.map((post)=> {
                if(post._id===action.payload.post_id) return action.payload.post;
                return post
            }) 
            state.post = updatedPosts
        }
    }
})

export const {setMode,setLogin, setFriends,setLogOut,setPost,setPosts} = authSlice.actions

export default authSlice.reducer