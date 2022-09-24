# Shopping list demo

![Screenshot](.img/screenshot.png)

## Backend

### Run manually

#### Install dependencies and virtual environment

```bash
pipenv install
```

Open the installed virtualenv with:

```bash
pipenv shell
```

#### Run database migrations

```bash
./manage.py migrate
```

#### Create super user

```bash
./manage.py createsuperuser
```

Select a name and password for the super user.

#### Run the server

Inside the Python virtual env:

```bash
./manage.py runserver
```

### Run with docker

#### Build docker image

```bash
docker build . -t shopping-list
```

#### Run the docker image

```bash
docker run -p 8000:8000 -it shopping-list:latest
```

### Admin panel

Go to [http://localhost:8000/admin/](http://localhost:8000/admin/) and use your super user credentials to see the admin panel.

You can manually add/edit/remove products from here.

### API REST

Go to [http://localhost:8000/api/v1/shoppinglist/](http://localhost:8000/api/v1/shoppinglist/) to see the available endpoints on the API REST v1.

## Frontend

### Run manually

#### Install dependencies

To use the npm version specified on the `.nvmrc` file:

```bash
nvm use
```

Install dependencies:

```bash
npm install
```

#### Start the frontend

```bash
npm run start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
