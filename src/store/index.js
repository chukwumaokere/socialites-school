import { createStore } from 'vuex';

export default createStore({
    state: {
        isLoading: false,
        isLoggedIn: false,
        user_data: {
            first_name : '',
            last_name: '',
            email_address: '',
            saved_cards: [],
        }
    },
    mutations: {
        SET_LOADING_STATUS(state){
            state.isLoading = !state.isLoading
        },
        SET_USER_DATA(state, data){
            state.user_data = data;
        }
    },
    actions: {
        getUserData(state){
            if(state.isLoggedIn){
                //let data = { first_name, last_name, email_address, saved_cards } = this.state.user_data
                return  this.state.user_data;
            }else{ 
                return false;
            }
        }
    },
    modules: {
    },
});