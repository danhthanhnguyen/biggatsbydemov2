# Install nodejs version 13
FROM node:13

# Working directory
WORKDIR /usr/src/app

# Copy package.json file
COPY package.json ./

# Install gatsby-cli environment
RUN npm global add gatsby-cli

# Install dependencies
RUN npm install

# Copy all files
COPY . .

EXPOSE 8000

# Run command "gatsby develop to run gatsby app"
CMD ["gatsby", "develop"]
