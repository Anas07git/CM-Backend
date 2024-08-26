const pool = require('../../services/database/mysql');

const findUserEmail = async (email) => {
    const [rows] = await pool.query('SELECT * FROM certificatemanagerusers WHERE email = ?', [email]);
    return rows;
};

const createUser = async (email, hashedPassword) => {
    const result = await pool.query('INSERT INTO certificatemanagerusers (email, password) VALUES (?, ?)', [email, hashedPassword]);
    return result;
};

module.exports = {
    findUserEmail,
    createUser
};
