// const heading = React.createElement("h1", { }, "Hello World From React!!");

const content = [
  React.createElement("div", { id: "Parent-1" }, [
    React.createElement("h1", {}, "Hello World From React!!"),
    React.createElement(
      "h2",
      {},
      "Hello World From React indside the H2 Tag!!"
    ),
  ]),
  React.createElement("div", { id: "Parent-1" }, [
    React.createElement("h1", {}, "Hello World From React!!"),
    React.createElement(
      "h2",
      {},
      "Hello World From React indside the H2 Tag!!"
    ),
  ]),
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(content);
