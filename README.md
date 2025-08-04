# RSS-To-Twitter-UI
An automated tool that tracks RSS feeds, uses AI to generate tweets, and posts them directly to Twitter.

---

## What the App Does
**RSS-To-Twitter-UI** monitors RSS sources and uses **OpenAI API** to turn new content into tweet-ready posts. You can choose between full automation or manual control with AI suggestions.

---

## Key Features

### 🧠 AI-Powered Content
- **OpenAI integration**: Converts content into tweets  
- **Smart summarization**: Turns long articles into tweet format  
- **Multiple versions**: Get several options to choose from  

### ⚙️ Posting Control
- **Automatic mode**: Works without your input  
- **Manual mode**: Review and select AI-generated tweets  
- **Scheduling**: Choose exact posting time  

### 🔗 Feed Management
- **Add/edit feeds** via web interface  
- **Real-time feed status**  
- **Custom settings per feed**  

### ✍️ Tweet Customization
- **Templates**: Add prefixes, suffixes, hashtags  
- **Brand consistency**: Keeps your voice consistent  
- **Hashtag suggestions**: AI recommends relevant tags  

### 📊 Monitoring & History
- **Tweet history**: Browse all past tweets  
- **Feed analytics**  
- **Error logging & API status**

---

## How It Works

### 1. Setup
- Add RSS feeds (blogs, news, YouTube…)  
- Enter Twitter and OpenAI API keys  
- Set templates and posting rules  

### 2. AI Processing
- Detects new articles  
- OpenAI summarizes content  
- Generates multiple tweet versions  
- Suggests hashtags  

### 3. Posting Modes

#### Automatic (ON)
- Cron job checks feeds every 10–15 minutes  
- New content is processed and posted automatically  
- No manual action needed  

#### Manual (OFF)
- System detects new content  
- Click "Generate Tweets"  
- Review 3–5 tweet variations  
- Choose and publish manually  

### 4. Web Interface
- **Dashboard**: Overview of all feeds  
- **Tweet editor**: Edit AI-generated content  
- **Analytics**: Monitor performance  
- **Settings**: Manage keys, templates, rules  

---

## Usage Examples

### Scenario 1: Fully Automated Blog Sharing
1. Add your blog’s RSS feed  
2. Turn on "Automatic Posting"  
3. Set template:  
   `New post: [AI_SUMMARY] [LINK] #blog #tech`  
4. Cron job checks for new posts, generates tweet, and publishes

**Result**: New blog post becomes a tweet within 15 minutes.

### Scenario 2: Curated Content with AI
1. Add multiple RSS sources (news, niche sites...)  
2. Turn off automatic posting  
3. When new content arrives:  
   - Click "Generate Tweets"  
   - Review 3–5 AI suggestions  
   - Pick the best and post

**Result**: Human-approved content with AI efficiency.

---

## Technologies

### Frontend
- **React.js**  
- **Responsive UI**  
- **Live feed status**

### Backend
- **Node.js + Express**  
- **Cron jobs**  
- **Queue system for retries**

### Database & Storage
- **MongoDB**: Stores config and tweet history  
- **RSS caching** for efficiency

### API Integrations
- **Twitter API v2**  
- **OpenAI API**  
- **RSS parser**  
- **Retry logic & error handling**
