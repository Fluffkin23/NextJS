import React from "react"; // Importing React library to create the component.
import clsx from "clsx"; //Importing the clsx library to conditionally join class name.

// Defining the types for the component props.
type BoundedProps = 
{
    as? : React.ElementType; // Optional prop to specify the HTML element type to render, defaults to "section."
    className?: string; // Optional prop for custom class names.
    children: React.ReactNode; // Prop to accept child elements.
}

// Creating a forwardRef component to pass refs down to the wrapped component.
const Bounded = React.forwardRef<HTMLDivElement, BoundedProps> 
(
    //Destructuring props with a default value for 'as' and using the rest operator to capture any additional props.
    ({ as: Comp = "section", className, children, ...restProps}, ref) => {
        return (
            //Rendering the component with the passed ref and merging the default and custom class names using clsx.
            <Comp ref = {ref} className = {clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
            {...restProps}>  {/* Spreading the rest of the props onto the component */}

                {/* Wrapping children in a div that centers the content and sets a maximum width. */}
                <div className = "mx-auto w-full max-w-7xl" >
                    {children}
                </div>
            </Comp>
        )
    }
)

// Setting the display name for teh component for better debugging and readability
Bounded.displayName = "Bounded"

export default Bounded; //Exporting the component as the default export.