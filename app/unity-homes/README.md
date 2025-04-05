# Unity Homes Landing Page

This is a landing page for Unity Homes, showcasing property investment opportunities in Kenya for Kenyans living in Spain.

## Page Structure

The landing page consists of the following sections:

1. **Hero Section**: Introduction with headline, sub-headline, and video.
2. **Features & Benefits Section**: Eight key selling points for Unity Homes properties.
3. **Meet Your Local Contact Section**: Information about Maureen Mungai, the Diaspora Agent.
4. **Call to Action & Lead Form Section**: Registration form to express interest and get more information.

## Components Used

- GradientText: Custom component for highlighted text with gradient animation
- Various shadcn components (Button, Input, Select, Card, etc.)
- Lucide icons for feature cards

## Setup Requirements

- Add the actual video file (`VideoGT7_v7COMP.mp4`) to the public directory
- Add an image of Maureen Mungai (`maureen-mungai.jpg`) to the public directory

## Form Integration

The form is currently set up to log submissions to the console. To connect it to an actual backend:

1. Create an API route in `app/api/unity-homes/route.ts`
2. Update the `handleSubmit` function to send form data to your API
3. Add form validation as needed

## Technical Notes

- Uses framer-motion for animations
- Responsive design works on mobile, tablet, and desktop
- Dark mode compatible with appropriate color adjustments 