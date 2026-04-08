# frontend/Dockerfile

FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Build if needed (React/Vite/Next)
RUN npm run build || echo "No build step"

EXPOSE 3000

CMD ["npm", "start"]