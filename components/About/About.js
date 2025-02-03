import {
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  PINKOI_LINK,
  MAIL,
  MAIL_LINK,
} from 'constants/links'
import IG from '../icons/Instagram'
import FB from '../icons/Facebook'
import Pinkoi from '../icons/Pinkoi'
import {
  AvatarWrapper,
  Avatar,
  Wrapper,
  InfoWrapper,
  Intro,
  Description,
  Contact,
  Footer,
} from './About.style'

function About() {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar src="/avatar.jpg" />
      </AvatarWrapper>
      <InfoWrapper>
        <Intro>
          從小喜歡繪本、喜歡畫畫，
          <br />
          長大後跟著爸爸走入山林、愛上賞鳥。
          <br />
          希望能將大自然給予的種種驚喜，
          <br />
          透過一支畫筆分享給大家。
        </Intro>

        <Description>
          <div>
            你好，我是以晴。大學念傳播行銷，畢業後做了幾年行銷工作，28
            歲時結合藝術與生態，正式開始以創作為生。喜歡細細觀察、研究與描繪野生動物，持續探索著科學精確性與藝術家個人詮釋之間的平衡。2024
            年，我完成英國金士頓大學（Kingston University
            London）的插畫碩士學業，這段經歷讓我以研究為基礎的創作方式得到更深也更廣的探索空間。懷著分享知識與推廣保育的熱情，我期許自己的作品能夠激發好奇心，讓人們開始去注意自己所處的環境。
          </div>
          <div>
            Hello! I am Yiching, a Taiwanese illustrator and birder. Inspired by
            my lifelong passion for birdwatching, my work centers around nature
            and wildlife, blending scientific accuracy with artistic
            storytelling. I’m especially interested in conservation education,
            using illustration to spark curiosity and connection with the
            natural world. In 2024, I earned a Master&apos;s degree in
            Illustration from Kingston University London, further shaping my
            research-driven approach to visual narratives, combining fieldwork
            and creative exploration to deepen my practice.
          </div>
        </Description>

        <Contact>
          <Contact.Title>Contact</Contact.Title>
          <div>
            合作邀約歡迎 email 聯繫。
            <br />
            Please email me at &nbsp;
            <Contact.Email href={MAIL_LINK}>{MAIL}</Contact.Email>
          </div>
          <Contact.Links>
            <Contact.IconLink
              target="_blank"
              rel="noreferrer"
              href={INSTAGRAM_LINK}
            >
              <IG />
              its_yiching
            </Contact.IconLink>
            <Contact.IconLink
              target="_blank"
              rel="noreferrer"
              href={FACEBOOK_LINK}
            >
              <FB />
              Yiching Lin Illustration
            </Contact.IconLink>
            <Contact.IconLink
              target="_blank"
              rel="noreferrer"
              href={PINKOI_LINK}
            >
              <Pinkoi />
              Ching Illustration
            </Contact.IconLink>
          </Contact.Links>
        </Contact>
      </InfoWrapper>
      <Footer>&copy; Yiching Lin, All Rights Reserved.</Footer>
    </Wrapper>
  )
}

export default About
