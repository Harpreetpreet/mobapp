import React from 'react';
import Button from './Button';
import ComponentHeader from './global/ComponentHeader';

const Pricing = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto ">
        <ComponentHeader heading="PRICING" title="Upgrade to Pro" />
        <ul className="my-14">
          <div class="grid md:grid-cols-3 grid-cols-1 gap-6 text-center">
            <div className="rounded border-2 py-8">
              <h3>PERSONAL</h3>
              <h1 className="text-4xl pb-10">$14/m</h1>
              <div className="space-y-10">
                <li>10 Projects</li>
                <li>5 GB Storage</li>
                <li>Basic Support</li>
                <li>Collaboration</li>
                <li>Reports and analytics</li>
                <Button> CHOOSE THIS PLAN </Button>
              </div>
            </div>
            <div className="rounded border-2 py-8">
              <h3>PERSONAL</h3>
              <h1 className="text-4xl pb-10">$14/m</h1>
              <div className="space-y-10">
                <li>10 Projects</li>
                <li>5 GB Storage</li>
                <li>Basic Support</li>
                <li>Collaboration</li>
                <li>Reports and analytics</li>
                <Button> CHOOSE THIS PLAN </Button>
              </div>
            </div>
            <div className="rounded border-2 py-8">
              <h3>PERSONAL</h3>
              <h1 className="text-4xl pb-10">$14/m</h1>
              <div className="space-y-10">
                <li>10 Projects</li>
                <li>5 GB Storage</li>
                <li>Basic Support</li>
                <li>Collaboration</li>
                <li>Reports and analytics</li>
                <Button> CHOOSE THIS PLAN </Button>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default Pricing;
