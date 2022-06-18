# use nodejs
FROM node:alpine

# workdir
WORKDIR /var/app

# copy files
COPY ./package.json ./

# install dependencies
RUN npm install

# Copy the app
COPY . .


# command
CMD ["npm", "start"]