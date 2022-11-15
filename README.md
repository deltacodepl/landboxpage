# Landingpage

This is a landingpage website built using **Django 4**, **Django REST Framework 3**, **Next.js 12**, and **Material UI 5** that uses a **PostgreSQL** database to store data.


## Installation

### Backend

#### 1. Set up backend environment variables

Declare environment variables in the **.env** file. Make sure you don't use quotation marks around the strings.

```bash
SECRET_KEY=yoursecretkey
DEBUG=TRUE
DATABASE_NAME=portfolio
DATABASE_USER=yourusername
DATABASE_PASS=yourpassword
DATABASE_HOST=localhost
FRONTEND_URL=http://localhost:3000
```


#### 2. Create an admin user to access the Django Admin interface

From the **backend** directory run:

```bash
python manage.py createsuperuser
```

### Frontend

#### 1. Install required frontend dependencies

From the **root** directory run:

```bash
cd frontend
```
```bash
npm install
```

#### 2. Set up frontend environment variables

Declare environment variables in the **.env** file. Make sure you don't use quotation marks around the strings.

```bash
BACKEND_HOST=127.0.0.1
BACKEND_URL=http://127.0.0.1:8000
```

## Run the application

To run the application, you need to have both the backend and the frontend up and running.

#### 1. Run backend

From the **backend** directory run:

```bash
docker-compose up --build
```

#### 2. Run frontend

From the **frontend** directory run:

```bash
npm run dev
```

#### 3. View the application

Go to http://localhost:3000/ to view the application.


## Add data to the application

Add data through Django Admin.

Go to http://127.0.0.1:8000/admin to access the Django Admin interface and sign in using the admin credentials.

## Creds

Copyright © 2022 RetryJoin. Code released under the MIT license.
