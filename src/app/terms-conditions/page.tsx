import React from "react";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#007ba8] to-[#005a85] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our website
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">

          <section className="prose prose-lg max-w-none text-gray-700">
            <p>
              By accessing and using this site, you accept the following terms and conditions,
              without limitation or qualification.
            </p>

            <p>
              Unless otherwise stated, the contents of this site including, but not limited to,
              the text and images contained herein, and their arrangement are the property of
              EnableNow Inc. All trademarks used or referred to in this website are the property
              of their respective owners.
            </p>

            <p>
              Nothing contained in this site shall be construed as conferring by implication,
              estoppel, or otherwise, any license or right to any copyright, patent, trademark
              or other proprietary interest of EnableNow Inc. or any third party. This site and the
              content provided in this site, including, but not limited to, graphic images,
              audio, video, html code, buttons, and text, may not be copied, reproduced,
              republished, uploaded, posted, transmitted, or distributed in any way, without the
              prior written consent of EnableNow Inc., except that you may download, display, and
              print one copy of the materials on any single computer solely for your personal,
              non-commercial use, provided that you do not modify the material in any way and
              you keep intact all copyright, trademark, and other proprietary notices.
            </p>

            <p>
              The information provided on this site is free of charge and for informational
              purposes only and does not create a business or professional services relationship
              between you and EnableNow Inc. Links on this site may lead to services or sites not
              operated by EnableNow Inc. No judgment or warranty is made with respect to such other
              services or sites and EnableNow Inc. takes no responsibility for such other sites or
              services. A link to another site or service is not an endorsement of that site or
              service. Any use you make of the information provided on this site, or any site or
              service linked to by this site, is at your own risk.
            </p>

            <p>
              This site and its contents are provided "as is" and EnableNow Inc. makes no
              representation or warranty of any kind with respect to this site or any site or
              service accessible through this site. EnableNow Inc. expressly disclaims all express
              and implied warranties including, but not limited to, the implied warranties of
              merchantability, fitness for a particular purpose, title, and non-infringement. In
              no event will either EnableNow Inc. or its third-party service providers be liable to
              any party for any direct, indirect, incidental, special, exemplary, consequential,
              or other damages (including, but not limited to, lost profits, business
              interruption, loss of programs or data) without regard to the form of action and
              whether in contract, tort, negligence, strict liability, or otherwise, arising out
              of or in connection with this site, any content on or accessed through this site or
              any site service linked to, or any copying, displaying, or use thereof.
            </p>

            <p>
              EnableNow Inc. maintains this site in Virginia, U.S.A. and you agree that these terms
              of use and any legal action or proceeding relating to this site shall be governed
              by the laws of the State of Virginia without reference to its choice of law rules.
              If you attempt to bring any legal proceedings against EnableNow Inc., you specifically
              acknowledge that EnableNow Inc. is free to choose the jurisdiction of our preference
              as to where such action against us may be held. As you have agreed by using this
              site to choose the laws of the State of Virginia to govern any such proceedings, we
              will probably choose to defend any such action in Illinois and we can make this
              decision entirely as it suits us, without regard to where in the world you are
              located, or from where in the world you visited this site.
            </p>

            <p>
              You are responsible for complying with the laws of the jurisdiction from which you
              are accessing this site and you agree that you will not access or use the
              information on this site in violation of such laws. Unless expressly stated
              otherwise herein, any information submitted by you through this site shall be
              deemed non-confidential and non-proprietary. You represent that you have the lawful
              right to submit such information and agree that you will not submit any information
              unless you are legally entitled to do so. Because of the open nature of the
              Internet, we recommend that you not submit information you consider confidential.
            </p>

            <p>
              EnableNow Inc. does not accept unauthorized idea submissions outside of established
              business relationships. To protect the interests of our current clients and
              ourselves, we must treat the issue of such submissions with great care. Importantly,
              without a clear business relationship, EnableNow Inc. cannot and does not treat any
              such submissions in confidence. Accordingly, please do not communicate unauthorized
              idea submissions to EnableNow Inc. through this website. Any ideas disclosed to EnableNow
              Inc. outside a pre-existing and documented confidential business relationship are
              not confidential and EnableNow Inc. may therefore develop, use and freely disclose or
              publish similar ideas without compensating you or accounting to you. EnableNow Inc.
              will make every reasonable effort to return or destroy any unauthorized idea
              submissions without detailed review of them. However, if a review is necessary in
              EnableNow Inc.'s sole discretion, it will be with the understanding that EnableNow Inc.
              assumes no obligation to protect the confidentiality of your idea or compensate you
              for its disclosure or use. By submitting an idea or other detailed submission to
              EnableNow Inc. through this website, you agree to be bound by the terms of this stated
              policy.
            </p>
          </section>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-600">
            Last updated:{" "}
            {new Date().toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
