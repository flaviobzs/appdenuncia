export type Complaint = {
  id: string
  name: string
  position: Position
  description: string
  type_place?: string
  quantity?: number
  mask?: number
  created_at?: string
  updated_at?: string
}

type Position = {
  latitude: number
  longitude: number
}

export type Complaints = Complaint[]
