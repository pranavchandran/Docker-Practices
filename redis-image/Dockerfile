# Use an existing docker image as a base
FROM alpine:latest
# Download and install a dependency
# install redis
RUN apk add --no-cache redis
# Run a command
RUN apk add --update redis
RUN apk add --update gcc
# Tell the image what to do when it starts as a container
CMD ["redis-server"]