const supabase = require('./conn');

async function login(username, password) {
    let { data: users, error } = await supabase
    .from('users')
    .select('id, username, created_at')
    .like('username', username)
    .like('password', password)
    return users;
}

module.exports = {
    login: login
}