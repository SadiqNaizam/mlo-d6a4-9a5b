import React from 'react';

// Import Layout Component. This provides the centered, full-screen container.
import MainAppLayout from '@/components/layout/MainAppLayout';

// Import the main components for the login page.
import BrandLogo from '@/components/Login/BrandLogo';
import LoginForm from '@/components/Login/LoginForm';

/**
 * The main login page for the InsideBox application.
 *
 * This page acts as the composition root for the authentication view. It utilizes
 * `MainAppLayout` to establish the overall page structure (centered content) and
 * assembles the `BrandLogo` and `LoginForm` components to create the final UI.
 * The layout follows the specifications for a single-page view with a focused,
 * centered form.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      {/* 
        This container defines the main content area's width and stacks the
        logo and form vertically, following the `LoginPageLayout` template notes.
        - w-[400px]: Sets the fixed width for the login form area.
        - max-w-full: Ensures responsiveness on smaller screens.
        - flex flex-col items-center: Stacks and centers the BrandLogo and LoginForm.
        - gap-8: Provides vertical spacing between the logo and the form for visual separation.
      */}
      <div className="w-[400px] max-w-full flex flex-col items-center gap-8">
        <BrandLogo />
        <LoginForm />
      </div>
    </MainAppLayout>
  );
};

export default IndexPage;
