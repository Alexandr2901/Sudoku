export default {
    fields: JSON.parse(localStorage.getItem('fields')) || [],
    ignored:JSON.parse(localStorage.getItem('ignored')) || [],
    solved:JSON.parse(localStorage.getItem('solved')) || [],
    token: localStorage.getItem('token') || '',
}