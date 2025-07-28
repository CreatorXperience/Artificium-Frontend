//Integration types

export type IntegrationCategory = "Triggers" | "Actions";
export type IntegrationService =
  | "Gmail"
  | "Slack"
  | "Microsoft Teams"
  | "Github"
  | "PagerDuty";

export type IntegrationActionTypes =
  | "send-email"
  | "send-channel-message"
  | "send-direct-message"
  | "create-incident"
  | "create-issue"
  | "create-pull-request"
  | "send-teams-message";

export interface IntegrationAction {
  id: string;
  name: string;
  service: IntegrationService;
  icon: string;
  type: IntegrationActionTypes;
}

export interface IntegrationGroup {
  category: IntegrationCategory;
  name: string;
  actions: IntegrationAction[];
}

export interface IntegrationFormHandler {
  submitForm: () => Promise<boolean>;
  isDirty: boolean;
  isSubmitted: boolean;
}
