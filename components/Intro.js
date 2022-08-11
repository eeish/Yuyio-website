import styled from "styled-components";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";

import Container from "./Container";
import { padWidth } from "../utils";

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: ${padWidth}) {
    flex-direction: column;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: ${padWidth}) {
    margin-bottom: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const MenuItemText = styled.span`
  cursor: pointer;
  :hover {
    font-weight: bold;
  }
`;

function MenuItem(props) {
  const elementId = props.elementId;
  return (
    <MenuItemText
      style={{ padding: "10px 20px" }}
      onClick={() => {
        if (elementId) {
          const ele = document.getElementById(elementId);
          ele.scrollIntoView({ behavior: "smooth" });
        }
        props.onClick && props.onClick();
      }}
    >
      {props.children}
    </MenuItemText>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 60px;
`;
const ContentImage = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
`;

function Intro() {
  return (
    <Container
      style={{
        background: "#dae7f8",
      }}
      id="intro"
    >
      <Head>
        <h1>芋油行程 App</h1>
        <MenuWrapper>
          <MenuItem elementId="intro">介绍</MenuItem>
          <MenuItem elementId="gallery">App功能展示</MenuItem>
          <MenuItem elementId="shuoming">说明</MenuItem>
          <MenuItem elementId="team">项目成员</MenuItem>
        </MenuWrapper>
      </Head>
      <Content>
        <ContentImage>
          <img style={{ width: 200 ,'borderRadius':'5%'}} src="/images/demo.png" />
        </ContentImage>
        <Typography
          style={{
            marginTop: "8.3333333%",
          }}
          variant="body1"
          gutterBottom
        >
          快来使用芋油行程App来规划你的旅行吧.不要错过每一个精彩的地点,自动生成旅程地图预览,将旅程分享到社交网络
        </Typography>
      </Content>
    </Container>
  );
}

export default Intro;
