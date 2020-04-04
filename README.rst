# Build & Up Project 
docker-compose -f local.yml build ,
docker-compose -f local.yml up 

# Access Django Interactve Shell
docker-compose -f local.yml run django python manage.py shell

# Make Migration. (Generate migration file if model is changed)
docker-compose -f local.yml run django python manage.py makemigrations 

# Apply Migration. (Use migration file to update database schema) 
docker-compose -f local.yml run django python manage.py migrate 
