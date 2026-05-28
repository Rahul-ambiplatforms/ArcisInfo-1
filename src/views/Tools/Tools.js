'use client';
import React from 'react';
import VersionTable from '../../Components/VersionTable';

const Tools = () => (
  <VersionTable
    eyebrow="Resources"
    titleLead="Tools &"
    titleAccent="Software"
    subtitle="Download the latest applications, configuration utilities, and corresponding release notes for ArcisAI cameras and the Cloud VMS."
    listPath="/app/getAllApps"
    downloadPath="/app/download"
    fileType="app"
    fileFallbackName="applicationFiles.zip"
    firstColumnLabel="App Name"
    firstColumnField="appName"
    searchPlaceholder="Search by app, model or version"
  />
);

export default Tools;