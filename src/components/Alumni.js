import React from "react";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";
import CardItem from "./CardItem";

const Alumni = () => {
  const classes = useStyles();
  const newsList = [
    {
      img: "https://soict.hust.edu.vn/content/uploads/205feec3d18738d96196.jpg",
      title: "Hoàng Việt Anh – Chỉ có một tình yêu duy nhất",
      text: "Gia nhập FPT năm 1993, từ khi còn là sinh viên năm 3 khoa CNTT ĐH Bách..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/Lu-Thanh-Long.jpg",
      title: "Lữ Thành Long – Thủ lĩnh công nghệ",
      text: "Nhắc đến ngôi trường đã gắn bó suốt 5 năm học đại học, doanh nhân Lữ Thành..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/2019/06/nam-2014-nguyen-ha-dong-va-flappy-bird-trong-hanh-trinh-mang-den-nhung-dieu-ky-dieu--400x267.jpg",
      title: "Nguyễn Hà Đông – Cha đẻ Flappy Bird “náo loạn” Thế giới",
      text: "Tạp chí công nghệ Cnet của Mỹ công bố danh sách 25 ứng dụng có ảnh hưởng..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/2019/05/hungtran-400x250.jpg",
      title: "Hùng Trần – Tấm gương khởi nghiệp người Việt tại Silicon Valley",
      text: "“Gãi đúng chỗ ngứa” của người dùng Trần Việt Hùng là cựu nghiên cứu sinh Quỹ Giáo..."
    }
  ]

  return (
    <Container>
      <Box className={classes.root}>
        <Typography variant="h4">Cựu sinh viên</Typography>
        <Box className={classes.boxRoot}>
          {newsList.map((news, index) => (
            <CardItem key={index} img={news.img} title={news.title} text={news.text} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default Alumni;

const useStyles = makeStyles(() => ({
  root: {
    "&>*:first-child": {
      textAlign: "center"
    }
  },
  boxRoot: {
    display: "flex",
    justifyContent: "space-around",
    "&>*": {
      padding: "24px 16px"
    }
  }
}));