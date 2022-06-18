# step 1 create alpine image means os
FROM alpine:latest
# step2 install a software
# RUN apk add binutils
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories

RUN apk update
RUN apk add mongodb=3.4.4-r0
RUN apk add binutils
RUN apk add gcc
RUN apk add nodejs=14.18.1-r0

VOLUME [ "/data/db" ]
WORKDIR /data
EXPOSE 27017

CMD [ "mongod" ]

# step3 set default commands
# CMD ["/bin/sh"]
