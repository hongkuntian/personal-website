import awsStepFunctions from "./aws-step-functions"
import umaknowCloudockit from "./umaknow-cloudockit"

export const primaryExperienceEntry = awsStepFunctions

export const supportingExperienceEntries = [umaknowCloudockit]

export const experienceEntries = [
  primaryExperienceEntry,
  ...supportingExperienceEntries,
]
