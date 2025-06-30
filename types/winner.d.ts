interface WinnerAttributes {
    name: string
    scholarship: string
    amountWon: number
    published: boolean
    scholarshipTitle: string
    testimonialText: string
    testimonialVideo: string
    winnerName: string
    winnerPhoto: string
    wonAt: Date
}

interface Winner {
  id: string
  type: string
  links: { self: string }
  attributes: WinnerAttributes
}