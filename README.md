# School App

## Framework dan Package
- express js
- ejs
- nodemon
- pg
- sequelize
- sequelize-cli
- html => Custom Bootsrap 5

## Task
Kamu diminta untuk membuat sebuah School App sederhana yang dimana didalam nya terdapat data Students, Teachers, dan Subjects, untuk data Students kita bisa melakukan CRUD, sedangkan untuk data Teacher dan Subject kita hanya diminta untuk menampilkan datanya saja.
Buatlah program dengan pattern MVC, dan jika sebelumnya kita menggunakan Callback di keseluruhan syntax, maka sekarang gunakanlah Promise. Lalu simpan data tidak lagi di `.json` melainkan di database, pada kali ini kita akan menggunakan Postgres sebagai databasenya.
Data `.json` di awal hanya digunakan untuk seeding data saja.

# Getting Started
Hal yang perlu dilakukan untuk memulai Aplikasi Web :

- Pastikan di komputer kamu telah terinstal Postgres
- clone this repository
- cd School_App
- npm install
- Masuk ke folder config, lalu ubah settingan sesuai dengan di laptop / komputer kamu
    ```JavaScript
        "development": {
            "username": "postgres",
            "password": "postgres",
            "database": "git_school_app",
            "host": "localhost",
            "dialect": "postgres"
        },
    ```
- npx sequelize db:create
- npx sequelize db:migrate
- npx sequelize db:seed:all 
- git checkout -b yourbranch
- npx nodemon app.js
- you can see web apps in http://localhost:3000/

# Feature in routes
- HOME
    - http://localhost:3000
- Student's
    - LIST : http://localhost:3000/students
    - ADD : http://localhost:3000/students/add
    - EDIT : http://localhost:3000/students/:id/edit
        - notes : `:id` akan secara otomatis terganti saat memilih link edit di setiap data
    - DELETE : http://localhost:3000/students/:id/delete
        - notes : `:id` akan secara otomatis terganti saat memilih link delete di setiap data
- Teacher's
    - LIST : http://localhost:3000/teachers
- Subject's
    - LIST : http://localhost:3000/subjects

you can view it on localhost:3000