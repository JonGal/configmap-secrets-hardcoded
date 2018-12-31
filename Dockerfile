FROM node:8

WORKDIR /usr/src/site/
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080
ENV USERNAME db_accessor
ENV PASSWORD K61&A5Mi@0Xv43V5kl
ENV DATABASE critical_or_pii

CMD ["npm", "start"]
