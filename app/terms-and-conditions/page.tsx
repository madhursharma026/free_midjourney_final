import { Metadata } from 'next'
import React from 'react'
import { Container } from 'react-bootstrap'

export const metadata: Metadata = {
  title: 'Terms and Conditions - Free MidJourney AI',
  openGraph: {
    title: 'Terms and Conditions - Free MidJourney AI',
    description: 'Read through our terms and conditions to understand the guidelines and rules governing the use of our services. We are dedicated to providing a clear framework for your interaction with our platform.',
  },
  robots: "index, follow"
}

const TermsAndConditions = () => {
  return (
    <div className='policy'>
      <Container>
          <h1>Welcome to Free Mid Journey!</h1>
 
          <p>These terms and conditions outline the rules and regulations for the use of Free MidJourney's Website, located at <a href="https://www.freemidjourneyai.com">https://www.freemidjourneyai.com</a></p>
            
          <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use Free MidJourney if you do not agree to take all of the terms and conditions stated on this page.</p>
          
          <p>The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of af. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.</p>
          
            
          
          <h2>1. Acceptance of Terms</h2>
          <p>By using the Free MidJourney (the "Service"), you agree to comply with and be bound by these Terms of Use. If you do not agree with these terms, please refrain from using the Service.</p>
            
          
          <h2>2. Description of Service</h2>
          <p>The Service utilizes the OpenAI,Stability AI API to generate images based on user input. Users can create, modify, and download images through the platform.</p>
            
          
          <h2>3. User Conduct</h2>
          <p>You agree not to use the Service for any unlawful or prohibited purpose. You may not disrupt the Service, introduce malicious code, or interfere with the functionality of the website.</p>
            
          
          <h2>4. Ownership of Generated Content</h2>
          <p>All images generated using the Service remain the property of the respective users. The Service and its operators claim no ownership rights over the content created by users.</p>
            
          <h2>5. Commercial Use</h2>
          <p>Images generated through the Service may be used for both personal and commercial purposes. However, it is your responsibility to ensure compliance with any applicable OpenAI,Stability AI usage policies or terms.</p>
            
          
          <h2>6. Privacy</h2>
          <p>The Service may collect and store user data as outlined in the Privacy Policy. By using the Service, you consent to the collection and use of your information in accordance with the Privacy Policy.</p>
            
          
          <h2>7. Limitation of Liability</h2>
          <p>The Service and its operators are not liable for any direct, indirect, incidental, consequential, or exemplary damages arising from the use of the Service or any information provided through it.</p>
            
          
          <h2>8. Changes to Terms</h2>
          <p>The terms of use may be updated from time to time. Users will be notified of any changes, and continued use of the Service after modifications constitute acceptance of the new terms.</p>
            
          
          <h2>9. Termination</h2>
          <p>The Service reserves the right to terminate user access for any reason, including violation of these terms or misuse of the platform.</p>
            
          
          <h2>10. Contact Information</h2>
          <p>For any inquiries regarding these terms, please contact <a href="mailto:freemidjourneyai@gmail.com">freemidjourneyai@gmail.com</a>.</p>
          
          <p>By using the Free MidJourney, you acknowledge that you have read, understood, and agreed to these Terms & Condition.</p>
 
 
      </Container>
    </div>
  )
}

export default TermsAndConditions