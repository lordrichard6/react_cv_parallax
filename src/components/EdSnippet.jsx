const EdSnippet = ({ img, align, title, from, to, where, text }) => {
  return (
    <div
      className="transform hover:translate-y-1 transition duration-150 ease-in m-4 w-3/4 2xl:w-1/2 h-96 md:h-44 2xl:h-40 border-green-600 rounded-xl bg-cover bg-center"
      style={{
        backgroundImage: `url(${img})`,
        justifyContent: `${align}`,
        borderTop: "3px solid",
        borderBottom: "3px solid",
      }}
    >
      <div
        className="flex h-full bg-gray-800 bg-opacity-50"
        style={{ justifyContent: `${align}` }}
      >
        <div className="p-4 text-white w-10/12 md:w-2/3">
          <h1 className="text-2xl">{title}</h1>
          <h2 className="text-xl">
            From {from} to {to} done in {where}
          </h2>
          <p className="text-lg">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default EdSnippet;
