#          Individual Commands                 

#### Build & Up Project 
* docker-compose -f local.yml build ,
* docker-compose -f local.yml up 

#### Run the frontend
* npm install 
npm run watch 

#### Access Django Interactve Shell
* docker-compose -f local.yml run django python manage.py shell

#### Make Migration. (Generate migration file if model is changed)
* docker-compose -f local.yml run django python manage.py makemigrations 

#### Apply Migration. (Use migration file to update database schema) 
* docker-compose -f local.yml run django python manage.py migrate 

## Delete the project

#### Stop all docker containers 
* docker stop $(docker ps -a -q)

#### Delete all docker containers 
* docker rm $(docker ps -a -q)

#### Delete all docker volumes (data) 
docker volume rm $(docker volume ls)


#         Getting started from scratch         


1. Download docker toolkit if you're on windows.

2. Clone the trends api repo and cd into it.

3. Assuming docker installed well you should be able to run the build command and then the up command from the readme.rst file on GitHub. 

4. Visit localhost:8000 or 0.0.0.0:8000, or run docker-machine ls, then take the ip listed and add it to the file config/settings/local.py where it says allowed hosts, only the IP for ex: 192.168.99.1 or something. Visit thatip:8000 in the web browser. Should see the home page.

5. Install node.js if you don't already have it. We want to run npm. Cd into the project directory in another window and type "npm install" then "npm run watch". The run watch just starts up the frontend. 

6. Look at file gifs/static/js/pages/home.js for our home page code. 

7. If you're curious about the backend code look at gifs/home/views.py for a function that renders the page. Or gifs/home/urls.py that tells the web browser what view to render based on the URL in the browser. Or models.py in that same folder which defines python classes that ultimately django turns into sql tables for us so we can just interface with those python objects instead of select statements.

8. Docker is really just a wrapper for different services. Docker has our database in a container, and our backend (django) in a container.
