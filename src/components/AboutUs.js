import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";

const Alumni = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography className={classes.title} variant="h4">Về chúng tôi</Typography>
        <Box className={classes.boxRoot}>
          <Box className="col medium-6 small-12 large-2">
            <Typography variant="h5">QS ranking 2020</Typography>
            <Box>451 – 500</Box>
            <Typography variant="body1">trên Thế giới trong nhóm ngành Khoa học Máy tính và Hệ thống Thông tin</Typography>
          </Box>
          <Box className="col medium-6 small-12 large-3">
            <Typography variant="h5">Sinh viên thuộc TOP</Typography>
            <Box>1%</Box>
            <Typography variant="body1">điểm cao nhất Khối A Toàn quốc mùa Tuyển sinh 2019</Typography>
          </Box>
          <Box className="col medium-6 small-12 large-2">
            <Typography variant="h5">Sinh viên</Typography>
            <Box>4.000+</Box>
          </Box>
          <Box className="col medium-6 small-12 large-3">
            <Typography variant="h5">Chương trình đào tạo</Typography>
            <Box>17+</Box>
            <Typography variant="body1">thuộc các hệ đào tạo cử nhân, kỹ sư, thạc sỹ khoa học, tiến sỹ</Typography>
          </Box>
          <Box className="col medium-6 small-12 large-2">
            <Typography variant="h5">Đối tác</Typography>
            <Box>200%</Box>
            <Typography variant="body1">các trường đại học, viện nghiên cứu, tập đoàn, công ty trong nước và quốc tế</Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Alumni;

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#fcf9e2",
    margin : 0,
    textAlign: "center"
  },
  boxRoot: {
    display: "flex",
    marginTop: "24px",
    "&>*": {
      "&>*:nth-child(2)": {
        fontWeight: "bold",
        fontSize: "35px"
      }
    }
  },
  title: {
    paddingTop: "24px"
  }
}));