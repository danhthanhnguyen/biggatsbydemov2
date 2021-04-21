import React from "react";
import { makeStyles, InputBase, fade, Container } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const Header = () => {
  const classes = useStyles();

  return (
    <Container>
      <div className={classes.root}>
        <div className={classes.rootLogo}>
          <img src="https://soict.hust.edu.vn/content/uploads/Logo-25-nam-hust.png" alt=""/>
          <div className={classes.title}>
            <strong>Đại học Bách khoa hà nội</strong>
            <strong>VIỆN CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG</strong>
          </div>
        </div>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'search' }}
          />
        </div>  
      </div>
    </Container>
  );
}

export default Header;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  rootLogo: {
    display: "flex",
    alignItems: "center",
    "& img": {
      maxHeight: 100,
      marginRight: "30px"
    }
  },
  title: {
    display: "flex", 
    flexDirection: "column", 
    "&>*": {
      textTransform: "uppercase",
      fontSize: "18px"
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    border: "1px solid #CCC",
    borderRadius: "20px"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));