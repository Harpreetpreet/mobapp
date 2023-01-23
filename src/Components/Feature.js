import React, { useState } from 'react';
import Tab from './features/Tab';
import Details from './features/Details';
import ComponentHeader from './global/ComponentHeader';

export default function Feature() {
  const [activeTab, setActiveTab] = useState('communication');
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto md:py-20 py-8 md:px-16 px-4">
        <ComponentHeader heading="FEATURES" title="Do more with our app" />
        <div className="bg-white my-10">
          <ul
            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tabFill"
            role="tablist"
          >
            <Tab
              title="Communication"
              active={activeTab === 'communication'}
              onClick={() => setActiveTab('communication')}
            />
            <Tab
              title="Scheduling"
              active={activeTab === 'scheduling'}
              onClick={() => setActiveTab('scheduling')}
            />
            <Tab
              title="Messages"
              active={activeTab === 'messages'}
              onClick={() => setActiveTab('messages')}
            />
            <Tab
              title="Live chat"
              active={activeTab === 'liveChat'}
              onClick={() => setActiveTab('liveChat')}
            />
          </ul>
          <div className="tab-content" id="tabs-tabContentFill">
            {activeTab === 'communication' && (
              <Details
                heading="Communicate with ease"
                title="Uniquely underwhelm premium outsourcing with proactive leadership
            skills."
                details={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et
            sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut
            placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan
            pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed
            condimentum neque quis ex porttitor, malesuada faucibus augue
            aliquet. Sed elit est, eleifend sed dapibus a, semper a eros.
            Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl
            euismod, eu faucibus justo sollicitudin.
          
Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputatealiquam.`}
              />
            )}
            {activeTab === 'scheduling' && (
              <Details
                isReverse
                heading="Scheduling when you want"
                title="Uniquely underwhelm premium outsourcing with proactive leadership skills."
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
              malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. 
              
              Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam."
              />
            )}
            {activeTab === 'messages' && (
              <Details
                heading="Realtime Messaging service"
                title="Uniquely underwhelm premium outsourcing with proactive leadership skills."
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
              malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. 
              
              Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam."
              />
            )}
            {activeTab === 'liveChat' && (
              <Details
                isReverse
                heading="Live chat when you needed"
                title="Uniquely underwhelm premium outsourcing with proactive leadership skills."
                details="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rutrum, urna eu pellentesque pretium, nisi nisi fermentum enim, et sagittis dolor nulla vel sapien. Vestibulum sit amet mattis ante. Ut placerat dui eu nulla congue tincidunt ac a nibh. Mauris accumsan pulvinar lorem placerat volutpat. Praesent quis facilisis elit. Sed condimentum neque quis ex porttitor,
            malesuada faucibus augue aliquet. Sed elit est, eleifend sed dapibus a, semper a eros. Vestibulum blandit vulputate pharetra. Phasellus lobortis leo a nisl euismod, eu faucibus justo sollicitudin. 
            
            Mauris consectetur, tortor sed tempor malesuada, sem nunc porta augue, in dictum arcu tortor id turpis. Proin aliquet vulputate aliquam."
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
