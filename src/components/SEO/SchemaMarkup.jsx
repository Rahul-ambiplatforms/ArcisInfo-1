import React from 'react';
import {Helmet} from 'react-helmet-async';
export const getBreadcrumbSchema=(items)=>({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":items.map((item,i)=>({"@type":"ListItem","position":i+1,"name":item.name,"item":item.url}))});
export const getVideoSchema=(v)=>({"@context":"https://schema.org","@type":"VideoObject","name":v.name,"description":v.description,"thumbnailUrl":v.thumbnail,"uploadDate":v.uploadDate||"2025-01-01","contentUrl":v.url,"publisher":{"@type":"Organization","name":"ArcisAI"}});
export const getArticleSchema=(a)=>({"@context":"https://schema.org","@type":"Article","headline":a.title,"description":a.description,"image":a.image,"datePublished":a.datePublished,"author":{"@type":"Organization","name":"ArcisAI","url":"https://www.arcisai.io"},"publisher":{"@type":"Organization","name":"ArcisAI","logo":{"@type":"ImageObject","url":"https://www.arcisai.io/assets/logo.png"}},"mainEntityOfPage":{"@type":"WebPage","@id":a.url}});
export const speakableSchema={"@context":"https://schema.org","@type":"WebPage","speakable":{"@type":"SpeakableSpecification","cssSelector":["h1",".speakable-content","[data-speakable]"]}};
export const getHowToSchema=(h)=>({"@context":"https://schema.org","@type":"HowTo","name":h.name,"description":h.description,"step":h.steps.map((s,i)=>({"@type":"HowToStep","position":i+1,"name":s.name,"text":s.text}))});
const SchemaMarkup=({schema})=>(<Helmet><script type="application/ld+json">{JSON.stringify(schema)}</script></Helmet>);
export default SchemaMarkup;