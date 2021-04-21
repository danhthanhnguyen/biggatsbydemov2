import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const NavBar = () => {
  const classes = useStyles();
  const navBarList = [
    "Giới thiệu",
    "Bộ môn - Trung tâm",
    "Đào tạo", 
    "Nghiên cứu",
    "Tuyển sinh",
    "Sinh viên",
    "Hợp tác Đối ngoại", 
    "Cự Sinh viên",
    "Tin tức - Sự kiện",
    "Tuyển dụng"
  ];

  return (
    <Box className={classes.root}>
      <Container>
        {navBarList.map((item, index) => (
          <Box className={classes.item}>
            <Typography className={classes.title} key={index}>{item}</Typography>
            <ExpandMoreIcon />
          </Box>
        ))}
      </Container>
    </Box>
  );
}

export default NavBar;
  
const useStyles = makeStyles(() => ({
  root: {
    marginTop: "8px",
    backgroundColor: "#363636",
    borderTop: "7px solid rgb(190, 15, 15)",
    "&>*": {
      display: "flex",
      alignItems: "center",
    },
    "& svg": {
      color: "#999"
    }
  },
  title: {
    color: "white",
    fontSize: "14px"
  },
  item: {
    cursor:"pointer",
    display: "flex",
    alignItems: "center",
    padding: "8px",
    borderLeft: "1px solid #555",
    "&:last-child": {
      borderRight: "1px solid #555",
    },
  }
}));