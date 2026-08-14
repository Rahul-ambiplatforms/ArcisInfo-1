// SERVER component (no 'use client') — renders JSON-LD into the HTML that the
// server sends, so crawlers see the schema without executing any JavaScript.
//
// Follow this pattern for any remaining page that still emits schema through
// react-helmet-async: build the objects in a plain server-safe module, then
// render them from the route's server component with dangerouslySetInnerHTML,
// the same way app/blog/[slug]/page.js and app/layout.js already do.
import React from 'react';

// `</script>` inside a JSON string would close the tag early; escaping the
// forward slash keeps the payload valid JSON and the HTML well-formed.
function serialize(schema) {
  return JSON.stringify(schema).replace(/</g, '\\u003c');
}

export default function SeoPageSchemaScripts({ schemas = [] }) {
  if (!schemas.length) return null;
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={schema['@id'] || `${schema['@type']}-${i}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(schema) }}
        />
      ))}
    </>
  );
}
