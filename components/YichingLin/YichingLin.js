import { INSTAGRAM_LINK, PINKOI_LINK, MAIL, MAIL_LINK } from 'constants/links'
import IG from '../icons/Instagram'
import Pinkoi from '../icons/Pinkoi'
import {
  Avatar,
  Wrapper,
  InfoWrapper,
  Intro,
  Contact,
} from './YichingLin.style'

function YichingLin() {
  return (
    <Wrapper>
      <Avatar />
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

        <div>
          大學念傳播行銷，畢業後做了幾年行銷工作，卻從來沒有忘記對畫畫的熱情，28
          歲正式開始以創作為生。
          <br />
          喜歡畫各種溫暖美好的人事物，尤其享受描繪野鳥、野生動物、生態相關的題材。希望世界上每個生命都有屬於自己的一方天地，和諧存續。
        </div>

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
              href={PINKOI_LINK}
            >
              <Pinkoi />
              Ching Illustration
            </Contact.IconLink>
          </Contact.Links>
        </Contact>
      </InfoWrapper>
    </Wrapper>
  )
}

export default YichingLin
