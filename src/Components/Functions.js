import React, { useState } from 'react';

function Tab({ title, onClick }) {
  return (
    <li className="nav-item flex-auto text-center" role="presentation">
      <a
        onClick={onClick}
        className="cursor-pointer nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6
    
       py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active"
        id="tabs-home-tabFill"
        data-bs-toggle="pill"
        data-bs-target="#tabs-homeFill"
        role="tab"
        aria-controls="tabs-homeFill"
        aria-selected="true"
      >
        {title}
      </a>
    </li>
  );
}

export default function Functions() {
  const [activeTab, setActiveTab] = useState('communication');
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto text-center md:pt-20 pt-10 md:px-16 px-4">
        <h3>FEATURES</h3>
        <h1 className="md:text-5xl text-3xl text-purple-900 py-4">
          Do more with our app
        </h1>
        <div className="bg-white">
          <ul
            className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4"
            id="tabs-tabFill"
            role="tablist"
          >
            <Tab
              title="Communication"
              onClick={() => setActiveTab('communication')}
            />
            <Tab
              title="Scheduling"
              onClick={() => setActiveTab('scheduling')}
            />
            <Tab title="Messages" onClick={() => setActiveTab('messages')} />
            <Tab title="Live chat" onClick={() => setActiveTab('liveChat')} />
          </ul>
          <div className="tab-content" id="tabs-tabContentFill">
            {activeTab === 'communication' && (
              <div
                className="tab-pane fade show active"
                id="tabs-homeFill"
                role="tabpanel"
                aria-labelledby="tabs-home-tabFill"
              >
                communication hfjyhrf hgjer
              </div>
            )}
            {activeTab === 'scheduling' && (
              <div
                className="tab-pane fade show active"
                id="tabs-homeFill"
                role="tabpanel"
                aria-labelledby="tabs-home-tabFill"
              >
                scheduling hfjyhrf hgjer
              </div>
            )}
            {activeTab === 'messages' && (
              <div
                className="tab-pane fade show active"
                id="tabs-homeFill"
                role="tabpanel"
                aria-labelledby="tabs-home-tabFill"
              >
                messages hfjyhrf hgjer
              </div>
            )}
            {activeTab === 'liveChat' && (
              <div
                className="tab-pane fade show active"
                id="tabs-homeFill"
                role="tabpanel"
                aria-labelledby="tabs-home-tabFill"
              >
                live chat etc hfjyhrf hgjer
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
