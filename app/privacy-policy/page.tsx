import { Metadata } from 'next'
import { cookies } from 'next/headers'
import React from 'react'
import { Container } from 'react-bootstrap'

export const metadata: Metadata = {
  title: 'Privacy Policy - Free MidJourney AI',
  openGraph: {
    title: 'Privacy Policy - Free MidJourney AI',
    description: 'Explore our privacy policy to understand how we handle and protect your personal information. We are committed to ensuring your data security and maintaining transparency in our practices.',
  },
  robots: "index, follow"
}

const PrivacyPolicy = () => {
  console.log('cookies', cookies().toString())
  return (
    <div className='policy'>
      <Container>
        <h1>Privacy Policy</h1>

        <h2>California Consumer Privacy Act (“CCPA”)</h2>

        <p>Under CCPA, Californian residents have the right to declare their preferences on the sale of data for advertising and marketing purposes. If you wish to change your preferences, click this link to launch our preference portal:  </p>
        <p>You are outside the CCPA jurisdiction.</p>
        <p>We use a third-party to provide monetisation technologies for our site. You can review their privacy and cookie policy here.</p>
        <p>If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at support@freemidjourneyai.com.</p>
        <p>At freemidjourneyai.com, the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information is received and collected by freemidjourneyai.com and how it is used.</p>

        <h2>Log Files</h2>

        <p>Like many other Web sites, freemidjourneyai.com makes use of log files. The information inside the log files includes internet protocol ( IP ) addresses, type of browser, Internet Service Provider ( ISP ), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user’s movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.</p>

        <h2>Cookies and Web Beacons</h2>
        <p>freemidjourneyai.com does use cookies to store information about visitors preferences, record user-specific information on which pages the user access or visit, customize Web page content based on visitors browser type or other information that the visitor sends via their browser.</p>

        <h2>DoubleClick DART Cookie</h2>

        <p>.:: Google, as a third party vendor, uses cookies to serve ads on freemidjourneyai.com.</p>
        <p>.:: Google’s use of the DART cookie enables it to serve ads to users based on their visit to freemidjourneyai.com and other sites on the Internet.</p>
        <p>.:: Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL – http://www.google.com/privacy_ads.html</p>
        <p>Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include …. Google Adsense.</p>
        <p>These third-party ad servers or ad networks use technology to the advertisements and links that appear on freemidjourneyai.com send directly to your browsers. They automatically receive your IP address when this occurs. Other technologies ( such as cookies, JavaScript, or Web Beacons ) may also be used by the third-party ad networks to measure the effectiveness of their advertisements and / or to personalize the advertising content that you see.</p>
        <p>freemidjourneyai.com has no access to or control over these cookies that are used by third-party advertisers.</p>
        <p>You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. freemidjourneyai.com’s privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites.</p>

        <p>If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers’ respective websites.</p>

        <h2>Contact Us</h2>

        <p>If you have any questions about this Privacy Policy, You can contact us:</p>
        <p>By email: <a href="mailto:freemidjourneyai@gmail.com">freemidjourneyai@gmail.com</a></p>

        <p>**Note : We are not affiliated with Mid Journey</p>
      </Container>
    </div>
  )
}

export default PrivacyPolicy