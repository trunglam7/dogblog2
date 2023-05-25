"use client";

import React, { useEffect } from 'react';

const DisqusComments = ({ url, identifier, title } : DisqusCommentsProps) => {
  useEffect(() => {
    if (window.DISQUS) {
      window.DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = identifier;
          this.page.url = url;
          this.page.title = title;
        },
      });
    } else {
      // Disqus script has not loaded yet, handle accordingly
    }
  }, [url, identifier, title]);

  return (
    <div id="disqus_thread">
      {/* Placeholder for Disqus comment thread */}
    </div>
  );
};

export default DisqusComments;