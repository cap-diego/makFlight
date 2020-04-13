# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /social-flight

# add `/social-flight/node_modules/.bin` to $PATH
ENV PATH /social-flight/node_modules/.bin:$PATH

# install app dependencies
COPY social-flight/package.json ./
COPY social-flight/package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY ./social-flight ./

# start app
# CMD ["npm", "start"]
CMD ["tail","-f", "/dev/null"]
