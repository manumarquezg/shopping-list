FROM python:3.9

# Create project dir
ARG PROJECT_DIR=/var/www/shopping-list
RUN mkdir -p $PROJECT_DIR
WORKDIR $PROJECT_DIR

# Install Python deps
COPY Pipfile Pipfile.lock ./
RUN pip3 install -U pipenv
RUN pipenv install --system

# Copy files
COPY . .

# Server
EXPOSE 8000
STOPSIGNAL SIGINT
ENTRYPOINT ["./docker-entrypoint.sh"]
