
FROM node:18-alpine


WORKDIR /app

ENV NODE_OPTIONS="--max-old-space-size=256"

COPY package*.json .


RUN npm install


COPY . .


RUN npm run build


RUN NODE_OPTIONS = --max-old-space-size=4096


EXPOSE 5173


CMD [ "npm", "run", "dev" ]
