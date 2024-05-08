'use client'
import Container from '../Ui/Container';


const Faq = () => {
  return (
    <section className="faq xl:my-24 my-12">
      <Container>
        <div className="pq-faq-div pq-bg-img-2">
          <h2 className="heading text-center mb-0">Frequently Asked Questions</h2>
          <div className="container max-w-4xl px-6 py-10 mx-auto">
              <div className="mt-0 space-y-2">
                  <details className="group [&_summary::-webkit-details-marker]:hidden border-2 border-gray-100 rounded-lg dark:border-gray-700" open>
                    <summary className="flex items-center justify-between w-full p-8">
                      <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">What is Free midjourney?</h3>

                      <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </span>
                    </summary>

                    <hr className="my-0 border-gray-200 dark:border-gray-700" />

                    <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                      Free midjourney is a free AI art generator that creates original images from text descriptions using AI. It provides a generous free tier and pay-as-you-go credits for AI image generation. FreeMid Journey opens new frontiers of imagination and creativity once confined within human limitations. Even those lacking artistic skills can easily manifest any idea into images with FreeMid Journey's magical AI artist assistant.
                    </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                      <summary className="flex items-center justify-between w-full p-8">
                          <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">What steps are involved to generate an AI image?</h3>

                          <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </span>
                      </summary>

                      <hr className="my-0 border-gray-200 dark:border-gray-700" />

                      <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                        Using a free AI image generator like FreeMid Journey to envision ideas as one-of-a-kind artworks involves just a few intuitive steps. The key steps are: 1) Enter a text prompt describing the desired image 2) Click generate 3) The free AI art generator creates a unique new image based on the prompt 4) Download the AI-generated image when complete. Let imagination and AI converge into digital masterpieces with incredible ease. For more information you can check here <a href="https://getimg.ai/guides/interactive-guide-to-stable-diffusion-steps-parameter" target='_blank' rel="nofollow">https://getimg.ai/guides/interactive-guide-to-stable-diffusion-steps-parameter</a>
                      </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                      <summary className="flex items-center justify-between w-full p-8">
                          <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">How to write a good prompt?</h3>

                          <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </span>
                      </summary>

                      <hr className="my-0 border-gray-200 dark:border-gray-700" />

                      <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                        Effective text prompts are key for a free AI image generator like Free MidJourney to fully express one's creative vision as a gorgeous visualized scene. Effective prompts use vivid descriptive language and specify details like style, composition, colors, and mood. Use comparative references to real artwork. Organize key aspects logically.
                      </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                      <summary className="flex items-center justify-between w-full p-8">
                          <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">How does the Free midjourney work?</h3>

                          <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                          </span>
                      </summary>

                      <hr className="my-0 border-gray-200 dark:border-gray-700" />

                      <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                        It utilizes deep learning algorithms trained on vast image datasets to analyze text and generate new AI art creatively interpreted from words. 
                      </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                    <summary className="flex items-center justify-between w-full p-8">
                        <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">Is the Free MidJourney free for use?</h3>

                        <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                    </summary>

                    <hr className="my-0 border-gray-200 dark:border-gray-700" />

                    <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                      Yes, it offers a generous free tier of 10 images without needing a credit card. Further AI image generation requires pay-as-you-go credit purchases.
                    </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                    <summary className="flex items-center justify-between w-full p-8">
                        <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">Is there a subscription fee for your service?</h3>

                        <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                    </summary>

                    <hr className="my-0 border-gray-200 dark:border-gray-700" />

                    <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                      No, only flexible credit packs allow pay-as-you-go access. No locking monthly subscriptions.
                    </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                    <summary className="flex items-center justify-between w-full p-8">
                        <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">Is there any daily limit on the quantity of photos that can be created?</h3>

                        <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                    </summary>

                    <hr className="my-0 border-gray-200 dark:border-gray-700" />

                    <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                      No daily generation limits exist. Outputs depend solely on available account credits. More credits allow more daily image generation.
                    </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                    <summary className="flex items-center justify-between w-full p-8">
                        <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">Am I able to change or modify the photos created by AI?</h3>

                        <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                    </summary>

                    <hr className="my-0 border-gray-200 dark:border-gray-700" />

                    <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                      Yes, full image ownership rights are provided to edit, print, and publish AI art commercially or personally after downloading.
                    </p>
                  </details>

                  <details className="group border-2 border-gray-100 rounded-lg dark:border-gray-700">
                    <summary className="flex items-center justify-between w-full p-8">
                        <h3 className="lg:text-xl text-base font-semibold text-gray-700 dark:text-white">What advantages do the free and premium versions of your service offer?</h3>

                        <span className="text-white bg-blue-500 group-open:bg-gray-200 group-open:text-gray-400 rounded-full">
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 hidden group-open:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 block group-open:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        </span>
                    </summary>

                    <hr className="my-0 border-gray-200 dark:border-gray-700" />

                    <p className="p-8 lg:text-base text-sm text-gray-500 dark:text-gray-300 mb-0">
                      Those hesitant to immediately invest in AI art generation capabilities can benefit greatly from FreeMid Journey's generous free tier introduction providing 10 text-to-image credits requiring no billing details. The free AI tier enables experimenting before spending money. Paid credits provide more generation capacity and choices like higher resolution.
                    </p>
                  </details>
              </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Faq