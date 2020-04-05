# Build & Up Project 
docker-compose -f local.yml build ,
docker-compose -f local.yml up 

# Run the frontend
npm install 
npm install 

# Access Django Interactve Shell
docker-compose -f local.yml run django python manage.py shell

# Make Migration. (Generate migration file if model is changed)
docker-compose -f local.yml run django python manage.py makemigrations 

# Apply Migration. (Use migration file to update database schema) 
docker-compose -f local.yml run django python manage.py migrate 

## Delete the project

# Stop all docker containers 
docker stop $(docker ps -a -q)

# Delete all docker containers 
docker rm $(docker ps -a -q)

# Delete all docker volumes (data) 
docker volume rm $(docker volume ls)
