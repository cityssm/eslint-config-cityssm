export const REQUIRED_SYSTEM_LISTS = {
  equipmentTypes: 'Equipment Types',

  assignedTo: 'Work Orders - Assigned To',
  workOrderPriorities: 'Work Orders - Priorities',
  workOrderStatuses: 'Work Orders - Statuses',

  shiftTimes: 'Shifts - Times',
  shiftTypes: 'Shifts - Types',

  jobClassifications: 'Timesheets - Job Classifications',
  timeCodes: 'Timesheets - Time Codes',
  timesheetTypes: 'Timesheets - Types'
} as const

interface RequiredSystemLists {
  alpha: string
  beta: string
  gamma: string

  delta: string
  epsilon: string
  zeta: string

  eta: string
  theta: string
  iota: string
  kappa: string
  lambda: string
  mu: string
}

type RequiredSystemListKeys = {
  alpha: keyof typeof REQUIRED_SYSTEM_LISTS
  beta: keyof typeof REQUIRED_SYSTEM_LISTS
  gamma: keyof typeof REQUIRED_SYSTEM_LISTS

  delta: keyof typeof REQUIRED_SYSTEM_LISTS
}
