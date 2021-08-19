FROM node:latest

LABEL version="1.0"
LABEL description="Docker Container for Perforce Discord Bridge"
LABEL maintainer = ["bioblazepayne@gmail.com"]

RUN apt-get update
RUN apt-get install --yes build-essential curl apt-transport-https openssl libssl-dev git-core lsb-release gnupg gcc g++ make

# Perforce Client
RUN curl -sS https://package.perforce.com/perforce.pubkey | apt-key add -
RUN echo 'deb http://package.perforce.com/apt/ubuntu focal release' > /etc/apt/sources.list.d/perforce.list

RUN apt-get update
RUN export DEBIAN_FRONTEND=noninteractive && apt-get install --yes helix-cli

WORKDIR /src

COPY ["package.json", "./"]

RUN npm install

COPY . .

CMD ["node", "/src/index.js"]