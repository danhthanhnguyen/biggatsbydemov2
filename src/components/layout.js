import * as React from "react"
import Header from "./Header";
import NavBar from "./NavBar";
import SlideShow from "./SlideShow";
import AboutUs from "./AboutUs";
import { makeStyles } from "@material-ui/core";

const Layout = ({ location, title, children }) => {
  const classes = useStyles();
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <div className="App">
      <Header />
      <NavBar />
      <SlideShow />
      <main className={classes.post}>{children}</main>
      <AboutUs />
    </div>
  )
}

export default Layout


const useStyles = makeStyles((theme) => ({
  post: {
    width: "90%",
    margin: "0 auto",
    padding: "20px 0px"
  }
}));