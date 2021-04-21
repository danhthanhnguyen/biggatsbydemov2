
import * as React from "react"
import { Link, graphql } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CardItem from "./CardItem";
import { makeStyles, Box, Typography, Container } from "@material-ui/core";

const NewsLastest = ({data, location}) => {
  const posts = data.allMarkdownRemark.nodes
  const classes = useStyles();

  if (posts.length === 0) {
    return (
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
    )
  }

  const newsList = [
    {
      img: "https://soict.hust.edu.vn/content/uploads/Summer-School.jpg",
      title: "TRƯỜNG HÈ VỀ CÁC CHỦ ĐỀ NÂNG CAO TRONG KHOA HỌC DỮ LIỆU VÀ TRÍ TUỆ NHÂN TẠO",
      text: "Khoa học Dữ liệu và Trí tuệ Nhân tạo (Data Science and Artificial Intelligence – DS&AI) đã, đang và sẽ là những..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/CH%C6%AF%C6%A0NG-TR%C3%8CNH-H%E1%BB%8CC-CHUY%E1%BB%82N-TI%E1%BA%BEP-V%E1%BB%9AI-%C4%90%E1%BA%A0I-H%E1%BB%8CC-AIZU-NH%E1%BA%ACT-B%E1%BA%A2N-2021.jpg",
      title: "CHƯƠNG TRÌNH HỌC CHUYỂN TIẾP VỚI ĐẠI HỌC AIZU, NHẬT BẢN 2021",
      text: "Trong khuôn khổ hợp tác giữa Viện CNTT&TT – Đại học Bách khoa Hà Nội (SoICT) và Trường Đại học Aizu, Nhật..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/K%E1%BA%BE-HO%E1%BA%A0CH-N%E1%BB%98P-H%E1%BB%92-S%C6%A0-B%E1%BA%A2O-V%E1%BB%86-LU%E1%BA%ACN-V%C4%82N-CAO-H%E1%BB%8CC-%C4%90%E1%BB%A2T-24-4-2021.jpg",
      title: "KẾ HOẠCH NỘP HỒ SƠ BẢO VỆ LUẬN VĂN CAO HỌC ĐỢT 24 – 4 – 2021",
      text: "B.1 Các công việc đăng ký bảo vệ: STT Công việc cần thực hiện Thời hạn hoàn thành 1.1 Học viên thống..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/THU-TH%E1%BA%ACP-TH%C3%94NG-TIN-%C4%90%C4%82NG-K%C3%9D-THEO-H%E1%BB%8CC-CH%C6%AF%C6%A0NG-TR%C3%8CNH-K%E1%BB%B8-S%C6%AF-180-T%C3%8DN-CH%E1%BB%88-NG%C3%80NH-K%E1%BB%B8-THU%E1%BA%ACT-M%C3%81Y-T%C3%8DNH.jpg",
      title: "THU THẬP THÔNG TIN ĐĂNG KÝ THEO HỌC CHƯƠNG TRÌNH KỸ SƯ 180 TÍN CHỈ NGÀNH KỸ THUẬT MÁY TÍNH",
      text: "Thể theo nguyện vọng của sinh viên K62 ngành Công nghệ thông tin (mã tuyển sinh IT3) muốn học tập theo chương..."
    },
    {
      img: "https://soict.hust.edu.vn/content/uploads/THU-TH%E1%BA%ACP-TH%C3%94NG-TIN-%C4%90%C4%82NG-K%C3%9D-THEO-H%E1%BB%8CC-CH%C6%AF%C6%A0NG-TR%C3%8CNH-K%E1%BB%B8-S%C6%AF-180-T%C3%8DN-CH%E1%BB%88-NG%C3%80NH-K%E1%BB%B8-THU%E1%BA%ACT-M%C3%81Y-T%C3%8DNH.jpg",
      title: "THU THẬP THÔNG TIN ĐĂNG KÝ THEO HỌC CHƯƠNG TRÌNH KỸ SƯ 180 TÍN CHỈ NGÀNH KỸ THUẬT MÁY TÍNH",
      text: "Thể theo nguyện vọng của sinh viên K62 ngành Công nghệ thông tin (mã tuyển sinh IT3) muốn học tập theo chương..."
    }
  ]

  return (
    <Container>
      <Box className={classes.root}>
        <Typography variant="h4">Tin mới nhất</Typography>
        <Box className={classes.boxRoot}>
          {posts.map((news) => (
            <CardItem key={posts.fields.slug} img={news.img} title={news.title} text={news.text} />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default NewsLastest;

const useStyles = makeStyles(() => ({
  root: {
    "&>*:first-child": {
      textAlign: "center"
    }
  },
  boxRoot: {
    display: "grid",
    gridTemplateColumns: "auto auto auto",
    gridTemplateRows: "auto auto auto",
    justifyContent: "space-around",
    "&>*": {
      padding: "24px 16px"
    }
  }
}));

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
