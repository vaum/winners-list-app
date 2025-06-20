interface WinnerAttributes {
  name: string
  scholarship: string
  [key: string]: any
}

interface Winner {
  id: string
  type: string
  attributes: WinnerAttributes
}