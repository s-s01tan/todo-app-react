import { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import TodoList from "../../components/TodoList/TodoList";
import "./Home.css";

const Home = () => {
  const tmpData: TodoType[] = [
    {
      id: "1",
      title: "Test",
      description: "Test",
      isCompleted: false,
      isRemoved: false,
    },
    {
      id: "2",
      title: "Test",
      description: "Test",
      isCompleted: false,
      isRemoved: false,
    },
    {
      id: "3",
      title: "Test",
      description: "Test",
      isCompleted: true,
      isRemoved: false,
    },
    {
      id: "4",
      title: "Test",
      description: "Test",
      isCompleted: false,
      isRemoved: false,
    },
    {
      id: "5",
      title: "Test",
      description: "Test",
      isCompleted: true,
      isRemoved: false,
    },
  ];

  return (
    <Fragment>
      <Header />
      <TodoList todos={tmpData} />
      <Footer />
    </Fragment>
  );
};

export default Home;
