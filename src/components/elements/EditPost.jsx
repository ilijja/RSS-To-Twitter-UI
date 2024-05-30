import { useContext, useEffect, useRef, useState } from "react";
import UserProgressContext from "@/store/UserProgresContext";
import { FaXTwitter } from "react-icons/fa6";
import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import EmojiPicker from "./EmojiPicker";
import TextareaAutosize from "react-textarea-autosize";

function handlePaste(e) {
  e.preventDefault();
  const text = e.clipboardData.getData("text/plain");
  document.execCommand("insertText", false, text);
}

const EditPost = () => {
  const { showModal, setHideModal, currentTweet, showPicker, pickerState, currentEmoji } =
    useContext(UserProgressContext);

  const [text, setText] = useState(currentTweet);
  const textAreaRef = useRef(null)
  const [cursorPosition, setCursorPosition] = useState(0)

  const handleCursor = () => {
    const position = textAreaRef.current.selectionStart;
    setCursorPosition(position)
  }

  useEffect(() => {
    if(currentEmoji){
        const newText = text.substring(0, cursorPosition) + currentEmoji.native + text.substring(cursorPosition);
        setText(newText);
        setTimeout(() => {
            textAreaRef.current.selectionStart = textAreaRef.current.selectionEnd = cursorPosition + currentEmoji.native.length;
          }, 0);
    }
    
  },[currentEmoji])

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const showPickerHandler = () => {
    showPicker()
  }

  return (
    <>
      <div className="flex flex-col gap-7">
        <div className="flex w-full max-w-screen h-full ">
          <div className="flex justify-center items-center h-full w-12 flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-zinc-50"></div>
          </div>
          <div className="flex flex-col py-1 px-2 flex-grow">
            <div className="flex items-center gap-1">
              <p className="text-sm text-zinc-50 font-semibold">
                Ilija Dimitrijevic
              </p>
              <p className="text-sm text-zinc-500 font-normal">@ilijja</p>
            </div>

            <div className="pt-1 flex-1">
              <TextareaAutosize
                className="w-full resize-none rounded-md text-left bg-transparent text-sm shadow-sm text-zinc-50 focus-visible:outline-none disabled:cursor-not-allowed min-h-[3em] break-before-avoid"
                value={text}
                ref={textAreaRef}
                onChange={handleChange}
                onClick={handleCursor} 
                onKeyUp={handleCursor}
                minRows={3}
                maxRows={16}
              />
              <div className="inline-flex justify-end w-full pt-3">
                <div className="inline-flex items-end w-fit gap-2">
                  <p className="text-zinc-500 text-sm cursor-default">
                    {text.length}/5000
                  </p>
                  <div>
                  <FaceSmileIcon onClick={showPickerHandler} className="text-zinc-500 w-5 h-5 cursor-pointer" />
                  </div>
                  
                  <PhotoIcon className="text-zinc-500 w-5 h-5 cursor-pointer" />
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="inline-flex justify-end w-full">
          <div className="inline-flex  gap-2 justify-between w-fit">
            <button
              type="button"
              className="inline-flex items-center text-zinc-950 gap-x-1.5 rounded-md  bg-zinc-50 px-3 py-1.5 text-sm font-medium"
            >
              Publish on
              <FaXTwitter />
            </button>
          </div>
        </div>
      </div>

      <EmojiPicker/>
      
    </>
  );
};

export default EditPost;