const GenerateManually = () => {
    return <>
        <div className="flex flex-col align-middle justify-center">
        <div className="flex flex-row justify-center">
          <h1 className="text-white">Paste your blog URL here</h1>
        </div>

        <div className="flex flex-col gap-3 mt-3">
          <div className="flex justify-center gap-4">
            <input
              type="text"
              name="text"
              id="text"
              className="w-2/3 rounded-md h-10 px-3 py-2 bg-transparent text-white placeholder:text-gray-400 ring-1 ring-zinc-800 focus:ring-2 focus:ring-white focus:outline-none :-webkit-autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active"
              placeholder="www.example.com/feed"
            />

            <button
              type="button"
              // onClick={addYourWebsitehHandler}
              className="inline-flex items-center justify-center text-sm font-medium focus-visible:outline-none h-10 px-4 py-2 bg-zinc-50 hover:bg-zinc-100/95 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
}

export default GenerateManually;