import type {
  IntegrationGroup,
  // SendEmailFormData,
} from '../types/integrationTypes';

const ICONS = {
  gmail: '/icons/gmail.webp',
  slack: '/icons/slack.svg',
  microsoftTeams: '/icons/microsoftTeams.svg',
  pagerDuty: '/icons/pagerDuty.png',
  github: '/icons/github-mark-white.svg',
};

export const integrationGroups: IntegrationGroup[] = [
  {
    category: 'Actions',
    name: 'Gmail',
    actions: [
      {
        id: 'action-gmail-send-email',
        name: 'Send email',
        service: 'Gmail',
        icon: ICONS.gmail,
        type: 'send-email',
      },
    ],
  },
  {
    category: 'Actions',
    name: 'Slack',
    actions: [
      {
        id: 'action-slack-channel-message',
        name: 'Send channel message',
        service: 'Slack',
        icon: ICONS.slack,
        type: 'send-channel-message',
      },
      {
        id: 'action-slack-direct-message',
        name: 'Send direct message',
        service: 'Slack',
        icon: ICONS.slack,
        type: 'send-direct-message',
      },
    ],
  },
  {
    category: 'Actions',
    name: 'Microsoft Teams',
    actions: [
      {
        id: 'action-msteams-channel-message',
        name: 'Send channel message',
        service: 'Microsoft Teams',
        icon: ICONS.microsoftTeams,
        type: 'send-teams-message',
      },
    ],
  },
  {
    category: 'Actions',
    name: 'PagerDuty',
    actions: [
      {
        id: 'action-pagerduty-create-incident',
        name: 'Create incident',
        service: 'PagerDuty',
        icon: ICONS.pagerDuty,
        type: 'create-incident',
      },
    ],
  },
  {
    category: 'Actions',
    name: 'Github',
    actions: [
      {
        id: 'action-github-create-issue',
        name: 'Create issue',
        service: 'Github',
        icon: ICONS.github,
        type: 'create-issue',
      },
      {
        id: 'action-github-create-pull-request',
        name: 'Create pull request',
        service: 'Github',
        icon: ICONS.github,
        type: 'create-pull-request',
      },
    ],
  },
];

// // Initial dummy data for the Send Email Form
// export const initialSendEmailFormData: SendEmailFormData = {
//   to: '',
//   replyTo: '',
//   subject: '',
//   message: '',
// };
