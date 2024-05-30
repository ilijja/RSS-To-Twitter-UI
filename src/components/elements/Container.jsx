const Container = ({ children, actionButtons }) => {
    return (
      <>
        <div className="w-full h-fit min-h-32 bg-zinc-transparent border border-zinc-800 rounded-xl ">
          <div className="pt-5 px-5 pb-2">{children}</div>
          <div className="flex items-center p-2 w-full h-fit min-h-12 rounded-b-xl bg-zinc-900 border-t border-t-zinc-800">
              {actionButtons}
          </div>
        </div>
      </>
    );
  };
  
  export default Container;
  