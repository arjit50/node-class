let client = require("./db")

    // cyan client.query('SELECT NOW()')
    //cyan  .then(res=>{
    //cyan      console.log(res.rows[0]);
    // cyan     client.end();
    // cyan })
    // cyan .catch(err=> console.log("error occured",err))


    //cyan CRUD Operatioh

 
    // magenta Create a table

//cyan const query = `
//cyan     CREATE TABLE IF NOT EXISTS STUDENT(
//cyan     id SERIAL PRIMARY KEY,
//cyan     name VARCHAR(50),
// cyan    age INT,
// cyan    city VARCHAR(50)
// cyan    );

//cyan  `;

//cyan  client.query(query)
//cyan  .then(()=>{
//cyan      console.log('student table created')
//cyan      client.end();
//cyan  })

// cyan .catch(err=>console.log(err))



//magenta insert in data in a table

//cyan const query = `
//cyan INSERT INTO student(name,age,city)
//cyan VALUES ($1,$2,$3)
//cyan RETURNING *;
//cyan `;

//cyan const values = ['Arjit', 22, 'Delhi'];

//cyan client.query(query, values)
//cyan   .then(res => {
//cyan     console.log("✅ Data Inserted:", res.rows[0]);
//cyan     client.end();
//cyan   })
//cyan   .catch(err => console.error(err));



//magenta ==========SELECT===============

//cyan const query = `SELECT * FROM student;`;

//cyan client.query(query)
//cyan .then(res => {
//cyan     console.log("📍 All Students:");
//cyan     console.table(res.rows);
//cyan     client.end();
//cyan })
//cyan .catch(err => console.error(err));

//magenta ==========SELECT WHERE===============



// cyan const city = 'Delhi';

//cyan const query = `SELECT * FROM student WHERE city = $1`;

//cyan client.query(query, [city])
//cyan   .then(res => {
//cyan     console.log("🏙️ Students from", city);
//cyan     console.table(res.rows);
//cyan     client.end();
//cyan   })
//cyan   .catch(err => console.error(err));

  


  //magenta ================= ORDER + LIMIT==============


//cyan const query = `
//cyan SELECT * FROM student
//cyan ORDER BY age DESC
//cyan LIMIT 2;
//cyan `;

//cyan client.query(query)
//cyan   .then(res => {
//cyan     console.log("🔥 Top 2 Oldest Students:");
//cyan     console.table(res.rows);
//cyan     client.end();
//cyan   })
//cyan   .catch(err => console.error(err));



//magenta UPDATE Data


//cyan  const query = `
// cyan UPDATE student
//cyan  SET name = $1, age = $2, city = $3
//cyan  WHERE id = $4
//cyan  RETURNING *;
// cyan `;

// cyan const values = ['Arjit Kumar', 23, 'Mumbai', 1]; 

//cyan  client.query(query, values)
//cyan    .then(res => {
//cyan      console.log("✅ Student Updated:", res.rows[0]);
//cyan      client.end();
//cyan    })
//cyan    .catch(err => console.error(err));


//magenta DELETE Data


//cyan const query = `
//cyan DELETE FROM student
//cyan WHERE id = $1
//cyan RETURNING *;
//cyan `;

//cyan const values = [1]; 

//cyan client.query(query, values)
//cyan   .then(res => {
//cyan     console.log("✅ Student Deleted:", res.rows[0]);
//cyan     client.end();
//cyan   })
//cyan   .catch(err => console.error(err));



