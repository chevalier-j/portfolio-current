/*
 * path: /src/styles.js
 */
//tailwind utility styles (variables)

const styles = {
	paddingX: 'sm:px-16 px-6',
	paddingY: 'sm:py-16 py-6',
	padding: 'sm:px-16 px-6 sm:py-16 py-10',

	heroHeadText:
		'font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2',
	heroSubText:
		'text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]',

	sectionHeadText:
		'text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]',
	sectionSubText:
		'sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider',

	// on focus, highlight:  (other options: focus:ring-2, outline-none, focus:shadow)
	focusHighlight: 'red-900 ring-offset-2',
}

export { styles }

/* Tailwind CSS provides a wide range of utility classes to highlight elements on focus and make them stand out. Here's the list of these classes, grouped by their effects:

Outline and Ring:

focus:outline-none: Removes the default outline around focused elements for a cleaner look.
focus:ring: Adds a ring around the focused element without affecting the layout.
focus:ring-2: Allows you to control the width of the focus ring.
focus:ring-offset: Adds an offset to the focus ring for a custom visual effect.
focus:ring-offset-2: Lets you control the width of the focus ring offset.

Visual Effects:

focus:shadow: Adds a shadow to the element on focus, creating a raised appearance.
focus:scale: Scales up the element on focus, making it stand out.
focus:translate-x: Translates the element horizontally on focus.
focus:translate-y: Translates the element vertically on focus.
focus:rotate: Rotates the element on focus.
focus:opacity: Changes the opacity of the element when focused.
focus:filter-{filter}: Applies a filter to the element on focus, such as blur, brightness, or contrast.
focus:drop-shadow-{color}: Adds a drop shadow to the element on focus.
focus:backdrop-blur-{amount}: Applies a backdrop blur to the element on focus.
focus:backdrop-brightness-{amount}: Adjusts the brightness of the backdrop behind the element on focus.
focus:backdrop-contrast-{amount}: Adjusts the contrast of the backdrop behind the element on focus.
focus:backdrop-grayscale-{percentage}: Applies grayscale to the backdrop behind the element on focus.
focus:backdrop-hue-rotate-{degrees}: Rotates the hue of the backdrop behind the element on focus.
focus:backdrop-invert: Inverts the colors of the backdrop behind the element on focus.
focus:backdrop-opacity-{percentage}: Sets the opacity of the backdrop behind the element when focused.

Color and Border:

focus:bg-{color}: Sets the background color of the element on focus.
focus:text-{color}: Sets the text color of the element when focused.
focus:border-{color}: Sets the border color of the element on focus.
focus:ring-{color}: Sets the color of the ring around the focused element.
focus:border-{width}: Sets the width of the border around the element when focused.
focus:border-opacity-{percentage}: Sets the opacity of the border when focused.

Size and Layout:

focus:scale-{percentage}: Scales the element by a specific percentage on focus.
focus:rotate-{degrees}: Rotates the element by a specific number of degrees on focus.
focus:translate-x-{length}: Translates the element horizontally by a specific length on focus.
focus:translate-y-{length}: Translates the element vertically by a specific length on focus.
focus:w-{width}: Sets the width of the element when focused.
focus:h-{height}: Sets the height of the element when focused.
focus:scale-x-{percentage}: Scales the element horizontally by a specific percentage on focus.
focus:scale-y-{percentage}: Scales the element vertically by a specific percentage on focus.
focus:rotate-x-{degrees}: Rotates the element around the X-axis by a specific number of degrees on focus.
focus:rotate-y-{degrees}: Rotates the element around the Y-axis by a specific number of degrees on focus.
focus:rotate-z-{degrees}: Rotates the element around the Z-axis by a specific number of degrees on focus.
focus:skew-x-{degrees}: Skews the element along the X-axis by a specific number of degrees on focus.
focus:skew-y-{degrees}: Skews the element along the Y-axis by a specific number of degrees on focus.

These classes offer a variety of ways to style and animate elements when they receive focus, enabling you to create engaging and interactive user experiences.
*/
