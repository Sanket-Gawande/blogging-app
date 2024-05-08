import Link from "next/link";
import React from "react";

const Terms = () => {
  return (
    <div className="container mx-auto py-8 px-4 max-w-5xl">
      <div className="text-white">
        <div className="relative flex h-40 w-full justify-center items-center">
          <h1 className="absolute top-1/3 font-bold text-3xl text-center mb-4">
            Disclaimer
          </h1>
        </div>

        <div className="mb-8">
          <p className="text-lg">
            If you require any more information or have any questions about our
            site&#39;s disclaimer, please feel free to contact us by email at
            authorslog@gmail.com. Our Disclaimer was generated with the help of
            the Disclaimer Generator.
          </p>
        </div>

        <section className="mb-8">
          <h2 className="font-bold text-xl mb-4">Disclaimers for authorslog</h2>
          <p className="text-lg">
            You can see some Amazon affiliate products on this website. I prefer
            products only that I used and feel satisfied and comfortable with
            those products.
          </p>
          <p className="text-lg">
            All the information on this website -{" "}
            <strong>
              <Link href="/">authorslog.com</Link>
            </strong>{" "}
            - is published in good faith and for general information purpose
            only. authorslog does not make any warranties about the
            completeness, reliability and accuracy of this information. Any
            action you take upon the information you find on this website
            (authorslog), is strictly at your own risk. authorslog will not be
            liable for any losses and/or damages in connection with the use of
            our website.
          </p>
          <p>
            From our website, you can visit other websites by following
            hyperlinks to such external sites. While we strive to provide only
            quality links to useful and ethical websites, we have no control
            over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on
            these sites. Site owners and content may change without notice and
            may occur before we have the opportunity to remove a link which may
            have gone &#39;bad&#39;.
          </p>
          <p>
            Please be also aware that when you leave our website, other sites
            may have different privacy policies and terms which are beyond our
            control. Please be sure to check the Privacy Policies of these sites
            as well as their &#34;Terms of Service&#34; before engaging in any
            business or uploading any information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-bold text-xl mb-4">Consent</h2>
          <p>
            By using our website, you hereby consent to our disclaimer and agree
            to its terms.
          </p>
          <p>
            Should we update, amend or make any changes to this document, those
            changes will be prominently posted here.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
