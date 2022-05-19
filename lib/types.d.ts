type Suit = "A" | "B" | "C" | "D";
interface Rating {
  intimacy: number;
  effort: number; 
}

interface Exercise {
  name: string,
  text: string,
  rating: Rating,
  suit: Suit
}