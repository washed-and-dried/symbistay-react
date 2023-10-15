# symbistay

To run for development:
```shell
npm i
```

Then run 
```shell
npm run dev
```
---
Working with docker(this is just for production):

First create the image using:
```shell
docker build -t <image_name> .
```

Then to run the container
```shell
docker run -d -p <host_port>:80 --rm <image_name>
```
Now you can access the site at http://localhost:<host_port>


If you want to stop the container, run ```docker ps``` and note the id for the container
then execute ```docker kill <id_noted>```. Since we are running this with the --rm flag
it will automatically remove the container.