
FROM node:16-alpine

# RUN mkdir /app
# Set the working directory to ./app
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 5001
# Run app.js when the container launches
CMD ["npm", "start"]