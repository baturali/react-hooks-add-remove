import React from "react";

const TestContext = React.createContext({
  listLang: [
    { id: 1, text: "HTML", complete: false },
    { id: 2, text: "CSS", complete: false },
    { id: 3, text: "JavaScript", complete: true },
    { id: 4, text: "React.js", complete: true },
    { id: 5, text: "React Hooks", complete: true },
    { id: 6, text: "VUE", complete: true }
  ],
  knowledge: []
});

export default TestContext;