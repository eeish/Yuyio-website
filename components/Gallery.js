import styled from "styled-components";
import Typography from "@mui/material/Typography";
import _ from "lodash";

import Container from "./Container";

const GalleryList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1000px;
  overflow: hidden;
  margin: 5% auto 0 auto;
`;
const GalleryItem = styled.div`
  width: 300px;
  margin: 10%;
  transition: all 0.2s ease;
  will-change: transform;
  position: relative;
  z-index: 10;
  img {
    width: 100%;
    height: auto;
  }
  :hover {
    transform: scale(1.2);
  }
`;

const arts = [
  "/images/demo_01.png",
  "/images/demo_03.png",
  "/images/demo_07.png",
  "/images/demo_13.png",
  "/images/demo_06.png",
  "/images/demo_05.png",
];

const Content = styled.div`
  max-width: 840px;
  margin: 5% auto 5% auto;
  strong {
    color: red;
  }
`;

const strong = styled.div`
  color: green;
`

function Gallery() {
  return (
    <Container
      style={{
        background: "#fff",
      }}

      id = "gallery"
    >
      <Typography
        style={{ textAlign: "center", marginTop: "5%" }}
        variant="h3"
        gutterBottom
      >
        App功能展示
      </Typography>
      <GalleryList>
        {arts.map((art, idx) => {
          return (
            <GalleryItem key={idx}>
              <img src={art} alt="国产良心作品展示" />
            </GalleryItem>
          );
        })}
      </GalleryList>

      <Content 
        id = "shuoming"
        >
        <Typography style={{ textAlign: "center" }} variant="h4" gutterBottom>
          使用说明
        </Typography>
        <Typography
          style={{ marginBottom: 20, marginTop: 50 }}
          variant="body1"
          gutterBottom
        >
          1. 我们的开发愿景是做一款好用的旅行规划安排工具.
          <strong>简单上手便能制作生动的路线规划</strong>
          ，我们确保不会有不明确的产品功能和特性,一切为了旅途规划。
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          2. 我们支持将旅程<strong>一键分享</strong>到微信聊天,
          约朋友出行,再也不会因为没有清晰的方案而浪费时间了
        </Typography>
        <Typography style={{ marginBottom: 20 }} variant="body1" gutterBottom>
          3. 朋友们可以一键点击加入行程,分享人可以及时看到同行人的加入情况,后期将会有更多有趣的社交玩法等待开启
        </Typography>
      </Content>
    </Container>
  );
}

export default Gallery;
