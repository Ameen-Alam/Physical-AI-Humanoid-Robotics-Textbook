/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Main tutorial sidebar with nested collapsible categories
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Setup Guides',
      collapsible: true,
      collapsed: false,
      items: [
        'setup/workstation',
        'setup/edge-kit',
        'setup/cloud',
      ],
    },
    {
      type: 'category',
      label: 'Module 1: ROS 2 (Weeks 3-5)',
      collapsible: true,
      collapsed: false,
      items: ['module-1-ros2/index'],
    },
    {
      type: 'category',
      label: 'Module 2: Digital Twin (Weeks 6-7)',
      collapsible: true,
      collapsed: true,
      items: ['module-2-digital-twin/index'],
    },
    {
      type: 'category',
      label: 'Module 3: NVIDIA Isaac (Weeks 8-10)',
      collapsible: true,
      collapsed: true,
      items: ['module-3-isaac/index'],
    },
    {
      type: 'category',
      label: 'Module 4: VLA & Humanoids (Weeks 11-13)',
      collapsible: true,
      collapsed: true,
      items: ['module-4-vla-humanoids/index'],
    },
    {
      type: 'category',
      label: 'References',
      collapsible: true,
      collapsed: true,
      items: ['references/glossary'],
    },
  ],
};

export default sidebars;
