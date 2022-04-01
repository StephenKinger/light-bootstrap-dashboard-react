const Pool = require('pg').Pool
const pool = new Pool({
    user: 'redpig',
    host: 'localhost',
    database: 'dbdashboard',
    password: 'Flostib4',
    port: 5434
})

const getTeamMembers = (request, response) => {
    pool.query('SELECT * FROM team_members ORDER BY member_id ASC', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

const getAllDeliveries = (request, response) => {
    pool.query('SELECT deliver.member_name as deliverer, checker.member_name as checker, week_mep, week_mer, description, jira_links FROM \
    delivery d \
    INNER JOIN team_members deliver \
    ON d.delivery_member_id = deliver.member_id \
    INNER JOIN team_members checker \
    ON d.checker_member_id = checker.member_id', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
}

module.exports = {
    getTeamMembers,
    getAllDeliveries
  }