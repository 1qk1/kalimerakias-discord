FROM node:22

ENV HOME=/home/app

# RUN apt-get update && apt-get install ffmpeg -y

COPY package.json package-lock.json $HOME/

WORKDIR $HOME

RUN npm install --silent --progress=false

COPY . $HOME

CMD ["npm", "start"]
