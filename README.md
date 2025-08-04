# RSS-To-Twitter-UI

An automated tool that reads RSS feeds and posts new entries on X (formerly Twitter).

---

## What the Project Does

**RSS-To-Twitter-UI** is a web application that automatically tracks RSS feeds you define and publishes new updates directly to your Twitter profile. Instead of manually checking feeds and posting content, the app does it for you.

---

## Key Features

- **Automatic posting**: When a new post appears in an RSS feed, a tweet is automatically published  
- **Feed management**: Add, remove, and edit RSS feeds through the web interface  
- **Tweet customization**: Add prefixes, suffixes, or hashtags to your tweets  
- **Monitoring**: View all published tweets and feed statuses  

---

## How It Works

### 1. Setup Phase
- Add the RSS feeds you want to track (for example, a blog, news site, or YouTube channel)  
- Configure Twitter API access  
- Define the tweet format (text, hashtags, additional content)  

### 2. Automated Operation
- The application periodically checks all added RSS feeds  
- When a new post is detected, it creates a tweet using the defined format  
- The tweet is automatically published to the connected Twitter account  
- Information about published tweets is stored in the database  

### 3. Web Interface Management
- View all active feeds  
- Add new RSS sources  
- Edit tweet formats  
- Monitor published content  

---

## Usage Example

**Scenario**: You have a blog and want every new post to be automatically shared on Twitter.

1. Add the RSS feed of your blog to the application  
2. Define the format: `"New blog post: [TITLE] [LINK] #blog #tech"`  
3. Activate the feed – the app starts tracking it  
4. Automatic posting – when you publish a new blog post, a tweet appears automatically within 10 to 15 minutes  

---

## Technologies

- **Frontend**: React.js web interface  
- **Backend**: Node.js server with Express  
- **Database**: MongoDB for storing configurations  
- **APIs**: Twitter API + RSS Parser  
