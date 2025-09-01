import { INSTAGRAM_LINK, MAIL, MAIL_LINK } from 'constants/links'
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
        <Intro>你好，我是以晴，一個來自台灣的插畫家和賞鳥人。</Intro>
        <Description>
          畢業於臺大生傳系，20 代尾聲從行銷轉向藝術，並於 2024
          年秋天在英國金士頓大學（Kingston
          University）取得插畫碩士學位。喜歡細細觀察和描繪大自然，尤其擅長鳥類題材。創作的特色之一是謹慎扎實的前期研究，認為這是一種責任感，也是一種莫大的樂趣。風格溫柔細膩，持續嘗試不同的媒材和創作方式，在科學精確性與藝術家的個人詮釋之間，探尋新的可能性。夢想是持續揉合知性與感性，傳遞知識和故事；透過自己的作品，連結人們與自然界中的其他生命。
        </Description>
        <Contact>
          <Contact.Links>
            合作邀約請聯繫&nbsp;
            <Contact.Link href={MAIL_LINK}>{MAIL}</Contact.Link>
            <br />
            追蹤我的最新作品和賞鳥記事&nbsp;
            <Contact.Link
              target="_blank"
              rel="noreferrer"
              href={INSTAGRAM_LINK}
            >
              @its_yiching
            </Contact.Link>
          </Contact.Links>
        </Contact>

        <Intro>Hello! I am Yiching, a Taiwanese illustrator and birder.</Intro>
        <Description>
          Inspired by my lifelong passion for birdwatching, my work centers
          around nature and wildlife, blending scientific accuracy with artistic
          storytelling. I’m especially interested in conservation education,
          using illustration to spark curiosity and connection with the natural
          world. In 2024, I earned a Master&apos;s degree in Illustration from
          Kingston University London, further shaping my research-driven
          approach to visual narratives, combining fieldwork and creative
          exploration to deepen my practice.
        </Description>
        <Contact>
          <Contact.Links>
            For commissions, please contact&nbsp;
            <Contact.Link href={MAIL_LINK}>{MAIL}</Contact.Link>
            <br />
            See more of my latest work & birding stories on&nbsp;
            <Contact.Link
              target="_blank"
              rel="noreferrer"
              href={INSTAGRAM_LINK}
            >
              @its_yiching
            </Contact.Link>
          </Contact.Links>
        </Contact>
      </InfoWrapper>
      <Footer>&copy; Yiching Lin, All Rights Reserved.</Footer>
    </Wrapper>
  )
}

export default About
