// Support Center Data
// Each top-level entry is a main support category card on /support.
// `subtopics` holds the sub-sections shown on /support/[slug], and each
// subtopic carries a list of FAQ {q, a} pairs.
//
// `a` may be either a string OR an array of strings; arrays render as
// a bullet list. See SupportCategory.js for the renderer.
//
// Per-category `accent`/`accentSoft` are picked from a brand-coherent
// palette that pairs with the ArcisAI neon-green theme on dark surfaces.

export const BRAND_GREEN = '#A4FF79';
export const BRAND_GREEN_SOFT = 'rgba(164, 255, 121, 0.12)';

export const supportCategories = [
  {
    slug: 'camera-offline',
    title: 'Camera Offline',
    description: 'Camera not connecting or streaming',
    iconName: 'FiVideoOff',
    accent: '#FF7A6B',
    accentSoft: 'rgba(255, 122, 107, 0.12)',
    subtopics: [
      {
        title: 'Power & LED Status',
        faqs: [
          {
            q: 'What does the red light on my camera mean?',
            a: [
              'This applies to Augentix series cameras which have a red indicator light on the camera body.',
              'Blinking Red Light = Camera has power but is not connected to the internet. Check your SIM data pack, WiFi connection, or LAN cable.',
              'Stable Red Light = Camera is powered on and connected to the internet.',
              'No Light = Camera is not receiving power. Check the power adapter and socket.',
            ],
          },
          {
            q: 'What do the lights on the LAN cable indicate?',
            a: [
              'Stable Green Light = Active internet connection.',
              'Blinking Green Light = No internet connection.',
              'No Light = Cable not connected or camera has no power.',
            ],
          },
        ],
      },
      {
        title: 'Network Connectivity',
        faqs: [
          {
            q: 'My camera is not live. What should I check?',
            a: [
              'Confirm the SIM card is inserted correctly and clean.',
              'Test the SIM in a phone to check data availability.',
              'Check the LAN light — blinking means no data.',
            ],
          },
          {
            q: 'My camera is online but video is not coming',
            a: 'Reduce the quality of the camera and check your internet speed.',
          },
          {
            q: 'What do I do if my camera shows "Internet Not Received Through SIM"?',
            a: [
              'SIM card may not have an active data pack.',
              'No network service in your area.',
            ],
          },
          {
            q: 'How to fix a blinking LAN light?',
            a: [
              'Ensure the SIM card has an active data plan.',
              'Check network signal strength.',
              'Try rebooting the camera.',
            ],
          },
          {
            q: 'My camera says "The Wireless Connection is Fail, Please Reconfigure" – what does this mean?',
            a: [
              'The camera failed to connect to WiFi.',
              'Ensure the WiFi credentials are correct and signal strength is good.',
            ],
          },
        ],
      },
      {
        title: 'Re-binding the Device',
        faqs: [
          {
            q: 'My camera keeps going offline repeatedly. What should I do?',
            a: [
              "If your camera is SIM-based: Check if your data pack is still active — the camera will go offline once the data is exhausted. Recharge the SIM with a data plan and restart the camera.",
              "Check network strength: Make sure the camera has good signal strength for the network it's connected to (WiFi or SIM). Weak signal causes intermittent disconnections.",
              'Check for power fluctuations: Ensure the camera is getting stable power. Frequent power cuts or unstable voltage can cause the camera to restart and go offline repeatedly.',
              'If the issue persists after checking all the above, please create a support ticket and our team will investigate further.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'camera-quality',
    title: 'Camera Quality',
    description: 'Blurry, laggy, or poor video',
    iconName: 'FiCamera',
    accent: '#FFB347',
    accentSoft: 'rgba(255, 179, 71, 0.12)',
    subtopics: [
      {
        title: 'Image Sharpness & Focus',
        faqs: [
          {
            q: 'My camera video is blurry',
            a: [
              'Clean the camera lens — dust, moisture, or smudges are the most common cause of blur.',
              'Check the quality setting: Camera Settings > Media Settings. If it is set to Low, increase it to Mid or High.',
              'If the blur only happens at night, make sure the IR/Night Vision LEDs are clean and unblocked.',
            ],
          },
          {
            q: 'How do I change video quality or brightness?',
            a: [
              'Go to Camera Settings > Media Settings.',
              'Adjust the sliders for Quality, Brightness, Contrast, Saturation, and other image controls.',
            ],
          },
          {
            q: 'Camera image is too dark',
            a: [
              'Go to Camera Settings > Media Settings and increase the Brightness slider.',
              'Check if IR/Night Vision mode is set to Auto — it should switch automatically in low light.',
            ],
          },
        ],
      },
      {
        title: 'Lag, Buffering & Frame Drops',
        faqs: [
          {
            q: 'Camera video is laggy or buffering',
            a: [
              'Lag almost always means bandwidth issues.',
              'Try reducing the video quality in Camera Settings > Media Settings to Medium.',
              'Check your internet speed — minimum 2 Mbps upload per camera is needed for smooth streaming.',
            ],
          },
          {
            q: 'My camera feed is flickering. How do I fix it?',
            a: [
              "Please go to your camera's Settings and check if the Anti-Flickering option is enabled. If it's not enabled, please turn it on — this usually fixes the flickering issue.",
              "If Anti-Flickering is already enabled and the issue persists, then it's likely that too much direct light is hitting the camera lens — such as a tubelight, LED light, or sunlight.",
              'Try repositioning or angling the camera to avoid direct light exposure.',
              'If the issue still continues after trying both steps, please create a support ticket and our team will get in touch with you.',
            ],
          },
        ],
      },
      {
        title: 'Night Vision & IR',
        faqs: [
          {
            q: 'Night vision is not working',
            a: [
              'Check that IR mode is set to Auto in camera settings.',
              'If the area has ambient light (e.g., a streetlight), the camera may not switch to night mode automatically. Try setting it to Night manually.',
              'Make sure the camera lens and IR LEDs are clean — dirt or cobwebs block IR illumination.',
            ],
          },
          {
            q: 'Camera is showing a black screen',
            a: [
              'If the camera is online but showing black, try rebooting it from Camera Settings > System > Reboot.',
              'A black screen is often a stuck IR filter or a temporary stream issue — a reboot usually clears it.',
            ],
          },
          {
            q: 'What is Smart Quality?',
            a: 'Smart Quality uses AI to automatically optimize video clarity in real time, based on lighting and movement conditions.',
          },
        ],
      },
    ],
  },
  {
    slug: 'recording-playback',
    title: 'Recording & Playback',
    description: 'Missing recordings or playback issues',
    iconName: 'FiFilm',
    accent: '#B794F4',
    accentSoft: 'rgba(183, 148, 244, 0.12)',
    subtopics: [
      {
        title: 'Event Recording & Alerts',
        faqs: [
          {
            q: 'How can I view past events or motion alerts?',
            a: [
              'Go to the Reports tab in Arcis VMS.',
              'Filter by event type, camera, and date range.',
              'Click on any event to view the snapshot/video clip.',
            ],
          },
        ],
      },
      {
        title: 'Export & Download Clips',
        faqs: [
          {
            q: 'Can I download event reports?',
            a: ['Yes. Reports can be exported as:', 'PDF', 'Excel'],
          },
        ],
      },
    ],
  },
  {
    slug: 'cloud-storage',
    title: 'Cloud & Storage',
    description: 'Cloud plan, sync, or storage problems',
    iconName: 'FiCloud',
    accent: '#7DD3FC',
    accentSoft: 'rgba(125, 211, 252, 0.12)',
    subtopics: [
      {
        title: 'Cloud Plans & Billing',
        faqs: [
          {
            q: 'How do I check my camera plan?',
            a: [
              'On the web app: open the Subscription section in the left sidebar.',
              'On the mobile app: open the Others page and tap Subscription.',
              "You will see each camera's plan name, status, and expiry date.",
            ],
          },
          {
            q: 'How do I upgrade my plan?',
            a: [
              'Web app: open Subscription (left sidebar), select the camera, choose a new plan, and complete payment.',
              'Mobile app: open Others > Subscription, select the camera, and choose a new plan.',
              'The upgrade takes effect immediately.',
            ],
          },
          {
            q: 'My plan expired. What happens?',
            a: [
              'Cloud recordings and some features stop when the plan expires.',
              'Renew from the Subscription page (left sidebar on web, or Others > Subscription on mobile).',
              'Your previous recordings may still be available for a short grace period.',
            ],
          },
          {
            q: 'What plans are available?',
            a: [
              'We offer Live plans (real-time viewing), DVR plans (cloud recording), and plans with different storage durations and AI features.',
              'Open the Subscription page to see all plan options and pricing for your cameras.',
            ],
          },
        ],
      },
      {
        title: 'SD Card & Local Storage',
        faqs: [
          {
            q: 'Can I use both SD card and cloud storage?',
            a: [
              'Yes — SD card stores recordings locally on the camera, and cloud stores them on our servers.',
              'Both can run simultaneously for redundancy.',
            ],
          },
          {
            q: 'Where is the SD card slot located on my camera?',
            a: 'The SD card slot is at the bottom side of all camera types (PTZ, Dome, Bullet), behind the rubber cover.',
          },
          {
            q: 'The SD card is not detected. What should I do?',
            a: [
              'Remove and clean the SD card.',
              'Ensure it is properly fitted in the slot.',
              'Format the SD card using a card reader and reinsert.',
            ],
          },
          {
            q: 'My camera says "SD Card Format Fail." What is wrong?',
            a: [
              'Try formatting the SD card on a PC first.',
              'Ensure the SD card is not write-protected or damaged.',
              'Reinsert and format again via camera settings.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'network-access',
    title: 'Network & Access',
    description: 'Remote access or connectivity issues',
    iconName: 'FiWifi',
    accent: '#FB923C',
    accentSoft: 'rgba(251, 146, 60, 0.12)',
    subtopics: [
      {
        title: '4G SIM Connectivity',
        faqs: [
          {
            q: 'How do I insert the SIM card in the 4G model?',
            a: [
              'PTZ Cameras: SIM slot is on the top side, behind a cover secured with two screws.',
              'Dome & Bullet Cameras: SIM slot is at the top, behind the rubber cover.',
            ],
          },
        ],
      },
      {
        title: 'Remote Access & VPN',
        faqs: [
          {
            q: "I can't access my camera remotely",
            a: [
              'First check that the camera is online on your dashboard.',
              "If it is online but you can't view it remotely, the issue is usually on your network side. Try switching between WiFi and mobile data.",
              'If you are on a VPN, disable it temporarily — VPNs often block camera streams.',
            ],
          },
          {
            q: 'I changed my WiFi and the camera went offline',
            a: [
              'After changing WiFi, the camera needs to be reconfigured with the new WiFi credentials.',
              'Connect to the camera directly via ethernet or AP mode and update the WiFi settings.',
            ],
          },
          {
            q: 'VPN is blocking camera access',
            a: [
              'VPNs can interfere with camera streaming.',
              'Try disabling your VPN or adding an exception for the ArcisAI app/dashboard.',
            ],
          },
        ],
      },
      {
        title: 'Bandwidth & Signal',
        faqs: [
          {
            q: 'What internet speed does my camera need?',
            a: [
              'Minimum 2 Mbps upload speed per camera for smooth streaming.',
              'For high quality, 4K, or multiple cameras, 4-5 Mbps per camera is recommended.',
            ],
          },
          {
            q: 'My camera says "The Wireless Connection is Fail, Please Reconfigure"',
            a: [
              'The camera failed to connect to WiFi.',
              'Make sure the WiFi credentials are correct and signal strength is good.',
              'ArcisAI cameras connect to 2.4 GHz WiFi only — 5 GHz is not supported.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'nvr-connectivity',
    title: 'NVR Connectivity & Configuration',
    description: 'NVR setup, camera linking, and recordings',
    iconName: 'FiHardDrive',
    accent: '#5EEAD4',
    accentSoft: 'rgba(94, 234, 212, 0.12)',
    subtopics: [
      {
        title: 'Camera-to-NVR Connection',
        faqs: [
          {
            q: 'How do I connect my IP camera to the NVR without an internet connection?',
            a: [
              "Connect the camera directly to the NVR's PoE port using a Cat5e/Cat6 cable.",
              'If the NVR has no PoE ports, connect both devices to the same network switch.',
              'Ensure the camera and NVR are powered on and connected properly.',
            ],
          },
          {
            q: 'Why is my camera not showing up on the NVR monitor?',
            a: [
              'Check whether the camera is receiving power.',
              'Ensure the camera and NVR are on the same IP subnet.',
              'Verify the network cable connection and camera status.',
            ],
          },
          {
            q: 'Why am I getting an "IP Conflict" or "Duplicate IP" error?',
            a: [
              'Two devices are using the same IP address.',
              'Assign a unique IP address to one of the devices.',
              'Reboot the affected device after changing the IP.',
            ],
          },
          {
            q: 'Can I use a different brand camera with my NVR?',
            a: [
              'Ensure both devices support the ONVIF protocol.',
              'Enable ONVIF on the camera.',
              'Add the camera using its ONVIF username and password.',
            ],
          },
          {
            q: 'Why does the NVR show "Invalid Password" for the camera?',
            a: [
              "Verify the camera's login credentials.",
              'Update the correct username and password in the NVR.',
              'Ensure the camera password has not been changed recently.',
            ],
          },
        ],
      },
      {
        title: 'Camera Detection & Status',
        faqs: [
          {
            q: 'Why is my camera not detected during NVR device search?',
            a: [
              'Ensure the camera and NVR are connected to the same network.',
              'Verify the camera has a valid IP address.',
              'Use ADCAMSCANNER to confirm the camera is online.',
              'Add the camera manually using its IP address if auto-search fails.',
            ],
          },
          {
            q: 'Why is my camera showing offline after being added to the NVR?',
            a: [
              'Verify the camera credentials entered in the NVR.',
              'Check network connectivity between the camera and NVR.',
              'Ensure the camera IP address has not changed.',
              'Confirm the camera and NVR are on the same subnet.',
            ],
          },
          {
            q: 'Why is my camera added through the mobile app but remains offline in the NVR?',
            a: [
              'Verify the camera port number is configured correctly.',
              'Ensure the camera IP address is reachable from the NVR.',
              'Check that the camera credentials match those configured in the NVR.',
              'Re-add the camera manually if automatic configuration fails.',
            ],
          },
        ],
      },
      {
        title: 'Remote Access & Mobile App',
        faqs: [
          {
            q: 'How do I view my NVR cameras on my mobile phone remotely?',
            a: [
              'Connect the NVR to the internet using a router.',
              'Enable P2P/Cloud service in the NVR settings.',
              'Scan the QR code using the mobile app to add the device.',
            ],
          },
          {
            q: 'Why is live view lagging or buffering on the mobile app?',
            a: [
              'Check the internet upload speed at the installation site.',
              'Switch from Main Stream to Sub Stream in the app.',
              'Reduce video quality to improve performance.',
            ],
          },
          {
            q: 'Do I need to configure Port Forwarding?',
            a: [
              'Port forwarding is usually not required when using P2P/Cloud services.',
              'Use port forwarding only for direct remote access via IP address.',
              'Verify router settings if direct access is needed.',
            ],
          },
        ],
      },
      {
        title: 'Network & Notifications',
        faqs: [
          {
            q: 'Why is my NVR network status showing Offline?',
            a: [
              'Check that the Ethernet cable is properly connected.',
              'Enable DHCP in the network settings.',
              'Restart the NVR and router if necessary.',
            ],
          },
          {
            q: 'How do I enable motion detection notifications or email alerts?',
            a: [
              'Enable Motion Detection in the NVR settings.',
              'Turn on Push Notifications in the mobile app.',
              'Configure SMTP settings correctly for email alerts.',
            ],
          },
        ],
      },
      {
        title: 'Recording & Playback',
        faqs: [
          {
            q: 'Why is my NVR not recording video?',
            a: [
              'Check whether the HDD is installed properly.',
              'Format the HDD if it is new.',
              'Verify recording mode is enabled (Continuous, Motion, or Scheduled).',
              'Ensure sufficient storage space is available.',
            ],
          },
          {
            q: "Why can't I view playback recordings?",
            a: [
              'Confirm that recording is enabled.',
              'Verify the HDD is functioning properly.',
              'Check the selected date and time range.',
              'Ensure recordings exist for the requested period.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'app-dashboard',
    title: 'App & Dashboard',
    description: 'App crashes, UI bugs, login issues',
    iconName: 'FiSmartphone',
    accent: '#A4FF79',
    accentSoft: 'rgba(164, 255, 121, 0.12)',
    subtopics: [
      {
        title: 'Login & Account',
        faqs: [
          {
            q: 'I forgot my password. How do I reset it?',
            a: [
              'On the login page, click the Forgot Password button.',
              'Enter your registered email address.',
              'You will receive a password reset link in your email.',
              'Click the link, enter your new password, confirm it, and submit. Your password will be updated.',
            ],
          },
          {
            q: 'How do I change my password?',
            a: [
              'On the Portal: Click on your profile icon in the header and select Change Password.',
              'On the App: Go to Others section, tap My Profile, then select Change Password.',
              'Enter your new password, confirm it, and save.',
            ],
          },
        ],
      },
      {
        title: 'Web Dashboard / VMS',
        faqs: [
          {
            q: 'How can I add a new camera to the Arcis dashboard?',
            a: [
              'Go to view.arcisai.io, sign in.',
              'Click "Add New Device".',
              'Enter the Device Name and Device ID (printed on the camera).',
            ],
          },
          {
            q: 'How do I know if a camera is online or offline?',
            a: [
              'Green indicator = Camera is online.',
              'Red indicator = Camera is offline/disconnected.',
            ],
          },
          {
            q: "I can't view live feed on VMS",
            a: [
              'Confirm the camera is online.',
              'Check SIM card and internet.',
              'Make sure Device ID is added correctly in VMS.',
            ],
          },
          {
            q: "What's the difference between Grid View and List View in VMS?",
            a: [
              'Grid View = Multiple live feeds in a tiled layout.',
              'List View = Detailed camera info in a vertical list.',
            ],
          },
          {
            q: 'How do I share a camera with another user?',
            a: [
              'Click the three-dot menu on the camera tile.',
              'Choose "Grant Access to Another User."',
              "Enter the user's email/mobile.",
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'ai-alerts-notifications',
    title: 'AI Alerts & Notifications',
    description: 'Motion detection, alerts configuration',
    iconName: 'FiBell',
    accent: '#FACC15',
    accentSoft: 'rgba(250, 204, 21, 0.12)',
    subtopics: [
      {
        title: 'Motion & Human Detection',
        faqs: [
          {
            q: 'How do I enable motion or human detection?',
            a: [
              'In Arcis AI VMS:',
              'Go to Camera Settings > AI Settings.',
              'Enable Motion Detection or Human Detection.',
            ],
          },
        ],
      },
      {
        title: 'Advanced AI Features',
        faqs: [
          {
            q: 'How do I use Face Detection or Line Crossing?',
            a: [
              'Go to Camera Settings > AI Settings.',
              'Enable Face Detection or Line Crossing Detection.',
              'Customize zones/lines as needed.',
            ],
          },
          {
            q: 'What is Unattended Object Detection?',
            a: 'The camera alerts when it detects an object (like a bag) left unattended for too long in a monitored area.',
          },
          {
            q: 'What is Missing Object Detection?',
            a: 'The camera notifies if a previously detected object (like a laptop) is removed from a defined zone.',
          },
        ],
      },
    ],
  },
  {
    slug: 'installation-setup',
    title: 'Installation & Setup',
    description: 'New camera setup, adding devices',
    iconName: 'FiTool',
    accent: '#86EFAC',
    accentSoft: 'rgba(134, 239, 172, 0.12)',
    subtopics: [
      {
        title: 'Adding Devices to Account',
        faqs: [
          {
            q: 'How do I add a camera to the app or portal?',
            a: [
              "On the App: Open the app → Login → Tap 'Other' in the footer → Tap 'Add New Device' button at the top (below logo) → Enter a Device Name (e.g. Gate1, Gate2) → Scan the QR code on the camera box or manually enter the Device ID (format: ATPL-XXXX-YYYYY) printed on the box.",
              "On the Portal: Open the portal → Login → Click 'Add New Device' button in the header → Enter a Device Name (e.g. Gate1, Gate2) → Scan the QR code on the camera box or manually enter the Device ID (format: ATPL-XXXX-YYYYY) printed on the box.",
            ],
          },
        ],
      },
      {
        title: 'WiFi Configuration',
        faqs: [
          {
            q: 'How do I connect my camera to WiFi?',
            a: [
              "Step 1: Give power to the camera. It will do initial setup and speak 'Please configure network'.",
              "Step 2: Open the app → Login → Go to your WiFi camera card → Tap the three dots (⋮) menu → Select 'Wifi Config'.",
              "Step 3: In the modal, enter your WiFi name and WiFi password → Tap 'Generate QR'.",
              'Step 4: Scan the generated QR code with your camera within 120 seconds.',
              'Note: Once generated, you can reuse the same QR code in the future to connect the camera to that WiFi network again.',
            ],
          },
        ],
      },
      {
        title: 'Mounting & Hardware',
        faqs: [
          {
            q: "My camera isn't turning on. What do I check?",
            a: [
              'Ensure power supply is 12V 1A.',
              'Confirm adapter is connected to a stable source.',
            ],
          },
          {
            q: 'What tools do I need for camera installation?',
            a: [
              'Screwdriver',
              'Drill',
              'Hammer',
              'Wall/ceiling anchors (provided in the kit)',
            ],
          },
          {
            q: 'Can I mount Dome cameras on walls and ceilings?',
            a: [
              'Yes, Dome cameras support:',
              'Wall mounting (using a stand)',
              'Ceiling mounting (direct to surface)',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'updates-firmware',
    title: 'Updates & Firmware',
    description: 'Firmware or app update problems',
    iconName: 'FiDownloadCloud',
    accent: '#C084FC',
    accentSoft: 'rgba(192, 132, 252, 0.12)',
    subtopics: [
      {
        title: 'Firmware Updates',
        faqs: [
          {
            q: "How do I update my camera's firmware?",
            a: [
              'Open the camera you want to update, go to Settings, then the General section.',
              'You will see the current firmware version. If it is up to date, no action is needed.',
              'If an update is available, you will see a download icon next to the firmware version. Click it to start the update.',
              'Important: An SD card must be inserted in the camera for the firmware update to work.',
            ],
          },
          {
            q: "I don't see a firmware update option for my camera",
            a: [
              'That means there is no new firmware release for your camera right now.',
              'Updates appear automatically — a download icon shows up next to the firmware version in Settings > General whenever we publish a new release for your camera model.',
              'Also make sure an SD card is inserted in the camera — the update flow needs it.',
            ],
          },
        ],
      },
      {
        title: 'Rollback & Recovery',
        faqs: [
          {
            q: 'My camera is stuck after a firmware update',
            a: [
              'Wait at least 5 minutes — the camera may still be rebooting after the update.',
              'If it is still stuck, unplug the power for 10 seconds and plug it back in.',
              'As a last resort, hold the reset button for 10 seconds — the camera will restore to defaults.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'device-health',
    title: 'Device Health',
    description: 'Overheating, SD card errors, hardware',
    iconName: 'FiShield',
    accent: '#FB7185',
    accentSoft: 'rgba(251, 113, 133, 0.12)',
    subtopics: [
      {
        title: 'Reset & Reboot',
        faqs: [
          {
            q: 'How do I reset my camera?',
            a: [
              'There are two reset buttons on the camera:',
              '1. One next to the SD card slot.',
              '2. One inside the LAN port.',
              'Press and hold either reset button for 5-10 seconds until the camera reboots.',
            ],
          },
          {
            q: 'What happens after I reset the camera?',
            a: [
              'All network settings (SIM/WiFi) are cleared and the camera returns to factory defaults.',
              'SD card recordings are kept (unless you format the card).',
              'You will need to reconfigure WiFi or SIM settings to bring the camera back online.',
            ],
          },
          {
            q: 'How do I reboot my camera remotely?',
            a: [
              'Go to Camera Settings > System > Reboot.',
              'The camera will restart and reconnect within 1-2 minutes.',
            ],
          },
        ],
      },
      {
        title: 'Indicator Lights & Sounds',
        faqs: [
          {
            q: 'What does the red light on my camera mean?',
            a: [
              'This applies to Eco Series cameras with a red indicator light on the body.',
              'Blinking Red Light = Camera has power but is NOT connected to the internet. Check your SIM, WiFi, or LAN cable.',
              'Stable Red Light = Camera is powered on and connected to the internet.',
              'No Light = Camera is not receiving power. Check the power adapter and socket.',
            ],
          },
          {
            q: 'My camera is making a clicking noise',
            a: [
              'A clicking sound is usually the IR cut filter switching between day and night mode — this is completely normal.',
              'If the clicking is continuous, unusually loud, or out of pattern, the IR mechanism may need inspection.',
            ],
          },
        ],
      },
      {
        title: 'PTZ Controls',
        faqs: [
          {
            q: 'How do I use the PTZ controls?',
            a: [
              "Open the camera's live view on the dashboard.",
              'Pan, tilt, and zoom controls appear directly on the live view.',
              'Only PTZ-enabled camera models support these controls.',
            ],
          },
          {
            q: 'PTZ is not moving',
            a: [
              'Check that your camera model supports PTZ (only PTZ models have motors).',
              'Make sure the PTZ controls are visible on the live view.',
              'Try rebooting the camera. If PTZ is enabled but not responding, it may be a hardware issue.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'general-info',
    title: 'General & Info',
    description: 'Features, compatibility, how-to',
    iconName: 'FiHelpCircle',
    accent: '#94A3B8',
    accentSoft: 'rgba(148, 163, 184, 0.12)',
    subtopics: [
      {
        title: 'Product Features',
        faqs: [
          {
            q: 'What cameras does ArcisAI offer?',
            a: [
              'ArcisAI offers PTZ cameras (pan-tilt-zoom), Dome cameras, and Bullet cameras.',
              'Available in WiFi, Ethernet/PoE, and 4G/SIM variants.',
              'All models support AI features — coverage depends on the series (S-Series has the full set; A-Series and Eco Series support Motion + Human Detection).',
            ],
          },
          {
            q: 'Do you have a mobile app?',
            a: [
              'Yes. The ArcisAI mobile app is available for both Android (Google Play Store) and iOS (Apple App Store).',
              'Search for ArcisAI in your app store.',
            ],
          },
          {
            q: 'Do cameras support two-way audio?',
            a: [
              'Yes — supported camera models have a built-in microphone and speaker for two-way audio.',
              'You can talk through the camera from the app or dashboard.',
            ],
          },
        ],
      },
      {
        title: 'Compatibility',
        faqs: [
          {
            q: 'Can I use cameras without internet?',
            a: [
              'Yes — cameras can record locally to an SD card without internet.',
              'However, remote viewing, cloud storage, AI alerts, and firmware updates all require an internet connection.',
            ],
          },
        ],
      },
      {
        title: 'How-to Guides',
        faqs: [
          {
            q: 'What is ArcisAI VMS?',
            a: [
              'ArcisAI VMS (Video Management System) is our cloud-based dashboard at view.arcisai.io.',
              'From there you can view live feeds, manage cameras, check recordings, configure AI features, and view reports.',
            ],
          },
        ],
      },
    ],
  },
];

export const getCategoryBySlug = (slug) =>
  supportCategories.find((c) => c.slug === slug) || null;
