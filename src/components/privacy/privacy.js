import React, { useContext, useEffect } from "react"
import * as S from "./privacy.css"

const Privacy = () => {
  return (
    <>
      <S.Wrapper>
        <S.Overlay></S.Overlay>
        <S.StyledTitle>
          <S.H1>Privacy Policy</S.H1>
        </S.StyledTitle>
        <S.StyledArticle>
          <S.StyledDiv>
            <S.P>
              This privacy notice discloses the privacy practices for{" "}
              <S.A>http://hempup.com</S.A>. This privacy notice applies solely
              to information collected by this website. It will notify you of
              the following:
              <S.UL>
                <li>
                  What personally identifiable information is collected from you
                  through the website, how it is used and with whom it may be
                  shared.
                </li>
                <li>
                  What choices are available to you regarding the use of your
                  data.
                </li>
                <li>
                  How you can correct any inaccuracies in the information.
                </li>
                <li>
                  What personally identifiable information is collected from you
                  through the website, how it is used and with whom it may be
                  shared.
                </li>
              </S.UL>
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2>Information Collection, Use, and Sharing </S.H2>

            <S.P>
              We are the sole owners of the information collected on this site.
              We only have access to/collect information that you voluntarily
              give us via email or other direct contact from you. We will not
              sell or rent this information to anyone.
            </S.P>
            <br></br>

            <S.P>
              We will use your information to respond to you, regarding the
              reason you contacted us. We will not share your information with
              any third party outside of our organization, other than as
              necessary to fulfill your request, e.g. to ship an order.
            </S.P>
            <br></br>
            <S.P>
              Unless you ask us not to, we may contact you via email in the
              future to tell you about specials, new products or services, or
              changes to this privacy policy.
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2>Your Access to and Control Over Information</S.H2>

            <S.P>
              You may opt out of any future contacts from us at any time. You
              can do the following at any time by contacting us via the email
              address or phone number given on our website:
              <S.UL>
                <li>See what data we have about you, if any.</li>
                <li>Change/correct any data we have about you.</li>
                <li> Have us delete any data we have about you. </li>
                <li>
                  Express any concern you have about our use of your data.
                </li>
              </S.UL>
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2> Security</S.H2>
            <S.P>
              We take precautions to protect your information. When you submit
              sensitive information via the website, your information is
              protected both online and offline.
            </S.P>
            <br></br>
            <S.P>
              Wherever we collect sensitive information (such as credit card
              data), that information is encrypted and transmitted to us in a
              secure way. You can verify this by looking for a lock icon in the
              address bar and looking for "https" at the beginning of the
              address of the Web page.
            </S.P>
            <br></br>
            <S.P>
              While we use encryption to protect sensitive information
              transmitted online, we also protect your information offline. Only
              employees who need the information to perform a specific job (for
              example, billing or customer service) are granted access to
              personally identifiable information. The computers/servers in
              which we store personally identifiable information are kept in a
              secure environment.
            </S.P>
            <br></br>
            <S.P>
              If you feel that we are not abiding by this privacy policy, you
              should contact us immediately via telephone at 720-468-4588 or via
              email at cs@hempup.com.
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2>Orders </S.H2>
            <S.P>
              We request information from you on our order form. To buy from us,
              you must provide contact information (like name and shipping
              address) and financial information (like credit card number,
              expiration date). This information is used for billing purposes
              and to fill your orders. If we have trouble processing an order,
              we'll use this information to contact you.
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2>Cookies</S.H2>
            <S.P>
              We use "cookies" on this site. A cookie is a piece of data stored
              on a site visitor's hard drive to help us improve your access to
              our site and identify repeat visitors to our site. For instance,
              when we use a cookie to identify you, you would not have to log in
              a password more than once, thereby saving time while on our site.
              Cookies can also enable us to track and target the interests of
              our users to enhance the experience on our site. Usage of a cookie
              is in no way linked to any personally identifiable information on
              our site.
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2>Sharing</S.H2>
            <S.P>
              We partner with another party to provide specific services. When
              the user signs up for these services, we will share names, or
              other contact information that is necessary for the third party to
              provide these services. These parties are not allowed to use
              personally identifiable information except for the purpose of
              providing these services.
            </S.P>
          </S.StyledDiv>

          <S.StyledDiv>
            <S.H2>Contact Us</S.H2>
            <S.P>
              If you have any questions about this Privacy Policy, please
              contact us:
              <S.UL>
                <li>By email: cs@hempup.com</li>
              </S.UL>
            </S.P>
          </S.StyledDiv>
        </S.StyledArticle>
      </S.Wrapper>
    </>
  )
}
export default Privacy
