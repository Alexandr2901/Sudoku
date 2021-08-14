export default{
    SET_TOKEN(state, token) {
        state.token = token
        localStorage.setItem('token',token)
        // console.log('hello')
        console.log(localStorage.getItem('token'))
    },
    LOG_OUT(state) {
        state.token = ''
        localStorage.removeItem('token')
        state.user = null
        localStorage.removeItem('user')
    },
    SET_FIELDS(state,payload) {
        // console.log(payload)
        // payload.forEach(difAr => {
        //     difAr.filter()
        // })
        state.fields = payload
        localStorage.setItem('fields' ,JSON.stringify(state.fields))
        // console.log(JSON.parse(JSON.stringify(payload)))
    },
    IGNORE_FIELD(state,difficulty) {
        // state.fields[difficulty].indexOf(item => item.id === id)
        // console.log('ignor')
        state.ignored.push(state.fields[difficulty].shift())
        localStorage.setItem('ignored' ,JSON.stringify(state.ignored))
        // console.log(state.fields[difficulty].length)
    },
    SOLVE_FIELD(state,payload) {
        // console.log(state.fields)
        state.solved.push({
            id: payload[0],
            solution: payload[1]
        })
        localStorage.setItem('solved' ,JSON.stringify(state.solved))
        // console.log(state.fields[payload[2]].findIndex(item => item.id === payload[0]),1)
        let index = state.fields[payload[2]].findIndex(item => item.id === payload[0])
        if (index >0) {
            state.fields[payload[2]].splice(index,1)
        }
        // state.fields[payload[2]].findIndex(item => item.id === payload[0])
        // console.log(state.solved)
    },
    SOLVE_CLEAN(state) {
        state.solved = []
        localStorage.removeItem('solved')
    },
    CHECK_SUCCESS(state, data) {
        // console.log('check')
        // console.log(data)
        state.user = data
        localStorage.setItem('user',JSON.stringify(state.user))
    }
}
