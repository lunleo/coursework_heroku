const Pool = require('pg').Pool;
const pool = new Pool({
 host: 'ec2-34-251-118-151.eu-west-1.compute.amazonaws.com',
  database: 'd3j3tuda2bpc7b',
  user:'tbsghvhvvrvwsm',
  password: '97b49635120b0e39398784c518ca9c7d7613b5018afd62c99df76e5e143c1c39',
  port: 5432,
  ssl:{rejectUnauthorized:false},
})

const getData = (req, res) => {
  pool.query('SELECT * FROM public.contacts', (err, data) => {
      res.header("Access-Control-Allow-Origin", "*");
    if (err) {throw err}
    res.status(200).json(data.rows)
  })
}

module.exports = {
  getData,
}