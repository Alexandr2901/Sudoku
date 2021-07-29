import axios from 'axios'

const api = 'https://sudokueasy.herokuapp.com/api/'
// const api = 'http://0.0.0.0/'

export default {
    init(context) {
        context.dispatch('check').then(()=>{
            context.dispatch('solveSudoku').then(()=>{
                context.dispatch('pullData').then(()=>{
                    // console.log(context.state.fields)
                    // console.log(JSON.stringify(context.state.fields))
                })
            })
        }).catch(()=>{
            context.dispatch('pullData').then(()=>{
                console.log(context.state.fields)
            })
        })
    },
    solveField(context,data){
        // localStorage.clear()
        context.commit('SOLVE_FIELD',data)
        // console.log(context.state.solved.length)
        if (context.state.token && context.state.solved.length>25) {
            context.dispatch('solveSudoku').then(()=>{
                context.dispatch('pullData').then(()=>{
                })
            })
        }
        if (!context.state.token && context.state.solved.length>25) {
                context.dispatch('pullData').then(()=>{
                })
        }
        // console.log(context.state.solved)
        // console.log(context.state.solved.map(item => {
        //     return {
        //         id:item,
        //         solution:item.solution
        //     }
        // }))
        // if () {
        //
        // }
        // console.log(data)
    },
    getField(context, difficulty) {
        // let field
        // try {
        //     field = context.state.fields[difficulty][id]
        // } catch (e) {
        //     return ''
        // }
        // console.log(id, field)
        // console.log(context.getters.field(difficulty))
        return context.getters.field(difficulty)
        // this.pullData()
        // return  field
        // 000005160000060000240000000000020300070000004500100080000000000000000012003004000
        // 000000000000000012003004000000005160000060000240000000000020300070000004500100080
        //     '007000329003005040400930060031000400074690038008043005000020000010050080000706000'
        // return '074038690031400000008005043007329000003040005400060930010080050000000020000000706'
    },
    signUp(context,[name,email,password] ) {
        // console.log(name,email,password)
        // let [name,email,password] = {...data}
        return new Promise((resolve, reject) => {
            axios.post(api + 'auth/signup', {
                name: name,
                email: email,
                password: password
            })
                .then(response => {
                    // dispatch('signIn',[email,password])
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
                    // console.log(response)
                    commit('SET_TOKEN', response.data.token)
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
                    // console.log(response)
                    commit('CHECK_SUCCESS', response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    // console.log('error')
                    reject(error)
                })
        })
    },
    logOut({state, commit}) {
        commit('LOG_OUT')
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
                    console.log('error')
                    reject(error)
                })
        })
    },
    solveSudoku({state, commit}) {
        // console.log(state.solved)
        return new Promise((resolve, reject) => {
            axios.post(api + 'sudoku/solve', {
                fields: state.solved
            }, {
                headers: {
                    'Authorization': "Bearer " + state.token
                }
            })
                .then(response => {
                    // console.log(response)
                    commit('SOLVE_CLEAN')
                    resolve(response)
                })
                .catch(error => {
                    console.log('error')
                    reject(error)
                })
        })
    },
    pullData({commit,state}) {
        return new Promise((resolve, reject) => {
            let url = state.user? '?userEmail=' + state.user.email: ''
            axios.get(api + 'sudoku/index'+url )
                .then(response => {
                    // commit('addPageToLocalPosts', {
                    //     data: response.data,
                    //     page: page
                    // })
                    // let data = []
                    // response.data.data.forEach(item => {
                    //     data.push(...item)
                    //     console.log(...item)
                    // })
                    // console.log(response.data.data[1].find(item => item.id === 14))
                    commit('SET_FIELDS', response.data.data)

                    // console.log(data)
                    // console.log(response.data.data)
                    resolve(response)
                })
                .catch(error => {
                    reject(error)
                })
        })
    },
}

// async function q() {
//     const x = 'http://0.0.0.0/api/sudoku/index'
//     let response = await fetch(x);
//     console.log(response.text())
// }
