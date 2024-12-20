import React from 'react'

function Html() {
  return (
    <>
        <h1 className='font-bold text-center p-5 md:text-4xl text-2xl'> HTML All Important Questions To Crack The Interviews</h1>

        <div className='px-8 py-2'>
            <h3 className='font-bold text-red-600 font-xl mb-3'>1.What is HTML? Explain its purpose & Basic Syntax Of HTML ? </h3>
            <p>HTML (Hypertext Markup language) is the standard language used to create and structure content on the web. It mainly define element and their roles in a webpage, such as headings, paragraphs, images, links etc. <span className='font-bold'>(HTML (Hypertext Markup language) হল একটি আদর্শ ভাষা যা ওয়েবে সামগ্রী তৈরি এবং গঠন করতে ব্যবহৃত হয়। এটি প্রধানত একটি ওয়েবপেজে উপাদান এবং তাদের ভূমিকা সংজ্ঞায়িত করে, যেমন শিরোনাম, অনুচ্ছেদ, ছবি, লিঙ্ক ইত্যাদি)</span></p>

            <h2 className='mt-4 font-bold text-xl text-blue-700'>Purpose of HTML:</h2>
            <div className='mt-2'>
                <ul className='px-5'>
                    <li>(1) Organize text, images, and other multimedia content into a logical structure.</li>
                    <li>(2) Provide instructions to the browser on how to display content to users.</li>
                    <li>(3) Enable the creation of links (hypertext) for navigation between web pages or resources.</li>
                    <li>(4) Work with CSS (for styling) and JavaScript (for interactivity) to create full-featured web applications.</li>
                </ul>
            </div>

            <h2 className='mt-4 font-bold text-xl text-blue-700'>Basic Syntax of HTML:</h2>
            <div className='mt-3 px-6'>
                <p>1. !Doctype html declares the document version of HTML. It also help the browsers to code correctly. </p>

                <p>2. (html): The root element that encapsulates all content of the webpage</p>
                <p>3. (head): Contains meta-information about the document. Such as tile, character encoding and links to stylesheets or scripts <br />
                <div className='px-40'>
                    <p>(title): Define the title displayed in the browser's tab.</p>
                </div>
                </p>
                <p>4. (body): Contains the main content on the webpage</p>
                <div className='px-40'>
                    <p>(h1): Represents a top-level heading.</p>
                    <p>(p): Defines a paragraph of text.</p>
                    <p>(a href="URL"): Creates a hyperlink to another webpage or resource.</p>
                </div>
            </div>
            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>2. What are HTML tags? How are they structured? Give Us 5 Tags As A Example. </h3>

            <p className='mt-4 font-bold text-xl text-blue-700'>A typical HTML element consists of:</p>
            <div className='px-7 mt-2'>
                <p>1. Opening Tag: Defines the start of an element.</p>
                <p>2. Content: The text or other elements inside the tag.</p>
                <p>3. Closing Tag: Denotes the end of the element (except self-closing tags).</p>
            </div>
            <h2 className='mt-4 font-bold text-xl text-blue-700 mb-2'>Example of 5 tags:</h2>
            <div className='px-7'>
                <p>1. h1 to h6(Heading Tag): Used to define headings of differnet level</p>
                <p>2. p(Paragraph Tag): Defines a paragraph of text</p>
                <p>3. a(Anchor Tag): Creates hyperlinks</p>
                <p>4. img(Image tag): Embeds images into the webpage</p>
                <p>5. ul and li(Unordered List): Creates a list of items</p>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>3. What is the difference between head, body, and html tags? & the role of the !DOCTYPE html declaration?</h3>

            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th  className="px-4 py-2 border border-gray-300">html</th>
                            <th  className="px-4 py-2 border border-gray-300">head</th>
                            <th  className="px-4 py-2 border border-gray-300">body</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-gray-50 odd:bg-white">
                            <td  className="px-4 py-2 border border-gray-300">It is the root element of an HTML document and contains all the content and elements of the webpage.</td>
                            <td  className="px-4 py-2 border border-gray-300">Contains metadata (information about the webpage) and links to external resources like stylesheets, scripts, and more.</td>
                            <td  className="px-4 py-2 border border-gray-300"> Contains all the visible content of the webpage, such as text, images, videos, and links.</td>
                        </tr>
                        <tr>
                            <td  className="px-4 py-2 border border-gray-300">Defines the beginning and end of the HTML document, serving as a container for the head and body sections.</td>
                            <td  className="px-4 py-2 border border-gray-300">Does not display content directly on the webpage; it provides information for the browser, such as the page title, character encoding, and linked styles.</td>
                            <td  className="px-4 py-2 border border-gray-300"> Defines the structure and content that users see and interact with on the webpage.</td>
                        </tr>
                        <tr>
                            <td  className="px-4 py-2 border border-gray-300">Their is no common element in html tag</td>
                            <td  className="px-4 py-2 border border-gray-300">In head tag there are title. meta, link and script elements</td>
                            <td  className="px-4 py-2 border border-gray-300">There is also no commen element</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Example: <br /> <img src="HTML.png" alt="" /></td>
                            <td className="px-4 py-2 border border-gray-300">Example: <br /> <img src="Head.png" alt="" /></td>
                            <td className="px-4 py-2 border border-gray-300">Example: <br /><img src="Body.png" alt="" /></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='mt-3 space-y-3'>
                <h2 className='mt-4 font-bold text-xl text-blue-700 mb-2'>Role of the !DOCTYPE html</h2>
                <p><span className='font-bold text-xl'>1. Definition: </span><br />The !DOCTYPE html declaration is not a tag but a directive that specifies the HTML version being used in the document.</p>
                <p><span className='font-bold text-xl'>2. Purpose: </span><br /> It tells the browser to render the webpage in standards mode also without it's declaration, browsers might render the page in quirks mode which emulates older, non-standard behaviours.</p>
                <p>3. It must be very first line in an HTML document, before the html tag</p>
            </div>
            

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>4. Describe the function of the title tag. Where does it appear With Example. </h3>

            <div>
                <p>The title tag defines the title of an HTML document. It mainly uses for a brief description or name for the webpage. <br />The key Functions of this tag are browser tab display, SEO, Bookmark Naming and Accessibility</p>
                <h2 className='font-bold text-xl mt-2'>Where does it appear?</h2>
                <p>It mainly appear in Browser Tab or Search Engine Results</p>

                <div className="flex items-center justify-center ">
                    <img className="object-contain" src="Title.png" alt="" />
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>5. How do you add comments in HTML, and why are they useful?</h3>
            
            <div>
                <p>To add comments in HTML, you use the following syntax:</p>
                
                <div className="flex items-center justify-center ">
                    <img className='object-contain' src="Comment.png" alt="" />
                </div>
                <h2 className='font-bold text-xl mt-2'>Why Are Comments Useful in HTML?</h2>
                <div className='mt-2 space-y-2 px-7'>
                    <p>1. It can describe the purpose of specific sections of the code</p>
                    <p>2. Useful to understand the code structure correctly.</p>
                </div>

            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>6. What is the difference between an HTML element and an HTML attribute give us example with proper Explanation. </h3>

            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">HTML element</th>
                            <th className="px-4 py-2 border border-gray-300">HTML attribute</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="even:bg-gray-50 odd:bg-white">
                            <td className="px-4 py-2 border border-gray-300">Purpose</td>
                            <td className="px-4 py-2 border border-gray-300">Defines structure or content</td>
                            <td className="px-4 py-2 border border-gray-300">Add properties, behavior or metadata</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Position</td>
                            <td className="px-4 py-2 border border-gray-300">Inside tags(includes content and child elements)</td>
                            <td className="px-4 py-2 border border-gray-300">In the opening tag of the element</td>
                        </tr>
                        <tr className="even:bg-gray-50 odd:bg-white">
                            <td className="px-4 py-2 border border-gray-300">Examples</td>
                            <td className="px-4 py-2 border border-gray-300">(p, div, img)</td>
                            <td className="px-4 py-2 border border-gray-300">class, id, src, alt, href</td>
                        </tr>
                        <tr className="even:bg-gray-50 odd:bg-white">
                            <td className="px-4 py-2 border border-gray-300">Necessity</td>
                            <td className="px-4 py-2 border border-gray-300">Essential for the document structure</td>
                            <td className="px-4 py-2 border border-gray-300">Optional but enhances functionality</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>7. Explain the global attributes in HTML, such as class, id, style, and title With Example.</h3>

            <div>
                <h2 className='font-bold text-lg text-blue-700'>1. class</h2>
                <p className='mb-2'>The class attribute is used to assign one or more class names to an element. It mainly used for applying CSS styles and JavaScript</p>

                <div className="flex items-center justify-center">
                    <img className='object-contain' src="Class.png" alt="" />
                </div>
                <h2 className='font-bold text-lg text-blue-700'>2. id</h2>
                <p className='mb-2'>The id attribute assigns a unique identifier to an element. Each id must be unique with the document</p>

                <div className="flex items-center justify-center">
                    <img className='object-contain' src="ID.png" alt="" />
                </div>
                <h2 className='font-bold text-lg text-blue-700'>3. style</h2>
                <p className='mb-2'>The style attribute is used to apply inline CSS directly to an element. It allows fast styling without any external or internal stylesheet</p>

                <div className="flex items-center justify-center">
                    <img className='object-contain' src="Style.png" alt="" />
                </div>
                <h2 className='font-bold text-lg text-blue-700'>4. title</h2>
                <p className='mb-2'>The title attribute specifies additional information about an element.</p>

                <div className="flex items-center justify-center">
                    <img className='object-contain' src="titlee.png" alt="" />
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>8. What is the purpose of the alt attribute in an img tag?</h3>

            <div>
                <h2 className='text-lg font-semibold text-blue-700'>Purpose of the alt Attribute:</h2>
                <div className='space-y-2 px-6 mt-3'>
                    <p>1. The alt text is red by screen readers for visual impaired users, allowing them to understand the content or purpose of the image.</p>
                    <p>2. If the image cannot load (due to broken link or network issue) the browser displays the alt text instead of the image.</p>
                    <p>3. Search Engine Optimization use the alt text to understand the content of the image and appearing in image search results.</p>
                    <p>4. It contributes better rankings and visibility</p>
                    <p>5. The alt text provides meaningful context for images.</p>
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>9. Describe the href attribute and its role in the a tag? </h3>

            <div>
                <p>The href attribute in an anchor tag specifies the URL (Uniform Resource Locator) of the destination the link points to. It mainly determines where the user will be directed when they click on the link</p>

                <h2 className='mt-2 text-lg font-semibold text-blue-700'>Purpose of href Attribute:</h2>
                <div className='space-y-2 mt-2 px-6'>
                    <p>1. The href value provides the address to which the link navigates. This could be an external website, internal page, an email address, or a specific section with the same page</p>
                    <p>2. Search engines use the href attribute to crawl and index pages, which helps in building the link structure of a website</p>
                    <p>3. Links with meaningful destinations ensure a better user experience for assistive technologies like screen readers.</p>
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>10. How does the target attribute work within an a tag? What is _blank?</h3>

            <p>The target attribute in an anchor tag specifies how and where the linked document will open when the hyperlink is clicked. By default, links open in the same browser tab or window unless the target attribute is explicity set.</p>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>11. How to add favicon in HTML & Why ?</h3>

            <p>A favicon is a small icon associated with a webpage. It appears in the browser tab, bookmarks and sometimes in search result for providing a identity for the website</p>

            <div className='mt-3'>
                <h2 className='text-lg text-blue-700 font-semibold'>Steps to Add a Favicon:</h2>

                <div className='space-y-2 mt-2 px-6'>
                    <p>1. Prepare the Favicon image. The size is 32 x 32 pixel. It mainly supported PNG, SVG or GIF. And it name as favicon.ico</p>
                    <p>2. Place the Favicon file</p>
                    <p>3. Add a link tag in the head section. Use the link tag to explicitly define the favicon in your HTML document</p>
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>12. What is formatting in HTML?</h3>

            <div>
                <p className='mb-3'>In HTML, formatting refers to the process of styling text pr content to enhance its appearance.Formatting includes applying styles like bold, italic, underlining and others to emphasize parts of the text</p>

                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Format.png" alt="" />
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>13. What Is Inline and block elements in html5 Give Us The Proper Explain With Example? </h3>

            <div className='space-y-2'>
                <h2 className='font-semibold mb-3 text-lg text-blue-700'>Inline Element</h2>
                <p>Inline elements do not start on a new line. They occupy only as much width as necessary and flow with the surrounding content, staying with the same line.</p>
                <h5 className='font-bold'>Example:</h5>
                <p>Hyperlink (a), bold, italic, span, img, strong and em</p>

                <h2 className='font-semibold mb-2 text-lg text-blue-700 mt-2'>Block Element</h2>
                <p>Block elements always start on a new line. They occupy the full width of their parent container by default creating a "block" of content.</p>
                <h5 className='font-bold'>Example:</h5>
                <p>div, p, h1 to h6, ul, li, ol, section, article (semantic article)</p>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>14. What is a marquee?</h3>

            <p>A marquee is an HTML feature that allows text, images, or other content to scroll automatically across a webpage. The marquee tag was introduced in older versions of HTML to create scrolling or moving content. It is commonly used for displaying new tickers, notification etc.</p>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>15. Explain the difference between p, span, and div tags. When would you use each?</h3>

            <div className='overflow-x-auto'>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                            <th className="px-4 py-2 border border-gray-300">p</th>
                            <th className="px-4 py-2 border border-gray-300">span</th>
                            <th className="px-4 py-2 border border-gray-300">div</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Type</td>
                            <td className="px-4 py-2 border border-gray-300">Semantic block element</td>
                            <td className="px-4 py-2 border border-gray-300">Non-semantic inline element</td>
                            <td className="px-4 py-2 border border-gray-300">Non-semantic block element</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Purpose</td>
                            <td className="px-4 py-2 border border-gray-300">For paragraphs of text</td>
                            <td className="px-4 py-2 border border-gray-300">For styling inline elements</td>
                            <td className="px-4 py-2 border border-gray-300">For grouping block elements</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Display Behavior</td>
                            <td className="px-4 py-2 border border-gray-300">Block-level</td>
                            <td className="px-4 py-2 border border-gray-300">Inline-level</td>
                            <td className="px-4 py-2 border border-gray-300">	Block-level</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Content</td>
                            <td className="px-4 py-2 border border-gray-300">Text or inline elements</td>
                            <td className="px-4 py-2 border border-gray-300">Inline elements only</td>
                            <td className="px-4 py-2 border border-gray-300">Block or inline elements</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Default Styling</td>
                            <td className="px-4 py-2 border border-gray-300">Has default margins</td>
                            <td className="px-4 py-2 border border-gray-300">No default styling</td>
                            <td className="px-4 py-2 border border-gray-300">No default styling</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className='space-y-2'>
                <h2 className='mt-2 text-blue-700 text-lg font-semibold'>When to Use Each:</h2>
                <div className='space-y-2'>
                    <h4 className='font-bold text-violet-700'>Use p</h4>
                    <div className='space-y-1 px-6'>
                        <p>1. When we are writing paragraphs or blocks of textual content</p>
                    </div>
                    <h4 className='font-bold text-violet-700'>Use span</h4>
                    <div className='space-y-1 px-6'>
                        <p>1. When you need to style or manipulate small parts of a text or inline elements</p>
                        <p>2. For adding color, size or custom behavior to words or phrases.</p>
                    </div>
                    <h4 className='font-bold text-violet-700'>Use div</h4>
                    <div className='space-y-1 px-6'>
                        <p>1. When you need a container to group multiple elements for layout, styling or scripting</p>
                        <p>2. To create structured sections of a webpage like headers, footers or content area</p>
                    </div>
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>16. Describe the ul, ol, and li tags for creating lists.</h3>

            <div className='space-y-2'>
                <h2 className='font-bold text-lg text-blue-700'>Unordered List (ul)</h2>
                <div>
                    <p>The ul tag is used to create an unordered list, where the items are listed with bullets (default). The order of the items does not matter in an unordered list.</p>
                </div>

                <h2 className='font-bold text-lg text-blue-700 mt-2'>Ordered List (ol)</h2>
                <div>
                    <p>The ol tag is used to create an ordered list, where the items are listed with numbers or letters (depending on the type attribute). The order of items matters in an ordered list.</p>
                </div>

                <h2 className='font-bold text-lg text-blue-700 mt-2'>List Item (li)</h2>
                <div>
                    <p>The li tag is used to define a list item in either an unordered (ul) or ordered (ol) list. It is placed inside the ul or ol container.</p>
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>17. Describe how input works and some of its types, such as text, radio, and checkbox.</h3>

            <p>The input tag is one of the most versatile and commonly used elements in HTML forms. It allows users to provide different types of data, such as text, numbers, choices, and file uploads, via a variety of input controls. The behavior of the input tag is controlled by its type attribute, which defines the type of data the input field is expected to accept.</p>

            <h2 className='font-semibold mb-3 text-blue-700 mt-3 text-lg'>Basic structure of h1 tag</h2>
            <div className='flex items-center justify-center'>
                <img className='object-contain' src="Input.png" alt="" />
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>18. What are button, textarea, and select tags, and how do they function?</h3>

            <div className='space-y-2'>
                <h2 className='font-bold text-lg text-blue-700'>button Tag:</h2>

                <p>The button tag is used to create a clickable button that can trigger actions, such as submitting a form, resetting form data, or performing custom JavaScript actions.</p>

                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Button.png" alt="" />
                </div>

                <h2 className='font-bold text-lg text-blue-700'>textarea Tag:</h2>

                <p>The textarea tag is used to create a multi-line text input field, allowing users to enter large amounts of text. Unlike the input tag (which is for single-line text), the textarea tag is useful for comments, messages, or descriptions.</p>

                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Textarea.png" alt="" />
                </div>

                <h2 className='font-bold text-lg text-blue-700'>select Tag:</h2>

                <p>The select tag is used to create a dropdown list of options where users can choose a single or multiple items. It is commonly used for selecting predefined values such as country, age group, or product categories.</p>

                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Select.png" alt="" />
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>19. How to link CSS to HTML?</h3>

            <h2 className='text-lg text-blue-700 font-bold mb-3 '>3 ways we can link CSS in HTML:</h2>

            <div>
                <table className="min-w-full border-collapse border-2  border-gray-200">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 border border-gray-300">Method</th>
                            <th className="px-4 py-2 border border-gray-300">Description</th>
                            <th className="px-4 py-2 border border-gray-300">Where the CSS is Placed</th>
                            <th className="px-4 py-2 border border-gray-300">Use Case</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Inline CSS</td>
                            <td className="px-4 py-2 border border-gray-300">Adds styles directly to individual HTML elements.</td>
                            <td className="px-4 py-2 border border-gray-300">Inside the style attribute of HTML tags.</td>
                            <td className="px-4 py-2 border border-gray-300">Small, one-off styling changes.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">Internal CSS</td>
                            <td className="px-4 py-2 border border-gray-300">Adds styles inside the style tag in the document's head.</td>
                            <td className="px-4 py-2 border border-gray-300">Inside the style tag in the head section.</td>
                            <td className="px-4 py-2 border border-gray-300">Single-page styling, small websites.</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2 border border-gray-300">External CSS</td>
                            <td className="px-4 py-2 border border-gray-300">Links to an external .css file.</td>
                            <td className="px-4 py-2 border border-gray-300">Inside the link tag in the head section.</td>
                            <td className="px-4 py-2 border border-gray-300">Larger websites, multi-page sites, reusable styling.</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>20. What is the label tag, and how is it associated with form inputs?</h3>

            <div className='space-y-2'>
                <p>The label tag in HTML is used to define a label for an input element in a form. It provides a user-friendly description or caption for form controls (such as input, select, textarea, etc.), making the form more accessible and easier to use.</p>

                <h2 className='text-lg text-blue-700 font-bold'>Purpose of the label tag:</h2>
                <div className='space-y-2 px-6 mb-3'>
                    <p>1. The label tag is used to associate a descriptive label with an input element, making the form easier to navigate, especially for users with disabilities. Screen readers can announce the label when users focus on the associated input field.</p>

                    <p>2. Clicking on the label text automatically focuses on the associated input field, making the form more interactive and user-friendly.</p>
                </div>
                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Label.png" alt="" />
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>21. What is the iframe tag, and what are some common attributes used with it?</h3>

            <div>
                <p>The iframe tag in HTML is used to embed another HTML document within the current document. It allows you to create a "frame" on your web page where another web page can be displayed. This is commonly used to embed content such as videos, maps, or other web applications.</p>

                <h2 className='font-bold text-lg text-blue-700 mt-3'>Common Attributes of iframe:</h2>

                <div className='space-y-2 px-6'>
                    <h3 className='font-semibold text-lg'>1.src</h3>
                    <div className='px-6'>
                        <p>Specifies the URL document to be embedded</p>
                    </div>
                    <h3 className='font-semibold text-lg'>2. width and height</h3>
                    <div className='px-6'>
                        <p>Specify the dimensions of the iframe in pixels or percentages.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>3. title</h3>
                    <div className='px-6'>
                        <p>Provides a description of the iframe's content for accessibility purposes.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>4. allow</h3>
                    <div className='px-6'>
                        <p>Specifies permissions for features like camera, microphone, fullscreen, or autoplay.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>5. sandbox</h3>
                    <div className='px-6'>
                        <p>Adds restrictions to the content inside the iframe for security purposes. For example, it can prevent scripts from running or forms from being submitted.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>6. allowfullscreen</h3>
                    <div className='px-6'>
                        <p>Allows the iframe's content to be displayed in fullscreen mode.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>7. loading</h3>
                    <div className='px-6'>
                        <p>Determines when the iframe should load: either lazily (lazy) or eagerly (eager).</p>
                    </div>
                    <h3 className='font-semibold text-lg'>8. frameborder</h3>
                    <div className='px-6'>
                        <p>Specifies whether the iframe should have a border. Accepts values like "0" (no border) or "1" (border).</p>
                    </div>
                    <h3 className='font-semibold text-lg'>9. name</h3>
                    <div className='px-6'>
                        <p>Assigns a name to the iframe, which can be targeted by links or scripts.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>10. referrerpolicy</h3>
                    <div className='px-6'>
                        <p>Controls the referrer information sent with the request for the iframe.</p>
                    </div>
                    <h3 className='font-semibold text-lg'>11. srcdoc</h3>
                    <div className='px-6'>
                        <p>Embeds inline HTML content directly within the iframe, instead of loading an external resource.</p>
                    </div>
                </div>


            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>22. Describe how the audio and video tags work, including common attributes like controls, autoplay, and loop.</h3>

            <div>
                <div className='space-y-2 px-6'>
                    <h2 className='text-lg font-bold text-blue-700'>The audio tag:</h2>
                    <p>The audio tag is used to embed audio content. It requires a source for the audio file, which is typically specified using the source tag or the src attribute.</p>

                    <h2 className='text-lg font-bold text-blue-700'>The video Tag:</h2>
                    <p>The video tag is used to embed video content. Like audio, it uses the source tag or the src attribute to specify the video file.</p>

                    <h2 className='text-lg font-bold text-blue-700'>controls:</h2>
                    <p>Adds built-in playback controls (play, pause, volume, etc.).</p>

                    <h2 className='text-lg font-bold text-blue-700'>autoplay:</h2>
                    <p>The media starts playing automatically when the page loads.</p>

                    <h2 className='text-lg font-bold text-blue-700'>loop:</h2>
                    <p>Plays the media in a loop, restarting automatically when it ends.</p>
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>23. Explain the picture tag and its usage in responsive design</h3>

            <div>
                <p>The picture tag in HTML is used to provide multiple versions of an image for different scenarios, making it a powerful tool for responsive design. It allows developers to specify alternative images based on screen size, resolution, or device type, helping optimize performance and improve user experience by loading the most appropriate image.</p>

                <h2 className='font-semibold text-lg text-blue-700 mt-3'>Usage in Responsive Design:</h2>

                <div className='space-y-2 px-6 mt-3'>
                    <h3 className='font-bold'>1. Adapting Images to Screen Sizes:</h3>
                    <div className='px-8'>
                        <p>Serve smaller images for mobile devices and larger images for desktops.</p>
                    </div>

                    <h3 className='font-bold'>2. Serving High-Resolution Images:</h3>
                    <div>
                        <p className='px-8'>Provide images optimized for devices with high pixel density (e.g., Retina displays).</p>
                    </div>

                    <h3 className='font-bold'>3. Art Direction:</h3>
                    <div>
                        <p className='px-8'>Show different images depending on the context or orientation (e.g., a cropped version for mobile).</p>
                    </div>
                </div>
            </div>


            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>24. Design a basic form that includes text input, radio buttons, a checkbox, and a submit button.</h3>

            <div className='flex items-center justify-center'>
                <img className='object-contain' src="Form.png" alt="" />
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>25. Embed a responsive YouTube video using the iframe tag.</h3>

            <div className='flex items-center justify-center'>
                <img className='object-contain' src="Iframe.png" alt="" />
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>26. Make a collapsible/expandable section using details and summary tags.</h3>

            <div className='space-y-2'>
                <div>
                    <h2 className='font-semibold text-lg text-blue-700'>1. details:</h2>
                    <p className='px-5'>Wraps the content to be toggled (collpased/expanded)</p>
                </div>

                <div>
                    <h2 className='font-semibold text-lg text-blue-700'>2. summary:</h2>
                    <p className='px-5'>Serves as the clickable label for the collapsible section</p>
                </div>

                <div className='flex items-center justify-center'>
                    <img className='object-contain' src="Summary.png" alt="" />
                </div>
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>27. Create a simple navigation bar using nav, ul, and li tags with three links.</h3>

            <div className='flex items-center justify-center'>
                <img className='object-contain' src="Navbar.png" alt="" />
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>28. Create a complex table with merged cells (using colspan and rowspan) and include a caption, thead, tfoot, and tbody. Add descriptive th elements for accessibility and structure.</h3>

            <div className='flex items-center justify-center'>
                <div className='flex md:flex-col items-center gap-2 justify-between'>
                    <img className='object-contain' src="Table.png" alt="" />
                     <img className='object-contain' src="Table12.png" alt="" />
                </div>
            </div>


            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>29. Create a simple webpage layout with a header, main section, and footer using only HTML and semantic tags.</h3>


            <div className='flex items-center justify-center'>
                <img className='object-contain' src="Webpage.png" alt="" />
            </div>

            <h3 className='font-bold text-red-600 font-xl mb-3 mt-5'>30. Write Your favourite 10 HTML Tags & Explain Us Why That’s Your favourite tags. </h3>

            <div>
                <div className='space-y-2 px-5'>
                    <p>My favourite 10 HTML tags are given below:</p>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>1. div tag:</h2>
                        <p className='px-5'>Because we can nest elements, apply styles. it also essential for layouts and modern frameworks like flexbox and grid. </p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>2. section tag:</h2>
                        <p className='px-5'>Ideal for structuring landing pages or blog posts. Improves accessibility by clearly defining parts of the page.</p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>3. header tag:</h2>
                        <p className='px-5'>Helps in structuring HTML documents more effectively for SEO and screen readers. It also define the top section of a webpage or a content block.</p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>4. main tag:</h2>
                        <p className='px-5'>Ensures the main area is properly identified for screen readers. Works well with header and footer to define a complete structure. </p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>5. a tag:</h2>
                        <p className='px-5'>The backbone of the web, enabling navigation between pages. Here we can link internal and external resources.</p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>6. img tag:</h2>
                        <p className='px-5'>Brings life to web pages by embedding images. It also essential for modern web design, supporting responsive images with srcset.</p>  
                    </div>
                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>7. details and summary tag:</h2>
                        <p className='px-5'>It make browsers easy to use. Perfect for FAQs or progressive disclosure.</p>
                    </div>
                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>8. table tag:</h2>
                        <p className='px-5'>Ideal for displaying structured tabular data. With thead, tbody and tfoot easy to create organized layouts.</p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>9. form tag:</h2>
                        <p className='px-5'>The gateway to interactivity on the web. Essential for gathering user input via elements like input , textarea ad button</p>
                    </div>

                    <div className='px-6'>
                        <h2 className='text-lg font-semibold text-blue-700'>10. nav tag:</h2>
                        <p className='px-5'>Makes it easy to define navigation areas. Great for organizing menus or links in a structured way.</p>
                    </div>
                </div>
            </div> 
            
        </div>
    </>
  )
}

export default Html