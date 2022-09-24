# Shopping list

## Backend

### Configuration and installation

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

### Run the server

#### Locally

Inside the Python virtual env:

```bash
./manage.py runserver
```

Go to [http://localhost:8000/](http://localhost:8000/).

### Admin panel

Go to [http://localhost:8000/admin/](http://localhost:8000/admin/) and use your super user credentials to see the admin panel.

You can manually add/edit/remove products from here.
