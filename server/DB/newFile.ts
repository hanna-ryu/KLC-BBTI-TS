// const express = require('express');
// const dbconfig = require('./database');

// const app = express();

// app.set('port', process.env.PORT || 3000);
// app.get('/', (req, res) => {
//   res.send('Root');
// });
// app.get('/users', (req, res) => {
//   connection.query('SELECT * from Users', (error, rows) => {
//     if (error) throw error;
//     console.log('User info is: ', rows);
//     res.send(rows);
//   });
// });
// app.listen(app.get('port'), () => {
//   console.log('Express server listening on port ' + app.get('port'));
// });
