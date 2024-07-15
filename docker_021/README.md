### list of networks
docker network ls

### create nerwork, network name is sample-network
docker network create sample-network

### run the docker container using docker-compose(.yaml file)
### docker-compose -f path-to-yaml-file -d 
docker-compose -f admin.yaml up -d


### =======================docker commends==============================
### to create docker image or to pull the image from docker hub
docker pull image-name

### run the docker image  
### options includes port binding, network, container-name, mode of execution(-d), env variables
docker run [options] image-name

### list running container
docker ps 

### check status use CONTAINER ID = 602c262074bf
docker logs 602c262074bf

### list all the containers
docker ps -a

### list images
docker images

### build the docker image from Dockerfile
docker build -t image-name path-to-Dockerfile

