# add my node application to container to alpine
FROM node:alpine

# workdir
WORKDIR /usr/nodeapp

# add node application
COPY ./package.json ./

# install node application
RUN npm install
COPY ./ ./

# run node application
CMD ["npm", "start"]

