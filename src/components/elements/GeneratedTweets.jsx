import { useContext, useEffect, useState } from "react";
import TweetPost from "./TweetPost";
import UserProgressContext from "@/store/UserProgresContext";
import Container from "./Container";

const GeneratedTweets = () => {
  const { activeBlog, activeFeed, feeds } = useContext(UserProgressContext);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    if (activeFeed && activeBlog) {
      const feed = feeds.find((feed) => feed._id === activeFeed._id);
      if (feed) {
        const blog = feed.blogs.find((blog) => blog._id === activeBlog._id);
        if (blog && blog.tweets) {
          setTweets(blog.tweets);
        }
      }
    }
  }, [feeds]);

  return (
    <div className="flex flex-col gap-3">
      {tweets.length === 0 ? (
        <div className="flex flex-col gap-10">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Container key={idx}>
              <div className="inline-flex w-full h-full pb-5">
                <div key={idx} className="flex items-center space-x-4">
                  <div className="animate-pulse bg-zinc-800 h-12 w-12 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="animate-pulse rounded-md bg-zinc-800 h-4 w-80"></div>
                    <div className="animate-pulse rounded-md bg-zinc-800 h-4 w-96"></div>
                  </div>
                </div>
              </div>
            </Container>
          ))}
        </div>
      ) : (
        tweets.map((tweet) => (
          <TweetPost key={tweet._id} tweetContent={tweet.content} />
        ))
      )}
    </div>
  );
};

export default GeneratedTweets;
