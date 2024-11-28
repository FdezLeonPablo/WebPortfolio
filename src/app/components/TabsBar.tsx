const TabsBar = ({ openFiles, onCloseFile, activeFile, onTabClick }) => {
    return (
      <div className="flex bg-primary-100 border-b border-lines">
        {openFiles.map((fileName) => (
          <div
            key={fileName}
            className={`flex items-center px-4 py-2 border-r border-lines ${
              activeFile === fileName ? 'bg-secondary-100' : ''
            }`}
            onClick={() => onTabClick(fileName)}
          >
            <span>{fileName}</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseFile(fileName);
              }}
              className="ml-2"
            >
              ✕
            </button>
          </div>
        ))}
      </div>
    );
  };
  export default TabsBar;