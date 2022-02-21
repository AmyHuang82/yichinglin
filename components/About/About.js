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
            你好，我是以晴。大學念傳播行銷，畢業後做了幾年行銷工作，卻從來沒有忘記對畫畫的熱情，28
            歲正式開始以創作為生。
          </div>
          <div>
            喜歡畫各種溫暖美好的人事物，尤其享受描繪野鳥、野生動物、生態相關的題材。希望世界上每個生命都有屬於自己的一方天地，和諧存續。
          </div>
          <div>
            Hello, I am Yiching, an illustrator and a birdwatcher from Taiwan. I
            majored in marketing in college, and worked in this field for few
            years. Drawing is the one thing I have enjoyed ever since I was a
            child. At the age of 28, I made a career change to pursue my strong
            passion for art.
          </div>
          <div>
            Birds, wildlife and nature are the main subjects of my artwork. I
            love to create work that makes people feel pleasant, comfortable and
            peaceful. You will always find me drawing a bird or an animal in a
            healthy, safe and beautiful habitat. It’s like a wish of mine—hoping
            we can save places where diverse wildlife thrives.
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
              href={FACEBOOK_LINK}
            >
              <FB />
              Yiching Lin Illustration
            </Contact.IconLink>
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
