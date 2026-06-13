import { useState } from 'react'
import { INSTAGRAM_LINK, MAIL, MAIL_LINK } from 'constants/links'
import {
  AvatarWrapper,
  Avatar,
  LanguageToggleWrapper,
  LanguageToggle,
  Wrapper,
  MainContent,
  InfoWrapper,
  Intro,
  Title,
  Description,
  Contact,
  Footer,
} from './About.style'

const LANGUAGES = {
  TW: 'zh-TW',
  EN: 'en-US',
}

function About() {
  const [language, setLanguage] = useState(LANGUAGES.TW)

  const twContent = (
    <>
      <Intro>你好，我是以晴，一個來自台灣的插畫家和賞鳥人。</Intro>
      <Description>
        <div>
          畢業於臺大生傳系，20 代尾聲從行銷轉向藝術，並於 2024
          年秋天在英國金士頓大學（Kingston
          University）取得插畫碩士學位。喜歡在野外靜靜觀察、在紙上細細描繪，尤其擅長鳥類與生態教育題材。
        </div>
        <div>
          創作的特色是謹慎扎實的前期研究，認為這是一種責任感，也是一種莫大的樂趣。風格溫柔細膩，喜歡在科學精確性與個人詮釋之間，探尋新的可能性。
        </div>
        <div>
          夢想是持續揉合知性與感性，傳遞知識與故事；透過自己的作品，連結人們與自然界中的其他生命。
        </div>
      </Description>
      <Contact>
        <Contact.Links>
          合作邀約請聯繫&nbsp;
          <Contact.Link href={MAIL_LINK}>{MAIL}</Contact.Link>
          <br />
          追蹤我的最新作品和野外觀察&nbsp;
          <Contact.Link target="_blank" rel="noreferrer" href={INSTAGRAM_LINK}>
            @its_yiching
          </Contact.Link>
        </Contact.Links>
      </Contact>
    </>
  )

  const enContent = (
    <>
      <Intro>
        Hello! I am Yiching, a Taiwanese illustrator and birder whose work is
        rooted in field observation and a deep connection with birds.
      </Intro>
      <Description>
        <div>
          <Title>Practice</Title>
          Through illustration, I explore the relationship between people and
          the natural world, combining ecological awareness, scientific
          observation, and atmospheric storytelling. My practice is especially
          interested in conservation education and creating images that
          encourage curiosity, attention, and emotional connection with
          wildlife.
        </div>
        <div>
          <Title>Background</Title>
          In 2024, I completed an MA in Illustration at Kingston University
          London, where I further developed a research-driven approach to visual
          storytelling through fieldwork and creative exploration.
        </div>
      </Description>
      <Contact>
        <Contact.Links>
          Commissions or collaborations&nbsp;
          <Contact.Link href={MAIL_LINK}>{MAIL}</Contact.Link>
          <br />
          Latest work and field observations&nbsp;
          <Contact.Link target="_blank" rel="noreferrer" href={INSTAGRAM_LINK}>
            @its_yiching
          </Contact.Link>
        </Contact.Links>
      </Contact>
    </>
  )

  return (
    <Wrapper>
      <MainContent>
        <AvatarWrapper>
          <Avatar src="/avatar.jpg" />
        </AvatarWrapper>
        <InfoWrapper>
          <LanguageToggleWrapper>
            <LanguageToggle
              onClick={() =>
                setLanguage(
                  language === LANGUAGES.TW ? LANGUAGES.EN : LANGUAGES.TW
                )
              }
            >
              {language === LANGUAGES.TW ? 'English' : '中文'}
            </LanguageToggle>
          </LanguageToggleWrapper>
          {language === LANGUAGES.TW ? twContent : enContent}
        </InfoWrapper>
      </MainContent>
      <Footer>&copy; Yiching Lin, All Rights Reserved.</Footer>
    </Wrapper>
  )
}

export default About
