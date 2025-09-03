import React from "react";

interface PrivacyPolicyProps {}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#007ba8] to-[#005a85] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              EnableNow Inc. is committed to protecting your privacy and
              personal information
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <section className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              EnableNow Inc. is committed to protecting your privacy. This
              privacy statement applies to the official pages of EnableNow
              Inc.'s website (the "Website") and all sites created and
              maintained by EnableNow Inc. (e.g. landing pages, surveys, etc.).
              By using our Website, you accept and agree to these terms.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#007ba8]">
              Information We Collect
            </h2>

            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We may obtain data from third parties. We protect data obtained
                from third parties according to the practices described in this
                statement, plus any additional restrictions imposed by the
                source of the data. These third-party sources vary over time,
                but have included:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Third-Party Sources
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#007ba8] mr-2">•</span>
                      Social networks when you subscribe or follow our channels
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#007ba8] mr-2">•</span>
                      Service providers that help us determine location based on
                      IP address
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#007ba8] mr-2">•</span>
                      Partners with co-branded services or joint marketing
                      activities
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#007ba8] mr-2">•</span>
                      Publicly available sources such as government databases
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#007ba8]">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Data Types We Collect
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Name and Contact Data
                      </h4>
                      <p className="text-gray-700 text-sm">
                        First and last name, email address, postal address,
                        phone number
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Device Information
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Browser type, settings, and device characteristics
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <p className="text-lg font-medium text-green-800 mb-2">
                  Your Rights
                </p>
                <p className="text-green-700">
                  You have rights to the data we collect. When you are asked to
                  provide personal data, you may decline. The data we collect
                  depends on the context of your interactions with EnableNow
                  Inc. and the choices you make, including your privacy
                  settings.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#007ba8]">
              Our Use of Cookies & Similar Technologies
            </h2>
            <div className="bg-gray-50 p-8 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                Cookies are small text files that are placed on your computer or
                device by websites that you visit or HTML-formatted emails you
                open. If you do not accept cookies, however, you may not be able
                to use all the functionalities of the Website. We use cookies
                and similar technologies for the functioning of the Website, to
                improve the Website, to give you extra functionalities, and to
                provide a smoother online experience. The Website and associated
                websites do not recognize browser "do-not-track" signals or
                similar mechanisms.
              </p>
            </div>
          </section>

          {/* How We Share Information */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#007ba8]">
              How We Share Your Personal Information
            </h2>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
              <p className="text-lg font-semibold text-green-800 mb-2">
                We Do Not Sell Your Data
              </p>
              <p className="text-green-700">
                EnableNow Inc. will not sell or rent your data to anyone.
              </p>
            </div>

            <p className="text-lg text-gray-700 mb-6">
              We will only send personal data about you to other companies or
              people when:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "We have your consent to share the information",
                "We need to share your information to provide the service you have requested",
                "We need to send the information to companies who work on behalf of EnableNow Inc.",
                "We have to disclose your data in responding to a lawful request by public authorities",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
                >
                  <span className="text-[#007ba8] font-bold text-lg mr-3">
                    {index + 1}.
                  </span>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <p className="text-gray-700">
                <strong>Legal Compliance:</strong> We are subject to the
                investigatory and enforcement powers of the Federal Trade
                Commission (FTC). We may be required to disclose personal
                information that we handle under the Privacy Shield in response
                to lawful requests by public authorities, including to meet
                national security or law enforcement requirements.
              </p>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#007ba8]">
              How We Use Your Information
            </h2>

            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#007ba8] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Website Operations
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Furnish and maintain the Website, communicate with you,
                    respond to inquiries
                  </p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#007ba8] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Customer Support
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Provide technical and customer support, enable service
                    provisioning
                  </p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#007ba8] rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Communications
                  </h3>
                  <p className="text-gray-700 text-sm">
                    Send newsletters, marketing materials, and information of
                    interest
                  </p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-[#007ba8] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Email Preferences
                </h3>
                <p className="text-gray-700 mb-3">
                  If you do not want us to e-mail you, you can choose not to
                  give your permission on the web pages and forms with which we
                  collect your information. Please note that this may involve
                  un-checking a box.
                </p>
                <p className="text-gray-700">
                  At any time, if you no longer wish to receive communications
                  from us, you can unsubscribe by following the unsubscribe
                  instructions provided in the communication.
                </p>
              </div>
            </div>
          </section>

          {/* Choice & Control */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#007ba8]">
              Choice & Control
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Data Collection Consent",
                  description:
                    "We will not collect your personally identifiable information unless you provide it to us by consent.",
                },
                {
                  title: "Cookie Management",
                  description:
                    "Cookies can be disabled or removed by tools that are available in most commercial browsers.",
                },
                {
                  title: "Browser Configuration",
                  description:
                    "You can configure your browser to accept all cookies, reject all cookies, or notify you when a cookie is set.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Changes to Privacy Statement */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6 pb-3 border-b-2 border-[#007ba8]">
              Changes to Our Privacy Statement
            </h2>
            <div className="p-6 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-700 leading-relaxed">
                If there are significant changes to our information practices,
                we will provide you with appropriate online notice.
              </p>
            </div>
          </section>

          {/* Contact Information */}
          <section className="bg-gradient-to-r from-[#007ba8] to-[#005a85] text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">
              How to Contact Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-xl mb-4">
                  For questions or concerns regarding our privacy statement,
                  please contact us:
                </p>
                <p className="text-blue-100">
                  We're here to help and ensure your privacy concerns are
                  addressed promptly.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
                <div className="space-y-3">
                  <div>
                    <h3 className="font-semibold text-blue-100">Email</h3>
                    <a
                      href="mailto:info@enablenow.com"
                      className="text-white hover:text-blue-200 text-lg font-medium underline"
                    >
                      info@enablenow.com
                    </a>
                  </div>
                  <div>
                    <h3 className="font-semibold text-blue-100">Address</h3>
                    <p className="text-white">
                      EnableNow Inc.
                      <br /> 
                      Headquarters - 30 N GOULD STREET, Suite R, Sheridan, WY
                      82801 <br /> <br />
                      Regional Office - 555 Republic Drive, Suite 450, Plano TX
                      75074
                    </p>
                  </div>
                </div>
              </div>
            </div>
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

export default PrivacyPolicy;
