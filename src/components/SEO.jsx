import React, { useEffect } from 'react';

export default function SEO({ 
  title = "Admetta | Advertising and Branding Agency", 
  description = "Admetta is a full-service advertising and branding agency crafting bold digital identities, growth strategies, and creative campaigns.",
  path = ""
}) {
  useEffect(() => {
    // Update Title
    document.title = title;

    // Update Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', description);

    // Update Canonical URL
    const canonicalLink = document.getElementById('canonical-link') || document.querySelector('link[rel="canonical"]');
    const fullUrl = `https://admetta.com${path}`;
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    } else {
      const link = document.createElement('link');
      link.id = 'canonical-link';
      link.rel = 'canonical';
      link.href = fullUrl;
      document.head.appendChild(link);
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogTitle) ogTitle.setAttribute('content', title);
    if (ogDesc) ogDesc.setAttribute('content', description);
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);
    if (twitterDesc) twitterDesc.setAttribute('content', description);
    if (twitterUrl) twitterUrl.setAttribute('content', fullUrl);

  }, [title, description, path]);

  return null;
}
