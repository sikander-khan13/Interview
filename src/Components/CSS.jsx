import React from 'react'

function CSS() {
  return (
    <>
        <div className='px-8 py-2'>
            <h1 className='font-bold text-2xl text-center mt-5'>CSS All Important Questions To Crack The Interviews</h1>

            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>1. What is CSS, and how does it work with HTML?</h2>
                <p>CSS, or Cascading Style Sheets, is a language used to describe the appearance and layout of elements on a web page. It works in conjunction with HTML (HyperText Markup Language), which defines the structure and content of a web page.</p>
                <div className='space-y-1'>
                    <h3 className='font-semibold text-xl text-blue-700'>How CSS work with HTML:</h3>
                    <div className='space-y-2 px-3'>
                        <p>1. HTML is used to organize and define the elements of a webpage, such as headings, paragraphs, images, and links.</p>
                        <p>2. CSS specifies how these elements should look—such as their colors, fonts, sizes, and layout.</p>
                        <p>3. CSS can be applied to HTML in three ways. They are inline CSS, internal CSS and external CSS.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>2. What is the difference between inline, internal, and external CSS?</h2>

                <div className='overflow-x-auto'>
                    <table className="min-w-full border-collapse border-2  border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Feature</th>
                                <th className="px-4 py-2 border border-gray-300">Inline CSS</th>
                                <th className="px-4 py-2 border border-gray-300">Internal CSS</th>
                                <th className="px-4 py-2 border border-gray-300">External CSS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Location</td>
                                <td className="px-4 py-2 border border-gray-300">Within the style attribute of an element</td>
                                <td className="px-4 py-2 border border-gray-300">Inside style in the head</td>
                                <td className="px-4 py-2 border border-gray-300">In a separate .css file</td>   
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Reusability</td>
                                <td className="px-4 py-2 border border-gray-300">	Not reusable</td>
                                <td className="px-4 py-2 border border-gray-300">Limited to one HTML document</td>
                                <td className="px-4 py-2 border border-gray-300">Reusable across multiple HTML documents</td>   
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Ease of Maintenance</td>
                                <td className="px-4 py-2 border border-gray-300">Hard to maintain for many elements</td>
                                <td className="px-4 py-2 border border-gray-300">Moderate (centralized for one page)</td>
                                <td className="px-4 py-2 border border-gray-300">Easy (centralized for multiple pages)</td>   
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Use Case</td>
                                <td className="px-4 py-2 border border-gray-300">Quick fixes or small, isolated styles</td>
                                <td className="px-4 py-2 border border-gray-300">Styling a single page comprehensively</td>
                                <td className="px-4 py-2 border border-gray-300">Large projects with consistent styling</td>   
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>3. Explain the CSS box model. What properties does it consist of?</h2>

                <div>
                    <p>The CSS Box Model is a foundational concept in web design that describes how every HTML element is rendered as a rectangular box. This model determines the size, spacing, and layout of elements on a webpage. Understanding the box model is essential for controlling the visual structure of a webpage.</p>

                    <div className='space-y-1'>
                        <h3 className='text-lg font-semibold text-blue-700 mt-3'>Components of the Box Model:</h3>
                        <div className='space-y-2 px-5'>
                            <p><span className='font-bold'>1.Content:</span> This is the innermost layer, where the actual content resides.</p>
                            <p><span className='font-bold'>2. Padding:</span> The space between the content and the element's border. Padding mainly ensures that the content doesn't touch the border.</p>
                            <p><span className='font-bold'>3. Border:</span> The border wraps around the padding. It's thickness style, and color can be customized.</p>
                            <p><span className='font-bold'>4. Margin:</span> The outermost layer, which defines the space between the element and its neighbors. Margin are used to create spacing between elements.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>4. What is specificity in CSS, and how does it affect styling?</h2>
                <div>
                    <p>Specificity in CSS determines which rule is applied when multiple rules target the same element. It is a hierarchy system that prioritizes certain selectors over others based on their specificity value. This ensures that the most specific rule is applied to the element.</p>
                    <div className='space-y-1'>
                        <h3 className='mt-3 font-semibold text-lg text-blue-700'>How Specificity Works:</h3>
                        <div className='space-y-2 px-5'>
                            <p>1. The rule with the highest specificity value is applied.</p>
                            <p>2. If two rules have the same specificity, the one that appears later in the CSS (or source order) takes precedence.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>5. How do CSS selectors work, and what are some common types of selectors?</h2>
                <div className='space-y-2'>
                    <h3 className='text-lg font-semibold text-blue-700'>How CSS Selectors Work</h3>

                    <div className='space-y-2 px-5'>
                        <p>1. The browser reads the CSS file and matches the selectors with the corresponding elements in the HTML.</p>
                        <p>2. Once matched, the CSS rules (styles) are applied to those elements.</p>
                        <p>3. If multiple selectors match the same element, the specificity and source order determine which rule is applied.</p>
                    </div>
                </div>
                <div className='space-y-1'>
                    <h3 className='text-lg font-semibold text-blue-700'>Common Types of CSS Selectors</h3>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>1. Universal Selector:</h4>
                        <p className='px-4'>Targets all elements on the page.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>2. Type Selector:</h4>
                        <p className='px-4'>Targets all elements of a specific type (tag name).</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>3.  Class Selector:</h4>
                        <p className='px-4'>Targets elements with a specific class attribute.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>4.  ID Selector:</h4>
                        <p className='px-4'>Targets a single element with a specific ID.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>5.  Attribute Selector:</h4>
                        <p className='px-4'>Targets elements based on their attributes or attribute values.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>6. Grouping Selector:</h4>
                        <p className='px-4'>Combines multiple selectors to apply the same styles.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>7. Descendant Selector: </h4>
                        <p className='px-4'>Targets elements that are descendants (children, grandchildren, etc.) of a specific parent.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>8.  Child Selector: </h4>
                        <p className='px-4'>Targets all elements on the page.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>9. Sibling Selectors:</h4>
                        <p className='px-4'>Targets all elements on the page.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>10.  Pseudo-Classes:</h4>
                        <p className='px-4'>Targets elements in a specific state or condition.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>11.  Pseudo-Elements:</h4>
                        <p className='px-4'>Targets specific parts of an element.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>6. What are pseudo-classes and pseudo-elements? Give examples of each.</h2>

                <div className='space-y-1'>
                    <h3 className='font-bold text-lg text-blue-700'>Pseudo-Classes</h3>
                    <p>A pseudo-class is used to define the state or special condition of an element. It allows you to apply styles when an element is in a specific state (e.g., when a link is hovered or a form field is focused).</p>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Pclass.png" alt="" />
                    </div>
                </div>
                <div className='space-y-1'>
                    <h3 className='font-bold text-lg text-blue-700 mt-3'>Pseudo-Element</h3>
                    <p className='mb-3'>A pseudo-element is used to style a specific part of an element, such as the first letter, line, or content before/after the element.</p>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Pelement.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>7. Explain the concept of inheritance in CSS.</h2>
                <div className='space-y-2'>
                    <p>Inheritance in CSS refers to the way some properties of HTML elements are passed down (inherited) from a parent element to its child elements. This concept helps maintain consistent styling across an HTML document and reduces the need for repetitive code.</p>

                    <div className='space-y-2'>
                        <h3 className='text-lg font-semibold text-blue-700'>Key Points about inheritance in css:</h3>
                        <div className='space-y-1 px-4'>
                            <p><span className='font-bold'>1. Properties that are inherited by default:</span> This mainly include color, font-family, font-size, font-style, font-variant, font-weight, letter-spacing, line-height, visibility, white-space, word-spacing</p>
                            <p><span className='font-bold'>2. Non-inherited properties:</span> Most other CSS properties, such as box model properties (margin, padding, border, width, height), and layout properties (display, position, flex, etc.), are not inherited by default. If you want these to apply to child elements, you need to explicitly define them.</p>
                        </div>
                        <div className='space-y-2'>
                            <h3 className='text-lg font-semibold text-blue-700'>Benefits of Inheritance:</h3>
                            <div className='space-y-1 px-4'>
                                <p>1. Promotes consistency across elements.</p>
                                <p>2. Reduces the need to repeat styles in CSS, making code more maintainable.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>8. What is the !important rule in CSS, and when should you use it?</h2>
                <div className='space-y-2'>
                    <p>The !important rule in CSS is a special keyword used to override all other style rules applied to an element, regardless of specificity or source order. When applied to a CSS property, it ensures that the value of that property will take precedence over conflicting rules.</p>
                    <div className='space-y-2'>
                        <h3 className='text-lg font-bold text-blue-700'>When shoud we use !important</h3>
                        <p>You should use !important sparingly and only in specific situations where other approaches are impractical or impossible. Overusing it can make your CSS difficult to debug and maintain.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>9. How does the display property work, and what are the different display values?</h2>

                <div className='space-y-2'>
                    <p>The display property in CSS defines the layout behavior of an element, specifically how it is displayed in the document and how it interacts with other elements. It is a fundamental property for structuring web pages and controlling layout.</p>
                    <div className='space-y-2'>
                        <h3 className='text-lg font-bold text-blue-700'>Common Display Values</h3>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>1. block</h4>
                            <p className='px-4'>The element takes up the width available. Starts on a new line. Example: div, section, p, h1</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>2. inline</h4>
                            <p className='px-4'>The element does not start on a new line and only takes up as much as width as necessary. Does not respect width, height, margin-top or margin-bottom. Example: span,a, strong tag</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>3. inline-block</h4>
                            <p className='px-4'>Similar to inline but respect width and height properties. Does not start on a new line</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>4. flex</h4>
                            <p className='px-4'>Turns an element into a flex container. Allows child elements to be arranged using flexbox layout model.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>5. grid</h4>
                            <p className='px-4'>Turns an element into a grid container. Allows child elements to be arranged into rows and columns using the CSS grid layout model.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>6. inline-flex</h4>
                            <p className='px-4'>Similar to flex, but the container behaves like an inline element</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>7. inline-grid</h4>
                            <p className='px-4'>Similar to grid, but the container behaves like an inline element.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>8. none</h4>
                            <p className='px-4'>The element is not displayed and is removed from the layout flow. It does not take up space on the page.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>9. table</h4>
                            <p className='px-4'>Behaves like a table element, with rows and cells. Useful for creating table-like layouts without actual table elements</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>10. table-row and table-cell</h4>
                            <p className='px-4'>Behave like table rows and cells.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>11. contents</h4>
                            <p className='px-4'>Makes the element itself disappear while keeping its child elements rendered as if they were directly in the parent element. Does not generate a box for the element itself.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>12. list-item</h4>
                            <p className='px-4'>Behave like a block element with a list marker like li tag.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>10. What is the position property, and how do different position values (static, relative, absolute, fixed, sticky) behave?</h2>
                <div className='space-y-2'>
                    <p>The position property in CSS specifies how an element is positioned in the document. It defines the positioning context, which determines how the element is placed relative to its parent, viewport, or other elements.</p>
                    <div className='space-y-1 px-4'>
                        <h3 className='text-lg font-semibold text-blue-700'>1. static</h3>
                        <p>This is the default positioning for all elements. The element is positioned according to the normal document flow (i.e., its position is determined by the order of elements in the HTML and default layout rules). top, right, bottom, and left properties have no effect.</p>
                        <p><span className='font-bold'>Use Case:</span><br />General default behavior; no special positioning is applied.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h3 className='text-lg font-semibold text-blue-700'>2. relative</h3>
                        <p>The element is positioned relative to its normal position in the document flow. You can use the top, right, bottom, and left properties to move it relative to its starting position. The element still occupies its original space in the layout.</p>
                        <p><span className='font-bold'>Use Case:</span> <br />Slight adjustments or as a positioning context for child elements.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h3 className='text-lg font-semibold text-blue-700'>3. absolute</h3>
                        <p>The element is positioned relative to its nearest positioned ancestor (an ancestor with a position value other than static). If no positioned ancestor exists, it is positioned relative to the viewport. The element is removed from the normal document flow and does not occupy space.</p>
                        <p><span className='font-bold'>Use Case:</span> <br />Floating elements, tooltips, modals, or elements with precise positioning.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h3 className='text-lg font-semibold text-blue-700'>4. fixed</h3>
                        <p>The element is positioned relative to the viewport and does not move when the page is scrolled. It is removed from the normal document flow.</p>
                        <p><span className='font-bold'>Use Case:</span> <br />Sticky headers, footers, navigation bars, or elements that must remain visible.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h3 className='text-lg font-semibold text-blue-700'>5. sticky</h3>
                        <p>The element toggles between relative and fixed depending on the scroll position. It behaves like relative until a specified threshold is reached (using top, left, etc.), after which it behaves like fixed. Requires a defined scrollable container (e.g., the body or a parent element).</p>
                        <p><span className='font-bold'>Use Case:</span> <br />Sticky headers, table headers, or any element that sticks to the viewport when scrolling.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>11. How do the padding, margin, and border properties work in CSS?</h2>
                <div className='space-y-2'>
                    <p>The padding, margin, and border properties in CSS are fundamental components of the box model, which defines the layout and spacing of HTML elements. These properties allow control over the spacing between an element’s content, its borders, and surrounding elements.</p>
                    <div className='space-y-1 px-3'>
                        <h3 className='text-lg font-semibold text-blue-700'>1. Padding</h3>
                        <p>The padding is the space between the content of an element and its border. It provides inner spacing inside the element.</p>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>Key points:</h4>
                            <p>Padding is inside the border of the element. Increasing padding increases the size of the element (if box-sizing is set to content-box). Padding can be set for all sides or for each side individually.</p>
                        </div>
                    </div>
                    <div className='space-y-1 px-3'>
                        <h3 className='text-lg font-semibold text-blue-700'>2. Margin</h3>
                        <p>The margin is the space between the element’s border and neighboring elements. It creates outer spacing around the element.</p>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>Key points:</h4>
                            <p>Margins collapse in certain situations. Negative margins are allowed, which can overlap elements or reduce spacing. Margins do not affect the size of the element.</p>
                        </div>
                    </div>
                    <div className='space-y-1 px-3'>
                        <h3 className='text-lg font-semibold text-blue-700'>3. Border</h3>
                        <p>The border is a line that surrounds the element’s padding and content. It visually separates the element from its surroundings.</p>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>Key points:</h4>
                            <p>Borders have three parts: width, style, and color. Adding a border increases the size of the element (if box-sizing is set to content-box).</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>12. Explain the flex property. How do flex-grow, flex-shrink, and flex-basis work??</h2>
                <div className='space-y-2'>
                    <p>The flex property in CSS is a shorthand for setting three sub-properties of a flex item: flex-grow, flex-shrink, and flex-basis. These properties collectively control how a flex item behaves within a flex container.</p>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-semibold text-blue-700'>How it works:</h3>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>1. flex-grow</h4>
                            <p className='px-4'>A value of 1 allows the flex item to grow proportionally to fill the available space. Higher values mean the item will grow faster compared to other items with smaller flex-grow values.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>2. flex-shrink</h4>
                            <p className='px-4'>A value of 0 prevents the item from shrinking. Higher values allow the item to shrink faster compared to items with smaller flex-shrink values.</p>
                        </div>
                        <div className='space-y-1'>
                            <h4 className='font-bold'>3. flex-basis</h4>
                            <p className='px-4'>Can be set to a specific size. Overrides the width property for flex items. If set to 0, the size of the item is determined solely by flex-grow and flex-shrink.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>13. What is the difference between width, min-width, and max-width?</h2>

                <div className='overflow-x-auto'>
                    <table className="min-w-full border-collapse border-2  border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Property</th>
                                <th className="px-4 py-2 border border-gray-300">Purpose</th>
                                <th className="px-4 py-2 border border-gray-300">Effect</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">width</td>
                                <td className="px-4 py-2 border border-gray-300">Sets exact width</td>
                                <td className="px-4 py-2 border border-gray-300">	Overrides parent or content sizing unless restricted by min-width or max-width.</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">min-width</td>
                                <td className="px-4 py-2 border border-gray-300">Sets minimum width</td>
                                <td className="px-4 py-2 border border-gray-300">Ensures the element never shrinks below this width, even if width or content suggests smaller.</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">max-width</td>
                                <td className="px-4 py-2 border border-gray-300">Sets maximum width</td>
                                <td className="px-4 py-2 border border-gray-300">Ensures the element never expands beyond this width, even if width or content suggests larger.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>14. How does the z-index property work, and when would you use it?</h2>
                <div className='space-y-2'>
                    <h3 className='text-lg font-bold text-blue-700'>How z-index Works</h3>
                    <div className='px-4'>
                        <h4 className='font-bold'>1. Stacking Context:</h4>
                        <div className='px-4'>
                            <p>. Elements are layered based on their stacking context.</p>
                            <p>. A stacking context is established by an element when certain conditions are met (e.g., applying position other than static, or using CSS properties like transform, opacity, filter, etc.).</p>
                        </div>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>2. Positioned Elements:</h4>
                        <div className='px-4'>
                            <p>. For z-index to take effect, the element must have a positioning context (position: relative, absolute, fixed, or sticky).</p>
                            <p>. Without a positioning context (position: static), z-index is ignored.</p>
                        </div>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>3. z-index Values:</h4>
                        <div className='px-4'>
                            <p>. <span>Auto:</span> The default value. The element’s stack level is determined by its parent stacking context.</p>
                            <p>. <span>Integer values:</span> Specifies the stacking order. Higher values are in front, and lower values are behind. Positive integers (z-index: 10) bring an element to the foreground. Negative integers (z-index: -1) push an element to the background.</p>
                        </div>
                    </div>
                    <h3 className='font-bold text-lg text-blue-700'>When to Use z-index</h3>
                    <div className='px-4'>
                        <h4 className='font-bold'>Overlapping Elements:</h4>
                        <p>To ensure specific elements appear on top of others, like dropdown menus, tooltips, modals, or popups.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>Fixing Layering Issues:</h4>
                        <p>When elements unexpectedly overlap, using z-index can help resolve conflicts.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>Creating Layered Effects:</h4>
                        <p>Useful for visual designs that involve multiple layers, such as sliders, parallax effects, or 3D-like interfaces.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>15. What is the difference between the opacity and visibility properties?</h2>
                <div className='overflow-x-auto'>
                    <table className="min-w-full border-collapse border-2  border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Property</th>
                                <th className="px-4 py-2 border border-gray-300">Effect</th>
                                <th className="px-4 py-2 border border-gray-300">Layout Space</th>
                                <th className="px-4 py-2 border border-gray-300">	User Interaction</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">opacity</td>
                                <td className="px-4 py-2 border border-gray-300">Changes transparency</td>
                                <td className="px-4 py-2 border border-gray-300">Occupies layout space</td>
                                <td className="px-4 py-2 border border-gray-300">Fully interactive (clickable, etc.)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">visibility</td>
                                <td className="px-4 py-2 border border-gray-300">Toggles visibility (shown/hidden)</td>
                                <td className="px-4 py-2 border border-gray-300">Occupies layout space (except for collapse)</td>
                                <td className="px-4 py-2 border border-gray-300">Non-interactive when hidden</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>16. What is the difference between flexbox and CSS Grid, and when should you use each?</h2>
                <div className='overflow-x-auto'>
                    <table className="min-w-full border-collapse border-2  border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Feature</th>
                                <th className="px-4 py-2 border border-gray-300">Flexbox</th>
                                <th className="px-4 py-2 border border-gray-300">	CSS Grid</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Dimension</td>
                                <td className="px-4 py-2 border border-gray-300">One-dimensional (row or column)</td>
                                <td className="px-4 py-2 border border-gray-300">Two-dimensional (rows and columns)</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Content vs. Layout</td>
                                <td className="px-4 py-2 border border-gray-300">Content-driven</td>
                                <td className="px-4 py-2 border border-gray-300">Layout-driven</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Item Placement</td>
                                <td className="px-4 py-2 border border-gray-300">Automatic within a single axis</td>
                                <td className="px-4 py-2 border border-gray-300">Precise control over row and column placement</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Usage Complexity</td>
                                <td className="px-4 py-2 border border-gray-300">Easier to set up for simple layouts</td>
                                <td className="px-4 py-2 border border-gray-300">More setup for defining grids and areas</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Flexibility</td>
                                <td className="px-4 py-2 border border-gray-300">Better for dynamic, smaller components</td>
                                <td className="px-4 py-2 border border-gray-300">Better for large, structured layouts</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className='space-y-2'>
                    <h3 className='mt-4 text-lg font-bold text-blue-700'>When to Use Flexbox vs. CSS Grid</h3>
                    <div className='space-y-1'>
                        <h4 className='text-lg font-bold'>Use Flexbox:</h4>
                        <div className='px-4'>
                            <p>1. You need to lay out items in a single direction (row or column).</p>
                            <p>2. The layout is more content-driven and flexible.</p>
                            <p>3. You’re working with small, simple components (e.g., navigation bars, toolbars, or aligning buttons).</p>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h4 className='text-lg font-bold'>Use CSS Grid:</h4>
                        <div className='px-4'>
                            <p>1. You need a structured, two-dimensional layout (rows and columns).</p>
                            <p>2. The design requires items to span multiple rows or columns.</p>
                            <p>3. You're creating larger layouts like entire pages, dashboards, or complex grids.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>17. Explain how to create a responsive layout using media queries.</h2>
                <div className='space-y-2'>
                    <h3 className='font-bold text-lg mt-2 text-blue-700'>Steps to Create a Responsive Layout with Media Queries:</h3>
                    <div className='px-4'>
                        <h4 className='font-bold'>1. Set Up the Initial Layout</h4>
                        <p className='px-4'>Start by designing a base layout that works on smaller screens by default. Use a mobile-first approach: write styles for smaller screens first, then add styles for larger screens using media queries.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>2. Add Media Queries</h4>
                        <p className='px-4'>Use media queries to define breakpoints at which the layout should change. Common breakpoints are based on device widths (e.g., 600px for tablets, 900px for desktops).</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>3. Define Breakpoints</h4>
                        <p className='px-4'>Breakpoints represent screen width thresholds where your layout adapts. </p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>4.  Use Relative Units</h4>
                        <p className='px-4'>Use responsive units like percentages (%), viewport units (vw, vh), or relative units (em, rem) instead of fixed units (px) to make your design scale better.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>5. Add Responsive Typography</h4>
                        <p className='px-4'>Adjust font sizes and spacing for different screen sizes using media queries.</p>
                    </div>
                    <div className='px-4'>
                        <h4 className='font-bold'>6. Responsive Grid Layout</h4>
                        <p className='px-4'>Combine CSS Grid or Flexbox with media queries for a flexible layout.</p>
                    </div>
                    <div className='flex items-center justify-center'>
                        <img className='object-contain' src="Media.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>18. How do you create a centered element in CSS? Provide multiple ways.</h2>
                <div className='space-y-2'>
                    <p>Centering an element in CSS depends on whether you’re centering it horizontally, vertically, or both. Below are multiple methods for centering elements in various scenarios.</p>
                    <div className='px-4'>
                        <h4 className='text-lg font-bold text-blue-700'>1. Centering Horizontally</h4>
                        <div className='px-4'>
                            <p>a. Using text-align (For Inline or Inline-Block Elements). It mainly works for elements like span, img or inline-block elements inside the container.</p>
                            <p>b. Using margin: auto (For Block-Level Elements). Where element must have defined width </p>

                            <p>c. Using flexbox where display must have to be flex and justify-content should be center</p>
                        </div>    
                    </div>
                    <div className='px-4'>
                        <h4 className='text-lg font-bold text-blue-700'>2. Centering Vertically</h4>
                        <div className='px-4'>
                            <p>a. Using line-height (For Single-Line Text). It mainly works for single-line text but not for multi-line text.</p>
                            <p>b. Using flexbox where display must be flex and align-items should be center</p>

                            <p>c. Using position and transform. where position will be absolute and transform will be translateY(-50%) and top should be 50%. But at first of all parent element position will be relative.</p>
                        </div>  
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>19. How does CSS Grid work, and what are grid-template-rows and grid-template-columns?</h2>
                <div className='space-y-2'>
                    <p>CSS Grid is a powerful two-dimensional layout system in CSS, allowing you to control the layout of rows and columns simultaneously. It is ideal for creating complex, responsive designs without requiring additional markup or nested containers. <br />To use CSS Grid, you apply the display: grid; property to a container element, which becomes a grid container. Its children are automatically treated as grid items.</p>
                    <div className='space-y-1'>
                        <h3 className='font-bold text-lg text-blue-700'>grid-template-rows and grid-template-columns:</h3>
                        <p>The grid-template-rows and grid-template-columns properties define the structure of the grid by specifying the size of rows and columns.</p>
                        <div className='px-4'>
                            <h5 className='font-bold'>grid-template-columns:</h5>
                            <p>Defines the number of columns and their widths.</p>
                        </div>
                        <div className='px-4'>
                            <h5 className='font-bold'>grid-template-rows:</h5>
                            <p>Defines the number of rows and their heights.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>20. How does the flex-direction property work in Flexbox, and what are its values?</h2>
                <div className='space-y-2'>
                    <p>The flex-direction property in Flexbox determines the direction in which the flex container arranges its child items along the main axis. This axis can be horizontal or vertical, depending on the property value.</p>
                    <div className='space-y-1'>
                        <h3 className='font-bold text-lg text-blue-700'>Values of flex-direction</h3>
                        <div className='px-4'>
                            <h4 className='font-bold'>1. row</h4>
                            <p className='px-4'>Where display should be flex and flex-direction should be row.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>2. row-reverse</h4>
                            <p className='px-4'>Where display should be flex and flex-direction should be row-reverse.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>3. column</h4>
                            <p className='px-4'>Where display should be flex and flex-direction should be column.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>4. column-reverse</h4>
                            <p className='px-4'>Where display should be flex and flex-direction should be column-reverse.</p>
                        </div>
                        <h4 className='font-bold mt-3 text-lg text-blue-700'>When to Use flex-direction</h4>
                        <div className='px-4'>
                            <p><span className='font-bold'>row:</span> Default for horizontal layouts like navigation bars or toolbars.</p>
                            <p><span className='font-bold'>row-reverse:</span> For layouts where items need to appear in reverse order (e.g., RTL languages or special effects).</p>
                            <p><span className='font-bold'>column:</span> For vertical stacking, like sidebar menus or content sections.</p>
                            <p><span className='font-bold'>column-reverse:</span> For reverse stacking, such as timelines or chat messages where new items appear at the top.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>21. Explain the CSS box model. What properties does it consist of?</h2>
                <div className='space-y-2'>
                    <p>In web design, the viewport refers to the visible area of a web page in the browser window. It represents the portion of the document that the user can see without scrolling. The viewport size can vary based on the device (desktop, tablet, mobile) and its resolution, and it changes when the user resizes the browser window.</p>
                    <div className='space-y-1'>
                        <h3 className='font-bold text-lg text-blue-700'>How to Make Elements Responsive to Viewport Changes</h3>
                        <div className='px-4'>
                            <h4 className='font-bold'>1.  Use the meta Tag for Viewport Scaling</h4>
                            <p className='px-4'>To control the viewport's dimensions on mobile devices, use the following meta tag in the head of our HTML document. This ensures that the page layout scales correctly on smaller devices like smartphones and tablets, preventing zooming and making the design fit the screen width. </p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>2.   Use Relative Units (vw, vh, %, em, rem)</h4>
                            <p className='px-4'>Relative units are crucial for creating responsive layouts because they adapt to the viewport size. vw (Viewport Width): 1vw = 1% of the viewport's width. vh (Viewport Height): 1vh = 1% of the viewport's height. %: Percentage-based values are relative to the parent container. em and rem: Relative to the font size of the element (em) or the root element (rem).</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>3. Use Media Queries for Breakpoints</h4>
                            <p className='px-4'>Media queries allow you to apply different styles at different viewport widths (breakpoints). By using media queries, you can target specific ranges of viewport sizes and adjust the layout accordingly.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>4. Use Flexbox and CSS Grid for Responsive Layouts</h4>
                            <p className='px-4'>Both Flexbox and CSS Grid are powerful layout models that help you create flexible, responsive designs without needing to manually adjust styles based on the viewport. flex-wrap: wrap;: Allows the items to wrap onto the next line when the container is too narrow. flex: 1 1 200px;: The items will take up equal space but never shrink below 200px in width. grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));: This creates a grid with columns that automatically adjust based on the viewport size, with each column taking at least 200px of space but expanding as needed.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>5. Use max-width and min-width for Constraints</h4>
                            <p className='px-4'>When you want to ensure that an element is responsive but doesn’t exceed certain dimensions, use max-width and min-width. max-width ensures that the container never exceeds a certain width, even if the viewport is larger. min-width ensures that the container does not shrink smaller than a certain width, preventing the layout from breaking.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>6. Use object-fit for Responsive Images and Media</h4>
                            <p className='px-4'>To make images and media elements responsive within their containers, use the object-fit property. object-fit: cover; Ensures that the image fills the container without distortion, potentially cropping the image if the aspect ratios differ. object-fit: contain;: Ensures the whole image fits inside the container while maintaining the aspect ratio.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>22. How can you create a sticky footer that stays at the bottom of the page?</h2>
                <div className='space-y-2'>
                    <p>Creating a sticky footer that stays at the bottom of the page (even if the content is not enough to fill the entire screen) can be done using a few different methods in CSS. Below are the most common approaches to achieve this.</p>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>1. Using Flexbox</h4>
                        <p className=' px-4'>Flexbox is the simplest and most flexible method for creating a sticky footer. By using flexbox on the main container,Set the display flex on the container. Use flex-direction column and apply flex-grow:1</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>2. Using Grid</h4>
                        <p className='px-4'>CSS Grid is another great option for creating a sticky footer, especially if you need more complex layouts. Set the display grid on the container. Define two rows: one for the content and one for the footer. Set the content row to take up available space, and the footer row to stick at the bottom.</p>
                    </div>
                    <div className='space-y-1 px-4'>
                        <h4 className='font-bold'>3.  Using position: absolute</h4>
                        <p className='px-4'>This method involves positioning the footer at the bottom of the page using position: absolute; and bottom: 0;. However, it’s less flexible because it might cause issues if the content is taller than the viewport.</p>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>23. Explain how you would approach creating a mobile-first design.</h2>
                <div className='space-y-2'>
                    <p>Here's how I would approach a mobile-first design</p>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>1. Understand the User and Context</h1>
                        <div className='px-4'>
                            <p>Identify Target Users: Understand the audience, their needs, and how they interact with the mobile interface.</p>
                            <p>Context of Use: Analyze scenarios in which users access the site or app (e.g., on-the-go, quick interactions, or detailed browsing).</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>2. Define Core Content and Functionality</h1>
                        <div className='px-4'>
                            <p>Prioritize Content: Focus on delivering essential information or functionality first. Mobile users often look for specific, concise information.</p>
                            <p>Strip Non-Essentials: Remove unnecessary elements to avoid clutter and improve load times.</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>3. Start with a Mobile Wireframe</h1>
                        <div className='px-4'>
                            <p>Small Screen Layout: Design the interface for small screens (e.g., 320–480px wide) with the most critical features placed prominently.</p>
                            <p>Touch-Friendly Design: Ensure buttons and interactive elements are large enough for touch gestures (minimum 48x48px with adequate spacing).</p>
                            <p>Simplified Navigation: Use compact, intuitive navigation patterns like hamburger menus or bottom navigation bars.</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>4. Use Responsive Design Principles</h1>
                        <div className='px-4'>
                            <p>Flexible Layouts: Utilize CSS techniques like fluid grids, percentages, and relative units for adaptable layouts.</p>
                            <p>Responsive Media Queries: Define breakpoints to progressively enhance the design for larger screens (e.g., tablets, desktops).</p>
                            <p>Image Optimization: Serve appropriately sized images using the picture element or srcset attribute.</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>5. Prioritize Performance</h1>
                        <div className='px-4'>
                            <p>Fast Load Times: Minimize file sizes, optimize images, and implement lazy loading.</p>
                            <p>Efficient Code: Write clean, modular CSS and JavaScript for quick rendering.</p>
                            <p>Progressive Web Techniques: Leverage service workers and caching for offline functionality and fast load times.</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>6. Focus on Accessibility</h1>
                        <div className='px-4'>
                            <p>Readable Text: Ensure font sizes are legible on small screens (e.g., 16px or larger).</p>
                            <p>Contrast and Color: Maintain sufficient contrast for text and important elements.</p>
                            <p>Keyboard and Screen Reader Support: Test for usability with assistive technologies.</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>7. Test on Real Devices</h1>
                        <div className='px-4'>
                            <p>Cross-Device Testing: Use tools like BrowserStack or physical devices to test across different screen sizes, resolutions, and operating systems.</p>
                            <p>Performance Monitoring: Use tools like Lighthouse or WebPageTest to evaluate mobile performance.</p>
                        </div>
                    </div>
                    <div className='px-4 space-y-1'>
                        <h1 className='font-bold text-lg'>8. Progressive Enhancement for Larger Screens</h1>
                        <div className='px-4'>
                            <p>Expand Layouts: Add more content and features as screen real estate increases.</p>
                            <p>Improve Interactions: Enhance hover effects, animations, and larger navigation systems for desktop users.</p>
                            <p>Maintain Consistency: Ensure a unified look and feel across devices.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>24. What do you understand by the universal sector?</h2>
                <div className='px-2'>
                    <p>The term "universal sector" can have multiple interpretations depending on the context in which it is used. In a cosmic or astronomical context, the "universal sector" might refer to: A specific region of the universe divided for study or classification. For instance, astronomers divide the observable universe into sectors for mapping and observation. In a business or economic context, the "universal sector" might describe: Industries or services that are universally relevant or necessary for all populations, such as healthcare, education, or basic utilities. In philosophical or spiritual contexts, "universal sector" could refer to:A metaphorical or conceptual space that encompasses universal principles or truths, such as unity, interconnectedness, or balance. In systems theory or general application:The "universal sector" could mean a segment that applies universally, such as a standard framework or approach that works across different fields or contexts.</p>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>25. What are CSS preprocessors, and how do they work? Give examples like SASS or LESS.</h2>
                <div className='space-y-2'>
                    <p>CSS preprocessors are tools that extend the functionality of regular CSS by introducing advanced features such as variables, nested rules, mixins, functions, and more. They allow developers to write more maintainable, reusable, and organized stylesheets, which are then compiled into standard CSS that browsers can understand.</p>
                    <div className='space-y-1'>
                        <h3 className='font-bold text-lg text-blue-700'>How CSS Preprocessors Work</h3>
                        <div className='px-4'>
                            <h4 className='font-bold'>1. Preprocessing Syntax:</h4>
                            <p className='px-4'>Developers write styles in the syntax provided by the preprocessor (e.g., SASS or LESS).</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>2. Compilation:</h4>
                            <p className='px-4'>The preprocessor compiles the code into standard CSS.This is usually done using command-line tools, build tools (e.g., Webpack, Gulp), or integrated IDE plugins.</p>
                        </div>
                        <div className='px-4'>
                            <h4 className='font-bold'>3. Output:</h4>
                            <p className='px-4'>The resulting CSS file is used in the project and is compatible with all browsers.</p>
                        </div>
                    </div>
                    <div>
                            <h4 className='font-bold text-lg text-blue-700'>Examples of CSS Preprocessors</h4>
                            <div className='px-4'>
                                <h5 className='mt-2 font-bold'>1. SASS (Syntactically Awesome Stylesheets):</h5>
                                <div className='px-4'>
                                    <p>Syntax: .scss (newer syntax, closer to CSS) or .sass (older, indentation-based syntax).</p>
                                    <p>Popular and widely supported.</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='object-contain' src="Sass.png" alt="" />
                                </div>
                            </div>
                            <div className='px-4'>
                                <h5 className='font-bold'>2. LESS (Leaner CSS): </h5>
                                <div className='px-4'>
                                    <p>Syntax: .less.</p>
                                    <p>Similar to SASS but slightly different in feature implementation.</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <img className='object-contain' src="Less.png" alt="" />
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>26. Explain CSS custom properties (CSS variables) and their benefits.</h2>
                <div className='space-y-2'>
                    <p>CSS Custom Properties, commonly referred to as CSS variables, are entities defined by authors in CSS that store specific values (like colors, font sizes, or other CSS values). Unlike preprocessor variables, CSS custom properties are native to CSS and work directly in the browser without needing compilation. <br /> They are defined using the -- prefix and accessed using the var() function.</p>
                    <div className='space-y-1'>
                        <h3 className='text-lg font-bold text-blue-700'>Benefits of CSS Custom Properties:</h3>
                        <div className='px-4'>
                            <p>1. Custom properties can change dynamically using JavaScript or CSS rules, enabling responsive designs and themes.</p>
                            <p>2. Variables can be declared globally (e.g., in :root) or locally within a specific selector.</p>
                            <p>3. Avoid repetition by reusing variables for consistent styles across elements.</p>
                            <p>4. Updating a single variable automatically updates all instances where it's used.</p>
                            <p>5. Unlike SASS or LESS variables, CSS custom properties are native to browsers and do not require compilation.</p>
                            <p>6. Variables can be redefined based on context, enabling flexible designs.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>27. How do CSS animations work, and how can you create a keyframe animation?</h2>
                <div className='space-y-2'>
                    <div>
                        <h3 className='font-bold text-lg'>How CSS Animations Work</h3>
                        <div className='px-4'>
                            <p>1. Keyframes: Define the animation’s behavior at specific points using the @keyframes rule.</p>
                            <p>2. Animation Properties: Control how the animation is applied, including its duration, timing, iteration count, and direction.</p>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-lg'>Creating a Keyframe Animation</h3>
                        <div className='px-4 space-y-1'>
                            <h4 className='font-bold '>Step 1: Define the Keyframes</h4>
                            <p>The @keyframes rule defines the animation's steps. You specify percentage values (or keywords like from and to) to represent the starting and ending points.</p>
                        </div>
                        <div className='px-4 space-y-1'>
                            <h4 className='font-bold '>Step 2: Apply the Animation to an Element</h4>
                            <p>Use the animation shorthand property or individual animation properties to apply the keyframe animation.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>28. What are CSS transitions, and how are they different from animations?</h2>
                <div className='space-y-2'>
                    <p>CSS transitions allow changes to CSS properties to occur smoothly over a specified duration when triggered by an event (e.g., hover, focus, or click). They enable a gradual shift between property values instead of abrupt changes.</p>
                    <div className='space-y-1'>
                        <h3 className='font-bold text-lg'>How CSS Transitions Work</h3>
                        <p>A transition is applied to an element using the transition property. It requires at least two things:</p>
                        <div className='px-4'>
                            <p>1. The property to be transitioned: Specify which CSS property will change smoothly.</p>
                            <p>2. The duration: Define how long the transition lasts.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>29. What is the difference between rem, em, and px units?</h2>
                <div className='overflow-x-auto'>
                    <table className="min-w-full border-collapse border-2  border-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border border-gray-300">Feature</th>
                                <th className="px-4 py-2 border border-gray-300">px</th>
                                <th className="px-4 py-2 border border-gray-300">em</th>
                                <th className="px-4 py-2 border border-gray-300">rem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Type</td>
                                <td className="px-4 py-2 border border-gray-300">	Absolute</td>
                                <td className="px-4 py-2 border border-gray-300">Relative to parent element</td>
                                <td className="px-4 py-2 border border-gray-300">Relative to root element</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Scalability</td>
                                <td className="px-4 py-2 border border-gray-300">Fixed size</td>
                                <td className="px-4 py-2 border border-gray-300">Scales with parent font size</td>
                                <td className="px-4 py-2 border border-gray-300">Scales with root font size</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Context Dependency</td>
                                <td className="px-4 py-2 border border-gray-300">None</td>
                                <td className="px-4 py-2 border border-gray-300">	Depends on parent font size</td>
                                <td className="px-4 py-2 border border-gray-300">Always depends on root font size</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2 border border-gray-300">Best Use Case</td>
                                <td className="px-4 py-2 border border-gray-300">Precise dimensions</td>
                                <td className="px-4 py-2 border border-gray-300">Contextual scaling</td>
                                <td className="px-4 py-2 border border-gray-300">Global scaling and consistency</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className='space-y-2'>
                <h2 className='text-lg font-semibold text-red-700 mt-3'>30. What is SVG and how can it be used to create custom shapes?</h2>
                <div className='space-y-2'>
                    <p>SVG (Scalable Vector Graphics) is an XML-based format for defining vector graphics that can scale without losing quality. Unlike raster images (e.g., PNG, JPG), SVG graphics are resolution-independent and retain their sharpness on any screen size or resolution. SVG is widely used for creating icons, illustrations, charts, and custom shapes on the web.</p>
                    <div className='space-y-1 px-4'>
                        <h3 className='font-bold text-lg text-blue-700'>Creating Custom Shapes with SVG</h3>
                        <p>SVG supports various shape elements and tools to create custom designs:</p>
                        <div>
                            <h4 className='font-bold'>1. Basic Shapes</h4>
                            <div className='px-4'>
                                <p>rect: Rectangle</p>
                                <p>circle: Circle</p>
                                <p>ellipse: Ellipse</p>
                                <p>rect: Rectangle</p>
                                <p>line:line</p> 
                            </div>
                            <div>
                                <h4 className='font-bold'>2. Custom Shapes with path</h4>
                                <p className='px-4'>The path element provides the most flexibility for creating custom shapes using a combination of commands and coordinates.</p>
                            </div>
                            <div>
                                <h4 className='font-bold'>3. Text</h4>
                                <p className='px-4'>SVG supports text elements for adding labels or custom typography.</p>
                            </div>
                            <div>
                                <h4 className='font-bold'>4. Combining Shapes</h4>
                                <p className='px-4'>Multiple shapes can be combined within a single svg container.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>
  )
}

export default CSS