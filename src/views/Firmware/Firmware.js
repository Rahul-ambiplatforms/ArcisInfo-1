'use client';
import React from 'react';
import VersionTable from '../../Components/VersionTable';

const Firmware = () => (
  <VersionTable
    eyebrow="Resources"
    titleLead="Firmware"
    titleAccent="Updates"
    subtitle="Download the latest firmware for ArcisAI cameras and read the corresponding release notes to keep your surveillance system secure and up to date."
    listPath="/firmware/getAllFirmware"
    downloadPath="/firmware/download"
    fileType="firmware"
    fileFallbackName="firmwareFiles.zip"
    firstColumnLabel="Model Number"
    firstColumnField="cameraName"
    searchPlaceholder="Search by model, camera or version"
  />
);

export default Firmware;
