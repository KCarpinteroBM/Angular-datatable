#Get node docker image 
FROM node:14.19.1

#Define the working directory within a container
WORKDIR /app

#Define an Environment variable called path 
ENV PATH /app/node_modules/.bin:$PATH

#Copy package.json file in to the container to install all the dependencies
COPY package.json /app/package.json

#Install angular and all the dependencies
RUN npm install
RUN npm install -g @angular/cli

#Copy the project inside the container
COPY . /app
RUN rm -rf /src/assets/sample.json
#Run the python script to generate the data
#RUN python script.py

#Deploy the service
CMD ng serve --host 0.0.0.0