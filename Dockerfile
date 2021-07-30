FROM node:14.17-alpine

#Creating Directory and move the workdir
RUN mkdir -p /home/app
WORKDIR /home/app

#Copying the APP
COPY package.json ./
COPY package-lock.json ./
RUN npm i 

#Copy File into the docker 
COPY . /home/app

CMD ["npm", "start"]