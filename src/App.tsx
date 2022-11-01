import { Children } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { PostActions } from "./store/post/postActions";
import { selectPosts } from "./store/post/postSelectors";
import { AppDispatch } from "./store/store";

function App() {
  const posts = useSelector(selectPosts);
  const { adicionarPost } = PostActions;
  const dispatch = useDispatch<AppDispatch>();

  const adicionarNovoPost = () => {
    dispatch(adicionarPost({ content: "Teste 2", id: "2", title: "Teste 02" }));
  };

  const renderPosts = Children.toArray(
    posts.map((item) => (
      <div className="Post">
        <span>{item.title}</span>
        <p>{item.content}</p>
      </div>
    ))
  );

  return (
    <div className="App">
      {renderPosts}
      <button onClick={adicionarNovoPost}>Adicionar post</button>
    </div>
  );
}

export default App;
