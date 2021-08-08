import axios from 'axios'

const api = 'https://sudokueasy.herokuapp.com/api/'
// const api = 'http://0.0.0.0/'

export default {
    init(context) {
        if(context.state.token) {
            context.dispatch('check').then(()=>{
                context.dispatch('solveSudoku').then(()=>{
                    context.dispatch('pullData').then(()=>{
                    })
                })
            }).catch(()=>{
                context.dispatch('pullData')
            })
        } else {
            context.dispatch('pullData')
        }
    },
    solveField(context,data){
        context.commit('SOLVE_FIELD',data)
        if (context.state.token && context.state.solved.length>25) {
            context.dispatch('solveSudoku').then(()=>{
                context.dispatch('pullData').then(()=>{
                })
            })
        }
        if (!context.state.token && context.state.solved.length%25 ===0) {
                context.dispatch('pullData').then(()=>{
                })
        }
    },
    signUp(context,[name,email,password] ) {
        return new Promise((resolve, reject) => {
            axios.post(api + 'auth/signup', {
                name: name,
                email: email,
                password: password
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    signIn({commit},[email,password]) {
        return new Promise((resolve, reject) => {
            axios.post(api + 'auth/signin', {
                email: email,
                password: password
            })
                .then(response => {
                    commit('SET_TOKEN', response.data.token)
                    commit('CHECK_SUCCESS', response.data.user)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    check({state,commit}) {
        return new Promise((resolve, reject) => {
            axios.get(api + 'auth/check', {
                headers: {
                    'Authorization': "Bearer " + state.token
                }
            })
                .then(response => {
                    commit('CHECK_SUCCESS', response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    logOut({state, commit}) {
        return new Promise((resolve, reject) => {
            axios.get(api + 'auth/logout', {
                headers: {
                    'Authorization': "Bearer " + state.token
                }
            })
                .then(response => {
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                }).finally(()=>{
                commit('LOG_OUT')
            })
        })
    },
    update({commit},data) {
        return new Promise((resolve, reject) => {
            axios.put(api + 'user/6',{name:data.name,email:data.email})
                .then(response => {
                    commit('CHECK_SUCCESS', response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    solveSudoku({state, commit}) {
        return new Promise((resolve, reject) => {
            axios.post(api + 'sudoku/solve', {
                fields: state.solved
            }, {
                headers: {
                    'Authorization': "Bearer " + state.token
                }
            })
                .then(response => {
                    commit('SOLVE_CLEAN')
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    pullData({commit,state}) {
        return new Promise((resolve, reject) => {
            let url = state.user? '?userEmail=' + state.user.email: ''
            axios.get(api + 'sudoku/index'+url )
                .then(response => {
                    commit('SET_FIELDS', response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
    pullLeaderBoard() {
        return new Promise((resolve, reject) => {
            axios.get(api + 'users/ranking' )
                .then(response => {
                    resolve(response.data)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}
