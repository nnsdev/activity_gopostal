import { Vector3 } from 'fivem-js'

export type RpcCallback<T> = (...returnValues: T[]) => void

export interface Area {
  enabled: boolean
  locations: Array<{ position: Vector3, prop: string }>
}

export interface ZoneData {
  zone: string
  boxesDelivered: number[]
  isInZone: boolean
  holdingBox: boolean
}

export interface JobData {
  zones: Array<ZoneData>
  currentZone: number
  finished: boolean
  jobVehicle: number
}