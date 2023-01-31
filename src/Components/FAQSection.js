import React from 'react';
import ComponentHeader from './global/ComponentHeader';

const FAQSection = () => {
  return (
    <section>
      <div className="container mx-auto md:px-10 px-6">
        <ComponentHeader heading="FAQ" title="Frequently Asked Questions" />
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8 py-14 md:px-14">
          <div>
            <h1 className="text-purple-900 font-bold text-xl pb-6">Can I try before I buy?</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
              What payment methods do you accept?
            </p>
          </div>
          <div>
            <h1 className="text-purple-900 font-bold text-xl pb-6">Can I change my plan later?</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
              What payment methods do you accept?
            </p>
          </div>
          <div>
            <h1 className="text-purple-900 font-bold text-xl pb-6">What payment methods do you accept?</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
              What payment methods do you accept?
            </p>
          </div>
          <div>
            <h1 className="text-purple-900 font-bold text-xl pb-6">Do you have a contract?</h1>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
              sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante.
              What payment methods do you accept?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
