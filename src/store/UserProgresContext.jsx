import { createContext, useReducer, useState } from "react";

const UserProgressContext = createContext({
  showModal: false,
  modalContent: null,

  twitterAccount: {},

  currentEmoji: null,
  selectEmoji: () => {},

  pickerState: false,
  showPicker: () => {},
  hidePicker: () => {},

  user: null,
  setTwitter: () => {},

  activeFeed: [],
  setActiveFeed: () => {},

  currentTweet: null,
  setCurrentTweet: () => {},

  activeBlog: null,

  showSheet: false,
  feeds: [],

  addFeeds: () => {},

  setShowModal: () => {},
  setHideModal: () => {},

  setShowSheet: () => {},
  setHideSheet: () => {},

  currentTab: "blog",
  setTab: (val) => {},
});

const feedsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FEEDS": {
      return {...state, feeds: action.feeds}
    }
  }
};

const modalReducer = (state, action) => {
  switch (action.type) {
    case "SHOW_MODAL":
      const mod =  { ...state, showModal: true, modalContent: action.payload }
      return mod;
    case "HIDE_MODAL":
      return {...state, showModal: false}
      default:
        return state
  }
};

export function UserProgressContextProvider({ children }) {
  const [modalState, dispatchContent] = useReducer(modalReducer, {
    showModal: false,
    modalContent: null,
  });
  const [showSheet, setSheet] = useState(false);
  const [currentTab, setCurrentTab] = useState("blog");
  const [currentTweet, setTweet] = useState(null)
  const [pickerState, setShowPicker] = useState(false)
  const [currentEmoji, setEmoji] = useState(null)
  const [activeFeed, setFeed] = useState(null)
  const [activeBlog, setActiveBlog] = useState(null)
  const [user, setUser] = useState(null)

  const [feedsState, dispatchFeeds] = useReducer(feedsReducer, { feeds: []});

  const setShowModal = (component) => {
    dispatchContent({ type: "SHOW_MODAL", payload: component });
  };

  const setHideModal = () => {
    dispatchContent({type: "HIDE_MODAL"})
  };

  const setTab = (val) => {
    setCurrentTab(val);
  };

  const addFeeds = (feeds) => {
    const prevFeeds = [...feedsState.feeds];
    dispatchFeeds({ type: "ADD_FEEDS", feeds: feeds });

    if(feeds.length === 1){
      setActiveFeed(feeds[0])
      return
    }
     
    const newFeed = feeds.filter(feed => !prevFeeds.some(prevFeed => prevFeed._id === feed._id))
    if(newFeed.length > 0){
      setActiveFeed(newFeed[0])
    }

  };

  const setShowSheet = (blog) => {
    setActiveBlog(blog)
    setSheet(true);
  };

  const setHideSheet = () => {
    setSheet(false);
  };

  const setCurrentTweet = (tweet) => {
    setTweet(tweet)
  }

  const showPicker = () => {
      setShowPicker(true)
  }

  const hidePicker = () => {
    setShowPicker(false)
  }

  const selectEmoji = (emoji) => {
    setEmoji(emoji)
  }

  const setActiveFeed = (feed) => {
    setFeed(feed)
  }

  const setTwitter = (user) => {
    setUser(user)
  }

  const userProgressCtx = {
    showModal: modalState.showModal,
    modalContent: modalState.modalContent,
    setShowModal: setShowModal,
    setHideModal: setHideModal,

    activeFeed,
    setActiveFeed,

    currentEmoji,
    selectEmoji,

    pickerState,
    showPicker,
    hidePicker,

    showSheet: showSheet,
    setShowSheet,
    setHideSheet,

    currentTweet,
    setCurrentTweet,

    feeds: feedsState.feeds,
    addFeeds: addFeeds,

    currentTab: currentTab,
    setTab: setTab,

    setTwitter,
    user: user,

    activeBlog: activeBlog,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}

export default UserProgressContext;
